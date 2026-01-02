import { useEffect } from "react";
import { initScrollAnimation } from "../utils/scrollAnimation";

export default function Team() {
  const team = [
    {
      name: "Cheyenne Workman",
      role: "Head Chef",
      desc: "A visionary leader driving innovation and collaboration.",
      img: "/assets/team/chef1.png",
    },
    {
      name: "Corey Rosser",
      role: "Kitchen Manager",
      desc: "Leading teams to build smart, scalable solutions.",
      img: "/assets/team/chef2.png",
    },
    {
      name: "Marilyn Westervelt",
      role: "Sous Chef",
      desc: "Crafting intuitive and engaging food experiences.",
      img: "/assets/team/chef3.png",
    },
    {
      name: "Ryan Passaquindici",
      role: "Culinary Director",
      desc: "Bringing designs to life with seamless execution.",
      img: "/assets/team/chef4.png",
    },
  ];

  useEffect(() => {
    initScrollAnimation();
  }, []);

  return (
    <section className="team-section">
      <div className="team-header">
        <h2>Get to Know Our Amazing Team</h2>
        <p>
          Meet the passionate experts behind our success and learn more about
          their roles.
        </p>
      </div>

      <div className="team-grid">
        {team.map((member, i) => (
          <div key={i} className="team-card fade-up">
            <img src={member.img} alt={member.name} />
            <div className="team-info">
              <h4>{member.name}</h4>
              <span>{member.role}</span>
              <p>{member.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
