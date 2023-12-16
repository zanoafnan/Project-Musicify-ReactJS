const Creds = () => {
    return {
        ClientId: process.env.ClientId,
        ClientSecret: process.env.ClientSecret
    };
};

export { Creds };
