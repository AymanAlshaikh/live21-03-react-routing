import { Button, ButtonsWrapper } from "./styles";
import { Link, Redirect, useParams } from "react-router-dom";

const InstructorProfile = ({ instructors, goTo }) => {
  const instructorSlug = useParams().instructorSlug;
  const instructor = instructors.find(
    (instructor) => instructor.slug === instructorSlug
  );

  if (!instructor) return <Redirect to="/404" />;

  const { name, emoji, github, description } = instructor;

  const goToGitHub = () => window.open(`https://github.com/${github}`);

  return (
    <>
      <h1>{instructor.emoji}</h1>
      <h2>{instructor.name}</h2>
      <p>{instructor.description}</p>

      <ButtonsWrapper>
        <Link to="/">
          <Button color="tomato" textColor="white">
            Go back home
          </Button>
        </Link>

        <Button onClick={goToGitHub}>Go to GitHub</Button>
      </ButtonsWrapper>
    </>
  );
};

export default InstructorProfile;
