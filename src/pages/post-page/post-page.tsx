import { Layout, Space, Image, Typography } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { postsStore } from "../../store/posts-store";
import { usersStore } from "../../store/users-store";

const { Title } = Typography;

export const PostPage = observer(() => {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    postsStore.getPost(id);
    usersStore.getUsers();
  }, [id]);

  const user = usersStore.findUser(postsStore.currentPost?.userId || -1);

  return (
    <Space style={{ width: "100%" }} direction="vertical" size={[0, 48]}>
      <Layout>
        <Header>Posts</Header>
        <Content style={{ width: "100%" }}>
          <Image src={`https://picsum.photos/1500/1500.jpg?random=${id}`} />
          <Title level={1}>{postsStore.currentPost?.title}</Title>
          <Typography>{postsStore.currentPost?.body}</Typography>
          <Typography>{user?.name}</Typography>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Space>
  );
});
