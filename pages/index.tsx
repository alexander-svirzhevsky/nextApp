import { GetStaticProps } from "next";
import { useState } from "react";
import { Button, Htag, Paragraph, Tag, Rating } from "../components";
import { withLayout } from "../layout/Layout";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";

function Home({ menu, firstCategory }: HomeProps): JSX.Element {
  const [counter, setCounter] = useState<number>(0);
  const [rating, setRating] = useState<number>(4);
  return (
    <>
      <Htag tag="h1">asda</Htag>
      <Button
        onClick={() => setCounter((x) => x + 1)}
        arrow="right"
        appearance="primary"
      >
        button
      </Button>
      <Button arrow="down" appearance="ghost">
        button
      </Button>
      <Paragraph>Hello world</Paragraph>
      <Paragraph size="l">
        L Paragraph.
      </Paragraph>
      <Paragraph size="s">
        S size{" "}
      </Paragraph>
      <Tag size="s" color="red">
        red
      </Tag>
      <Tag size="m" color="green">
        green
      </Tag>
      <Tag color="primary">{counter}</Tag>
      <Rating isEditable={true} rating={rating} setRating={setRating} />
      <ul>
        {menu.map(m => (
          <li key={m._id.secondCategory} >{m._id.secondCategory}</li>
        ))}
      </ul>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find", {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[],
  firstCategory: number;
}
