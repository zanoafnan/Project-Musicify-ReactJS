const Creds = () => {
    return {
        ClientId: import.meta.env.ClientId,
        ClientSecret: import.meta.env.ClientSecret
    };
};

export { Creds };
