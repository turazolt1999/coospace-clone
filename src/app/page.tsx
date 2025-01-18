import Card from "../../components/Card";
import NavigationCard from "../../components/NavigationCard";

export default function Home() {
  return (
    <div className="flex max-w-7xl mx-auto gap-5">
      <NavigationCard />
      <div className="grow">
        <Card>form here</Card>
        <Card>first post test</Card>
      </div>
    </div>
  );
}
