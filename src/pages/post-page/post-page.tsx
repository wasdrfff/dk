import { Layout, Space, Image, Typography } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { postsStore } from "../../store/posts-store";
import { usersStore } from "../../store/users-store";
import "./style.scss";

const { Title } = Typography;

export const PostPage = observer(() => {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    postsStore.getPost(id);
    usersStore.getUsers();
  }, [id]);

  const user = usersStore.findUser(postsStore.currentPost?.userId || -1);

  return (
    <Space className="post-page" direction="vertical" size={[0, 48]}>
      <Layout>
        <Header>Posts</Header>
        <Content className="post-page__content">
          <div className="post-page__image-wrapper">
            <Image
              className="post-page__image"
              src={`https://picsum.photos/1500/1500.jpg?random=${id}`}
              alt="image"
            />
          </div>
          <div className="post-page__description">
            <Title level={1}>
              Наименование поста:{postsStore.currentPost?.title}
            </Title>
            <Typography>Текст поста: {postsStore.currentPost?.body}</Typography>
            <Typography>Автор: {user?.name}</Typography>
          </div>
        </Content>
      </Layout>
    </Space>
  );
});
