import { AllEvents } from "../components/dashboard/AllEvents";

export default function DashboardHomePage() {
  return (
    <div className="w-full flex flex-col gap-10">
      <Tabs />
      <AllEvents />
    </div>
  );
}

const Tabs = () => {
  return (
    <div className="w-full border-b flex items-baseline gap-10 text-lg">
      <button className="border-primary text-primary font-medium border-b-2">
        All Events
      </button>
      <button>Published</button>
      <button>Drafts</button>
      <button>Ended</button>
    </div>
  );
};
