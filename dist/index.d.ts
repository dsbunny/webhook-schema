import * as z from "zod";
export declare const WebhookRequest: z.ZodObject<{
    tenant_id: z.ZodUUID;
    ref_id: z.ZodUUID;
    class: z.ZodString;
    type: z.ZodString;
    trace_id: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type WebhookRequest = z.infer<typeof WebhookRequest>;
export declare const WebhookProgress: z.ZodNull;
export type WebhookProgress = z.infer<typeof WebhookProgress>;
export declare const WebhookResponse: z.ZodObject<{}, z.core.$strip>;
export type WebhookResponse = z.infer<typeof WebhookResponse>;
