const Creds = () => {
    return {
        ClientId: import.meta.env.VITE_ClientId,
        ClientSecret: import.meta.env.VITE_ClientSecret
    };
};

export { Creds };
