import NavigationCard from "./NavigationCard";

export default function Layout({ children, hideNavigation }: any) {
    return (
        <div className="flex mt-4 max-w-4xl mx-auto gap-6">
            {!hideNavigation && (
                <div className="w-3/12">
                    <NavigationCard />
                </div>
            )}
            <div className={hideNavigation ? "w-full" : "w-9/12"}>
                {children}
            </div>
        </div>
    );
}