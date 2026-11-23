// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
// `@type` field is optional for requests with no other required fields.
import * as z from "zod";
import { dsbunnyRegistry } from '@dsbunny/zod-registry';
// #region WebHook
export const WebhookRequestSchema = z.object({
    '@type': z.string().default('WebhookRequest')
        .describe('Type of the webhook request'),
    tenant_id: z.uuid()
        .describe('The tenant ID of the event'),
    ref_id: z.uuid()
        .describe('The reference ID of the source of the event'),
    class: z.string()
        .describe('The class of the event'),
    type: z.string()
        .describe('The type of the event'),
    trace_id: z.string().optional()
        .describe('The trace ID for correlating logs and telemetry related to this event'),
}).register(dsbunnyRegistry, {
    id: 'WebhookRequestSchema',
    description: 'Webhook request schema',
});
export const WebhookProgressSchema = z.object({
    '@type': z.literal('WebhookProgress')
        .describe('Type of the webhook progress'),
}).register(dsbunnyRegistry, {
    id: 'WebhookProgressSchema',
    description: 'Webhook progress schema',
});
export const WebhookResponseSchema = z.object({
    '@type': z.literal('WebhookResponse')
        .describe('Type of the webhook response'),
}).register(dsbunnyRegistry, {
    id: 'WebhookResponseSchema',
    description: 'Webhook response schema',
});
//# sourceMappingURL=index.js.map