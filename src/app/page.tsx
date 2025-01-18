import Card from "../../components/Card";
import NavigationCard from "../../components/NavigationCard";
import PostFormCard from "../../components/PostFormCard";


export default function Home() {
  return (
    <div className="flex max-w-7xl mx-auto gap-5">
      <NavigationCard />
      <div className="grow">
        <PostFormCard></PostFormCard>
        <Card>first post test</Card>
      </div>
    </div>
  );
}
