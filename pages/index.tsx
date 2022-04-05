import { Button, Htag } from "../components";

export default function Home() {
  return (
    <div>
      <Htag tag="h1">text</Htag>
      <Button arrow="right" appearance="primary">
        button
      </Button>
      <Button appearance="ghost">button</Button>
    </div>
  );
}
