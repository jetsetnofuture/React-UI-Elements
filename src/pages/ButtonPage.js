import { GoBell, GoCloud, GoDatabase } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  return (
    <div>
      <div>
        <Button primary className="mb-5">
          <GoBell />
          Click me!
        </Button>
      </div>
      <div>
        <Button secondary rounded>
          <GoCloud />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button success outline>
          <GoDatabase />
          See Deal!
        </Button>
      </div>
      <div>
        <Button warning>Hide ads!</Button>
      </div>
      <div>
        <Button danger rounded outline>
          Something!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
