import Navbar from "./Navbar";
//Layout File
interface iprops {
  children: React.ReactNode;
}
export default function Layout({ children }: iprops) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
