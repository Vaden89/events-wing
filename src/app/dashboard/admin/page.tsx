import { Profile } from "@/app/components/admin/Profile";

export default function AdminPage() {
  return (
    <div className="flex flex-col gap-8">
      <Tabs />
      <Profile />
    </div>
  );
}

const Tabs = () => {
  return (
    <div className="w-full border-b flex items-baseline gap-10 text-lg">
      <button className="border-primary text-primary font-medium border-b-2">
        Profile
      </button>
      <button>Payouts</button>
      <button>Settings</button>
    </div>
  );
};
