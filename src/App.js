import { Button, List } from "antd-mobile";

function App() {
  return (
    <div>
      <List header='基础用法'>
        <List.Item>1</List.Item>
        <List.Item>2</List.Item>
        <List.Item>3</List.Item>
      </List>
      <Button block color='primary' size='large'>
        Block Button
      </Button>
    </div>
  );
}

export default App;
