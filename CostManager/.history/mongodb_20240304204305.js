async function disconnectFromDatabase() {
    try {
        await client.close();
        console.log('Disconnected from MongoDB Atlas');
    } catch (error) {
        console.error('Error disconnecting from MongoDB Atlas', error);
    }
}