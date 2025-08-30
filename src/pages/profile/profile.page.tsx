import "./profile.page.css";
import { useAuth } from "../../context/useAuth";
import { Button } from "./components";

export function Profile() {
  const { state, deleteUrl } = useAuth();
  if (state.loading) return <div>Loading...</div>;

  async function handleCopy(target: string) {
    const baseUrl = "http://localhost:3000/u/";
    const fullUrl = baseUrl + target;
    await navigator.clipboard.writeText(fullUrl);
  }

  async function handleDelete(id: string) {
    await deleteUrl(id);
  }

  return (
    <section className="wrap">
      <h2>User Profile</h2>

      {state.user?.urls?.length ? (
        <table className="profile-table">
          <thead>
            <tr>
              <th>URL</th>
              <th>Accesses</th>
              <th>Last Access</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {state.user.urls.map((u) => {
              return (
                <tr key={u.id}>
                  <td>
                    <div className="url-id">{u.id}</div>
                    <div className="url-original">{u.original}</div>
                  </td>
                  <td>{u.accesses?.length ?? 0}</td>
                  <td>
                    {u.accesses?.[0]?.when
                      ? new Date(u.accesses?.[0].when).toLocaleString()
                      : "—"}
                  </td>
                  <td>
                    <Button
                      onClick={() => handleCopy(u.id)}
                      text="Copy"
                      variant="default"
                      size="sm"
                      key={u.original}
                    />
                    <Button
                      text="delete"
                      size="sm"
                      variant="danger"
                      onClick={() => handleDelete(u.id)}
                      key={u.id}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>No URLs found.</p>
      )}
    </section>
  );
}
