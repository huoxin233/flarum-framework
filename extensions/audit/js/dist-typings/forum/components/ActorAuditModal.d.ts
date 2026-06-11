/// <reference types="mithril" />
/// <reference types="flarum/@types/translator-icu-rich" />
import Modal, { IInternalModalAttrs } from 'flarum/common/components/Modal';
import type User from 'flarum/common/models/User';
export interface IActorAuditModalAttrs extends IInternalModalAttrs {
    user: User;
}
export default class ActorAuditModal<CustomAttrs extends IActorAuditModalAttrs = IActorAuditModalAttrs> extends Modal<CustomAttrs> {
    className(): string;
    title(): import("@askvortsov/rich-icu-message-formatter").NestedStringArray;
    content(): JSX.Element;
}
