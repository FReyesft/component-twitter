import TwitterFollowCard from "./TwitterFollowCard";

export default function App() {

  const users = [
    {
      id: 1,
      name: "Fernando",
      username: "freyes",
      avatar: "https://avatars.githubusercontent.com/u/4789?v=4",
    },
    {
      id: 2,
      name: "Jonathan",
      username: "jostiven",
      avatar: "https://avatars.githubusercontent.com/u/15678?v=4",
    },
    {
      id: 3,
      name: "Brandon",
      username: "dois_15",
      avatar: `https://avatars.githubusercontent.com/u/123671?v=4`,
    },
    {
      id: 4,
      name: "Maicol",
      username: "maicolito",
      avatar: "https://avatars.githubusercontent.com/u/1568?v=4",
    }
  ];
  return (
    <div className="container">
    <h1>A quién seguir</h1>
      {users.map((user) => {
        const { name, username, avatar, isFollowing, id } = user;
        return (
          <TwitterFollowCard
            name={name}
            username={username}
            avatar={avatar}
            initialIsFollowing={isFollowing}
            key={id}
          ></TwitterFollowCard>
        );
      })}
    </div>
  );
}
