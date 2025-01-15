import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getLogsAction,
  deleteLogsAction,
} from "../../redux/actions/adminActions";
import CurrentTime from "../shared/CurrentTime";
import ButtonLoadingSpinner from "../loader/ButtonLoadingSpinner";
import CommonLoading from "../loader/CommonLoading";
import { FcRefresh } from "react-icons/fc";

const Logs = () => {
  const [loading, setLoading] = useState(true);
  const [clearing, setClearing] = useState(false);

  const dispatch = useDispatch();
  const logs = useSelector((state) => state.admin?.logs);

  const fetchLogs = async () => {
    try {
      setLoading(true);
      await dispatch(getLogsAction());
    } finally {
      setLoading(false);
    }
  };

  const handleCleanup = async () => {
    try {
      setClearing(true);
      await dispatch(deleteLogsAction());
    } finally {
      setClearing(false);
    }
  };

  const handleRefresh = async () => {
    try {
      setLoading(true);
      await fetchLogs();
    } catch (error) { }
  };

  useEffect(() => {
    fetchLogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logs?.length]);

  if (loading || !logs) {
    return (
      <div className="flex items-center justify-center mt-5 text-dark-text">
        <CommonLoading />
      </div>
    );
  }

  return (
    <div className="bg-dark-background flex flex-col items-center justify-center mt-3 rounded-md text-dark-text">
      <div className="p-4 shadow-md rounded border border-dark-card bg-dark-surface relative xl:min-w-[1200px] lg:min-w-[1000px] md:min-w-[800px]">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-dark-accent">
            User Activity Logs
          </h1>
          <CurrentTime />
        </div>

        <div className="flex justify-between items-center mb-4 border-b border-dark-card pb-2">
          <div className="text-sm italic text-dark-muted">{`Showing ${logs.length} items from the last 7 days`}</div>

          <div className="flex items-center space-x-2">
            <button onClick={handleRefresh}>
              <FcRefresh />
            </button>
            <button
              className={`bg-dark-primary text-dark-background text-sm py-2 px-4 rounded hover:opacity-90 ${clearing ? "opacity-50 cursor-not-allowed" : ""
                } ${logs.length === 0 ? "hidden" : ""}`}
              onClick={handleCleanup}
              disabled={clearing || logs.length === 0}
            >
              {clearing ? (
                <ButtonLoadingSpinner loadingText="Clearing..." />
              ) : (
                "Clear Logs"
              )}
            </button>
          </div>
        </div>

        {!loading ? (
          logs.length === 0 ? (
            <div className="text-dark-muted text-lg">No logs found</div>
          ) : (
            <>
              <div className="h-[430px] relative overflow-auto">
                <div className="w-full rounded">
                  <div className="grid grid-cols-5 gap-5 items-center border-b border-dark-card py-2 font-semibold text-dark-accent">
                    <p className="text-center">Timestamp</p>
                    <p>Message</p>
                    <p>Email Used</p>
                    <p>Level</p>
                    <p>Context Data</p>
                  </div>
                  {logs.map((log) => (
                    <div
                      key={log._id}
                      className="grid grid-cols-5 gap-5 items-center border-b border-slate-300 py-2 text-sm text-dark-text"
                    >
                      <span className="flex-col p-0 m-0 gap-0 justify-center items-center text-center font-mono">
                        <p>{log.relativeTimestamp}</p>
                        <p className="text-xs text-dark-muted">{log.formattedTimestamp}</p>
                      </span>
                      <td
                        className={`${log.level === "info"
                          ? "text-blue-800"
                          : log.level === "warn"
                            ? "text-orange-400"
                            : log.level === "error"
                              ? "text-red-700"
                              : ""
                          }`}
                      >
                        <span className="capitalize">{log.type}: </span>
                        <span>{log.message}</span>
                      </td>
                      <p>{log.email}</p>
                      <td>
                        <span
                          className={`rounded-md inline-flex justify-center px-2 py-1 min-w-[100px] max-w-[200px] text-sm font-semibold ${log.level === "error"
                              ? "bg-red-700 text-white"
                              : log.level === "warn"
                                ? "bg-orange-500 text-white"
                                : "bg-blue-800 text-white"
                            }`}
                        >
                          {log.level}
                        </span>
                      </td>
                      <td className="max-h-[5rem] overflow-y-auto pr-2 custom-scrollbar">
                        <ul className="list-disc list-inside text-sm">
                          {log.contextData &&
                            Object.entries(log.contextData).map(([key, value]) => (
                              <li key={key}>
                                <span className="font-medium text-blue-800">{key}:</span>{" "}
                                {value}
                              </li>
                            ))}
                        </ul>
                      </td>

                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center text-sm italic text-dark-muted mt-2">
                logs are automatically deleted after 7 days
              </div>
            </>
          )
        ) : null}
      </div>
    </div>
  );
};

export default Logs;
