import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCommunitiesAction,
  addCommunityAction,
  deleteCommunityAction,
} from "../../redux/actions/adminActions";

const CommunityManagement = () => {
  const dispatch = useDispatch();
  const communities = useSelector((state) => state.admin?.communities);

  useEffect(() => {
    dispatch(getCommunitiesAction());
  }, [dispatch]);

  const [newCommunity, setNewCommunity] = useState({
    name: "",
    description: "",
    banner: "",
  });
  const [isUpdating, setIsUpdating] = useState(false);

  const handleAddCommunity = async () => {
    setIsUpdating(true);
    await dispatch(addCommunityAction(newCommunity));
    await dispatch(getCommunitiesAction());
    setNewCommunity({ name: "", description: "", banner: "" });
    setIsUpdating(false);
  };

  const handleDeleteCommunity = async (communityId) => {
    setIsUpdating(true);
    await dispatch(deleteCommunityAction(communityId));
    await dispatch(getCommunitiesAction());
    setIsUpdating(false);
  };

  if (!communities) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex gap-2 h-[85vh] w-full mt-3 border rounded-md bg-dark-background">
      {/* Left column */}
      <div className="flex flex-col w-full bg-dark-background shadow-inner rounded-md border-r">
        <h1 className="text-lg font-bold p-4 text-center border-b-2 text-dark-accent">
          Communities
        </h1>
        <div className="flex flex-col overflow-y-auto">
          {communities.map((community) => (
            <div
              key={community._id}
              className="p-4 cursor-pointer hover:bg-dark-card border-b flex items-center justify-between text-dark-text"
            >
              <div className="flex items-center">
                <img
                  src={community.banner}
                  alt={community.name}
                  className="w-10 h-10 rounded-full mr-2 md:mr-4"
                />
                <span className="text-xs md:text-base">{community.name}</span>
              </div>
              <button
                disabled={isUpdating}
                className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-700"
                onClick={() => handleDeleteCommunity(community._id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Right column */}
      <div className="flex flex-col w-full bg-dark-background rounded-md px-5 py-5 border-l">
        <h1 className="font-bold text-lg border-b border-black pb-1 mb-2 text-dark-accent">
          Add New Community
        </h1>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Community Name"
            className="p-2 border rounded bg-dark-card text-dark-background"
            value={newCommunity.name}
            onChange={(e) =>
              setNewCommunity({ ...newCommunity, name: e.target.value })
            }
          />
          <textarea
            placeholder="Community Description"
            className="p-2 border rounded  bg-dark-card text-dark-background"
            value={newCommunity.description}
            onChange={(e) =>
              setNewCommunity({ ...newCommunity, description: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Banner URL"
            className="p-2 border rounded  bg-dark-card text-dark-background"
            value={newCommunity.banner}
            onChange={(e) =>
              setNewCommunity({ ...newCommunity, banner: e.target.value })
            }
          />
          <button
            disabled={
              !newCommunity.name || !newCommunity.description || isUpdating
            }
            className="p-2 bg-dark-text text-dark-background rounded hover:bg-accent"
            onClick={handleAddCommunity}
          >
            Add Community
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunityManagement;
