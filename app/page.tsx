import ProfileWithUseEffect from "./components/ProFileWithUseEffect";
import Profile from "./components/Profile";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <Profile /> */}
      <ProfileWithUseEffect />
    </main>
  );
}
