export const Container = ({ children }) => {
    return (
        <div className="m-auto flex min-h-screen max-w-6xl flex-col">
            {children}
        </div>
    );
};
