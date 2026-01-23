import React from "react";
import { useNavigate } from "react-router-dom";
import Background from "../../assets/Home/Build/Background.png";
import ContentImage from "../../assets/Home/Build/Content Image.png";

function Build() {
  const navigate = useNavigate();

  return (
    <section className="home-build">
      <div className="home-build-text">
        <h2>
          Build & Scale <br />
          <span>with us</span> <img src={Background} />
        </h2>
        <p>
          ScaleCraft was founded to bridge the gap between strategy and
          execution for emerging brands. Too many consultancies deliver
          beautiful presentations but leave founders wondering "now what?"
          <br />
          <br />
          We do things differently. We roll up our sleeves, work alongside you,
          and focus on implementation that drives real results.
        </p>
      </div>
      <div className="home-build-content">
        <img src={ContentImage} alt="Content Image" />
        <ul>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9.55018 15.15L18.0252 6.675C18.2252 6.475 18.4585 6.375 18.7252 6.375C18.9918 6.375 19.2252 6.475 19.4252 6.675C19.6252 6.875 19.7252 7.11267 19.7252 7.388C19.7252 7.66333 19.6252 7.90067 19.4252 8.1L10.2502 17.3C10.0502 17.5 9.81685 17.6 9.55018 17.6C9.28351 17.6 9.05018 17.5 8.85018 17.3L4.55018 13C4.35018 12.8 4.25418 12.5627 4.26218 12.288C4.27018 12.0133 4.37451 11.7757 4.57518 11.575C4.77585 11.3743 5.01351 11.2743 5.28818 11.275C5.56285 11.2757 5.80018 11.3757 6.00018 11.575L9.55018 15.15Z"
                fill="#C41E3A"
              />
            </svg>
            Digital SOP
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9.55018 15.15L18.0252 6.675C18.2252 6.475 18.4585 6.375 18.7252 6.375C18.9918 6.375 19.2252 6.475 19.4252 6.675C19.6252 6.875 19.7252 7.11267 19.7252 7.388C19.7252 7.66333 19.6252 7.90067 19.4252 8.1L10.2502 17.3C10.0502 17.5 9.81685 17.6 9.55018 17.6C9.28351 17.6 9.05018 17.5 8.85018 17.3L4.55018 13C4.35018 12.8 4.25418 12.5627 4.26218 12.288C4.27018 12.0133 4.37451 11.7757 4.57518 11.575C4.77585 11.3743 5.01351 11.2743 5.28818 11.275C5.56285 11.2757 5.80018 11.3757 6.00018 11.575L9.55018 15.15Z"
                fill="#C41E3A"
              />
            </svg>
            Operational Excellence
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9.55018 15.15L18.0252 6.675C18.2252 6.475 18.4585 6.375 18.7252 6.375C18.9918 6.375 19.2252 6.475 19.4252 6.675C19.6252 6.875 19.7252 7.11267 19.7252 7.388C19.7252 7.66333 19.6252 7.90067 19.4252 8.1L10.2502 17.3C10.0502 17.5 9.81685 17.6 9.55018 17.6C9.28351 17.6 9.05018 17.5 8.85018 17.3L4.55018 13C4.35018 12.8 4.25418 12.5627 4.26218 12.288C4.27018 12.0133 4.37451 11.7757 4.57518 11.575C4.77585 11.3743 5.01351 11.2743 5.28818 11.275C5.56285 11.2757 5.80018 11.3757 6.00018 11.575L9.55018 15.15Z"
                fill="#C41E3A"
              />
            </svg>
            Channel Strategy
          </li>
        </ul>
        <button
          className="primary-button"
          onClick={() => navigate("/F&B", { state: { scrollTo: "Approach" } })}
        >
          Explore Our Approach
        </button>
      </div>
    </section>
  );
}

export default Build;
