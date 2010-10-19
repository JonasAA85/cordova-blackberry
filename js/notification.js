
/**
 * This class provides access to notifications on the device.
 */
function Notification() {
}

/**
 * Open a native alert dialog, with a customizable title and button text.
 * @param {String} message     Message to print in the body of the alert
 * @param {String} title       Title of the alert dialog (default: 'Alert')
 * @param {String} buttonLabel Label of the close button (default: 'OK')
 */
Notification.prototype.alert = function(message, title, buttonLabel) {
    var _title = (title || "Alert");
    var _buttonLabel = (buttonLabel || "OK");
    PhoneGap.exec(null, null, 'Notification', 'alert', [message, _title, _buttonLabel]);
};

/**
 * Open a custom confirmation dialog, with a customizable title and button text.
 * @param {String} message      Message to print in the body of the dialog
 * @param {String} title        Title of the alert dialog (default: 'Confirm')
 * @param {String} buttonLabels Comma separated list of the button labels (default: 'OK,Cancel')
 */
Notification.prototype.confirm = function(message, title, buttonLabels) {
    var _title = (title || "Confirm");
    var _buttonLabels = (buttonLabels || "OK,Cancel");
    return PhoneGap.exec(null, null, 'Notification', 'confirm', [message, _title, _buttonLabels]);
};

/**
 * Causes the device to vibrate.
 * @param {Integer} mills The number of milliseconds to vibrate for.
 */
Notification.prototype.vibrate = function(mills) {
    PhoneGap.exec(null, null, 'Notification', 'vibrate', [mills]);
};

/**
 * Causes the device to beep.
 * @param {Integer} count The number of beeps.
 */
Notification.prototype.beep = function(count) {
    PhoneGap.exec(null, null, 'Notification', 'beep', [count]);
};

PhoneGap.addConstructor(function() {
    if (typeof navigator.notification == "undefined") navigator.notification = new Notification();
});