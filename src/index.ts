// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import * as z from "zod";

// #region WebHook
export const WebhookRequestSchema = z.object({
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
})
	  .describe('Webhook request schema');
export type WebhookRequest = z.infer<typeof WebhookRequestSchema>;

export const WebhookProgressSchema = z.null()
	  .describe('Webhook progress schema');
export type WebhookProgress = z.infer<typeof WebhookProgressSchema>;

export const WebhookResponseSchema = z.object({})
	  .describe('Webhook response schema');
export type WebhookResponse = z.infer<typeof WebhookResponseSchema>;
