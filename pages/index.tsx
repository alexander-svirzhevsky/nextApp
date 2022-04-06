import { Button, Htag, Paragraph } from "../components";

export default function Home() {
  return (
    <div>
      <Htag tag="h1">text</Htag>
      <Button arrow="right" appearance="primary">
        button
      </Button>
      <Button arrow="down" appearance="ghost">button</Button>
      <Paragraph>Hello world</Paragraph>
      <Paragraph size="l">L Paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum debitis laboriosam sint odit impedit, explicabo distinctio maiores culpa delectus tempore dolorem, quas voluptatibus dolor mollitia veritatis possimus deleniti perspiciatis enim.</Paragraph>
      <Paragraph size="s">S size Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit molestias mollitia nam similique quos! Doloremque, iure non minima voluptatem cumque eveniet saepe quia repellat modi vitae qui laborum enim impedit!</Paragraph>
    </div>
  );
}
