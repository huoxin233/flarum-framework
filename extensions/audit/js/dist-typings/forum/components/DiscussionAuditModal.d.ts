/// <reference types="mithril" />
/// <reference types="flarum/@types/translator-icu-rich" />
import Modal, { IInternalModalAttrs } from 'flarum/common/components/Modal';
import type Discussion from 'flarum/common/models/Discussion';
export interface IDiscussionAuditModalAttrs extends IInternalModalAttrs {
    discussion: Discussion;
}
export default class DiscussionAuditModal<CustomAttrs extends IDiscussionAuditModalAttrs = IDiscussionAuditModalAttrs> extends Modal<CustomAttrs> {
    className(): string;
    title(): import("@askvortsov/rich-icu-message-formatter").NestedStringArray;
    content(): JSX.Element;
}
