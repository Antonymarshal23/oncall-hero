import { CalleClient } from "@call-e/calle";
import { env } from '../../../env';

const client = new CalleClient({
    apiKey: env.calleApiKey,
});

/**
 * Initiates an automated phone booking call via CALL-E.
 */
export async function makeBookingCall({ providerName, phoneNumber, customerName, desiredTime, notes }): Promise<any> {
    console.log(`[CALL-E] Initiating call to ${providerName} (${phoneNumber})...`);

    const taskPrompt = 'Hi naan marshal da call panu da.....';

    try {
        const call: any = await client.calls.createAndWait({
            task: `Call ${phoneNumber}. Task instructions:\n${taskPrompt}`,
        });

        return {
            success: true,
            callId: call.id || `call_${Date.now()}`,
            phoneNumber,
            providerName,
            customerName,
            status: call.status || "completed",
            taskCompleted: call.taskCompleted ?? true,
            summary: call.summary || "Call completed successfully.",
            rawResult: call.result || null,
            timestamp: new Date().toISOString(),
        };
    } catch (error: any) {
        console.error("[CALL-E] Execution Error:", error);
        throw new Error(error.message || "Failed to complete phone call via CALL-E.");
    }
}