import { observer } from "mobx-react";
import { Post } from "../../store/types";
import { usersStore } from "../../store/users-store";
import { Card, Image } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

type Props = {
  post: Post;
};

export const PostCard = observer(({ post }: Props) => {
  const user = usersStore.findUser(post.userId);

  return (
    <Card
      hoverable
      style={{ width: 400 }}
      cover={
        <Image
          alt="example"
          src={`https://picsum.photos/1500/1500.jpg?random=${post.id}`}
        />
      }
    >
      <Link to={`/posts/${post.id}`}>
        <Meta title={post.title} description={user?.name} />
      </Link>
    </Card>
  );
});
