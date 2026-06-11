/// <reference types="mithril" />
/// <reference types="flarum/@types/translator-icu-rich" />
import SettingsModal from 'flarum/admin/components/SettingsModal';
export default class LimitedSettingsModal extends SettingsModal {
    className(): string;
    title(): import("@askvortsov/rich-icu-message-formatter").NestedStringArray;
    form(): (JSX.Element | JSX.Element[] | ((JSX.Element | JSX.Element[])[] | null)[])[];
}
