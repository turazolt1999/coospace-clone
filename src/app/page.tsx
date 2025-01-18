import Card from "../../components/Card";

export default function Home() {
  return (
    <div className="flex max-w-7xl mx-auto gap-5">
      <div className="w-1/3">
        <Card>test link</Card>
      </div>
      <div className="grow">
        <Card>form here</Card>
        <Card>first post test</Card>
      </div>
    </div>
  );
}
