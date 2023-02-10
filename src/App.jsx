import { ImageList, ImageUploader } from "./features/images";
import { Login } from "./features/login";
import { useViewer } from "./features/viewer";

function App() {
  const viewer = useViewer();

  return (
    <div>
      {/* <Login />

      <div>
        <p>{viewer?.auth?.email}</p>
        <p>{viewer?.auth?.uid}</p>
        <p>{viewer?.user?.data?.name}</p>
      </div> */}

      <ImageUploader />

      <ImageList />
    </div>
  );
}

export default App;
