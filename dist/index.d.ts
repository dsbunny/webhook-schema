import * as z from "zod";
export declare const WebhookRequestSchema: z.ZodObject<{
    tenant_id: z.ZodUUID;
    ref_id: z.ZodUUID;
    class: z.ZodString;
    type: z.ZodString;
    trace_id: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type WebhookRequest = z.infer<typeof WebhookRequestSchema>;
export declare const WebhookProgressSchema: z.ZodNull;
export type WebhookProgress = z.infer<typeof WebhookProgressSchema>;
export declare const WebhookResponseSchema: z.ZodObject<{}, z.core.$strip>;
export type WebhookResponse = z.infer<typeof WebhookResponseSchema>;
