import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { PostCard } from "../../components/post-card";
import { postsStore } from "../../store/posts-store";
import { usersStore } from "../../store/users-store";
import { Layout, Space, Pagination } from "antd";

const { Header, Footer, Content } = Layout;

export const MainPage: React.FC = observer(() => {
  useEffect(() => {
    postsStore.getPosts(1);
    usersStore.getUsers();
  }, []);

  const onPagingationChange = (page: number, pageSize: number) => {
    postsStore.getPosts(page, pageSize);
  };

  return (
    <Space style={{ width: "100%" }} direction="vertical" size={[0, 48]}>
      <Layout>
        <Header>Posts</Header>
        <Content style={{ width: "100%" }}>
          {postsStore.posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
          <Pagination
            showSizeChanger={false}
            current={postsStore.currentPage}
            onChange={onPagingationChange}
            total={postsStore.totalPages * 10}
          />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Space>
  );
});
