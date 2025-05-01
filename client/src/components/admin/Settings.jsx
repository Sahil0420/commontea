import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getServicePreferencesAction,
  updateServicePreferencesAction,
} from "../../redux/actions/adminActions";

const Settings = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const servicePreferences = useSelector(
    (state) => state.admin?.servicePreferences
  );
  const [usePerspectiveAPI, setUsePerspectiveAPI] = useState(false);
  const [
    categoryFilteringServiceProvider,
    setCategoryFilteringServiceProvider,
  ] = useState("");
  const [categoryFilteringRequestTimeout, setCategoryFilteringRequestTimeout] =
    useState(0);

  useEffect(() => {
    dispatch(getServicePreferencesAction());
  }, [dispatch]);

  useEffect(() => {
    if (servicePreferences) {
      setUsePerspectiveAPI(servicePreferences.usePerspectiveAPI);
      setCategoryFilteringServiceProvider(
        servicePreferences.categoryFilteringServiceProvider
      );
      setCategoryFilteringRequestTimeout(
        servicePreferences.categoryFilteringRequestTimeout
      );
      setIsLoading(false);
    }
  }, [servicePreferences]);

  const handleUpdate = async () => {
    setIsUpdating(true);
    setIsSuccess(false);
    try {
      await dispatch(
        updateServicePreferencesAction({
          usePerspectiveAPI,
          categoryFilteringServiceProvider,
          categoryFilteringRequestTimeout,
        })
      );
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    } finally {
      setIsUpdating(false);
    }
  };

  if (isLoading || !servicePreferences) {
    return <div className="text-dark-text">Loading...</div>;
  }

  return (
    <div className="p-5 w-full border border-dark-card rounded-md bg-dark-background mt-3 text-dark-text">
      <h2 className="font-semibold mb-4 border-b border-dark-card pb-2 text-center text-dark-accent">
        Service Preferences
      </h2>

      {isSuccess && (
        <div className="bg-green-800 text-green-100 p-2 mb-4 rounded">
          Service Preferences updated successfully!
        </div>
      )}

      <div className="flex items-center mb-4">
        <div>Use Perspective API for content moderation</div>
        <div className="ml-auto">
          <input
            className="w-5 h-5 text-dark-card bg-dark-card rounded focus:ring-dark-accent focus:border-dark-accent"
            type="checkbox"
            checked={usePerspectiveAPI}
            onChange={(e) => setUsePerspectiveAPI(e.target.checked)}
          />
        </div>
      </div>

      <div className="flex items-center mb-4">
        <div>Category filtering service provider</div>
        <div className="ml-auto">
          <select
            className="bg-dark-card border text-dark-text text-sm rounded-lg focus:ring-dark-accent focus:border-dark-accent block w-full p-2.5"
            value={categoryFilteringServiceProvider}
            onChange={(e) =>
              setCategoryFilteringServiceProvider(e.target.value)
            }
          >
            <option
              className="bg-dark-card text-dark-text"
              value=""
            >
              Select a provider
            </option>
            <option
              className="bg-dark-card text-dark-text"
              value="TextRazor"
            >
              TextRazor
            </option>
            <option
              className="bg-dark-card text-dark-text"
              value="InterfaceAPI"
            >
              InterfaceAPI
            </option>
            <option
              className="bg-dark-card text-dark-text"
              value="ClassifierAPI"
            >
              ClassifierAPI
            </option>
            <option
              className="bg-dark-background text-dark-text"
              value="disabled"
            >
              Disabled
            </option>
          </select>
        </div>
      </div>

      <div className="flex items-center mb-4">
        <div>Category filtering request timeout (ms)</div>
        <div className="ml-auto">
          <input
            className="bg-dark-background border text-dark-text text-sm rounded-lg focus:ring-dark-accent focus:border-dark-accent block w-full p-2.5"
            type="number"
            value={categoryFilteringRequestTimeout}
            min={0}
            max={500000}
            required
            onChange={(e) => {
              setCategoryFilteringRequestTimeout(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button
          className="bg-dark-primary text-dark-background px-4 py-2 rounded disabled:opacity-50"
          onClick={handleUpdate}
          disabled={isUpdating}
        >
          {isUpdating ? "Updating..." : "Update"}
        </button>
      </div>
    </div>
  );
};

export default Settings;
