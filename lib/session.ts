export function getSessionId() {
  let id = localStorage.getItem("mama_session");

  if (!id) {
    id = "user_" + Math.random().toString(36).substring(2, 10);
    localStorage.setItem("mama_session", id);
  }

  return id;
}