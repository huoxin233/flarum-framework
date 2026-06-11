/// <reference types="mithril" />
/// <reference types="flarum/@types/translator-icu-rich" />
import Modal from 'flarum/common/components/Modal';
export default class AuditModal extends Modal {
    className(): string;
    title(): import("@askvortsov/rich-icu-message-formatter").NestedStringArray;
    content(): JSX.Element;
}
