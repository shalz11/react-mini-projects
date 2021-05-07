import { useState } from "react";

const TripSummary = () => {
  const [readMore, setReadMore] = useState(false);
  const content = `Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!`;

  const lessContent = content.substring(0, 200);
  if (lessContent.length > 200) {
    console.log("lessContent length--", lessContent.length);
  }

  const linkName = readMore ? "Read Less" : "Read More";

  return (
    <div className="card-summary">
      <p>
        {lessContent.length}
        {readMore ? content : lessContent + "..."}
        <button
          className="btn-more-desc"
          onClick={() => {
            setReadMore(!readMore);
          }}
        >
          {linkName}
        </button>
      </p>
    </div>
  );
};

export default TripSummary;
