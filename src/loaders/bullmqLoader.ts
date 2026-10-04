import { MicroframeworkLoader, MicroframeworkSettings } from 'microframework-w3tec';
import { Container } from 'typedi';
import { initializeBullMQModule } from '../bullmq/index';
import { ProductService } from '../api/core/services/ProductService'; // Adjust this path to your actual ProductService location

export const bullMQLoader: MicroframeworkLoader = async (settings: MicroframeworkSettings | undefined) => {
    console.log('📦 Initializing BullMQ Worker & Scheduler Pipeline...');

    try {
        // Resolve the active product service instance from the DI Container
        const productServiceInstance = Container.get<any>(ProductService);

        // Mount the queues, workers, events, and 5-minute repeatable scheduler
        await initializeBullMQModule(productServiceInstance);

        console.log('✅ BullMQ Loader completed successfully.');
    } catch (error) {
        console.error('❌ Failed to load BullMQ Background Module:', error);
        throw error; // Propagate the error to prevent the app from starting cleanly with a broken queue
    }
};
