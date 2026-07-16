import AboutHeader from "@/components/AboutHeader";
import { EventsImg } from "../../../public/images/pngs/png";

function page() {
  return (
    <div>
      <AboutHeader
        img={EventsImg}
        title="EVENTS & ACTIVITIES"
        description="Bringing together students, innovators, and leaders in Agricultural & Environmental Engineering to create real-world impact"
      />
    </div>
  );
}

export default page;
