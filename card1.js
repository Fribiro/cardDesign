import React from "react";
import styled from "styled-components";
import HomeSectionTitle from "./SectionTitle";

const HomeWhyWrapper = styled.div`
  box-sizing: border-box;

  .info {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5rem;
  }

  .row {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    margin: 0.5rem;
  }
  & .card {
    display: flex;
    width: 30%;
    padding: 4rem 1rem 7rem 1rem;
    background-color: rgb(245, 128, 40);
    position: relative;
    border: 0;
    margin: 0.5rem;
  }
  & .card:after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    background-color: transparent;
    top: 0;
    right: 0;
    border: none;
    border-bottom: 2rem solid rgb(245, 128, 40);
    border-left: 2rem solid rgb(245, 128, 40);
    border-right: 2rem solid #fff;
    border-top: 2rem solid #fff;
    position: absolute;
    filter: drop-shadow(-5px 5px 3px rgba(0, 0, 0, 0.5));
  }
  & .card:before {
    content: "";
    display: block;
    width: 0px;
    height: 0px;
    border-top: 2.5rem solid rgb(245, 128, 40);
    border-right: 2.5rem solid rgb(245, 128, 40);
    border-left: 2.5rem solid #fff;
    border-bottom: 2.5rem solid #fff;
    bottom: 0px;
    left: 0px;
    position: absolute;
    filter: drop-shadow(7px -7px 5px rgba(0, 0, 0, 0.5));
    margin-right: 10%;
  }

  & .card h2 {
    margin: 0 1rem;
    font-family: "Crimson Text", serif;
    font-weight: bold;
    color: #fff;
  }

  & p {
    margin-bottom: 0;
    margin: 0 1rem;
  }
`;

const HomeWhy = () => {
  return (
    <HomeWhyWrapper>
      <HomeSectionTitle title={"Why Us"} />
      <section id="info">
        <div class="row">
          <div class="card">
            <h2>Customer Centered</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              culpa blanditiis sit, laboriosam at praesentium maxime esse
              voluptas. Quos aliquid, possimus eum itaque accusamus nihil
              reprehenderit nesciunt excepturi quas sint.
            </p>
          </div>
          <div class="card">
            <h2>Integrity</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              culpa blanditiis sit, laboriosam at praesentium maxime esse
              voluptas. Quos aliquid, possimus eum itaque accusamus nihil
              reprehenderit nesciunt excepturi quas sint.
            </p>
          </div>
          <div class="card">
            <h2>Quality</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              culpa blanditiis sit, laboriosam at praesentium maxime esse
              voluptas. Quos aliquid, possimus eum itaque accusamus nihil
              reprehenderit nesciunt excepturi quas sint.
            </p>
          </div>
        </div>
      </section>
    </HomeWhyWrapper>
  );
};

export default HomeWhy;

