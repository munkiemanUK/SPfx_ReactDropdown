(window["webpackJsonpe795d530_8fb6_425c_b864_b86735dbae1d_1_7_153"] = window["webpackJsonpe795d530_8fb6_425c_b864_b86735dbae1d_1_7_153"] || []).push([["vendors~page-picker-component"],{

/***/ "+MEO":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Modal/Modal.base.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: ModalBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBase", function() { return ModalBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _FocusTrapZone_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FocusTrapZone/index */ "3WSi");
/* harmony import */ var _Modal_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Modal.styles */ "+msp");
/* harmony import */ var _Overlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Overlay */ "OqUb");
/* harmony import */ var _Layer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Layer */ "YZp6");
/* harmony import */ var _Popup_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Popup/index */ "Q21x");
/* harmony import */ var _Popup_index__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Popup_index__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utilities/decorators/withResponsiveMode */ "5qgq");
/* harmony import */ var _utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Callout_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Callout/index */ "B5pZ");
/* harmony import */ var _Icon_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Icon/index */ "IsAY");
/* harmony import */ var _Icon_index__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Icon_index__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utilities_DraggableZone_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utilities/DraggableZone/index */ "+YI6");
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @uifabric/utilities */ "P2cQ");
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_12__);













// @TODO - need to change this to a panel whenever the breakpoint is under medium (verify the spec)
var DefaultLayerProps = {
    eventBubblingEnabled: false,
};
var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
var COMPONENT_NAME = 'Modal';
var ModalBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ModalBase, _super);
    function ModalBase(props) {
        var _this = _super.call(this, props) || this;
        _this._focusTrapZone = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._registerInitialModalPosition = function () {
            var _a;
            if (((_a = _this.props.dragOptions) === null || _a === void 0 ? void 0 : _a.keepInBounds) && !_this._minClampedPosition && !_this._maxClampedPosition) {
                var dialogMain = document.querySelector("[data-id=" + _this.state.id + "]");
                if (dialogMain) {
                    var modalRectangle = dialogMain.getBoundingClientRect();
                    _this._minClampedPosition = { x: -modalRectangle.x, y: -modalRectangle.y };
                    _this._maxClampedPosition = { x: modalRectangle.x, y: modalRectangle.y };
                }
            }
        };
        // Allow the user to scroll within the modal but not on the body
        _this._allowScrollOnModal = function (elt) {
            if (elt) {
                if (_this._allowTouchBodyScroll) {
                    Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["allowOverscrollOnElement"])(elt, _this._events);
                }
                else {
                    Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["allowScrollOnElement"])(elt, _this._events);
                }
            }
            else {
                _this._events.off(_this._scrollableContent);
            }
            _this._scrollableContent = elt;
        };
        _this._onModalContextMenuClose = function () {
            _this.setState({ isModalMenuOpen: false });
        };
        _this._onModalClose = function () {
            _this._lastSetX = 0;
            _this._lastSetY = 0;
            _this.setState({
                isModalMenuOpen: false,
                isInKeyboardMoveMode: false,
                isOpen: false,
                x: 0,
                y: 0,
            });
            if (_this.props.dragOptions && _this._hasRegisteredKeyUp) {
                _this._events.off(window, 'keyup', _this._onKeyUp, true /* useCapture */);
            }
            // Call the onDismiss callback
            if (_this.props.onDismissed) {
                _this.props.onDismissed();
            }
        };
        _this._onDragStart = function () {
            _this.setState({ isModalMenuOpen: false, isInKeyboardMoveMode: false });
        };
        _this._onDrag = function (_, ui) {
            var _a = _this.state, x = _a.x, y = _a.y;
            _this.setState(_this._getClampedPosition({ x: x + ui.delta.x, y: y + ui.delta.y }));
        };
        _this._onDragStop = function () {
            _this.focus();
        };
        _this._onKeyUp = function (event) {
            // Need to handle the CTRL + ALT + SPACE key during keyup due to FireFox bug:
            // https://bugzilla.mozilla.org/show_bug.cgi?id=1220143
            // Otherwise it would continue to fire a click even if the event was cancelled
            // during mouseDown.
            if (event.altKey && event.ctrlKey && event.keyCode === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].space) {
                // Since this is a global handler, we should make sure the target is within the dialog
                // before opening the dropdown
                if (Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["elementContains"])(_this._scrollableContent, event.target)) {
                    _this.setState({ isModalMenuOpen: !_this.state.isModalMenuOpen });
                    event.preventDefault();
                    event.stopPropagation();
                }
            }
        };
        // We need a global onKeyDown event when we are in the move mode so that we can
        // handle the key presses and the components inside the modal do not get the events
        _this._onKeyDown = function (event) {
            if (event.altKey && event.ctrlKey && event.keyCode === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].space) {
                // CTRL + ALT + SPACE is handled during keyUp
                event.preventDefault();
                event.stopPropagation();
                return;
            }
            if (_this.state.isModalMenuOpen && (event.altKey || event.keyCode === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].escape)) {
                _this.setState({ isModalMenuOpen: false });
            }
            if (_this.state.isInKeyboardMoveMode && (event.keyCode === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].escape || event.keyCode === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].enter)) {
                _this.setState({ isInKeyboardMoveMode: false });
                event.preventDefault();
                event.stopPropagation();
            }
            if (_this.state.isInKeyboardMoveMode) {
                var handledEvent = true;
                var delta = _this._getMoveDelta(event);
                switch (event.keyCode) {
                    /* eslint-disable no-fallthrough */
                    case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].escape:
                        _this.setState({ x: _this._lastSetX, y: _this._lastSetY });
                    case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].enter: {
                        // TODO: determine if fallthrough was intentional
                        /* eslint-enable no-fallthrough */
                        _this._lastSetX = 0;
                        _this._lastSetY = 0;
                        _this.setState({ isInKeyboardMoveMode: false });
                        break;
                    }
                    case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].up: {
                        _this.setState({
                            y: _this._getClampedPositionY(_this.state.y - delta),
                        });
                        break;
                    }
                    case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].down: {
                        _this.setState({
                            y: _this._getClampedPositionY(_this.state.y + delta),
                        });
                        break;
                    }
                    case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].left: {
                        _this.setState({
                            x: _this._getClampedPositionX(_this.state.x - delta),
                        });
                        break;
                    }
                    case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].right: {
                        _this.setState({
                            x: _this._getClampedPositionX(_this.state.x + delta),
                        });
                        break;
                    }
                    default: {
                        handledEvent = false;
                    }
                }
                if (handledEvent) {
                    event.preventDefault();
                    event.stopPropagation();
                }
            }
        };
        _this._onEnterKeyboardMoveMode = function () {
            _this._lastSetX = _this.state.x;
            _this._lastSetY = _this.state.y;
            _this.setState({ isInKeyboardMoveMode: true, isModalMenuOpen: false });
            _this._events.on(window, 'keydown', _this._onKeyDown, true /* useCapture */);
        };
        _this._onExitKeyboardMoveMode = function () {
            _this._lastSetX = 0;
            _this._lastSetY = 0;
            _this.setState({ isInKeyboardMoveMode: false });
            _this._events.off(window, 'keydown', _this._onKeyDown, true /* useCapture */);
        };
        _this._registerForKeyUp = function () {
            if (!_this._hasRegisteredKeyUp) {
                _this._events.on(window, 'keyup', _this._onKeyUp, true /* useCapture */);
                _this._hasRegisteredKeyUp = true;
            }
        };
        _this._async = new _Utilities__WEBPACK_IMPORTED_MODULE_2__["Async"](_this);
        _this._events = new _Utilities__WEBPACK_IMPORTED_MODULE_2__["EventGroup"](_this);
        Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_12__["initializeComponentRef"])(_this);
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["warnDeprecations"])(COMPONENT_NAME, props, {
            onLayerDidMount: 'layerProps.onLayerDidMount',
        });
        _this.state = {
            id: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getId"])('Modal'),
            isOpen: props.isOpen,
            isVisible: props.isOpen,
            hasBeenOpened: props.isOpen,
            x: 0,
            y: 0,
        };
        _this._lastSetX = 0;
        _this._lastSetY = 0;
        var _a = _this.props.allowTouchBodyScroll, allowTouchBodyScroll = _a === void 0 ? false : _a;
        _this._allowTouchBodyScroll = allowTouchBodyScroll;
        return _this;
    }
    ModalBase.prototype.UNSAFE_componentWillReceiveProps = function (newProps) {
        clearTimeout(this._onModalCloseTimer);
        // Opening the dialog
        if (newProps.isOpen) {
            if (!this.state.isOpen) {
                // First Open
                this.setState({
                    isOpen: true,
                });
                // Add a keyUp handler for all key up events when the dialog is open
                if (newProps.dragOptions) {
                    this._registerForKeyUp();
                }
            }
            else {
                // Modal has been opened
                // Reopen during closing
                this.setState({
                    hasBeenOpened: true,
                    isVisible: true,
                });
                if (newProps.topOffsetFixed) {
                    var dialogMain = document.getElementsByClassName('ms-Dialog-main');
                    var modalRectangle = void 0;
                    if (dialogMain.length > 0) {
                        modalRectangle = dialogMain[0].getBoundingClientRect();
                        this.setState({
                            modalRectangleTop: modalRectangle.top,
                        });
                    }
                }
            }
        }
        // Closing the dialog
        if (!newProps.isOpen && this.state.isOpen) {
            this._onModalCloseTimer = this._async.setTimeout(this._onModalClose, parseFloat(_Modal_styles__WEBPACK_IMPORTED_MODULE_4__["animationDuration"]) * 1000);
            this.setState({
                isVisible: false,
            });
        }
    };
    ModalBase.prototype.componentDidMount = function () {
        // Not all modals show just by updating their props. Some only render when they are mounted and pass in
        // isOpen as true. We need to add the keyUp handler in componentDidMount if we are in that case.
        if (this.state.isOpen && this.state.isVisible) {
            this._registerForKeyUp();
            this._registerInitialModalPosition();
        }
    };
    ModalBase.prototype.componentDidUpdate = function (prevProps, prevState) {
        var _this = this;
        if (!prevProps.isOpen && !prevState.isVisible) {
            this.setState({
                isVisible: true,
            });
        }
        if (!prevProps.isOpen && this.props.isOpen) {
            requestAnimationFrame(function () { return setTimeout(_this._registerInitialModalPosition, 0); });
        }
    };
    ModalBase.prototype.componentWillUnmount = function () {
        this._async.dispose();
        this._events.dispose();
    };
    ModalBase.prototype.render = function () {
        var _a = this.props, className = _a.className, containerClassName = _a.containerClassName, scrollableContentClassName = _a.scrollableContentClassName, elementToFocusOnDismiss = _a.elementToFocusOnDismiss, firstFocusableSelector = _a.firstFocusableSelector, forceFocusInsideTrap = _a.forceFocusInsideTrap, ignoreExternalFocusing = _a.ignoreExternalFocusing, isBlocking = _a.isBlocking, isClickableOutsideFocusTrap = _a.isClickableOutsideFocusTrap, isDarkOverlay = _a.isDarkOverlay, onDismiss = _a.onDismiss, layerProps = _a.layerProps, overlay = _a.overlay, responsiveMode = _a.responsiveMode, titleAriaId = _a.titleAriaId, styles = _a.styles, subtitleAriaId = _a.subtitleAriaId, theme = _a.theme, topOffsetFixed = _a.topOffsetFixed, 
        // eslint-disable-next-line deprecation/deprecation
        onLayerDidMount = _a.onLayerDidMount, isModeless = _a.isModeless, dragOptions = _a.dragOptions, enableAriaHiddenSiblings = _a.enableAriaHiddenSiblings;
        var _b = this.state, isOpen = _b.isOpen, isVisible = _b.isVisible, hasBeenOpened = _b.hasBeenOpened, modalRectangleTop = _b.modalRectangleTop, x = _b.x, y = _b.y, isInKeyboardMoveMode = _b.isInKeyboardMoveMode;
        if (!isOpen) {
            return null;
        }
        var layerClassName = layerProps === undefined ? '' : layerProps.className;
        var classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            containerClassName: containerClassName,
            scrollableContentClassName: scrollableContentClassName,
            isOpen: isOpen,
            isVisible: isVisible,
            hasBeenOpened: hasBeenOpened,
            modalRectangleTop: modalRectangleTop,
            topOffsetFixed: topOffsetFixed,
            isModeless: isModeless,
            layerClassName: layerClassName,
            isDefaultDragHandle: dragOptions && !dragOptions.dragHandleSelector,
        });
        var mergedLayerProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, DefaultLayerProps), this.props.layerProps), { onLayerDidMount: layerProps && layerProps.onLayerDidMount ? layerProps.onLayerDidMount : onLayerDidMount, insertFirst: isModeless, className: classNames.layer });
        var modalContent = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_FocusTrapZone_index__WEBPACK_IMPORTED_MODULE_3__["FocusTrapZone"], { "data-id": this.state.id, componentRef: this._focusTrapZone, className: classNames.main, elementToFocusOnDismiss: elementToFocusOnDismiss, isClickableOutsideFocusTrap: isModeless || isClickableOutsideFocusTrap || !isBlocking, ignoreExternalFocusing: ignoreExternalFocusing, forceFocusInsideTrap: isModeless ? !isModeless : forceFocusInsideTrap, firstFocusableSelector: firstFocusableSelector, focusPreviouslyFocusedInnerElement: true, onBlur: isInKeyboardMoveMode ? this._onExitKeyboardMoveMode : undefined, enableAriaHiddenSiblings: enableAriaHiddenSiblings },
            dragOptions && isInKeyboardMoveMode && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.keyboardMoveIconContainer }, dragOptions.keyboardMoveIconProps ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Icon_index__WEBPACK_IMPORTED_MODULE_10__["Icon"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, dragOptions.keyboardMoveIconProps))) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Icon_index__WEBPACK_IMPORTED_MODULE_10__["Icon"], { iconName: "move", className: classNames.keyboardMoveIcon })))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { ref: this._allowScrollOnModal, className: classNames.scrollableContent, "data-is-scrollable": true },
                dragOptions && this.state.isModalMenuOpen && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](dragOptions.menu, { items: [
                        { key: 'move', text: dragOptions.moveMenuItemText, onClick: this._onEnterKeyboardMoveMode },
                        { key: 'close', text: dragOptions.closeMenuItemText, onClick: this._onModalClose },
                    ], onDismiss: this._onModalContextMenuClose, alignTargetEdge: true, coverTarget: true, directionalHint: _Callout_index__WEBPACK_IMPORTED_MODULE_9__["DirectionalHint"].topLeftEdge, directionalHintFixed: true, shouldFocusOnMount: true, target: this._scrollableContent })),
                this.props.children)));
        // @temp tuatology - Will adjust this to be a panel at certain breakpoints
        if (responsiveMode >= _utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_8__["ResponsiveMode"].small) {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Layer__WEBPACK_IMPORTED_MODULE_6__["Layer"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, mergedLayerProps),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Popup_index__WEBPACK_IMPORTED_MODULE_7__["Popup"], { role: isModeless || !isBlocking ? 'dialog' : 'alertdialog', "aria-modal": !isModeless, ariaLabelledBy: titleAriaId, ariaDescribedBy: subtitleAriaId, onDismiss: onDismiss, shouldRestoreFocus: !ignoreExternalFocusing },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.root, role: !isModeless ? 'document' : undefined },
                        !isModeless && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Overlay__WEBPACK_IMPORTED_MODULE_5__["Overlay"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ isDarkThemed: isDarkOverlay, onClick: isBlocking ? undefined : onDismiss, allowTouchBodyScroll: this._allowTouchBodyScroll }, overlay))),
                        dragOptions ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utilities_DraggableZone_index__WEBPACK_IMPORTED_MODULE_11__["DraggableZone"], { handleSelector: dragOptions.dragHandleSelector || "." + classNames.main.split(' ')[0], preventDragSelector: "button", onStart: this._onDragStart, onDragChange: this._onDrag, onStop: this._onDragStop, position: { x: x, y: y } }, modalContent)) : (modalContent)))));
        }
        return null;
    };
    ModalBase.prototype.focus = function () {
        if (this._focusTrapZone.current) {
            this._focusTrapZone.current.focus();
        }
    };
    /**
     * Clamps the position coordinates to the maximum/minimum value specified in props
     */
    ModalBase.prototype._getClampedPosition = function (position) {
        if (!this.props.dragOptions || !this.props.dragOptions.keepInBounds) {
            return position;
        }
        return { x: this._getClampedPositionX(position.x), y: this._getClampedPositionY(position.y) };
    };
    ModalBase.prototype._getClampedPositionY = function (y) {
        var minPosition = this._minClampedPosition;
        var maxPosition = this._maxClampedPosition;
        if (minPosition) {
            y = Math.max(minPosition.y, y);
        }
        if (maxPosition) {
            y = Math.min(maxPosition.y, y);
        }
        return y;
    };
    ModalBase.prototype._getClampedPositionX = function (x) {
        var minPosition = this._minClampedPosition;
        var maxPosition = this._maxClampedPosition;
        if (minPosition) {
            x = Math.max(minPosition.x, x);
        }
        if (maxPosition) {
            x = Math.min(maxPosition.x, x);
        }
        return x;
    };
    ModalBase.prototype._getMoveDelta = function (event) {
        var delta = 10;
        if (event.shiftKey) {
            if (!event.ctrlKey) {
                delta = 50;
            }
        }
        else if (event.ctrlKey) {
            delta = 1;
        }
        return delta;
    };
    ModalBase.defaultProps = {
        isOpen: false,
        isDarkOverlay: true,
        isBlocking: false,
        className: '',
        containerClassName: '',
    };
    ModalBase = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_8__["withResponsiveMode"]
    ], ModalBase);
    return ModalBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=Modal.base.js.map

/***/ }),

/***/ "+YI6":
/*!************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/utilities/DraggableZone/index.js ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: DraggableZone, getClassNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DraggableZone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DraggableZone */ "dEgj");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DraggableZone", function() { return _DraggableZone__WEBPACK_IMPORTED_MODULE_0__["DraggableZone"]; });

/* harmony import */ var _DraggableZone_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DraggableZone.styles */ "ev4G");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getClassNames", function() { return _DraggableZone_styles__WEBPACK_IMPORTED_MODULE_1__["getClassNames"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "+dJA":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Dialog/DialogContent.js ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: DialogContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogContent", function() { return DialogContent; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _DialogContent_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DialogContent.base */ "wjk+");
/* harmony import */ var _DialogContent_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DialogContent.styles */ "WiZN");



var DialogContent = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_DialogContent_base__WEBPACK_IMPORTED_MODULE_1__["DialogContentBase"], _DialogContent_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, { scope: 'DialogContent' });
//# sourceMappingURL=DialogContent.js.map

/***/ }),

/***/ "+eNG":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/KeytipData/useKeytipRef.js ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: useKeytipRef, setAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useKeytipRef", function() { return useKeytipRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAttribute", function() { return setAttribute; });
/* harmony import */ var _utilities_keytips_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/keytips/index */ "GKG/");
/* harmony import */ var _useKeytipData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useKeytipData */ "j6qd");


/**
 * Hook that creates a ref which is used for passing to Keytip target element.
 * The ref will handle setting the attributes needed for Keytip to work.
 */
function useKeytipRef(options) {
    var _a = Object(_useKeytipData__WEBPACK_IMPORTED_MODULE_1__["useKeytipData"])(options), keytipId = _a.keytipId, ariaDescribedBy = _a.ariaDescribedBy;
    var contentRef = function (contentElement) {
        if (!contentElement) {
            return;
        }
        var targetElement = findFirstElement(contentElement, _utilities_keytips_index__WEBPACK_IMPORTED_MODULE_0__["DATAKTP_TARGET"]) || contentElement;
        var executeElement = findFirstElement(contentElement, _utilities_keytips_index__WEBPACK_IMPORTED_MODULE_0__["DATAKTP_EXECUTE_TARGET"]) || targetElement;
        var ariaElement = findFirstElement(contentElement, _utilities_keytips_index__WEBPACK_IMPORTED_MODULE_0__["DATAKTP_ARIA_TARGET"]) || executeElement;
        setAttribute(targetElement, _utilities_keytips_index__WEBPACK_IMPORTED_MODULE_0__["DATAKTP_TARGET"], keytipId);
        setAttribute(executeElement, _utilities_keytips_index__WEBPACK_IMPORTED_MODULE_0__["DATAKTP_EXECUTE_TARGET"], keytipId);
        setAttribute(ariaElement, 'aria-describedby', ariaDescribedBy, true);
    };
    return contentRef;
}
function setAttribute(element, attributeName, attributeValue, append) {
    if (append === void 0) { append = false; }
    if (element && attributeValue) {
        var value = attributeValue;
        if (append) {
            var currentValue = element.getAttribute(attributeName);
            if (currentValue && currentValue.indexOf(attributeValue) === -1) {
                value = currentValue + " " + attributeValue;
            }
        }
        element.setAttribute(attributeName, value);
    }
}
function findFirstElement(rootElement, dataAttribute) {
    return rootElement.querySelector("[" + dataAttribute + "]");
}
//# sourceMappingURL=useKeytipRef.js.map

/***/ }),

/***/ "+m1z":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsRowCheck.styles.js ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: CHECK_CELL_WIDTH, getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_CELL_WIDTH", function() { return CHECK_CELL_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "PL71");
/* harmony import */ var _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DetailsRow.styles */ "tCYI");
/* harmony import */ var _DetailsHeader_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetailsHeader.styles */ "a+oq");
/* harmony import */ var _Check_Check_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Check/Check.styles */ "gwC2");




var GlobalClassNames = {
    root: 'ms-DetailsRow-check',
    isDisabled: 'ms-DetailsRow-check--isDisabled',
    isHeader: 'ms-DetailsRow-check--isHeader',
};
var CHECK_CELL_WIDTH = 48;
var getStyles = function (props) {
    var theme = props.theme, className = props.className, isHeader = props.isHeader, selected = props.selected, anySelected = props.anySelected, canSelect = props.canSelect, compact = props.compact, isVisible = props.isVisible;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
    var rowHeight = _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_ROW_HEIGHTS"].rowHeight, compactRowHeight = _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_ROW_HEIGHTS"].compactRowHeight;
    var height = isHeader ? _DetailsHeader_styles__WEBPACK_IMPORTED_MODULE_2__["HEADER_HEIGHT"] : compact ? compactRowHeight : rowHeight;
    var isCheckVisible = isVisible || selected || anySelected;
    return {
        root: [classNames.root, className],
        check: [
            !canSelect && classNames.isDisabled,
            isHeader && classNames.isHeader,
            Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getFocusStyle"])(theme),
            theme.fonts.small,
            _Check_Check_styles__WEBPACK_IMPORTED_MODULE_3__["CheckGlobalClassNames"].checkHost,
            {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'default',
                boxSizing: 'border-box',
                verticalAlign: 'top',
                background: 'none',
                backgroundColor: 'transparent',
                border: 'none',
                opacity: isCheckVisible ? 1 : 0,
                height: height,
                width: CHECK_CELL_WIDTH,
                padding: 0,
                margin: 0,
            },
        ],
        isDisabled: [],
    };
};
//# sourceMappingURL=DetailsRowCheck.styles.js.map

/***/ }),

/***/ "+msp":
/*!************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Modal/Modal.styles.js ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: animationDuration, getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationDuration", function() { return animationDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "PL71");

var animationDuration = _Styling__WEBPACK_IMPORTED_MODULE_0__["AnimationVariables"].durationValue2;
var globalClassNames = {
    root: 'ms-Modal',
    main: 'ms-Dialog-main',
    scrollableContent: 'ms-Modal-scrollableContent',
    isOpen: 'is-open',
    layer: 'ms-Modal-Layer',
};
var getStyles = function (props) {
    var _a;
    var className = props.className, containerClassName = props.containerClassName, scrollableContentClassName = props.scrollableContentClassName, isOpen = props.isOpen, isVisible = props.isVisible, hasBeenOpened = props.hasBeenOpened, modalRectangleTop = props.modalRectangleTop, theme = props.theme, topOffsetFixed = props.topOffsetFixed, isModeless = props.isModeless, layerClassName = props.layerClassName, isDefaultDragHandle = props.isDefaultDragHandle;
    var palette = theme.palette, effects = theme.effects, fonts = theme.fonts;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(globalClassNames, theme);
    return {
        root: [
            classNames.root,
            fonts.medium,
            {
                backgroundColor: 'transparent',
                position: isModeless ? 'absolute' : 'fixed',
                height: '100%',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0,
                pointerEvents: 'none',
                transition: "opacity " + animationDuration,
            },
            topOffsetFixed &&
                hasBeenOpened && {
                alignItems: 'flex-start',
            },
            isOpen && classNames.isOpen,
            isVisible && {
                opacity: 1,
                pointerEvents: 'auto',
            },
            className,
        ],
        main: [
            classNames.main,
            {
                boxShadow: effects.elevation64,
                borderRadius: effects.roundedCorner2,
                backgroundColor: palette.white,
                boxSizing: 'border-box',
                position: 'relative',
                textAlign: 'left',
                outline: '3px solid transparent',
                maxHeight: 'calc(100% - 32px)',
                maxWidth: 'calc(100% - 32px)',
                minHeight: '176px',
                minWidth: '288px',
                overflowY: 'auto',
                zIndex: isModeless ? _Styling__WEBPACK_IMPORTED_MODULE_0__["ZIndexes"].Layer : undefined,
            },
            topOffsetFixed &&
                hasBeenOpened && {
                top: modalRectangleTop,
            },
            isDefaultDragHandle && {
                cursor: 'move',
            },
            containerClassName,
        ],
        scrollableContent: [
            classNames.scrollableContent,
            {
                overflowY: 'auto',
                flexGrow: 1,
                maxHeight: '100vh',
                selectors: (_a = {},
                    _a['@supports (-webkit-overflow-scrolling: touch)'] = {
                        maxHeight: window.innerHeight,
                    },
                    _a),
            },
            scrollableContentClassName,
        ],
        layer: isModeless && [
            layerClassName,
            classNames.layer,
            {
                position: 'static',
                width: 'unset',
                height: 'unset',
            },
        ],
        keyboardMoveIconContainer: {
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            padding: '3px 0px',
        },
        keyboardMoveIcon: {
            // eslint-disable-next-line deprecation/deprecation
            fontSize: fonts.xLargePlus.fontSize,
            width: '24px',
        },
    };
};
//# sourceMappingURL=Modal.styles.js.map

/***/ }),

/***/ "/C2V":
/*!******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Dialog/index.js ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: Dialog, DialogBase, DialogContent, DialogContentBase, DialogFooter, DialogFooterBase, ResponsiveMode, DialogType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dialog */ "23Sn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return _Dialog__WEBPACK_IMPORTED_MODULE_0__["Dialog"]; });

/* harmony import */ var _Dialog_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dialog.base */ "FaVw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogBase", function() { return _Dialog_base__WEBPACK_IMPORTED_MODULE_1__["DialogBase"]; });

/* harmony import */ var _DialogContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DialogContent */ "+dJA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogContent", function() { return _DialogContent__WEBPACK_IMPORTED_MODULE_2__["DialogContent"]; });

/* harmony import */ var _DialogContent_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DialogContent.base */ "wjk+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogContentBase", function() { return _DialogContent_base__WEBPACK_IMPORTED_MODULE_3__["DialogContentBase"]; });

/* harmony import */ var _DialogFooter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DialogFooter */ "5xuA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogFooter", function() { return _DialogFooter__WEBPACK_IMPORTED_MODULE_4__["DialogFooter"]; });

/* harmony import */ var _DialogFooter_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DialogFooter.base */ "428q");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogFooterBase", function() { return _DialogFooter_base__WEBPACK_IMPORTED_MODULE_5__["DialogFooterBase"]; });

/* harmony import */ var _DialogContent_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DialogContent.types */ "A5R/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResponsiveMode", function() { return _DialogContent_types__WEBPACK_IMPORTED_MODULE_6__["ResponsiveMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogType", function() { return _DialogContent_types__WEBPACK_IMPORTED_MODULE_6__["DialogType"]; });








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "0fxH":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/utilities/selection/SelectionZone.js ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: SelectionZone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionZone", function() { return SelectionZone; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interfaces */ "2Xb7");




// Selection definitions:
//
// Anchor index: the point from which a range selection starts.
// Focus index: the point from which layout movement originates from.
//
// These two can differ. Tests:
//
// If you start at index 5
// Shift click to index 10
//    The focus is 10, the anchor is 5.
// If you shift click at index 0
//    The anchor remains at 5, the items between 0 and 5 are selected and everything else is cleared.
// If you click index 8
//    The anchor and focus are set to 8.
var SELECTION_DISABLED_ATTRIBUTE_NAME = 'data-selection-disabled';
var SELECTION_INDEX_ATTRIBUTE_NAME = 'data-selection-index';
var SELECTION_TOGGLE_ATTRIBUTE_NAME = 'data-selection-toggle';
var SELECTION_INVOKE_ATTRIBUTE_NAME = 'data-selection-invoke';
var SELECTION_INVOKE_TOUCH_ATTRIBUTE_NAME = 'data-selection-touch-invoke';
var SELECTALL_TOGGLE_ALL_ATTRIBUTE_NAME = 'data-selection-all-toggle';
var SELECTION_SELECT_ATTRIBUTE_NAME = 'data-selection-select';
/**
 * {@docCategory Selection}
 */
var SelectionZone = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SelectionZone, _super);
    function SelectionZone(props) {
        var _this = _super.call(this, props) || this;
        _this._root = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        /**
         * In some cases, the consuming scenario requires to set focus on a row without having SelectionZone
         * react to the event. Note that focus events in IE \<= 11 will occur asynchronously after .focus() has
         * been called on an element, so we need a flag to store the idea that we will bypass the "next"
         * focus event that occurs. This method does that.
         */
        _this.ignoreNextFocus = function () {
            _this._handleNextFocus(false);
        };
        _this._onSelectionChange = function () {
            var selection = _this.props.selection;
            var isModal = selection.isModal && selection.isModal();
            _this.setState({
                isModal: isModal,
            });
        };
        _this._onMouseDownCapture = function (ev) {
            var target = ev.target;
            if (document.activeElement !== target && !Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["elementContains"])(document.activeElement, target)) {
                _this.ignoreNextFocus();
                return;
            }
            if (!Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["elementContains"])(target, _this._root.current)) {
                return;
            }
            while (target !== _this._root.current) {
                if (_this._hasAttribute(target, SELECTION_INVOKE_ATTRIBUTE_NAME)) {
                    _this.ignoreNextFocus();
                    break;
                }
                target = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getParent"])(target);
            }
        };
        /**
         * When we focus an item, for single/multi select scenarios, we should try to select it immediately
         * as long as the focus did not originate from a mouse down/touch event. For those cases, we handle them
         * specially.
         */
        _this._onFocus = function (ev) {
            var target = ev.target;
            var selection = _this.props.selection;
            var isToggleModifierPressed = _this._isCtrlPressed || _this._isMetaPressed;
            var selectionMode = _this._getSelectionMode();
            if (_this._shouldHandleFocus && selectionMode !== _interfaces__WEBPACK_IMPORTED_MODULE_3__["SelectionMode"].none) {
                var isToggle = _this._hasAttribute(target, SELECTION_TOGGLE_ATTRIBUTE_NAME);
                var itemRoot = _this._findItemRoot(target);
                if (!isToggle && itemRoot) {
                    var index = _this._getItemIndex(itemRoot);
                    if (isToggleModifierPressed) {
                        // set anchor only.
                        selection.setIndexSelected(index, selection.isIndexSelected(index), true);
                        if (_this.props.enterModalOnTouch && _this._isTouch && selection.setModal) {
                            selection.setModal(true);
                            _this._setIsTouch(false);
                        }
                    }
                    else {
                        if (_this.props.isSelectedOnFocus) {
                            _this._onItemSurfaceClick(ev, index);
                        }
                    }
                }
            }
            _this._handleNextFocus(false);
        };
        _this._onMouseDown = function (ev) {
            _this._updateModifiers(ev);
            var target = ev.target;
            var itemRoot = _this._findItemRoot(target);
            // No-op if selection is disabled
            if (_this._isSelectionDisabled(target)) {
                return;
            }
            while (target !== _this._root.current) {
                if (_this._hasAttribute(target, SELECTALL_TOGGLE_ALL_ATTRIBUTE_NAME)) {
                    break;
                }
                else if (itemRoot) {
                    if (_this._hasAttribute(target, SELECTION_TOGGLE_ATTRIBUTE_NAME)) {
                        break;
                    }
                    else if (_this._hasAttribute(target, SELECTION_INVOKE_ATTRIBUTE_NAME)) {
                        break;
                    }
                    else if ((target === itemRoot || _this._shouldAutoSelect(target)) &&
                        !_this._isShiftPressed &&
                        !_this._isCtrlPressed &&
                        !_this._isMetaPressed) {
                        _this._onInvokeMouseDown(ev, _this._getItemIndex(itemRoot));
                        break;
                    }
                    else if (_this.props.disableAutoSelectOnInputElements &&
                        (target.tagName === 'A' || target.tagName === 'BUTTON' || target.tagName === 'INPUT')) {
                        return;
                    }
                }
                target = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getParent"])(target);
            }
        };
        _this._onTouchStartCapture = function (ev) {
            _this._setIsTouch(true);
        };
        _this._onClick = function (ev) {
            var _a = _this.props.enableTouchInvocationTarget, enableTouchInvocationTarget = _a === void 0 ? false : _a;
            _this._updateModifiers(ev);
            var target = ev.target;
            var itemRoot = _this._findItemRoot(target);
            var isSelectionDisabled = _this._isSelectionDisabled(target);
            while (target !== _this._root.current) {
                if (_this._hasAttribute(target, SELECTALL_TOGGLE_ALL_ATTRIBUTE_NAME)) {
                    if (!isSelectionDisabled) {
                        _this._onToggleAllClick(ev);
                    }
                    break;
                }
                else if (itemRoot) {
                    var index = _this._getItemIndex(itemRoot);
                    if (_this._hasAttribute(target, SELECTION_TOGGLE_ATTRIBUTE_NAME)) {
                        if (!isSelectionDisabled) {
                            if (_this._isShiftPressed) {
                                _this._onItemSurfaceClick(ev, index);
                            }
                            else {
                                _this._onToggleClick(ev, index);
                            }
                        }
                        break;
                    }
                    else if ((_this._isTouch &&
                        enableTouchInvocationTarget &&
                        _this._hasAttribute(target, SELECTION_INVOKE_TOUCH_ATTRIBUTE_NAME)) ||
                        _this._hasAttribute(target, SELECTION_INVOKE_ATTRIBUTE_NAME)) {
                        // Items should be invokable even if selection is disabled.
                        _this._onInvokeClick(ev, index);
                        break;
                    }
                    else if (target === itemRoot) {
                        if (!isSelectionDisabled) {
                            _this._onItemSurfaceClick(ev, index);
                        }
                        break;
                    }
                    else if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.tagName === 'INPUT') {
                        return;
                    }
                }
                target = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getParent"])(target);
            }
        };
        _this._onContextMenu = function (ev) {
            var target = ev.target;
            var _a = _this.props, onItemContextMenu = _a.onItemContextMenu, selection = _a.selection;
            if (onItemContextMenu) {
                var itemRoot = _this._findItemRoot(target);
                if (itemRoot) {
                    var index = _this._getItemIndex(itemRoot);
                    _this._onInvokeMouseDown(ev, index);
                    var skipPreventDefault = onItemContextMenu(selection.getItems()[index], index, ev.nativeEvent);
                    // In order to keep back compat, if the value here is undefined, then we should still
                    // call preventDefault(). Only in the case where true is explicitly returned should
                    // the call be skipped.
                    if (!skipPreventDefault) {
                        ev.preventDefault();
                    }
                }
            }
        };
        /**
         * In multi selection, if you double click within an item's root (but not within the invoke element or
         * input elements), we should execute the invoke handler.
         */
        _this._onDoubleClick = function (ev) {
            var target = ev.target;
            var onItemInvoked = _this.props.onItemInvoked;
            var itemRoot = _this._findItemRoot(target);
            if (itemRoot && onItemInvoked && !_this._isInputElement(target)) {
                var index = _this._getItemIndex(itemRoot);
                while (target !== _this._root.current) {
                    if (_this._hasAttribute(target, SELECTION_TOGGLE_ATTRIBUTE_NAME) ||
                        _this._hasAttribute(target, SELECTION_INVOKE_ATTRIBUTE_NAME)) {
                        break;
                    }
                    else if (target === itemRoot) {
                        _this._onInvokeClick(ev, index);
                        break;
                    }
                    target = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getParent"])(target);
                }
                target = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getParent"])(target);
            }
        };
        _this._onKeyDownCapture = function (ev) {
            _this._updateModifiers(ev);
            _this._handleNextFocus(true);
        };
        _this._onKeyDown = function (ev) {
            _this._updateModifiers(ev);
            var target = ev.target;
            var isSelectionDisabled = _this._isSelectionDisabled(target);
            var selection = _this.props.selection;
            var isSelectAllKey = ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].a && (_this._isCtrlPressed || _this._isMetaPressed);
            var isClearSelectionKey = ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].escape;
            // Ignore key downs from input elements.
            if (_this._isInputElement(target)) {
                // A key was pressed while an item in this zone was focused.
                return;
            }
            var selectionMode = _this._getSelectionMode();
            // If ctrl-a is pressed, select all (if all are not already selected.)
            if (isSelectAllKey && selectionMode === _interfaces__WEBPACK_IMPORTED_MODULE_3__["SelectionMode"].multiple && !selection.isAllSelected()) {
                if (!isSelectionDisabled) {
                    selection.setAllSelected(true);
                }
                ev.stopPropagation();
                ev.preventDefault();
                return;
            }
            // If escape is pressed, clear selection (if any are selected.)
            if (isClearSelectionKey && selection.getSelectedCount() > 0) {
                if (!isSelectionDisabled) {
                    selection.setAllSelected(false);
                }
                ev.stopPropagation();
                ev.preventDefault();
                return;
            }
            var itemRoot = _this._findItemRoot(target);
            // If a key was pressed within an item, we should treat "enters" as invokes and "space" as toggle
            if (itemRoot) {
                var index = _this._getItemIndex(itemRoot);
                while (target !== _this._root.current) {
                    if (_this._hasAttribute(target, SELECTION_TOGGLE_ATTRIBUTE_NAME)) {
                        // For toggle elements, assuming they are rendered as buttons, they will generate a click event,
                        // so we can no-op for any keydowns in this case.
                        break;
                    }
                    else if (_this._shouldAutoSelect(target)) {
                        if (!isSelectionDisabled) {
                            // If the event went to an element which should trigger auto-select, select it and then let
                            // the default behavior kick in.
                            _this._onInvokeMouseDown(ev, index);
                        }
                        break;
                    }
                    else if ((ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].enter || ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].space) &&
                        (target.tagName === 'BUTTON' || target.tagName === 'A' || target.tagName === 'INPUT')) {
                        return false;
                    }
                    else if (target === itemRoot) {
                        if (ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].enter) {
                            // Items should be invokable even if selection is disabled.
                            _this._onInvokeClick(ev, index);
                            ev.preventDefault();
                            return;
                        }
                        else if (ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].space) {
                            if (!isSelectionDisabled) {
                                _this._onToggleClick(ev, index);
                            }
                            ev.preventDefault();
                            return;
                        }
                        break;
                    }
                    target = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getParent"])(target);
                }
            }
        };
        _this._events = new _Utilities__WEBPACK_IMPORTED_MODULE_2__["EventGroup"](_this);
        _this._async = new _Utilities__WEBPACK_IMPORTED_MODULE_2__["Async"](_this);
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["initializeComponentRef"])(_this);
        var selection = _this.props.selection;
        // Reflect the initial modal state of selection into the state.
        var isModal = selection.isModal && selection.isModal();
        _this.state = {
            isModal: isModal,
        };
        return _this;
    }
    SelectionZone.getDerivedStateFromProps = function (nextProps, prevState) {
        var isModal = nextProps.selection.isModal && nextProps.selection.isModal();
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, prevState), { isModal: isModal });
    };
    SelectionZone.prototype.componentDidMount = function () {
        var win = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getWindow"])(this._root.current);
        // Track the latest modifier keys globally.
        this._events.on(win, 'keydown, keyup', this._updateModifiers, true);
        this._events.on(document, 'click', this._findScrollParentAndTryClearOnEmptyClick);
        this._events.on(document.body, 'touchstart', this._onTouchStartCapture, true);
        this._events.on(document.body, 'touchend', this._onTouchStartCapture, true);
        // Subscribe to the selection to keep modal state updated.
        this._events.on(this.props.selection, 'change', this._onSelectionChange);
    };
    SelectionZone.prototype.render = function () {
        var isModal = this.state.isModal;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])('ms-SelectionZone', this.props.className, {
                'ms-SelectionZone--modal': !!isModal,
            }), ref: this._root, onKeyDown: this._onKeyDown, onMouseDown: this._onMouseDown, onKeyDownCapture: this._onKeyDownCapture, onClick: this._onClick, role: "presentation", onDoubleClick: this._onDoubleClick, onContextMenu: this._onContextMenu, onMouseDownCapture: this._onMouseDownCapture, onFocusCapture: this._onFocus, "data-selection-is-modal": isModal ? true : undefined },
            this.props.children,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Utilities__WEBPACK_IMPORTED_MODULE_2__["FocusRects"], null)));
    };
    SelectionZone.prototype.componentDidUpdate = function (previousProps) {
        var selection = this.props.selection;
        if (selection !== previousProps.selection) {
            // Whenever selection changes, update the subscripton to keep modal state updated.
            this._events.off(previousProps.selection);
            this._events.on(selection, 'change', this._onSelectionChange);
        }
    };
    SelectionZone.prototype.componentWillUnmount = function () {
        this._events.dispose();
        this._async.dispose();
    };
    SelectionZone.prototype._isSelectionDisabled = function (target) {
        if (this._getSelectionMode() === _interfaces__WEBPACK_IMPORTED_MODULE_3__["SelectionMode"].none) {
            return true;
        }
        while (target !== this._root.current) {
            if (this._hasAttribute(target, SELECTION_DISABLED_ATTRIBUTE_NAME)) {
                return true;
            }
            target = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getParent"])(target);
        }
        return false;
    };
    SelectionZone.prototype._onToggleAllClick = function (ev) {
        var selection = this.props.selection;
        var selectionMode = this._getSelectionMode();
        if (selectionMode === _interfaces__WEBPACK_IMPORTED_MODULE_3__["SelectionMode"].multiple) {
            selection.toggleAllSelected();
            ev.stopPropagation();
            ev.preventDefault();
        }
    };
    SelectionZone.prototype._onToggleClick = function (ev, index) {
        var selection = this.props.selection;
        var selectionMode = this._getSelectionMode();
        selection.setChangeEvents(false);
        if (this.props.enterModalOnTouch && this._isTouch && !selection.isIndexSelected(index) && selection.setModal) {
            selection.setModal(true);
            this._setIsTouch(false);
        }
        if (selectionMode === _interfaces__WEBPACK_IMPORTED_MODULE_3__["SelectionMode"].multiple) {
            selection.toggleIndexSelected(index);
        }
        else if (selectionMode === _interfaces__WEBPACK_IMPORTED_MODULE_3__["SelectionMode"].single) {
            var isSelected = selection.isIndexSelected(index);
            var isModal = selection.isModal && selection.isModal();
            selection.setAllSelected(false);
            selection.setIndexSelected(index, !isSelected, true);
            if (isModal && selection.setModal) {
                // Since the above call to setAllSelected(false) clears modal state,
                // restore it. This occurs because the SelectionMode of the Selection
                // may differ from the SelectionZone.
                selection.setModal(true);
            }
        }
        else {
            selection.setChangeEvents(true);
            return;
        }
        selection.setChangeEvents(true);
        ev.stopPropagation();
        // NOTE: ev.preventDefault is not called for toggle clicks, because this will kill the browser behavior
        // for checkboxes if you use a checkbox for the toggle.
    };
    SelectionZone.prototype._onInvokeClick = function (ev, index) {
        var _a = this.props, selection = _a.selection, onItemInvoked = _a.onItemInvoked;
        if (onItemInvoked) {
            onItemInvoked(selection.getItems()[index], index, ev.nativeEvent);
            ev.preventDefault();
            ev.stopPropagation();
        }
    };
    SelectionZone.prototype._onItemSurfaceClick = function (ev, index) {
        var selection = this.props.selection;
        var isToggleModifierPressed = this._isCtrlPressed || this._isMetaPressed;
        var selectionMode = this._getSelectionMode();
        if (selectionMode === _interfaces__WEBPACK_IMPORTED_MODULE_3__["SelectionMode"].multiple) {
            if (this._isShiftPressed && !this._isTabPressed) {
                selection.selectToIndex(index, !isToggleModifierPressed);
            }
            else if (isToggleModifierPressed) {
                selection.toggleIndexSelected(index);
            }
            else {
                this._clearAndSelectIndex(index);
            }
        }
        else if (selectionMode === _interfaces__WEBPACK_IMPORTED_MODULE_3__["SelectionMode"].single) {
            this._clearAndSelectIndex(index);
        }
    };
    SelectionZone.prototype._onInvokeMouseDown = function (ev, index) {
        var selection = this.props.selection;
        // Only do work if item is not selected.
        if (selection.isIndexSelected(index)) {
            return;
        }
        this._clearAndSelectIndex(index);
    };
    /**
     * To avoid high startup cost of traversing the DOM on component mount,
     * defer finding the scrollable parent until a click interaction.
     *
     * The styles will probably already calculated since we're running in a click handler,
     * so this is less likely to cause layout thrashing then doing it in mount.
     */
    SelectionZone.prototype._findScrollParentAndTryClearOnEmptyClick = function (ev) {
        var scrollParent = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["findScrollableParent"])(this._root.current);
        // unbind this handler and replace binding with a binding on the actual scrollable parent
        this._events.off(document, 'click', this._findScrollParentAndTryClearOnEmptyClick);
        this._events.on(scrollParent, 'click', this._tryClearOnEmptyClick);
        // If we clicked inside the scrollable parent, call through to the handler on this click.
        if ((scrollParent && ev.target instanceof Node && scrollParent.contains(ev.target)) || scrollParent === ev.target) {
            this._tryClearOnEmptyClick(ev);
        }
    };
    SelectionZone.prototype._tryClearOnEmptyClick = function (ev) {
        if (!this.props.selectionPreservedOnEmptyClick && this._isNonHandledClick(ev.target)) {
            this.props.selection.setAllSelected(false);
        }
    };
    SelectionZone.prototype._clearAndSelectIndex = function (index) {
        var selection = this.props.selection;
        var isAlreadySingleSelected = selection.getSelectedCount() === 1 && selection.isIndexSelected(index);
        if (!isAlreadySingleSelected) {
            var isModal = selection.isModal && selection.isModal();
            selection.setChangeEvents(false);
            selection.setAllSelected(false);
            selection.setIndexSelected(index, true, true);
            if (isModal || (this.props.enterModalOnTouch && this._isTouch)) {
                if (selection.setModal) {
                    selection.setModal(true);
                }
                if (this._isTouch) {
                    this._setIsTouch(false);
                }
            }
            selection.setChangeEvents(true);
        }
    };
    /**
     * We need to track the modifier key states so that when focus events occur, which do not contain
     * modifier states in the Event object, we know how to behave.
     */
    SelectionZone.prototype._updateModifiers = function (ev) {
        this._isShiftPressed = ev.shiftKey;
        this._isCtrlPressed = ev.ctrlKey;
        this._isMetaPressed = ev.metaKey;
        var keyCode = ev.keyCode;
        this._isTabPressed = keyCode ? keyCode === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].tab : false;
    };
    SelectionZone.prototype._findItemRoot = function (target) {
        var selection = this.props.selection;
        while (target !== this._root.current) {
            var indexValue = target.getAttribute(SELECTION_INDEX_ATTRIBUTE_NAME);
            var index = Number(indexValue);
            if (indexValue !== null && index >= 0 && index < selection.getItems().length) {
                break;
            }
            target = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getParent"])(target);
        }
        if (target === this._root.current) {
            return undefined;
        }
        return target;
    };
    SelectionZone.prototype._getItemIndex = function (itemRoot) {
        return Number(itemRoot.getAttribute(SELECTION_INDEX_ATTRIBUTE_NAME));
    };
    SelectionZone.prototype._shouldAutoSelect = function (element) {
        return this._hasAttribute(element, SELECTION_SELECT_ATTRIBUTE_NAME);
    };
    SelectionZone.prototype._hasAttribute = function (element, attributeName) {
        var isToggle = false;
        while (!isToggle && element !== this._root.current) {
            isToggle = element.getAttribute(attributeName) === 'true';
            element = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getParent"])(element);
        }
        return isToggle;
    };
    SelectionZone.prototype._isInputElement = function (element) {
        return element.tagName === 'INPUT' || element.tagName === 'TEXTAREA';
    };
    SelectionZone.prototype._isNonHandledClick = function (element) {
        var doc = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getDocument"])();
        if (doc && element) {
            while (element && element !== doc.documentElement) {
                if (Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["isElementTabbable"])(element)) {
                    return false;
                }
                element = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getParent"])(element);
            }
        }
        return true;
    };
    SelectionZone.prototype._handleNextFocus = function (handleFocus) {
        var _this = this;
        if (this._shouldHandleFocusTimeoutId) {
            this._async.clearTimeout(this._shouldHandleFocusTimeoutId);
            this._shouldHandleFocusTimeoutId = undefined;
        }
        this._shouldHandleFocus = handleFocus;
        if (handleFocus) {
            this._async.setTimeout(function () {
                _this._shouldHandleFocus = false;
            }, 100);
        }
    };
    SelectionZone.prototype._setIsTouch = function (isTouch) {
        var _this = this;
        if (this._isTouchTimeoutId) {
            this._async.clearTimeout(this._isTouchTimeoutId);
            this._isTouchTimeoutId = undefined;
        }
        this._isTouch = true;
        if (isTouch) {
            this._async.setTimeout(function () {
                _this._isTouch = false;
            }, 300);
        }
    };
    SelectionZone.prototype._getSelectionMode = function () {
        var selection = this.props.selection;
        var _a = this.props.selectionMode, selectionMode = _a === void 0 ? selection ? selection.mode : _interfaces__WEBPACK_IMPORTED_MODULE_3__["SelectionMode"].none : _a;
        return selectionMode;
    };
    SelectionZone.defaultProps = {
        isSelectedOnFocus: true,
        selectionMode: _interfaces__WEBPACK_IMPORTED_MODULE_3__["SelectionMode"].multiple,
    };
    return SelectionZone;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=SelectionZone.js.map

/***/ }),

/***/ "0q4O":
/*!******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/DetailsList.js ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: SELECTION_CHANGE, SelectionDirection, SelectionMode, Selection, SelectionZone, CollapseAllVisibility, DetailsHeader, DetailsHeaderBase, SelectAllVisibility, DetailsList, DetailsListBase, buildColumns, ColumnActionsMode, ConstrainMode, ColumnDragEndLocation, DetailsListLayoutMode, CheckboxVisibility, DetailsRow, DetailsRowBase, DetailsRowGlobalClassNames, DEFAULT_CELL_STYLE_PROPS, DEFAULT_ROW_HEIGHTS, getDetailsRowStyles, DetailsRowCheck, DetailsRowFields, DetailsColumnBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/DetailsList/index */ "7YZ5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SELECTION_CHANGE", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["SELECTION_CHANGE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionDirection", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["SelectionDirection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionMode", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["SelectionMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Selection", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["Selection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionZone", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["SelectionZone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollapseAllVisibility", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["CollapseAllVisibility"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsHeader", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["DetailsHeader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsHeaderBase", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["DetailsHeaderBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectAllVisibility", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["SelectAllVisibility"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsList", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["DetailsList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsListBase", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["DetailsListBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildColumns", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["buildColumns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColumnActionsMode", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["ColumnActionsMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConstrainMode", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["ConstrainMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColumnDragEndLocation", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["ColumnDragEndLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsListLayoutMode", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["DetailsListLayoutMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxVisibility", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["CheckboxVisibility"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsRow", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["DetailsRow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsRowBase", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["DetailsRowBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsRowGlobalClassNames", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["DetailsRowGlobalClassNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CELL_STYLE_PROPS", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_CELL_STYLE_PROPS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_ROW_HEIGHTS", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_ROW_HEIGHTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDetailsRowStyles", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["getDetailsRowStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsRowCheck", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["DetailsRowCheck"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsRowFields", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["DetailsRowFields"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsColumnBase", function() { return _components_DetailsList_index__WEBPACK_IMPORTED_MODULE_0__["DetailsColumnBase"]; });


//# sourceMappingURL=DetailsList.js.map

/***/ }),

/***/ "0ve4":
/*!************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/react-hooks@7.13.9_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/react-hooks/lib/useAsync.js ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: useAsync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAsync", function() { return useAsync; });
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/utilities */ "P2cQ");
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useConst__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useConst */ "SKm6");



/**
 * Hook to provide an Async instance that is automatically cleaned up on dismount.
 */
function useAsync() {
    var async = Object(_useConst__WEBPACK_IMPORTED_MODULE_2__["useConst"])(function () { return new _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["Async"](); });
    // Function that returns a function in order to dispose the async instance on unmount
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () { return function () { return async.dispose(); }; }, [async]);
    return async;
}
//# sourceMappingURL=useAsync.js.map

/***/ }),

/***/ "1xj0":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsList.base.js ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: DetailsListBase, buildColumns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsListBase", function() { return DetailsListBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildColumns", function() { return buildColumns; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _DetailsList_DetailsList_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DetailsList/DetailsList.types */ "ddaB");
/* harmony import */ var _DetailsList_DetailsHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../DetailsList/DetailsHeader */ "tApQ");
/* harmony import */ var _DetailsList_DetailsHeader_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../DetailsList/DetailsHeader.types */ "9ehK");
/* harmony import */ var _DetailsList_DetailsRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../DetailsList/DetailsRow */ "wqXl");
/* harmony import */ var _FocusZone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../FocusZone */ "NMYH");
/* harmony import */ var _utilities_selection_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utilities/selection/index */ "v+17");
/* harmony import */ var _utilities_dragdrop_DragDropHelper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utilities/dragdrop/DragDropHelper */ "uGAW");
/* harmony import */ var _GroupedList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../GroupedList */ "kVD3");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../List */ "HP5x");
/* harmony import */ var _utilities_decorators_withViewport__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utilities/decorators/withViewport */ "AiA5");
/* harmony import */ var _utilities_decorators_withViewport__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_utilities_decorators_withViewport__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utilities_groupedList_GroupedListUtility__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utilities/groupedList/GroupedListUtility */ "TUa0");
/* harmony import */ var _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./DetailsRow.styles */ "tCYI");
/* harmony import */ var _DetailsRowCheck_styles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./DetailsRowCheck.styles */ "+m1z");
/* harmony import */ var _GroupedList_GroupSpacer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../GroupedList/GroupSpacer */ "oao7");
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @uifabric/utilities */ "P2cQ");
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _uifabric_react_hooks__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @uifabric/react-hooks */ "v+W9");
















// For every group level there is a GroupSpacer added. Importing this const to have the source value in one place.



var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
var MIN_COLUMN_WIDTH = 100; // this is the global min width
var DEFAULT_RENDERED_WINDOWS_AHEAD = 2;
var DEFAULT_RENDERED_WINDOWS_BEHIND = 2;
/**
 * Hooks-based implementation of DetailsList.
 * Since many existing consumers of DetailsList expect `ref` to return a `DetailsList`,
 * this inner component handles rendering while the outer maintains compatibility.
 */
var DetailsListInner = function (props) {
    var selection = props.selection;
    var ariaLabelForListHeader = props.ariaLabelForListHeader, ariaLabelForSelectAllCheckbox = props.ariaLabelForSelectAllCheckbox, ariaLabelForSelectionColumn = props.ariaLabelForSelectionColumn, className = props.className, checkboxVisibility = props.checkboxVisibility, compact = props.compact, constrainMode = props.constrainMode, dragDropEvents = props.dragDropEvents, groups = props.groups, groupProps = props.groupProps, indentWidth = props.indentWidth, items = props.items, isPlaceholderData = props.isPlaceholderData, isHeaderVisible = props.isHeaderVisible, layoutMode = props.layoutMode, onItemInvoked = props.onItemInvoked, onItemContextMenu = props.onItemContextMenu, onColumnHeaderClick = props.onColumnHeaderClick, onColumnHeaderContextMenu = props.onColumnHeaderContextMenu, _a = props.selectionMode, selectionMode = _a === void 0 ? selection.mode : _a, selectionPreservedOnEmptyClick = props.selectionPreservedOnEmptyClick, selectionZoneProps = props.selectionZoneProps, ariaLabel = props.ariaLabel, ariaLabelForGrid = props.ariaLabelForGrid, rowElementEventMap = props.rowElementEventMap, _b = props.shouldApplyApplicationRole, shouldApplyApplicationRole = _b === void 0 ? false : _b, getKey = props.getKey, listProps = props.listProps, usePageCache = props.usePageCache, onShouldVirtualize = props.onShouldVirtualize, viewport = props.viewport, minimumPixelsForDrag = props.minimumPixelsForDrag, getGroupHeight = props.getGroupHeight, styles = props.styles, theme = props.theme, _c = props.cellStyleProps, cellStyleProps = _c === void 0 ? _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_14__["DEFAULT_CELL_STYLE_PROPS"] : _c, onRenderCheckbox = props.onRenderCheckbox, useFastIcons = props.useFastIcons, dragDropHelper = props.dragDropHelper, adjustedColumns = props.adjustedColumns, isCollapsed = props.isCollapsed, isSizing = props.isSizing, isSomeGroupExpanded = props.isSomeGroupExpanded, version = props.version, rootRef = props.rootRef, listRef = props.listRef, focusZoneRef = props.focusZoneRef, columnReorderOptions = props.columnReorderOptions, groupedListRef = props.groupedListRef, headerRef = props.headerRef, onGroupExpandStateChanged = props.onGroupExpandStateChanged, onColumnIsSizingChanged = props.onColumnIsSizingChanged, onRowDidMount = props.onRowDidMount, onRowWillUnmount = props.onRowWillUnmount, disableSelectionZone = props.disableSelectionZone, onColumnResized = props.onColumnResized, onColumnAutoResized = props.onColumnAutoResized, onToggleCollapse = props.onToggleCollapse, onActiveRowChanged = props.onActiveRowChanged, onBlur = props.onBlur, eventsToRegister = props.rowElementEventMap, onRenderMissingItem = props.onRenderMissingItem, onRenderItemColumn = props.onRenderItemColumn, getCellValueKey = props.getCellValueKey, getRowAriaLabel = props.getRowAriaLabel, getRowAriaDescribedBy = props.getRowAriaDescribedBy, checkButtonAriaLabel = props.checkButtonAriaLabel, checkboxCellClassName = props.checkboxCellClassName, useReducedRowRenderer = props.useReducedRowRenderer, enableUpdateAnimations = props.enableUpdateAnimations, enterModalSelectionOnTouch = props.enterModalSelectionOnTouch, onRenderDefaultRow = props.onRenderDefaultRow, selectionZoneRef = props.selectionZoneRef;
    var groupNestingDepth = getGroupNestingDepth(groups);
    var additionalListProps = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ renderedWindowsAhead: isSizing ? 0 : DEFAULT_RENDERED_WINDOWS_AHEAD, renderedWindowsBehind: isSizing ? 0 : DEFAULT_RENDERED_WINDOWS_BEHIND, getKey: getKey,
            version: version }, listProps);
    }, [isSizing, getKey, version, listProps]);
    var selectAllVisibility = _DetailsList_DetailsHeader_types__WEBPACK_IMPORTED_MODULE_5__["SelectAllVisibility"].none; // for SelectionMode.none
    if (selectionMode === _utilities_selection_index__WEBPACK_IMPORTED_MODULE_8__["SelectionMode"].single) {
        selectAllVisibility = _DetailsList_DetailsHeader_types__WEBPACK_IMPORTED_MODULE_5__["SelectAllVisibility"].hidden;
    }
    if (selectionMode === _utilities_selection_index__WEBPACK_IMPORTED_MODULE_8__["SelectionMode"].multiple) {
        // if isCollapsedGroupSelectVisible is false, disable select all when the list has all collapsed groups
        var isCollapsedGroupSelectVisible = groupProps && groupProps.headerProps && groupProps.headerProps.isCollapsedGroupSelectVisible;
        if (isCollapsedGroupSelectVisible === undefined) {
            isCollapsedGroupSelectVisible = true;
        }
        var isSelectAllVisible = isCollapsedGroupSelectVisible || !groups || isSomeGroupExpanded;
        selectAllVisibility = isSelectAllVisible ? _DetailsList_DetailsHeader_types__WEBPACK_IMPORTED_MODULE_5__["SelectAllVisibility"].visible : _DetailsList_DetailsHeader_types__WEBPACK_IMPORTED_MODULE_5__["SelectAllVisibility"].hidden;
    }
    if (checkboxVisibility === _DetailsList_DetailsList_types__WEBPACK_IMPORTED_MODULE_3__["CheckboxVisibility"].hidden) {
        selectAllVisibility = _DetailsList_DetailsHeader_types__WEBPACK_IMPORTED_MODULE_5__["SelectAllVisibility"].none;
    }
    var defaultOnRenderDetailsHeader = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (detailsHeaderProps) {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_DetailsList_DetailsHeader__WEBPACK_IMPORTED_MODULE_4__["DetailsHeader"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, detailsHeaderProps));
    }, []);
    var defaultOnRenderDetailsFooter = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function () {
        return null;
    }, []);
    var propsOnRenderDetailsHeader = props.onRenderDetailsHeader;
    var onRenderDetailsHeader = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
        return propsOnRenderDetailsHeader
            ? Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_17__["composeRenderFunction"])(propsOnRenderDetailsHeader, defaultOnRenderDetailsHeader)
            : defaultOnRenderDetailsHeader;
    }, [propsOnRenderDetailsHeader, defaultOnRenderDetailsHeader]);
    var propsOnRenderDetailsFooter = props.onRenderDetailsFooter;
    var onRenderDetailsFooter = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
        return propsOnRenderDetailsFooter
            ? Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_17__["composeRenderFunction"])(propsOnRenderDetailsFooter, defaultOnRenderDetailsFooter)
            : defaultOnRenderDetailsFooter;
    }, [propsOnRenderDetailsFooter, defaultOnRenderDetailsFooter]);
    var detailsFooterProps = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
        return {
            columns: adjustedColumns,
            groupNestingDepth: groupNestingDepth,
            selection: selection,
            selectionMode: selectionMode,
            viewport: viewport,
            checkboxVisibility: checkboxVisibility,
            indentWidth: indentWidth,
            cellStyleProps: cellStyleProps,
        };
    }, [
        adjustedColumns,
        groupNestingDepth,
        selection,
        selectionMode,
        viewport,
        checkboxVisibility,
        indentWidth,
        cellStyleProps,
    ]);
    var columnReorderOnDragEnd = columnReorderOptions && columnReorderOptions.onDragEnd;
    var onColumnDragEnd = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (_a, event) {
        var dropLocation = _a.dropLocation;
        var finalDropLocation = _DetailsList_DetailsList_types__WEBPACK_IMPORTED_MODULE_3__["ColumnDragEndLocation"].outside;
        if (columnReorderOnDragEnd) {
            if (dropLocation && dropLocation !== _DetailsList_DetailsList_types__WEBPACK_IMPORTED_MODULE_3__["ColumnDragEndLocation"].header) {
                finalDropLocation = dropLocation;
            }
            else if (rootRef.current) {
                var clientRect = rootRef.current.getBoundingClientRect();
                if (event.clientX > clientRect.left &&
                    event.clientX < clientRect.right &&
                    event.clientY > clientRect.top &&
                    event.clientY < clientRect.bottom) {
                    finalDropLocation = _DetailsList_DetailsList_types__WEBPACK_IMPORTED_MODULE_3__["ColumnDragEndLocation"].surface;
                }
            }
            columnReorderOnDragEnd(finalDropLocation);
        }
    }, [columnReorderOnDragEnd, rootRef]);
    var columnReorderProps = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
        if (columnReorderOptions) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, columnReorderOptions), { onColumnDragEnd: onColumnDragEnd });
        }
    }, [columnReorderOptions, onColumnDragEnd]);
    var rowCount = (isHeaderVisible ? 1 : 0) + Object(_utilities_groupedList_GroupedListUtility__WEBPACK_IMPORTED_MODULE_13__["GetGroupCount"])(groups) + (items ? items.length : 0);
    var colCount = (selectAllVisibility !== _DetailsList_DetailsHeader_types__WEBPACK_IMPORTED_MODULE_5__["SelectAllVisibility"].none ? 1 : 0) +
        (adjustedColumns ? adjustedColumns.length : 0) +
        (groups ? 1 : 0);
    var classNames = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
        return getClassNames(styles, {
            theme: theme,
            compact: compact,
            isFixed: layoutMode === _DetailsList_DetailsList_types__WEBPACK_IMPORTED_MODULE_3__["DetailsListLayoutMode"].fixedColumns,
            isHorizontalConstrained: constrainMode === _DetailsList_DetailsList_types__WEBPACK_IMPORTED_MODULE_3__["ConstrainMode"].horizontalConstrained,
            className: className,
        });
    }, [styles, theme, compact, layoutMode, constrainMode, className]);
    var onRenderDetailsGroupFooter = groupProps && groupProps.onRenderFooter;
    var finalOnRenderDetailsGroupFooter = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
        return onRenderDetailsGroupFooter
            ? function (groupFooterProps, defaultRender) {
                return onRenderDetailsGroupFooter(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, groupFooterProps), { columns: adjustedColumns, groupNestingDepth: groupNestingDepth,
                    indentWidth: indentWidth,
                    selection: selection,
                    selectionMode: selectionMode,
                    viewport: viewport,
                    checkboxVisibility: checkboxVisibility,
                    cellStyleProps: cellStyleProps }), defaultRender);
            }
            : undefined;
    }, [
        onRenderDetailsGroupFooter,
        adjustedColumns,
        groupNestingDepth,
        indentWidth,
        selection,
        selectionMode,
        viewport,
        checkboxVisibility,
        cellStyleProps,
    ]);
    var onRenderDetailsGroupHeader = groupProps && groupProps.onRenderHeader;
    var finalOnRenderDetailsGroupHeader = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
        return onRenderDetailsGroupHeader
            ? function (groupHeaderProps, defaultRender) {
                return onRenderDetailsGroupHeader(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, groupHeaderProps), { columns: adjustedColumns, groupNestingDepth: groupNestingDepth,
                    indentWidth: indentWidth,
                    selection: selection,
                    selectionMode: selectionMode,
                    viewport: viewport,
                    checkboxVisibility: checkboxVisibility,
                    cellStyleProps: cellStyleProps, ariaColSpan: adjustedColumns.length }), defaultRender);
            }
            : function (groupHeaderProps, defaultRender) {
                return defaultRender(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, groupHeaderProps), { ariaColSpan: adjustedColumns.length }));
            };
    }, [
        onRenderDetailsGroupHeader,
        adjustedColumns,
        groupNestingDepth,
        indentWidth,
        selection,
        selectionMode,
        viewport,
        checkboxVisibility,
        cellStyleProps,
    ]);
    var finalGroupProps = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, groupProps), { onRenderFooter: finalOnRenderDetailsGroupFooter, onRenderHeader: finalOnRenderDetailsGroupHeader });
    }, [groupProps, finalOnRenderDetailsGroupFooter, finalOnRenderDetailsGroupHeader]);
    var sumColumnWidths = Object(_uifabric_react_hooks__WEBPACK_IMPORTED_MODULE_18__["useConst"])(function () {
        return Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["memoizeFunction"])(function (columns) {
            var totalWidth = 0;
            columns.forEach(function (column) { return (totalWidth += column.calculatedWidth || column.minWidth); });
            return totalWidth;
        });
    });
    var collapseAllVisibility = groupProps && groupProps.collapseAllVisibility;
    var rowWidth = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
        return sumColumnWidths(adjustedColumns);
    }, [adjustedColumns, sumColumnWidths]);
    var onRenderCell = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (nestingDepth, item, index) {
        var finalOnRenderRow = props.onRenderRow
            ? Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_17__["composeRenderFunction"])(props.onRenderRow, onRenderDefaultRow)
            : onRenderDefaultRow;
        var rowProps = {
            item: item,
            itemIndex: index,
            compact: compact,
            columns: adjustedColumns,
            groupNestingDepth: nestingDepth,
            selectionMode: selectionMode,
            selection: selection,
            onDidMount: onRowDidMount,
            onWillUnmount: onRowWillUnmount,
            onRenderItemColumn: onRenderItemColumn,
            getCellValueKey: getCellValueKey,
            eventsToRegister: eventsToRegister,
            dragDropEvents: dragDropEvents,
            dragDropHelper: dragDropHelper,
            viewport: viewport,
            checkboxVisibility: checkboxVisibility,
            collapseAllVisibility: collapseAllVisibility,
            getRowAriaLabel: getRowAriaLabel,
            getRowAriaDescribedBy: getRowAriaDescribedBy,
            checkButtonAriaLabel: checkButtonAriaLabel,
            checkboxCellClassName: checkboxCellClassName,
            useReducedRowRenderer: useReducedRowRenderer,
            indentWidth: indentWidth,
            cellStyleProps: cellStyleProps,
            onRenderDetailsCheckbox: onRenderCheckbox,
            enableUpdateAnimations: enableUpdateAnimations,
            rowWidth: rowWidth,
            useFastIcons: useFastIcons,
        };
        if (!item) {
            if (onRenderMissingItem) {
                return onRenderMissingItem(index, rowProps);
            }
            return null;
        }
        return finalOnRenderRow(rowProps);
    }, [
        compact,
        adjustedColumns,
        selectionMode,
        selection,
        onRowDidMount,
        onRowWillUnmount,
        onRenderItemColumn,
        getCellValueKey,
        eventsToRegister,
        dragDropEvents,
        dragDropHelper,
        viewport,
        checkboxVisibility,
        collapseAllVisibility,
        getRowAriaLabel,
        getRowAriaDescribedBy,
        checkButtonAriaLabel,
        checkboxCellClassName,
        useReducedRowRenderer,
        indentWidth,
        cellStyleProps,
        onRenderCheckbox,
        enableUpdateAnimations,
        useFastIcons,
        onRenderDefaultRow,
        onRenderMissingItem,
        props.onRenderRow,
        rowWidth,
    ]);
    var onRenderListCell = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (nestingDepth) {
        return function (item, itemIndex) {
            return onRenderCell(nestingDepth, item, itemIndex);
        };
    }, [onRenderCell]);
    var isRightArrow = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (event) {
        return event.which === Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getRTLSafeKeyCode"])(_Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].right, theme);
    }, [theme]);
    var focusZoneProps = {
        componentRef: focusZoneRef,
        className: classNames.focusZone,
        direction: _FocusZone__WEBPACK_IMPORTED_MODULE_7__["FocusZoneDirection"].vertical,
        shouldEnterInnerZone: isRightArrow,
        onActiveElementChanged: onActiveRowChanged,
        shouldRaiseClicks: false,
        onBlur: onBlur,
    };
    var list = groups ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_GroupedList__WEBPACK_IMPORTED_MODULE_10__["GroupedList"], { focusZoneProps: focusZoneProps, componentRef: groupedListRef, groups: groups, groupProps: finalGroupProps, items: items, onRenderCell: onRenderCell, role: "presentation", selection: selection, selectionMode: checkboxVisibility !== _DetailsList_DetailsList_types__WEBPACK_IMPORTED_MODULE_3__["CheckboxVisibility"].hidden ? selectionMode : _utilities_selection_index__WEBPACK_IMPORTED_MODULE_8__["SelectionMode"].none, dragDropEvents: dragDropEvents, dragDropHelper: dragDropHelper, eventsToRegister: rowElementEventMap, listProps: additionalListProps, onGroupExpandStateChanged: onGroupExpandStateChanged, usePageCache: usePageCache, onShouldVirtualize: onShouldVirtualize, getGroupHeight: getGroupHeight, compact: compact })) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_FocusZone__WEBPACK_IMPORTED_MODULE_7__["FocusZone"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, focusZoneProps),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_List__WEBPACK_IMPORTED_MODULE_11__["List"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ ref: listRef, role: "presentation", items: items, onRenderCell: onRenderListCell(0), usePageCache: usePageCache, onShouldVirtualize: onShouldVirtualize }, additionalListProps))));
    var onHeaderKeyDown = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (ev) {
        if (ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].down) {
            if (focusZoneRef.current && focusZoneRef.current.focus()) {
                // select the first item in list after down arrow key event
                // only if nothing was selected; otherwise start with the already-selected item
                if (selection.getSelectedIndices().length === 0) {
                    selection.setIndexSelected(0, true, false);
                }
                ev.preventDefault();
                ev.stopPropagation();
            }
        }
    }, [selection, focusZoneRef]);
    var onContentKeyDown = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (ev) {
        if (ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].up && !ev.altKey) {
            if (headerRef.current && headerRef.current.focus()) {
                ev.preventDefault();
                ev.stopPropagation();
            }
        }
    }, [headerRef]);
    return (
    // If shouldApplyApplicationRole is true, role application will be applied to make arrow keys work
    // with JAWS.
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ ref: rootRef, className: classNames.root, "data-automationid": "DetailsList", "data-is-scrollable": "false", "aria-label": ariaLabel }, (shouldApplyApplicationRole ? { role: 'application' } : {})),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Utilities__WEBPACK_IMPORTED_MODULE_2__["FocusRects"], null),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { role: "grid", "aria-label": ariaLabelForGrid, "aria-rowcount": isPlaceholderData ? -1 : rowCount, "aria-colcount": colCount, "aria-readonly": "true", "aria-busy": isPlaceholderData },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { onKeyDown: onHeaderKeyDown, role: "presentation", className: classNames.headerWrapper }, isHeaderVisible &&
                onRenderDetailsHeader({
                    componentRef: headerRef,
                    selectionMode: selectionMode,
                    layoutMode: layoutMode,
                    selection: selection,
                    columns: adjustedColumns,
                    onColumnClick: onColumnHeaderClick,
                    onColumnContextMenu: onColumnHeaderContextMenu,
                    onColumnResized: onColumnResized,
                    onColumnIsSizingChanged: onColumnIsSizingChanged,
                    onColumnAutoResized: onColumnAutoResized,
                    groupNestingDepth: groupNestingDepth,
                    isAllCollapsed: isCollapsed,
                    onToggleCollapseAll: onToggleCollapse,
                    ariaLabel: ariaLabelForListHeader,
                    ariaLabelForSelectAllCheckbox: ariaLabelForSelectAllCheckbox,
                    ariaLabelForSelectionColumn: ariaLabelForSelectionColumn,
                    selectAllVisibility: selectAllVisibility,
                    collapseAllVisibility: groupProps && groupProps.collapseAllVisibility,
                    viewport: viewport,
                    columnReorderProps: columnReorderProps,
                    minimumPixelsForDrag: minimumPixelsForDrag,
                    cellStyleProps: cellStyleProps,
                    checkboxVisibility: checkboxVisibility,
                    indentWidth: indentWidth,
                    onRenderDetailsCheckbox: onRenderCheckbox,
                    rowWidth: sumColumnWidths(adjustedColumns),
                    useFastIcons: useFastIcons,
                }, onRenderDetailsHeader)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { onKeyDown: onContentKeyDown, role: "presentation", className: classNames.contentWrapper }, !disableSelectionZone ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utilities_selection_index__WEBPACK_IMPORTED_MODULE_8__["SelectionZone"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ ref: selectionZoneRef, selection: selection, selectionPreservedOnEmptyClick: selectionPreservedOnEmptyClick, selectionMode: selectionMode, onItemInvoked: onItemInvoked, onItemContextMenu: onItemContextMenu, enterModalOnTouch: enterModalSelectionOnTouch }, (selectionZoneProps || {})), list)) : (list)),
            onRenderDetailsFooter(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, detailsFooterProps)))));
};
var DetailsListBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DetailsListBase, _super);
    function DetailsListBase(props) {
        var _this = _super.call(this, props) || this;
        _this._root = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._header = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._groupedList = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._list = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._focusZone = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._selectionZone = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._onRenderRow = function (props, defaultRender) {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_DetailsList_DetailsRow__WEBPACK_IMPORTED_MODULE_6__["DetailsRow"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props));
        };
        _this._getDerivedStateFromProps = function (nextProps, previousState) {
            var _a = _this.props, checkboxVisibility = _a.checkboxVisibility, items = _a.items, setKey = _a.setKey, _b = _a.selectionMode, selectionMode = _b === void 0 ? _this._selection.mode : _b, columns = _a.columns, viewport = _a.viewport, compact = _a.compact, dragDropEvents = _a.dragDropEvents;
            var _c = (_this.props.groupProps || {}).isAllGroupsCollapsed, isAllGroupsCollapsed = _c === void 0 ? undefined : _c;
            var newViewportWidth = (nextProps.viewport && nextProps.viewport.width) || 0;
            var oldViewportWidth = (viewport && viewport.width) || 0;
            var shouldResetSelection = nextProps.setKey !== setKey || nextProps.setKey === undefined;
            var shouldForceUpdates = false;
            if (nextProps.layoutMode !== _this.props.layoutMode) {
                shouldForceUpdates = true;
            }
            var nextState = previousState;
            if (shouldResetSelection) {
                _this._initialFocusedIndex = nextProps.initialFocusedIndex;
                // reset focusedItemIndex when setKey changes
                nextState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, nextState), { focusedItemIndex: _this._initialFocusedIndex !== undefined ? _this._initialFocusedIndex : -1 });
            }
            if (!_this.props.disableSelectionZone && nextProps.items !== items) {
                _this._selection.setItems(nextProps.items, shouldResetSelection);
            }
            if (nextProps.checkboxVisibility !== checkboxVisibility ||
                nextProps.columns !== columns ||
                newViewportWidth !== oldViewportWidth ||
                nextProps.compact !== compact) {
                shouldForceUpdates = true;
            }
            nextState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, nextState), _this._adjustColumns(nextProps, nextState, true));
            if (nextProps.selectionMode !== selectionMode) {
                shouldForceUpdates = true;
            }
            if (isAllGroupsCollapsed === undefined &&
                nextProps.groupProps &&
                nextProps.groupProps.isAllGroupsCollapsed !== undefined) {
                nextState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, nextState), { isCollapsed: nextProps.groupProps.isAllGroupsCollapsed, isSomeGroupExpanded: !nextProps.groupProps.isAllGroupsCollapsed });
            }
            if (nextProps.dragDropEvents !== dragDropEvents) {
                _this._dragDropHelper && _this._dragDropHelper.dispose();
                _this._dragDropHelper = nextProps.dragDropEvents
                    ? new _utilities_dragdrop_DragDropHelper__WEBPACK_IMPORTED_MODULE_9__["DragDropHelper"]({
                        selection: _this._selection,
                        minimumPixelsForDrag: nextProps.minimumPixelsForDrag,
                    })
                    : undefined;
                shouldForceUpdates = true;
            }
            if (shouldForceUpdates) {
                nextState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, nextState), { version: {} });
            }
            return nextState;
        };
        _this._onGroupExpandStateChanged = function (isSomeGroupExpanded) {
            _this.setState({ isSomeGroupExpanded: isSomeGroupExpanded });
        };
        _this._onColumnIsSizingChanged = function (column, isSizing) {
            _this.setState({ isSizing: isSizing });
        };
        _this._onRowDidMount = function (row) {
            var _a = row.props, item = _a.item, itemIndex = _a.itemIndex;
            var itemKey = _this._getItemKey(item, itemIndex);
            _this._activeRows[itemKey] = row; // this is used for column auto resize
            _this._setFocusToRowIfPending(row);
            var onRowDidMount = _this.props.onRowDidMount;
            if (onRowDidMount) {
                onRowDidMount(item, itemIndex);
            }
        };
        _this._onRowWillUnmount = function (row) {
            var onRowWillUnmount = _this.props.onRowWillUnmount;
            var _a = row.props, item = _a.item, itemIndex = _a.itemIndex;
            var itemKey = _this._getItemKey(item, itemIndex);
            delete _this._activeRows[itemKey];
            if (onRowWillUnmount) {
                onRowWillUnmount(item, itemIndex);
            }
        };
        _this._onToggleCollapse = function (collapsed) {
            _this.setState({
                isCollapsed: collapsed,
            });
            if (_this._groupedList.current) {
                _this._groupedList.current.toggleCollapseAll(collapsed);
            }
        };
        _this._onColumnResized = function (resizingColumn, newWidth, resizingColumnIndex) {
            var newCalculatedWidth = Math.max(resizingColumn.minWidth || MIN_COLUMN_WIDTH, newWidth);
            if (_this.props.onColumnResize) {
                _this.props.onColumnResize(resizingColumn, newCalculatedWidth, resizingColumnIndex);
            }
            _this._rememberCalculatedWidth(resizingColumn, newCalculatedWidth);
            _this.setState(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this._adjustColumns(_this.props, _this.state, true, resizingColumnIndex)), { version: {} }));
        };
        /**
         * Callback function when double clicked on the details header column resizer
         * which will measure the column cells of all the active rows and resize the
         * column to the max cell width.
         *
         * @param column - double clicked column definition
         * @param columnIndex - double clicked column index
         * TODO: min width 100 should be changed to const value and should be consistent with the
         * value used on _onSizerMove method in DetailsHeader
         */
        _this._onColumnAutoResized = function (column, columnIndex) {
            var max = 0;
            var count = 0;
            var totalCount = Object.keys(_this._activeRows).length;
            for (var key in _this._activeRows) {
                if (_this._activeRows.hasOwnProperty(key)) {
                    var currentRow = _this._activeRows[key];
                    currentRow.measureCell(columnIndex, function (width) {
                        max = Math.max(max, width);
                        count++;
                        if (count === totalCount) {
                            _this._onColumnResized(column, max, columnIndex);
                        }
                    });
                }
            }
        };
        /**
         * Call back function when an element in FocusZone becomes active. It will translate it into item
         * and call onActiveItemChanged callback if specified.
         *
         * @param row - element that became active in Focus Zone
         * @param focus - event from Focus Zone
         */
        _this._onActiveRowChanged = function (el, ev) {
            var _a = _this.props, items = _a.items, onActiveItemChanged = _a.onActiveItemChanged;
            if (!el) {
                return;
            }
            // Check and assign index only if the event was raised from any DetailsRow element
            if (el.getAttribute('data-item-index')) {
                var index = Number(el.getAttribute('data-item-index'));
                if (index >= 0) {
                    if (onActiveItemChanged) {
                        onActiveItemChanged(items[index], index, ev);
                    }
                    _this.setState({
                        focusedItemIndex: index,
                    });
                }
            }
        };
        _this._onBlur = function (event) {
            _this.setState({
                focusedItemIndex: -1,
            });
        };
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["initializeComponentRef"])(_this);
        _this._async = new _Utilities__WEBPACK_IMPORTED_MODULE_2__["Async"](_this);
        _this._activeRows = {};
        _this._columnOverrides = {};
        _this.state = {
            focusedItemIndex: -1,
            lastWidth: 0,
            adjustedColumns: _this._getAdjustedColumns(props, undefined),
            isSizing: false,
            isCollapsed: props.groupProps && props.groupProps.isAllGroupsCollapsed,
            isSomeGroupExpanded: props.groupProps && !props.groupProps.isAllGroupsCollapsed,
            version: {},
            getDerivedStateFromProps: _this._getDerivedStateFromProps,
        };
        _this._selection =
            props.selection ||
                new _utilities_selection_index__WEBPACK_IMPORTED_MODULE_8__["Selection"]({
                    onSelectionChanged: undefined,
                    getKey: props.getKey,
                    selectionMode: props.selectionMode,
                });
        if (!_this.props.disableSelectionZone) {
            _this._selection.setItems(props.items, false);
        }
        _this._dragDropHelper = props.dragDropEvents
            ? new _utilities_dragdrop_DragDropHelper__WEBPACK_IMPORTED_MODULE_9__["DragDropHelper"]({
                selection: _this._selection,
                minimumPixelsForDrag: props.minimumPixelsForDrag,
            })
            : undefined;
        _this._initialFocusedIndex = props.initialFocusedIndex;
        return _this;
    }
    DetailsListBase.getDerivedStateFromProps = function (nextProps, previousState) {
        return previousState.getDerivedStateFromProps(nextProps, previousState);
    };
    DetailsListBase.prototype.scrollToIndex = function (index, measureItem, scrollToMode) {
        this._list.current && this._list.current.scrollToIndex(index, measureItem, scrollToMode);
        this._groupedList.current && this._groupedList.current.scrollToIndex(index, measureItem, scrollToMode);
    };
    DetailsListBase.prototype.focusIndex = function (index, forceIntoFirstElement, measureItem, scrollToMode) {
        if (forceIntoFirstElement === void 0) { forceIntoFirstElement = false; }
        var item = this.props.items[index];
        if (item) {
            this.scrollToIndex(index, measureItem, scrollToMode);
            var itemKey = this._getItemKey(item, index);
            var row = this._activeRows[itemKey];
            if (row) {
                this._setFocusToRow(row, forceIntoFirstElement);
            }
        }
    };
    DetailsListBase.prototype.getStartItemIndexInView = function () {
        if (this._list && this._list.current) {
            return this._list.current.getStartItemIndexInView();
        }
        else if (this._groupedList && this._groupedList.current) {
            return this._groupedList.current.getStartItemIndexInView();
        }
        return 0;
    };
    DetailsListBase.prototype.componentWillUnmount = function () {
        if (this._dragDropHelper) {
            // TODO If the DragDropHelper was passed via props, this will dispose it, which is incorrect behavior.
            this._dragDropHelper.dispose();
        }
        this._async.dispose();
    };
    DetailsListBase.prototype.componentDidUpdate = function (prevProps, prevState) {
        this._notifyColumnsResized();
        if (this._initialFocusedIndex !== undefined) {
            var item = this.props.items[this._initialFocusedIndex];
            if (item) {
                var itemKey = this._getItemKey(item, this._initialFocusedIndex);
                var row = this._activeRows[itemKey];
                if (row) {
                    this._setFocusToRowIfPending(row);
                }
            }
        }
        if (this.props.items !== prevProps.items &&
            this.props.items.length > 0 &&
            this.state.focusedItemIndex !== -1 &&
            !Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["elementContains"])(this._root.current, document.activeElement, false)) {
            // Item set has changed and previously-focused item is gone.
            // Set focus to item at index of previously-focused item if it is in range,
            // else set focus to the last item.
            var index = this.state.focusedItemIndex < this.props.items.length
                ? this.state.focusedItemIndex
                : this.props.items.length - 1;
            var item = this.props.items[index];
            var itemKey = this._getItemKey(item, this.state.focusedItemIndex);
            var row = this._activeRows[itemKey];
            if (row) {
                this._setFocusToRow(row);
            }
            else {
                this._initialFocusedIndex = index;
            }
        }
        if (this.props.onDidUpdate) {
            this.props.onDidUpdate(this);
        }
    };
    DetailsListBase.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](DetailsListInner, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props, this.state, { selection: this._selection, dragDropHelper: this._dragDropHelper, rootRef: this._root, listRef: this._list, groupedListRef: this._groupedList, focusZoneRef: this._focusZone, headerRef: this._header, selectionZoneRef: this._selectionZone, onGroupExpandStateChanged: this._onGroupExpandStateChanged, onColumnIsSizingChanged: this._onColumnIsSizingChanged, onRowDidMount: this._onRowDidMount, onRowWillUnmount: this._onRowWillUnmount, onColumnResized: this._onColumnResized, onColumnAutoResized: this._onColumnAutoResized, onToggleCollapse: this._onToggleCollapse, onActiveRowChanged: this._onActiveRowChanged, onBlur: this._onBlur, onRenderDefaultRow: this._onRenderRow })));
    };
    DetailsListBase.prototype.forceUpdate = function () {
        _super.prototype.forceUpdate.call(this);
        this._forceListUpdates();
    };
    DetailsListBase.prototype._getGroupNestingDepth = function () {
        var groups = this.props.groups;
        var level = 0;
        var groupsInLevel = groups;
        while (groupsInLevel && groupsInLevel.length > 0) {
            level++;
            groupsInLevel = groupsInLevel[0].children;
        }
        return level;
    };
    DetailsListBase.prototype._setFocusToRowIfPending = function (row) {
        var itemIndex = row.props.itemIndex;
        if (this._initialFocusedIndex !== undefined && itemIndex === this._initialFocusedIndex) {
            this._setFocusToRow(row);
            delete this._initialFocusedIndex;
        }
    };
    DetailsListBase.prototype._setFocusToRow = function (row, forceIntoFirstElement) {
        if (forceIntoFirstElement === void 0) { forceIntoFirstElement = false; }
        if (this._selectionZone.current) {
            this._selectionZone.current.ignoreNextFocus();
        }
        this._async.setTimeout(function () {
            row.focus(forceIntoFirstElement);
        }, 0);
    };
    DetailsListBase.prototype._forceListUpdates = function () {
        if (this._groupedList.current) {
            this._groupedList.current.forceUpdate();
        }
        if (this._list.current) {
            this._list.current.forceUpdate();
        }
    };
    DetailsListBase.prototype._notifyColumnsResized = function () {
        this.state.adjustedColumns.forEach(function (column) {
            if (column.onColumnResize) {
                column.onColumnResize(column.currentWidth);
            }
        });
    };
    DetailsListBase.prototype._adjustColumns = function (newProps, previousState, forceUpdate, resizingColumnIndex) {
        var adjustedColumns = this._getAdjustedColumns(newProps, previousState, forceUpdate, resizingColumnIndex);
        var viewport = this.props.viewport;
        var viewportWidth = viewport && viewport.width ? viewport.width : 0;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, previousState), { adjustedColumns: adjustedColumns, lastWidth: viewportWidth });
    };
    /** Returns adjusted columns, given the viewport size and layout mode. */
    DetailsListBase.prototype._getAdjustedColumns = function (newProps, previousState, forceUpdate, resizingColumnIndex) {
        var _this = this;
        var newItems = newProps.items, layoutMode = newProps.layoutMode, selectionMode = newProps.selectionMode, viewport = newProps.viewport;
        var viewportWidth = viewport && viewport.width ? viewport.width : 0;
        var newColumns = newProps.columns;
        var columns = this.props ? this.props.columns : [];
        var lastWidth = previousState ? previousState.lastWidth : -1;
        var lastSelectionMode = previousState ? previousState.lastSelectionMode : undefined;
        if (!forceUpdate &&
            lastWidth === viewportWidth &&
            lastSelectionMode === selectionMode &&
            (!columns || newColumns === columns)) {
            return newColumns || [];
        }
        newColumns = newColumns || buildColumns(newItems, true);
        var adjustedColumns;
        if (layoutMode === _DetailsList_DetailsList_types__WEBPACK_IMPORTED_MODULE_3__["DetailsListLayoutMode"].fixedColumns) {
            adjustedColumns = this._getFixedColumns(newColumns);
            // Preserve adjusted column calculated widths.
            adjustedColumns.forEach(function (column) {
                _this._rememberCalculatedWidth(column, column.calculatedWidth);
            });
        }
        else {
            if (resizingColumnIndex !== undefined) {
                adjustedColumns = this._getJustifiedColumnsAfterResize(newColumns, viewportWidth, newProps, resizingColumnIndex);
            }
            else {
                adjustedColumns = this._getJustifiedColumns(newColumns, viewportWidth, newProps, 0);
            }
            adjustedColumns.forEach(function (column) {
                _this._getColumnOverride(column.key).currentWidth = column.calculatedWidth;
            });
        }
        return adjustedColumns;
    };
    /** Builds a set of columns based on the given columns mixed with the current overrides. */
    DetailsListBase.prototype._getFixedColumns = function (newColumns) {
        var _this = this;
        return newColumns.map(function (column) {
            var newColumn = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, column), _this._columnOverrides[column.key]);
            if (!newColumn.calculatedWidth) {
                newColumn.calculatedWidth = newColumn.maxWidth || newColumn.minWidth || MIN_COLUMN_WIDTH;
            }
            return newColumn;
        });
    };
    DetailsListBase.prototype._getJustifiedColumnsAfterResize = function (newColumns, viewportWidth, props, resizingColumnIndex) {
        var _this = this;
        var fixedColumns = newColumns.slice(0, resizingColumnIndex);
        fixedColumns.forEach(function (column) { return (column.calculatedWidth = _this._getColumnOverride(column.key).currentWidth); });
        var fixedWidth = fixedColumns.reduce(function (total, column, i) { return total + getPaddedWidth(column, i === 0, props); }, 0);
        var remainingColumns = newColumns.slice(resizingColumnIndex);
        var remainingWidth = viewportWidth - fixedWidth;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(fixedColumns, this._getJustifiedColumns(remainingColumns, remainingWidth, props, resizingColumnIndex));
    };
    /** Builds a set of columns to fix within the viewport width. */
    DetailsListBase.prototype._getJustifiedColumns = function (newColumns, viewportWidth, props, firstIndex) {
        var _this = this;
        var _a = props.selectionMode, selectionMode = _a === void 0 ? this._selection.mode : _a, checkboxVisibility = props.checkboxVisibility;
        var rowCheckWidth = selectionMode !== _utilities_selection_index__WEBPACK_IMPORTED_MODULE_8__["SelectionMode"].none && checkboxVisibility !== _DetailsList_DetailsList_types__WEBPACK_IMPORTED_MODULE_3__["CheckboxVisibility"].hidden ? _DetailsRowCheck_styles__WEBPACK_IMPORTED_MODULE_15__["CHECK_CELL_WIDTH"] : 0;
        var groupExpandWidth = this._getGroupNestingDepth() * _GroupedList_GroupSpacer__WEBPACK_IMPORTED_MODULE_16__["SPACER_WIDTH"];
        var totalWidth = 0; // offset because we have one less inner padding.
        var availableWidth = viewportWidth - (rowCheckWidth + groupExpandWidth);
        var adjustedColumns = newColumns.map(function (column, i) {
            var newColumn = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, column), { calculatedWidth: column.minWidth || MIN_COLUMN_WIDTH }), _this._columnOverrides[column.key]);
            var isFirst = i + firstIndex === 0;
            totalWidth += getPaddedWidth(newColumn, isFirst, props);
            return newColumn;
        });
        var lastIndex = adjustedColumns.length - 1;
        // Shrink or remove collapsable columns.
        while (lastIndex > 0 && totalWidth > availableWidth) {
            var column = adjustedColumns[lastIndex];
            var minWidth = column.minWidth || MIN_COLUMN_WIDTH;
            var overflowWidth = totalWidth - availableWidth;
            // eslint-disable-next-line deprecation/deprecation
            if (column.calculatedWidth - minWidth >= overflowWidth || !(column.isCollapsible || column.isCollapsable)) {
                var originalWidth = column.calculatedWidth;
                column.calculatedWidth = Math.max(column.calculatedWidth - overflowWidth, minWidth);
                totalWidth -= originalWidth - column.calculatedWidth;
            }
            else {
                totalWidth -= getPaddedWidth(column, false, props);
                adjustedColumns.splice(lastIndex, 1);
            }
            lastIndex--;
        }
        // Then expand columns starting at the beginning, until we've filled the width.
        for (var i = 0; i < adjustedColumns.length && totalWidth < availableWidth; i++) {
            var column = adjustedColumns[i];
            var isLast = i === adjustedColumns.length - 1;
            var overrides = this._columnOverrides[column.key];
            if (overrides && overrides.calculatedWidth && !isLast) {
                continue;
            }
            var spaceLeft = availableWidth - totalWidth;
            var increment = void 0;
            if (isLast) {
                increment = spaceLeft;
            }
            else {
                var maxWidth = column.maxWidth;
                var minWidth = column.minWidth || maxWidth || MIN_COLUMN_WIDTH;
                increment = maxWidth ? Math.min(spaceLeft, maxWidth - minWidth) : spaceLeft;
            }
            column.calculatedWidth = column.calculatedWidth + increment;
            totalWidth += increment;
        }
        return adjustedColumns;
    };
    DetailsListBase.prototype._rememberCalculatedWidth = function (column, newCalculatedWidth) {
        var overrides = this._getColumnOverride(column.key);
        overrides.calculatedWidth = newCalculatedWidth;
        overrides.currentWidth = newCalculatedWidth;
    };
    DetailsListBase.prototype._getColumnOverride = function (key) {
        return (this._columnOverrides[key] = this._columnOverrides[key] || {});
    };
    DetailsListBase.prototype._getItemKey = function (item, itemIndex) {
        var getKey = this.props.getKey;
        var itemKey = undefined;
        if (item) {
            itemKey = item.key;
        }
        if (getKey) {
            itemKey = getKey(item, itemIndex);
        }
        if (!itemKey) {
            itemKey = itemIndex;
        }
        return itemKey;
    };
    DetailsListBase.defaultProps = {
        layoutMode: _DetailsList_DetailsList_types__WEBPACK_IMPORTED_MODULE_3__["DetailsListLayoutMode"].justified,
        selectionMode: _utilities_selection_index__WEBPACK_IMPORTED_MODULE_8__["SelectionMode"].multiple,
        constrainMode: _DetailsList_DetailsList_types__WEBPACK_IMPORTED_MODULE_3__["ConstrainMode"].horizontalConstrained,
        checkboxVisibility: _DetailsList_DetailsList_types__WEBPACK_IMPORTED_MODULE_3__["CheckboxVisibility"].onHover,
        isHeaderVisible: true,
        compact: false,
        useFastIcons: true,
    };
    DetailsListBase = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _utilities_decorators_withViewport__WEBPACK_IMPORTED_MODULE_12__["withViewport"]
    ], DetailsListBase);
    return DetailsListBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

function buildColumns(items, canResizeColumns, onColumnClick, sortedColumnKey, isSortedDescending, groupedColumnKey, isMultiline) {
    var columns = [];
    if (items && items.length) {
        var firstItem = items[0];
        for (var propName in firstItem) {
            if (firstItem.hasOwnProperty(propName)) {
                columns.push({
                    key: propName,
                    name: propName,
                    fieldName: propName,
                    minWidth: MIN_COLUMN_WIDTH,
                    maxWidth: 300,
                    isCollapsable: !!columns.length,
                    isCollapsible: !!columns.length,
                    isMultiline: isMultiline === undefined ? false : isMultiline,
                    isSorted: sortedColumnKey === propName,
                    isSortedDescending: !!isSortedDescending,
                    isRowHeader: false,
                    columnActionsMode: _DetailsList_DetailsList_types__WEBPACK_IMPORTED_MODULE_3__["ColumnActionsMode"].clickable,
                    isResizable: canResizeColumns,
                    onColumnClick: onColumnClick,
                    isGrouped: groupedColumnKey === propName,
                });
            }
        }
    }
    return columns;
}
function getPaddedWidth(column, isFirst, props) {
    var _a = props.cellStyleProps, cellStyleProps = _a === void 0 ? _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_14__["DEFAULT_CELL_STYLE_PROPS"] : _a;
    return (column.calculatedWidth +
        cellStyleProps.cellLeftPadding +
        cellStyleProps.cellRightPadding +
        (column.isPadded ? cellStyleProps.cellExtraRightPadding : 0));
}
function getGroupNestingDepth(groups) {
    var level = 0;
    var groupsInLevel = groups;
    while (groupsInLevel && groupsInLevel.length > 0) {
        level++;
        groupsInLevel = groupsInLevel[0].children;
    }
    return level;
}
//# sourceMappingURL=DetailsList.base.js.map

/***/ }),

/***/ "23Sn":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Dialog/Dialog.js ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: Dialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return Dialog; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _Dialog_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dialog.base */ "FaVw");
/* harmony import */ var _Dialog_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dialog.styles */ "t04b");



var Dialog = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_Dialog_base__WEBPACK_IMPORTED_MODULE_1__["DialogBase"], _Dialog_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, { scope: 'Dialog' });
Dialog.displayName = 'Dialog';
//# sourceMappingURL=Dialog.js.map

/***/ }),

/***/ "2Xb7":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/utilities/selection/interfaces.js ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: SELECTION_CHANGE, SelectionDirection, SelectionMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/utilities */ "P2cQ");
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SELECTION_CHANGE", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["SELECTION_CHANGE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionDirection", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["SelectionDirection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionMode", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["SelectionMode"]; });


//# sourceMappingURL=interfaces.js.map

/***/ }),

/***/ "2uJf":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Modal/index.js ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: Modal, ModalBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal */ "PXOV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return _Modal__WEBPACK_IMPORTED_MODULE_0__["Modal"]; });

/* harmony import */ var _Modal_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal.base */ "+MEO");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalBase", function() { return _Modal_base__WEBPACK_IMPORTED_MODULE_1__["ModalBase"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "33JT":
/*!***********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/react-hooks@7.13.9_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/react-hooks/lib/version.js ***!
  \***********************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uifabric_set_version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/set-version */ "Eyzw");
// Do not modify this file; it is generated as part of publish.
// The checked in version is a placeholder only and will not be updated.

Object(_uifabric_set_version__WEBPACK_IMPORTED_MODULE_0__["setVersion"])('@uifabric/react-hooks', '7.13.8');
//# sourceMappingURL=version.js.map

/***/ }),

/***/ "3OK7":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupShowAll.js ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: GroupShowAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupShowAll", function() { return GroupShowAll; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _GroupShowAll_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GroupShowAll.styles */ "K2Cj");
/* harmony import */ var _GroupShowAll_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GroupShowAll.base */ "9/iP");



var GroupShowAll = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_GroupShowAll_base__WEBPACK_IMPORTED_MODULE_2__["GroupShowAllBase"], _GroupShowAll_styles__WEBPACK_IMPORTED_MODULE_1__["getStyles"], undefined, { scope: 'GroupShowAll' });
//# sourceMappingURL=GroupShowAll.js.map

/***/ }),

/***/ "3WSi":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/FocusTrapZone/index.js ***!
  \*************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/components/FocusTrapZone/index.js


/***/ }),

/***/ "428q":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Dialog/DialogFooter.base.js ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: DialogFooterBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogFooterBase", function() { return DialogFooterBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");



var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
var DialogFooterBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DialogFooterBase, _super);
    function DialogFooterBase(props) {
        var _this = _super.call(this, props) || this;
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["initializeComponentRef"])(_this);
        return _this;
    }
    DialogFooterBase.prototype.render = function () {
        var _a = this.props, className = _a.className, styles = _a.styles, theme = _a.theme;
        this._classNames = getClassNames(styles, {
            theme: theme,
            className: className,
        });
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this._classNames.actions },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this._classNames.actionsRight }, this._renderChildrenAsActions())));
    };
    DialogFooterBase.prototype._renderChildrenAsActions = function () {
        var _this = this;
        return react__WEBPACK_IMPORTED_MODULE_1__["Children"].map(this.props.children, function (child) {
            return child ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: _this._classNames.action }, child) : null;
        });
    };
    return DialogFooterBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=DialogFooter.base.js.map

/***/ }),

/***/ "56LG":
/*!***********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Icon.js ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/./lib/Icon.js
var pkg = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
module.exports = pkg.workaround_Icon;

/***/ }),

/***/ "5ADk":
/*!***********************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/css-loader@3.2.1_webpack@4.44.2/node_modules/css-loader/dist/runtime/api.js ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "5GBt":
/*!*************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/react-hooks@7.13.9_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/react-hooks/lib/useTarget.js ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: useTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTarget", function() { return useTarget; });
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/utilities */ "P2cQ");
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fluentui_react_window_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react-window-provider */ "uuEG");



/**
 * Hook to calculate and cache the target element specified by the given target attribute,
 * as well as the target element's (or host element's) parent window
 * @param target- Target selector passed to the component as a property, describing the element that
 * the callout should target
 * @param hostElement- The callout's host element, used for determining the parent window.
 */
function useTarget(target, hostElement) {
    var _a;
    var previousTargetProp = react__WEBPACK_IMPORTED_MODULE_1__["useRef"]();
    var targetRef = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](null);
    /**
     * Stores an instance of Window, used to check
     * for server side rendering and if focus was lost.
     */
    var targetWindow = Object(_fluentui_react_window_provider__WEBPACK_IMPORTED_MODULE_2__["useWindow"])();
    // If the target element changed, find the new one. If we are tracking
    // target with class name, always find element because we do not know if
    // fabric has rendered a new element and disposed the old element.
    if (!target || target !== previousTargetProp.current || typeof target === 'string') {
        var currentElement = (_a = hostElement) === null || _a === void 0 ? void 0 : _a.current;
        if (target) {
            if (typeof target === 'string') {
                var currentDoc = Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["getDocument"])(currentElement);
                targetRef.current = currentDoc ? currentDoc.querySelector(target) : null;
            }
            else if ('stopPropagation' in target) {
                targetRef.current = target;
            }
            else if ('getBoundingClientRect' in target) {
                targetRef.current = target;
            }
            else if ('current' in target) {
                targetRef.current = target.current;
            }
            else {
                targetRef.current = target;
            }
        }
        previousTargetProp.current = target;
    }
    return [targetRef, targetWindow];
}
//# sourceMappingURL=useTarget.js.map

/***/ }),

/***/ "5qgq":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/utilities/decorators/withResponsiveMode.js ***!
  \**********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/./lib/utilities/decorators/withResponsiveMode.js
var pkg = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
module.exports = pkg.workaround_withResponsiveMode;

/***/ }),

/***/ "5xuA":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Dialog/DialogFooter.js ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: DialogFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogFooter", function() { return DialogFooter; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _DialogFooter_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DialogFooter.base */ "428q");
/* harmony import */ var _DialogFooter_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DialogFooter.styles */ "A7zU");



var DialogFooter = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_DialogFooter_base__WEBPACK_IMPORTED_MODULE_1__["DialogFooterBase"], _DialogFooter_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, { scope: 'DialogFooter' });
//# sourceMappingURL=DialogFooter.js.map

/***/ }),

/***/ "6bbY":
/*!********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Checkbox/index.js ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: Checkbox, CheckboxBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Checkbox */ "u2nG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _Checkbox__WEBPACK_IMPORTED_MODULE_0__["Checkbox"]; });

/* harmony import */ var _Checkbox_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Checkbox.base */ "ElRa");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxBase", function() { return _Checkbox_base__WEBPACK_IMPORTED_MODULE_1__["CheckboxBase"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "7OcI":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/utilities/keytips/IKeytipTransitionKey.js ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: transitionKeysAreEqual, transitionKeysContain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transitionKeysAreEqual", function() { return transitionKeysAreEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transitionKeysContain", function() { return transitionKeysContain; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");

/**
 * Tests for equality between two IKeytipTransitionKeys.
 *
 * @param key1 - First IKeytipTransitionKey.
 * @param key2 - Second IKeytipTransitionKey.
 * @returns T/F if the transition keys are equal.
 */
function transitionKeysAreEqual(key1, key2) {
    if (key1.key !== key2.key) {
        return false;
    }
    var mod1 = key1.modifierKeys;
    var mod2 = key2.modifierKeys;
    if ((!mod1 && mod2) || (mod1 && !mod2)) {
        // Not equal if one modifier is defined and the other isn't
        return false;
    }
    if (mod1 && mod2) {
        if (mod1.length !== mod2.length) {
            return false;
        }
        // Sort both arrays
        mod1 = mod1.sort();
        mod2 = mod2.sort();
        for (var i = 0; i < mod1.length; i++) {
            if (mod1[i] !== mod2[i]) {
                return false;
            }
        }
    }
    return true;
}
/**
 * Tests if 'key' is present in 'keys'.
 *
 * @param keys - Array of IKeytipTransitionKey.
 * @param key - IKeytipTransitionKey to find in 'keys'.
 * @returns T/F if 'keys' contains 'key'.
 */
function transitionKeysContain(keys, key) {
    return !!Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["find"])(keys, function (transitionKey) {
        return transitionKeysAreEqual(transitionKey, key);
    });
}
//# sourceMappingURL=IKeytipTransitionKey.js.map

/***/ }),

/***/ "7YZ5":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/DetailsList/index.js ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: SELECTION_CHANGE, SelectionDirection, SelectionMode, Selection, SelectionZone, CollapseAllVisibility, DetailsHeader, DetailsHeaderBase, SelectAllVisibility, DetailsList, DetailsListBase, buildColumns, ColumnActionsMode, ConstrainMode, ColumnDragEndLocation, DetailsListLayoutMode, CheckboxVisibility, DetailsRow, DetailsRowBase, DetailsRowGlobalClassNames, DEFAULT_CELL_STYLE_PROPS, DEFAULT_ROW_HEIGHTS, getDetailsRowStyles, DetailsRowCheck, DetailsRowFields, DetailsColumnBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_selection_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/selection/index */ "v+17");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SELECTION_CHANGE", function() { return _utilities_selection_index__WEBPACK_IMPORTED_MODULE_0__["SELECTION_CHANGE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionDirection", function() { return _utilities_selection_index__WEBPACK_IMPORTED_MODULE_0__["SelectionDirection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionMode", function() { return _utilities_selection_index__WEBPACK_IMPORTED_MODULE_0__["SelectionMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Selection", function() { return _utilities_selection_index__WEBPACK_IMPORTED_MODULE_0__["Selection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionZone", function() { return _utilities_selection_index__WEBPACK_IMPORTED_MODULE_0__["SelectionZone"]; });

/* harmony import */ var _GroupedList_GroupedList_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../GroupedList/GroupedList.types */ "MnMY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollapseAllVisibility", function() { return _GroupedList_GroupedList_types__WEBPACK_IMPORTED_MODULE_1__["CollapseAllVisibility"]; });

/* harmony import */ var _DetailsHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetailsHeader */ "tApQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsHeader", function() { return _DetailsHeader__WEBPACK_IMPORTED_MODULE_2__["DetailsHeader"]; });

/* harmony import */ var _DetailsHeader_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DetailsHeader.base */ "surb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsHeaderBase", function() { return _DetailsHeader_base__WEBPACK_IMPORTED_MODULE_3__["DetailsHeaderBase"]; });

/* harmony import */ var _DetailsHeader_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DetailsHeader.types */ "9ehK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectAllVisibility", function() { return _DetailsHeader_types__WEBPACK_IMPORTED_MODULE_4__["SelectAllVisibility"]; });

/* harmony import */ var _DetailsList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DetailsList */ "WEXx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsList", function() { return _DetailsList__WEBPACK_IMPORTED_MODULE_5__["DetailsList"]; });

/* harmony import */ var _DetailsList_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DetailsList.base */ "1xj0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsListBase", function() { return _DetailsList_base__WEBPACK_IMPORTED_MODULE_6__["DetailsListBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildColumns", function() { return _DetailsList_base__WEBPACK_IMPORTED_MODULE_6__["buildColumns"]; });

/* harmony import */ var _DetailsList_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DetailsList.types */ "ddaB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColumnActionsMode", function() { return _DetailsList_types__WEBPACK_IMPORTED_MODULE_7__["ColumnActionsMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConstrainMode", function() { return _DetailsList_types__WEBPACK_IMPORTED_MODULE_7__["ConstrainMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColumnDragEndLocation", function() { return _DetailsList_types__WEBPACK_IMPORTED_MODULE_7__["ColumnDragEndLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsListLayoutMode", function() { return _DetailsList_types__WEBPACK_IMPORTED_MODULE_7__["DetailsListLayoutMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxVisibility", function() { return _DetailsList_types__WEBPACK_IMPORTED_MODULE_7__["CheckboxVisibility"]; });

/* harmony import */ var _DetailsRow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DetailsRow */ "wqXl");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsRow", function() { return _DetailsRow__WEBPACK_IMPORTED_MODULE_8__["DetailsRow"]; });

/* harmony import */ var _DetailsRow_base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DetailsRow.base */ "DsUK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsRowBase", function() { return _DetailsRow_base__WEBPACK_IMPORTED_MODULE_9__["DetailsRowBase"]; });

/* harmony import */ var _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DetailsRow.styles */ "tCYI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsRowGlobalClassNames", function() { return _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_10__["DetailsRowGlobalClassNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CELL_STYLE_PROPS", function() { return _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_10__["DEFAULT_CELL_STYLE_PROPS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_ROW_HEIGHTS", function() { return _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_10__["DEFAULT_ROW_HEIGHTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDetailsRowStyles", function() { return _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_10__["getDetailsRowStyles"]; });

/* harmony import */ var _DetailsRowCheck__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./DetailsRowCheck */ "jkXB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsRowCheck", function() { return _DetailsRowCheck__WEBPACK_IMPORTED_MODULE_11__["DetailsRowCheck"]; });

/* harmony import */ var _DetailsRowFields__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./DetailsRowFields */ "r2Go");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsRowFields", function() { return _DetailsRowFields__WEBPACK_IMPORTED_MODULE_12__["DetailsRowFields"]; });

/* harmony import */ var _DetailsColumn_base__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./DetailsColumn.base */ "TRok");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsColumnBase", function() { return _DetailsColumn_base__WEBPACK_IMPORTED_MODULE_13__["DetailsColumnBase"]; });















//# sourceMappingURL=index.js.map

/***/ }),

/***/ "9/iP":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupShowAll.base.js ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: GroupShowAllBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupShowAllBase", function() { return GroupShowAllBase; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Link */ "F3Wv");
/* harmony import */ var _GroupSpacer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GroupSpacer */ "oao7");





var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["classNamesFunction"])();
var GroupShowAllBase = function (props) {
    var group = props.group, groupLevel = props.groupLevel, _a = props.showAllLinkText, showAllLinkText = _a === void 0 ? 'Show All' : _a, styles = props.styles, theme = props.theme, onToggleSummarize = props.onToggleSummarize;
    var classNames = getClassNames(styles, { theme: theme });
    var memoizedOnClick = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (ev) {
        onToggleSummarize(group);
        ev.stopPropagation();
        ev.preventDefault();
    }, [onToggleSummarize, group]);
    if (group) {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: classNames.root },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_GroupSpacer__WEBPACK_IMPORTED_MODULE_3__["GroupSpacer"], { count: groupLevel }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Link__WEBPACK_IMPORTED_MODULE_2__["Link"], { onClick: memoizedOnClick }, showAllLinkText)));
    }
    return null;
};
//# sourceMappingURL=GroupShowAll.base.js.map

/***/ }),

/***/ "9ehK":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsHeader.types.js ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: SelectAllVisibility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectAllVisibility", function() { return SelectAllVisibility; });
/**
 * {@docCategory DetailsList}
 */
var SelectAllVisibility;
(function (SelectAllVisibility) {
    SelectAllVisibility[SelectAllVisibility["none"] = 0] = "none";
    SelectAllVisibility[SelectAllVisibility["hidden"] = 1] = "hidden";
    SelectAllVisibility[SelectAllVisibility["visible"] = 2] = "visible";
})(SelectAllVisibility || (SelectAllVisibility = {}));
//# sourceMappingURL=DetailsHeader.types.js.map

/***/ }),

/***/ "9jil":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupedList.styles.js ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "PL71");

var GlobalClassNames = {
    root: 'ms-GroupedList',
    compact: 'ms-GroupedList--Compact',
    group: 'ms-GroupedList-group',
    link: 'ms-Link',
    listCell: 'ms-List-cell',
};
var beziers = {
    easeInOutSine: 'cubic-bezier(0.445, 0.050, 0.550, 0.950)',
};
var getStyles = function (props) {
    var _a, _b;
    var theme = props.theme, className = props.className, compact = props.compact;
    var palette = theme.palette;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
    return {
        root: [
            classNames.root,
            theme.fonts.small,
            {
                position: 'relative',
                selectors: (_a = {},
                    _a["." + classNames.listCell] = {
                        minHeight: 38,
                    },
                    _a),
            },
            compact && [
                classNames.compact,
                {
                    selectors: (_b = {},
                        _b["." + classNames.listCell] = {
                            minHeight: 32,
                        },
                        _b),
                },
            ],
            className,
        ],
        group: [
            classNames.group,
            {
                transition: "background-color " + _Styling__WEBPACK_IMPORTED_MODULE_0__["AnimationVariables"].durationValue2 + " " + beziers.easeInOutSine,
            },
        ],
        groupIsDropping: {
            backgroundColor: palette.neutralLight,
        },
    };
};
//# sourceMappingURL=GroupedList.styles.js.map

/***/ }),

/***/ "9lkW":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupedList.base.js ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: GroupedListBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupedListBase", function() { return GroupedListBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _GroupedListSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GroupedListSection */ "E8BK");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../List */ "HP5x");
/* harmony import */ var _utilities_selection_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utilities/selection/index */ "v+17");
/* harmony import */ var _DetailsList_DetailsRow_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../DetailsList/DetailsRow.styles */ "tCYI");
/* harmony import */ var _FocusZone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../FocusZone */ "NMYH");








var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
var ROW_HEIGHT = _DetailsList_DetailsRow_styles__WEBPACK_IMPORTED_MODULE_6__["DEFAULT_ROW_HEIGHTS"].rowHeight, COMPACT_ROW_HEIGHT = _DetailsList_DetailsRow_styles__WEBPACK_IMPORTED_MODULE_6__["DEFAULT_ROW_HEIGHTS"].compactRowHeight;
var GroupedListBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GroupedListBase, _super);
    function GroupedListBase(props) {
        var _this = _super.call(this, props) || this;
        _this._list = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._renderGroup = function (group, groupIndex) {
            var _a = _this.props, dragDropEvents = _a.dragDropEvents, dragDropHelper = _a.dragDropHelper, eventsToRegister = _a.eventsToRegister, groupProps = _a.groupProps, items = _a.items, listProps = _a.listProps, onRenderCell = _a.onRenderCell, selectionMode = _a.selectionMode, selection = _a.selection, viewport = _a.viewport, onShouldVirtualize = _a.onShouldVirtualize, groups = _a.groups, compact = _a.compact;
            // override group header/footer props as needed
            var dividerProps = {
                onToggleSelectGroup: _this._onToggleSelectGroup,
                onToggleCollapse: _this._onToggleCollapse,
                onToggleSummarize: _this._onToggleSummarize,
            };
            var headerProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, groupProps.headerProps), dividerProps);
            var showAllProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, groupProps.showAllProps), dividerProps);
            var footerProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, groupProps.footerProps), dividerProps);
            var groupNestingDepth = _this._getGroupNestingDepth();
            if (!groupProps.showEmptyGroups && group && group.count === 0) {
                return null;
            }
            var finalListProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (listProps || {})), { version: _this.state.version });
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_GroupedListSection__WEBPACK_IMPORTED_MODULE_3__["GroupedListSection"], { key: _this._getGroupKey(group, groupIndex), dragDropEvents: dragDropEvents, dragDropHelper: dragDropHelper, eventsToRegister: eventsToRegister, footerProps: footerProps, getGroupItemLimit: groupProps && groupProps.getGroupItemLimit, group: group, groupIndex: groupIndex, groupNestingDepth: groupNestingDepth, groupProps: groupProps, headerProps: headerProps, listProps: finalListProps, items: items, onRenderCell: onRenderCell, onRenderGroupHeader: groupProps.onRenderHeader, onRenderGroupShowAll: groupProps.onRenderShowAll, onRenderGroupFooter: groupProps.onRenderFooter, selectionMode: selectionMode, selection: selection, showAllProps: showAllProps, viewport: viewport, onShouldVirtualize: onShouldVirtualize, groupedListClassNames: _this._classNames, groups: groups, compact: compact }));
        };
        _this._getDefaultGroupItemLimit = function (group) {
            return group.count;
        };
        _this._getGroupItemLimit = function (group) {
            var groupProps = _this.props.groupProps;
            var getGroupItemLimit = groupProps && groupProps.getGroupItemLimit ? groupProps.getGroupItemLimit : _this._getDefaultGroupItemLimit;
            return getGroupItemLimit(group);
        };
        _this._getGroupHeight = function (group) {
            var rowHeight = _this.props.compact ? COMPACT_ROW_HEIGHT : ROW_HEIGHT;
            return rowHeight + (group.isCollapsed ? 0 : rowHeight * _this._getGroupItemLimit(group));
        };
        _this._getPageHeight = function (itemIndex) {
            var groups = _this.state.groups;
            var _a = _this.props.getGroupHeight, getGroupHeight = _a === void 0 ? _this._getGroupHeight : _a;
            var pageGroup = groups && groups[itemIndex];
            if (pageGroup) {
                return getGroupHeight(pageGroup, itemIndex);
            }
            else {
                return 0;
            }
        };
        _this._onToggleCollapse = function (group) {
            var groupProps = _this.props.groupProps;
            var onToggleCollapse = groupProps && groupProps.headerProps && groupProps.headerProps.onToggleCollapse;
            if (group) {
                if (onToggleCollapse) {
                    onToggleCollapse(group);
                }
                group.isCollapsed = !group.isCollapsed;
                _this._updateIsSomeGroupExpanded();
                _this.forceUpdate();
            }
        };
        _this._onToggleSelectGroup = function (group) {
            var _a = _this.props, selection = _a.selection, selectionMode = _a.selectionMode;
            if (group && selection && selectionMode === _utilities_selection_index__WEBPACK_IMPORTED_MODULE_5__["SelectionMode"].multiple) {
                selection.toggleRangeSelected(group.startIndex, group.count);
            }
        };
        _this._isInnerZoneKeystroke = function (ev) {
            return ev.which === Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getRTLSafeKeyCode"])(_Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].right);
        };
        _this._onToggleSummarize = function (group) {
            var groupProps = _this.props.groupProps;
            var onToggleSummarize = groupProps && groupProps.showAllProps && groupProps.showAllProps.onToggleSummarize;
            if (onToggleSummarize) {
                onToggleSummarize(group);
            }
            else {
                if (group) {
                    group.isShowingAll = !group.isShowingAll;
                }
                _this.forceUpdate();
            }
        };
        _this._getPageSpecification = function (itemIndex) {
            var groups = _this.state.groups;
            var pageGroup = groups && groups[itemIndex];
            return {
                key: pageGroup && pageGroup.key,
            };
        };
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["initializeComponentRef"])(_this);
        _this._isSomeGroupExpanded = _this._computeIsSomeGroupExpanded(props.groups);
        var _a = props.listProps, _b = (_a === void 0 ? {} : _a).version, version = _b === void 0 ? {} : _b;
        _this.state = {
            groups: props.groups,
            items: props.items,
            listProps: props.listProps,
            version: version,
        };
        return _this;
    }
    GroupedListBase.getDerivedStateFromProps = function (nextProps, previousState) {
        var groups = nextProps.groups, selectionMode = nextProps.selectionMode, compact = nextProps.compact, items = nextProps.items, listProps = nextProps.listProps;
        var listVersion = listProps && listProps.version;
        var nextState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, previousState), { selectionMode: selectionMode,
            compact: compact,
            groups: groups,
            listProps: listProps });
        var shouldForceUpdates = false;
        var previousListVersion = previousState.listProps && previousState.listProps.version;
        if (listVersion !== previousListVersion ||
            items !== previousState.items ||
            groups !== previousState.groups ||
            selectionMode !== previousState.selectionMode ||
            compact !== previousState.compact) {
            // If there are any props not passed explicitly to `List` which have an impact on the behavior of `onRenderCell`,
            // these need to 'force-update' this component by revving the version. Otherwise, the List might render with stale
            // data.
            shouldForceUpdates = true;
        }
        if (shouldForceUpdates) {
            nextState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, nextState), { version: {} });
        }
        return nextState;
    };
    GroupedListBase.prototype.scrollToIndex = function (index, measureItem, scrollToMode) {
        if (this._list.current) {
            this._list.current.scrollToIndex(index, measureItem, scrollToMode);
        }
    };
    GroupedListBase.prototype.getStartItemIndexInView = function () {
        return this._list.current.getStartItemIndexInView() || 0;
    };
    GroupedListBase.prototype.componentDidMount = function () {
        var _a = this.props, groupProps = _a.groupProps, _b = _a.groups, groups = _b === void 0 ? [] : _b;
        if (groupProps && groupProps.isAllGroupsCollapsed) {
            this._setGroupsCollapsedState(groups, groupProps.isAllGroupsCollapsed);
        }
    };
    GroupedListBase.prototype.render = function () {
        var _a = this.props, className = _a.className, usePageCache = _a.usePageCache, onShouldVirtualize = _a.onShouldVirtualize, theme = _a.theme, _b = _a.role, role = _b === void 0 ? 'treegrid' : _b, styles = _a.styles, compact = _a.compact, _c = _a.focusZoneProps, focusZoneProps = _c === void 0 ? {} : _c, _d = _a.rootListProps, rootListProps = _d === void 0 ? {} : _d;
        var _e = this.state, groups = _e.groups, version = _e.version;
        this._classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            compact: compact,
        });
        var _f = focusZoneProps.shouldEnterInnerZone, shouldEnterInnerZone = _f === void 0 ? this._isInnerZoneKeystroke : _f;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_FocusZone__WEBPACK_IMPORTED_MODULE_7__["FocusZone"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ direction: _FocusZone__WEBPACK_IMPORTED_MODULE_7__["FocusZoneDirection"].vertical, "data-automationid": "GroupedList", "data-is-scrollable": "false", role: "presentation" }, focusZoneProps, { shouldEnterInnerZone: shouldEnterInnerZone, className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])(this._classNames.root, focusZoneProps.className) }), !groups ? (this._renderGroup(undefined, 0)) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_List__WEBPACK_IMPORTED_MODULE_4__["List"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ ref: this._list, role: role, items: groups, onRenderCell: this._renderGroup, getItemCountForPage: this._returnOne, getPageHeight: this._getPageHeight, getPageSpecification: this._getPageSpecification, usePageCache: usePageCache, onShouldVirtualize: onShouldVirtualize, version: version }, rootListProps)))));
    };
    GroupedListBase.prototype.forceUpdate = function () {
        _super.prototype.forceUpdate.call(this);
        this._forceListUpdates();
    };
    GroupedListBase.prototype.toggleCollapseAll = function (allCollapsed) {
        var _a = this.state.groups, groups = _a === void 0 ? [] : _a;
        var groupProps = this.props.groupProps;
        var onToggleCollapseAll = groupProps && groupProps.onToggleCollapseAll;
        if (groups.length > 0) {
            if (onToggleCollapseAll) {
                onToggleCollapseAll(allCollapsed);
            }
            this._setGroupsCollapsedState(groups, allCollapsed);
            this._updateIsSomeGroupExpanded();
            this.forceUpdate();
        }
    };
    GroupedListBase.prototype._setGroupsCollapsedState = function (groups, isCollapsed) {
        for (var groupIndex = 0; groupIndex < groups.length; groupIndex++) {
            groups[groupIndex].isCollapsed = isCollapsed;
        }
    };
    GroupedListBase.prototype._returnOne = function () {
        return 1;
    };
    GroupedListBase.prototype._getGroupKey = function (group, index) {
        return 'group-' + (group && group.key ? group.key : String(index));
    };
    GroupedListBase.prototype._getGroupNestingDepth = function () {
        var groups = this.state.groups;
        var level = 0;
        var groupsInLevel = groups;
        while (groupsInLevel && groupsInLevel.length > 0) {
            level++;
            groupsInLevel = groupsInLevel[0].children;
        }
        return level;
    };
    GroupedListBase.prototype._forceListUpdates = function (groups) {
        this.setState({
            version: {},
        });
    };
    GroupedListBase.prototype._computeIsSomeGroupExpanded = function (groups) {
        var _this = this;
        return !!(groups &&
            groups.some(function (group) { return (group.children ? _this._computeIsSomeGroupExpanded(group.children) : !group.isCollapsed); }));
    };
    GroupedListBase.prototype._updateIsSomeGroupExpanded = function () {
        var groups = this.state.groups;
        var onGroupExpandStateChanged = this.props.onGroupExpandStateChanged;
        var newIsSomeGroupExpanded = this._computeIsSomeGroupExpanded(groups);
        if (this._isSomeGroupExpanded !== newIsSomeGroupExpanded) {
            if (onGroupExpandStateChanged) {
                onGroupExpandStateChanged(newIsSomeGroupExpanded);
            }
            this._isSomeGroupExpanded = newIsSomeGroupExpanded;
        }
    };
    GroupedListBase.defaultProps = {
        selectionMode: _utilities_selection_index__WEBPACK_IMPORTED_MODULE_5__["SelectionMode"].multiple,
        isHeaderVisible: true,
        groupProps: {},
        compact: false,
    };
    return GroupedListBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=GroupedList.base.js.map

/***/ }),

/***/ "A5R/":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Dialog/DialogContent.types.js ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: ResponsiveMode, DialogType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogType", function() { return DialogType; });
/* harmony import */ var _utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/decorators/withResponsiveMode */ "5qgq");
/* harmony import */ var _utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResponsiveMode", function() { return _utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_0__["ResponsiveMode"]; });


 // Exported because the type is an optional prop and not exported otherwise.
/**
 * {@docCategory Dialog}
 */
var DialogType;
(function (DialogType) {
    /** Standard dialog */
    DialogType[DialogType["normal"] = 0] = "normal";
    /** Dialog with large header banner */
    DialogType[DialogType["largeHeader"] = 1] = "largeHeader";
    /** Dialog with an 'x' close button in the upper-right corner */
    DialogType[DialogType["close"] = 2] = "close";
})(DialogType || (DialogType = {}));
//# sourceMappingURL=DialogContent.types.js.map

/***/ }),

/***/ "A7zU":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Dialog/DialogFooter.styles.js ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "PL71");

var GlobalClassNames = {
    actions: 'ms-Dialog-actions',
    action: 'ms-Dialog-action',
    actionsRight: 'ms-Dialog-actionsRight',
};
var getStyles = function (props) {
    var className = props.className, theme = props.theme;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
    return {
        actions: [
            classNames.actions,
            {
                position: 'relative',
                width: '100%',
                minHeight: '24px',
                lineHeight: '24px',
                margin: '16px 0 0',
                fontSize: '0',
                selectors: {
                    '.ms-Button': {
                        lineHeight: 'normal',
                    },
                },
            },
            className,
        ],
        action: [
            classNames.action,
            {
                margin: '0 4px',
            },
        ],
        actionsRight: [
            classNames.actionsRight,
            {
                textAlign: 'right',
                marginRight: '-4px',
                fontSize: '0',
            },
        ],
    };
};
//# sourceMappingURL=DialogFooter.styles.js.map

/***/ }),

/***/ "AiA5":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/utilities/decorators/withViewport.js ***!
  \****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/./lib/utilities/decorators/withViewport.js
var pkg = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
module.exports = pkg.workaround_withViewport;

/***/ }),

/***/ "Ao4p":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Layer/Layer.base.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: LayerBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerBase", function() { return LayerBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "faye");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Fabric__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Fabric */ "OBNh");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _Layer_notification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Layer.notification */ "V7Tt");






var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["classNamesFunction"])();
var LayerBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LayerBase, _super);
    function LayerBase(props) {
        var _this = _super.call(this, props) || this;
        _this._rootRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._createLayerElement = function () {
            var hostId = _this.props.hostId;
            var doc = Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["getDocument"])(_this._rootRef.current);
            var host = _this._getHost();
            if (!doc || !host) {
                return;
            }
            // If one was already existing, remove.
            _this._removeLayerElement();
            var layerElement = doc.createElement('div');
            var classNames = _this._getClassNames();
            layerElement.className = classNames.root;
            Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["setPortalAttribute"])(layerElement);
            Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["setVirtualParent"])(layerElement, _this._rootRef.current);
            _this.props.insertFirst ? host.insertBefore(layerElement, host.firstChild) : host.appendChild(layerElement);
            _this.setState({
                hostId: hostId,
                layerElement: layerElement,
            }, function () {
                // eslint-disable-next-line deprecation/deprecation
                var _a = _this.props, onLayerDidMount = _a.onLayerDidMount, onLayerMounted = _a.onLayerMounted;
                if (onLayerMounted) {
                    onLayerMounted();
                }
                if (onLayerDidMount) {
                    onLayerDidMount();
                }
            });
        };
        _this.state = {};
        if (true) {
            Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["warnDeprecations"])('Layer', props, {
                onLayerMounted: 'onLayerDidMount',
            });
        }
        return _this;
    }
    LayerBase.prototype.componentDidMount = function () {
        var hostId = this.props.hostId;
        this._createLayerElement();
        if (hostId) {
            Object(_Layer_notification__WEBPACK_IMPORTED_MODULE_5__["registerLayer"])(hostId, this._createLayerElement);
        }
    };
    LayerBase.prototype.render = function () {
        var layerElement = this.state.layerElement;
        var classNames = this._getClassNames();
        var eventBubblingEnabled = this.props.eventBubblingEnabled;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "ms-layer", ref: this._rootRef }, layerElement &&
            react_dom__WEBPACK_IMPORTED_MODULE_2__["createPortal"](react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Fabric__WEBPACK_IMPORTED_MODULE_3__["Fabric"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (!eventBubblingEnabled && _getFilteredEvents()), { className: classNames.content }), this.props.children), layerElement)));
    };
    LayerBase.prototype.componentDidUpdate = function () {
        if (this.props.hostId !== this.state.hostId) {
            this._createLayerElement();
        }
    };
    LayerBase.prototype.componentWillUnmount = function () {
        var hostId = this.props.hostId;
        this._removeLayerElement();
        if (hostId) {
            Object(_Layer_notification__WEBPACK_IMPORTED_MODULE_5__["unregisterLayer"])(hostId, this._createLayerElement);
        }
    };
    LayerBase.prototype._removeLayerElement = function () {
        var onLayerWillUnmount = this.props.onLayerWillUnmount;
        var layerElement = this.state.layerElement;
        if (layerElement) {
            Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["setVirtualParent"])(layerElement, null);
        }
        if (onLayerWillUnmount) {
            onLayerWillUnmount();
        }
        if (layerElement && layerElement.parentNode) {
            var parentNode = layerElement.parentNode;
            if (parentNode) {
                parentNode.removeChild(layerElement);
            }
        }
    };
    LayerBase.prototype._getClassNames = function () {
        var _a = this.props, className = _a.className, styles = _a.styles, theme = _a.theme;
        var classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            isNotHost: !this.props.hostId,
        });
        return classNames;
    };
    LayerBase.prototype._getHost = function () {
        var hostId = this.props.hostId;
        var doc = Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["getDocument"])(this._rootRef.current);
        if (!doc) {
            return undefined;
        }
        if (hostId) {
            return doc.getElementById(hostId);
        }
        else {
            var defaultHostSelector = Object(_Layer_notification__WEBPACK_IMPORTED_MODULE_5__["getDefaultTarget"])();
            return defaultHostSelector ? doc.querySelector(defaultHostSelector) : doc.body;
        }
    };
    LayerBase.defaultProps = {
        onLayerDidMount: function () { return undefined; },
        onLayerWillUnmount: function () { return undefined; },
    };
    LayerBase = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["customizable"])('Layer', ['theme', 'hostId'])
    ], LayerBase);
    return LayerBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

var _onFilterEvent = function (ev) {
    // We should just be able to check ev.bubble here and only stop events that are bubbling up. However, even though
    // mouseenter and mouseleave do NOT bubble up, they are showing up as bubbling. Therefore we stop events based on
    // event name rather than ev.bubble.
    if (ev.eventPhase === Event.BUBBLING_PHASE &&
        ev.type !== 'mouseenter' &&
        ev.type !== 'mouseleave' &&
        ev.type !== 'touchstart' &&
        ev.type !== 'touchend') {
        ev.stopPropagation();
    }
};
var _filteredEventProps;
function _getFilteredEvents() {
    if (!_filteredEventProps) {
        _filteredEventProps = {};
        [
            'onClick',
            'onContextMenu',
            'onDoubleClick',
            'onDrag',
            'onDragEnd',
            'onDragEnter',
            'onDragExit',
            'onDragLeave',
            'onDragOver',
            'onDragStart',
            'onDrop',
            'onMouseDown',
            'onMouseEnter',
            'onMouseLeave',
            'onMouseMove',
            'onMouseOver',
            'onMouseOut',
            'onMouseUp',
            'onTouchMove',
            'onTouchStart',
            'onTouchCancel',
            'onTouchEnd',
            'onKeyDown',
            'onKeyPress',
            'onKeyUp',
            'onFocus',
            'onBlur',
            'onChange',
            'onInput',
            'onInvalid',
            'onSubmit',
        ].forEach(function (name) { return (_filteredEventProps[name] = _onFilterEvent); });
    }
    return _filteredEventProps;
}
//# sourceMappingURL=Layer.base.js.map

/***/ }),

/***/ "B5pZ":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Callout/index.js ***!
  \*******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/components/Callout/index.js


/***/ }),

/***/ "DA5T":
/*!***************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/react-hooks@7.13.9_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/react-hooks/lib/useWarnings.js ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: useWarnings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useWarnings", function() { return useWarnings; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _uifabric_utilities_lib_warn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uifabric/utilities/lib/warn */ "k11K");
/* harmony import */ var _uifabric_utilities_lib_warn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_uifabric_utilities_lib_warn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _usePrevious__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usePrevious */ "aBU9");
/* harmony import */ var _useConst__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useConst */ "SKm6");





var warningId = 0;
/**
 * Only in development mode, display console warnings when certain conditions are met.
 * Note that all warnings except `controlledUsage` will only be shown on first render
 * (new `controlledUsage` warnings may be shown later due to prop changes).
 */
function useWarnings(options) {
    if (true) {
        var name_1 = options.name, props = options.props, _a = options.other, other = _a === void 0 ? [] : _a, conditionallyRequired = options.conditionallyRequired, deprecations = options.deprecations, mutuallyExclusive = options.mutuallyExclusive, controlledUsage = options.controlledUsage;
        /* eslint-disable react-hooks/rules-of-hooks -- build-time conditional */
        var hasWarnedRef = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](false);
        var componentId = Object(_useConst__WEBPACK_IMPORTED_MODULE_4__["useConst"])(function () { return "useWarnings_" + warningId++; });
        var oldProps = Object(_usePrevious__WEBPACK_IMPORTED_MODULE_3__["usePrevious"])(props);
        /* eslint-enable react-hooks/rules-of-hooks */
        // Warn synchronously (not in useEffect) on first render to make debugging easier.
        if (!hasWarnedRef.current) {
            hasWarnedRef.current = true;
            for (var _i = 0, other_1 = other; _i < other_1.length; _i++) {
                var warning = other_1[_i];
                Object(_uifabric_utilities_lib_warn__WEBPACK_IMPORTED_MODULE_2__["warn"])(warning);
            }
            if (conditionallyRequired) {
                for (var _b = 0, conditionallyRequired_1 = conditionallyRequired; _b < conditionallyRequired_1.length; _b++) {
                    var req = conditionallyRequired_1[_b];
                    Object(_uifabric_utilities_lib_warn__WEBPACK_IMPORTED_MODULE_2__["warnConditionallyRequiredProps"])(name_1, props, req.requiredProps, req.conditionalPropName, req.condition);
                }
            }
            deprecations && Object(_uifabric_utilities_lib_warn__WEBPACK_IMPORTED_MODULE_2__["warnDeprecations"])(name_1, props, deprecations);
            mutuallyExclusive && Object(_uifabric_utilities_lib_warn__WEBPACK_IMPORTED_MODULE_2__["warnMutuallyExclusive"])(name_1, props, mutuallyExclusive);
        }
        // Controlled usage warnings may be displayed on either first or subsequent renders due to
        // prop changes. Note that it's safe to run this synchronously (not in useEffect) even in
        // concurrent mode because `warnControlledUsage` internally tracks which warnings have been
        // displayed for each component instance (so nothing will be displayed twice).
        controlledUsage && Object(_uifabric_utilities_lib_warn__WEBPACK_IMPORTED_MODULE_2__["warnControlledUsage"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, controlledUsage), { componentId: componentId, props: props, componentName: name_1, oldProps: oldProps }));
    }
}
//# sourceMappingURL=useWarnings.js.map

/***/ }),

/***/ "DsUK":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsRow.base.js ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: DetailsRowBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsRowBase", function() { return DetailsRowBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _DetailsList_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DetailsList.types */ "ddaB");
/* harmony import */ var _DetailsRowCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DetailsRowCheck */ "jkXB");
/* harmony import */ var _GroupedList_GroupSpacer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../GroupedList/GroupSpacer */ "oao7");
/* harmony import */ var _DetailsRowFields__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DetailsRowFields */ "r2Go");
/* harmony import */ var _FocusZone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../FocusZone */ "NMYH");
/* harmony import */ var _utilities_selection_interfaces__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utilities/selection/interfaces */ "2Xb7");
/* harmony import */ var _GroupedList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../GroupedList */ "kVD3");











var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
var DEFAULT_DROPPING_CSS_CLASS = 'is-dropping';
var NO_COLUMNS = [];
var DetailsRowBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DetailsRowBase, _super);
    function DetailsRowBase(props) {
        var _this = _super.call(this, props) || this;
        _this._root = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._cellMeasurer = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._focusZone = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._onSelectionChanged = function () {
            var selectionState = getSelectionState(_this.props);
            if (!Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["shallowCompare"])(selectionState, _this.state.selectionState)) {
                _this.setState({
                    selectionState: selectionState,
                });
            }
        };
        /**
         * update isDropping state based on the input value, which is used to change style during drag and drop
         *
         * when change to true, that means drag enter. we will add default dropping class name
         * or the custom dropping class name (return result from onDragEnter) to the root elemet.
         *
         * when change to false, that means drag leave. we will remove the dropping class name from root element.
         *
         * @param newValue - New isDropping state value
         * @param event - The event trigger dropping state change which can be dragenter, dragleave etc
         */
        _this._updateDroppingState = function (newValue, event) {
            var isDropping = _this.state.isDropping;
            var _a = _this.props, dragDropEvents = _a.dragDropEvents, item = _a.item;
            if (!newValue) {
                if (dragDropEvents.onDragLeave) {
                    dragDropEvents.onDragLeave(item, event);
                }
            }
            else if (dragDropEvents.onDragEnter) {
                _this._droppingClassNames = dragDropEvents.onDragEnter(item, event);
            }
            if (isDropping !== newValue) {
                _this.setState({ isDropping: newValue });
            }
        };
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["initializeComponentRef"])(_this);
        _this._events = new _Utilities__WEBPACK_IMPORTED_MODULE_2__["EventGroup"](_this);
        _this.state = {
            selectionState: getSelectionState(props),
            columnMeasureInfo: undefined,
            isDropping: false,
        };
        _this._droppingClassNames = '';
        return _this;
    }
    DetailsRowBase.getDerivedStateFromProps = function (nextProps, previousState) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, previousState), { selectionState: getSelectionState(nextProps) });
    };
    DetailsRowBase.prototype.componentDidMount = function () {
        var _a = this.props, dragDropHelper = _a.dragDropHelper, selection = _a.selection, item = _a.item, onDidMount = _a.onDidMount;
        if (dragDropHelper && this._root.current) {
            this._dragDropSubscription = dragDropHelper.subscribe(this._root.current, this._events, this._getRowDragDropOptions());
        }
        if (selection) {
            this._events.on(selection, _utilities_selection_interfaces__WEBPACK_IMPORTED_MODULE_8__["SELECTION_CHANGE"], this._onSelectionChanged);
        }
        if (onDidMount && item) {
            // If the item appears later, we should wait for it before calling this method.
            this._onDidMountCalled = true;
            onDidMount(this);
        }
    };
    DetailsRowBase.prototype.componentDidUpdate = function (previousProps) {
        var state = this.state;
        var _a = this.props, item = _a.item, onDidMount = _a.onDidMount;
        var columnMeasureInfo = state.columnMeasureInfo;
        if (this.props.itemIndex !== previousProps.itemIndex ||
            this.props.item !== previousProps.item ||
            this.props.dragDropHelper !== previousProps.dragDropHelper) {
            if (this._dragDropSubscription) {
                this._dragDropSubscription.dispose();
                delete this._dragDropSubscription;
            }
            if (this.props.dragDropHelper && this._root.current) {
                this._dragDropSubscription = this.props.dragDropHelper.subscribe(this._root.current, this._events, this._getRowDragDropOptions());
            }
        }
        if (columnMeasureInfo && columnMeasureInfo.index >= 0 && this._cellMeasurer.current) {
            var newWidth = this._cellMeasurer.current.getBoundingClientRect().width;
            columnMeasureInfo.onMeasureDone(newWidth);
            this.setState({
                columnMeasureInfo: undefined,
            });
        }
        if (item && onDidMount && !this._onDidMountCalled) {
            this._onDidMountCalled = true;
            onDidMount(this);
        }
    };
    DetailsRowBase.prototype.componentWillUnmount = function () {
        var _a = this.props, item = _a.item, onWillUnmount = _a.onWillUnmount;
        // Only call the onWillUnmount callback if we have an item.
        if (onWillUnmount && item) {
            onWillUnmount(this);
        }
        if (this._dragDropSubscription) {
            this._dragDropSubscription.dispose();
            delete this._dragDropSubscription;
        }
        this._events.dispose();
    };
    DetailsRowBase.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        if (this.props.useReducedRowRenderer) {
            var newSelectionState = getSelectionState(nextProps);
            if (this.state.selectionState.isSelected !== newSelectionState.isSelected) {
                return true;
            }
            return !Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["shallowCompare"])(this.props, nextProps);
        }
        else {
            return true;
        }
    };
    DetailsRowBase.prototype.render = function () {
        var _a = this.props, className = _a.className, _b = _a.columns, columns = _b === void 0 ? NO_COLUMNS : _b, dragDropEvents = _a.dragDropEvents, item = _a.item, itemIndex = _a.itemIndex, _c = _a.onRenderCheck, onRenderCheck = _c === void 0 ? this._onRenderCheck : _c, onRenderDetailsCheckbox = _a.onRenderDetailsCheckbox, onRenderItemColumn = _a.onRenderItemColumn, getCellValueKey = _a.getCellValueKey, selectionMode = _a.selectionMode, _d = _a.rowWidth, rowWidth = _d === void 0 ? 0 : _d, checkboxVisibility = _a.checkboxVisibility, getRowAriaLabel = _a.getRowAriaLabel, getRowAriaDescribedBy = _a.getRowAriaDescribedBy, checkButtonAriaLabel = _a.checkButtonAriaLabel, checkboxCellClassName = _a.checkboxCellClassName, 
        /** Alias rowFieldsAs as RowFields and default to DetailsRowFields if rowFieldsAs does not exist */
        _e = _a.rowFieldsAs, 
        /** Alias rowFieldsAs as RowFields and default to DetailsRowFields if rowFieldsAs does not exist */
        RowFields = _e === void 0 ? _DetailsRowFields__WEBPACK_IMPORTED_MODULE_6__["DetailsRowFields"] : _e, selection = _a.selection, indentWidth = _a.indentWidth, enableUpdateAnimations = _a.enableUpdateAnimations, compact = _a.compact, theme = _a.theme, styles = _a.styles, cellsByColumn = _a.cellsByColumn, groupNestingDepth = _a.groupNestingDepth, _f = _a.useFastIcons, useFastIcons = _f === void 0 ? true : _f, cellStyleProps = _a.cellStyleProps;
        var _g = this.state, columnMeasureInfo = _g.columnMeasureInfo, isDropping = _g.isDropping;
        var _h = this.state.selectionState, _j = _h.isSelected, isSelected = _j === void 0 ? false : _j, _k = _h.isSelectionModal, isSelectionModal = _k === void 0 ? false : _k;
        var isDraggable = dragDropEvents ? !!(dragDropEvents.canDrag && dragDropEvents.canDrag(item)) : undefined;
        var droppingClassName = isDropping ? this._droppingClassNames || DEFAULT_DROPPING_CSS_CLASS : '';
        var ariaLabel = getRowAriaLabel ? getRowAriaLabel(item) : undefined;
        var ariaDescribedBy = getRowAriaDescribedBy ? getRowAriaDescribedBy(item) : undefined;
        var canSelect = !!selection && selection.canSelectItem(item, itemIndex);
        var isContentUnselectable = selectionMode === _utilities_selection_interfaces__WEBPACK_IMPORTED_MODULE_8__["SelectionMode"].multiple;
        var showCheckbox = selectionMode !== _utilities_selection_interfaces__WEBPACK_IMPORTED_MODULE_8__["SelectionMode"].none && checkboxVisibility !== _DetailsList_types__WEBPACK_IMPORTED_MODULE_3__["CheckboxVisibility"].hidden;
        var ariaSelected = selectionMode === _utilities_selection_interfaces__WEBPACK_IMPORTED_MODULE_8__["SelectionMode"].none ? undefined : isSelected;
        this._classNames = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._classNames), getClassNames(styles, {
            theme: theme,
            isSelected: isSelected,
            canSelect: !isContentUnselectable,
            anySelected: isSelectionModal,
            checkboxCellClassName: checkboxCellClassName,
            droppingClassName: droppingClassName,
            className: className,
            compact: compact,
            enableUpdateAnimations: enableUpdateAnimations,
            cellStyleProps: cellStyleProps,
        }));
        var rowClassNames = {
            isMultiline: this._classNames.isMultiline,
            isRowHeader: this._classNames.isRowHeader,
            cell: this._classNames.cell,
            cellAnimation: this._classNames.cellAnimation,
            cellPadded: this._classNames.cellPadded,
            cellUnpadded: this._classNames.cellUnpadded,
            fields: this._classNames.fields,
        };
        // Only re-assign rowClassNames when classNames have changed.
        // Otherwise, they will cause DetailsRowFields to unnecessarily
        // re-render, see https://github.com/microsoft/fluentui/pull/8799.
        // Refactor DetailsRowFields to generate own styles to remove need for this.
        if (!Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["shallowCompare"])(this._rowClassNames || {}, rowClassNames)) {
            this._rowClassNames = rowClassNames;
        }
        var rowFields = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](RowFields, { rowClassNames: this._rowClassNames, cellsByColumn: cellsByColumn, columns: columns, item: item, itemIndex: itemIndex, columnStartIndex: (showCheckbox ? 1 : 0) + (groupNestingDepth ? 1 : 0), onRenderItemColumn: onRenderItemColumn, getCellValueKey: getCellValueKey, enableUpdateAnimations: enableUpdateAnimations, cellStyleProps: cellStyleProps }));
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_FocusZone__WEBPACK_IMPORTED_MODULE_7__["FocusZone"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ "data-is-focusable": true }, Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getNativeProps"])(this.props, _Utilities__WEBPACK_IMPORTED_MODULE_2__["divProperties"]), (typeof isDraggable === 'boolean'
            ? {
                'data-is-draggable': isDraggable,
                draggable: isDraggable,
            }
            : {}), { direction: _FocusZone__WEBPACK_IMPORTED_MODULE_7__["FocusZoneDirection"].horizontal, elementRef: this._root, componentRef: this._focusZone, role: "row", "aria-label": ariaLabel, "aria-describedby": ariaDescribedBy, className: this._classNames.root, "data-selection-index": itemIndex, "data-selection-touch-invoke": true, "data-item-index": itemIndex, "aria-rowindex": itemIndex + 1, "aria-level": (groupNestingDepth && groupNestingDepth + 1) || undefined, "data-automationid": "DetailsRow", style: { minWidth: rowWidth }, "aria-selected": ariaSelected, allowFocusRoot: true }),
            showCheckbox && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { role: "gridcell", "aria-colindex": 1, "data-selection-toggle": true, className: this._classNames.checkCell }, onRenderCheck({
                selected: isSelected,
                anySelected: isSelectionModal,
                'aria-label': checkButtonAriaLabel,
                canSelect: canSelect,
                compact: compact,
                className: this._classNames.check,
                theme: theme,
                isVisible: checkboxVisibility === _DetailsList_types__WEBPACK_IMPORTED_MODULE_3__["CheckboxVisibility"].always,
                onRenderDetailsCheckbox: onRenderDetailsCheckbox,
                useFastIcons: useFastIcons,
            }))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_GroupedList_GroupSpacer__WEBPACK_IMPORTED_MODULE_5__["GroupSpacer"], { indentWidth: indentWidth, role: "gridcell", count: groupNestingDepth - (this.props.collapseAllVisibility === _GroupedList__WEBPACK_IMPORTED_MODULE_9__["CollapseAllVisibility"].hidden ? 1 : 0) }),
            item && rowFields,
            columnMeasureInfo && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { role: "presentation", className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])(this._classNames.cellMeasurer, this._classNames.cell), ref: this._cellMeasurer },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](RowFields, { rowClassNames: this._rowClassNames, columns: [columnMeasureInfo.column], item: item, itemIndex: itemIndex, columnStartIndex: (showCheckbox ? 1 : 0) + (groupNestingDepth ? 1 : 0) + columns.length, onRenderItemColumn: onRenderItemColumn, getCellValueKey: getCellValueKey }))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { role: "checkbox", className: this._classNames.checkCover, "aria-checked": isSelected, "data-selection-toggle": true })));
    };
    /**
     * measure cell at index. and call the call back with the measured cell width when finish measure
     *
     * @param index - The cell index
     * @param onMeasureDone - The call back function when finish measure
     */
    DetailsRowBase.prototype.measureCell = function (index, onMeasureDone) {
        var _a = this.props.columns, columns = _a === void 0 ? NO_COLUMNS : _a;
        var column = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, columns[index]);
        column.minWidth = 0;
        column.maxWidth = 999999;
        delete column.calculatedWidth;
        this.setState({
            columnMeasureInfo: {
                index: index,
                column: column,
                onMeasureDone: onMeasureDone,
            },
        });
    };
    DetailsRowBase.prototype.focus = function (forceIntoFirstElement) {
        if (forceIntoFirstElement === void 0) { forceIntoFirstElement = false; }
        var _a;
        return !!((_a = this._focusZone.current) === null || _a === void 0 ? void 0 : _a.focus(forceIntoFirstElement));
    };
    DetailsRowBase.prototype._onRenderCheck = function (props) {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_DetailsRowCheck__WEBPACK_IMPORTED_MODULE_4__["DetailsRowCheck"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props));
    };
    DetailsRowBase.prototype._getRowDragDropOptions = function () {
        var _a = this.props, item = _a.item, itemIndex = _a.itemIndex, dragDropEvents = _a.dragDropEvents, eventsToRegister = _a.eventsToRegister;
        var options = {
            eventMap: eventsToRegister,
            selectionIndex: itemIndex,
            context: { data: item, index: itemIndex },
            canDrag: dragDropEvents.canDrag,
            canDrop: dragDropEvents.canDrop,
            onDragStart: dragDropEvents.onDragStart,
            updateDropState: this._updateDroppingState,
            onDrop: dragDropEvents.onDrop,
            onDragEnd: dragDropEvents.onDragEnd,
            onDragOver: dragDropEvents.onDragOver,
        };
        return options;
    };
    return DetailsRowBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

function getSelectionState(props) {
    var _a, _b, _c, _d;
    var itemIndex = props.itemIndex, selection = props.selection;
    return {
        isSelected: !!((_a = selection) === null || _a === void 0 ? void 0 : _a.isIndexSelected(itemIndex)),
        isSelectionModal: !!((_d = (_b = selection) === null || _b === void 0 ? void 0 : (_c = _b).isModal) === null || _d === void 0 ? void 0 : _d.call(_c)),
    };
}
//# sourceMappingURL=DetailsRow.base.js.map

/***/ }),

/***/ "E8BK":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupedListSection.js ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: GroupedListSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupedListSection", function() { return GroupedListSection; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _utilities_selection_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/selection/index */ "v+17");
/* harmony import */ var _GroupHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GroupHeader */ "G9th");
/* harmony import */ var _GroupShowAll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GroupShowAll */ "3OK7");
/* harmony import */ var _GroupFooter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GroupFooter */ "ym2C");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../List */ "HP5x");








var DEFAULT_DROPPING_CSS_CLASS = 'is-dropping';
var GroupedListSection = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GroupedListSection, _super);
    function GroupedListSection(props) {
        var _this = _super.call(this, props) || this;
        _this._root = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._list = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._subGroupRefs = {};
        _this._droppingClassName = '';
        _this._onRenderGroupHeader = function (props) {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_GroupHeader__WEBPACK_IMPORTED_MODULE_4__["GroupHeader"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props));
        };
        _this._onRenderGroupShowAll = function (props) {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_GroupShowAll__WEBPACK_IMPORTED_MODULE_5__["GroupShowAll"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props));
        };
        _this._onRenderGroupFooter = function (props) {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_GroupFooter__WEBPACK_IMPORTED_MODULE_6__["GroupFooter"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props));
        };
        _this._renderSubGroup = function (subGroup, subGroupIndex) {
            var _a = _this.props, dragDropEvents = _a.dragDropEvents, dragDropHelper = _a.dragDropHelper, eventsToRegister = _a.eventsToRegister, getGroupItemLimit = _a.getGroupItemLimit, groupNestingDepth = _a.groupNestingDepth, groupProps = _a.groupProps, items = _a.items, headerProps = _a.headerProps, showAllProps = _a.showAllProps, footerProps = _a.footerProps, listProps = _a.listProps, onRenderCell = _a.onRenderCell, selection = _a.selection, selectionMode = _a.selectionMode, viewport = _a.viewport, onRenderGroupHeader = _a.onRenderGroupHeader, onRenderGroupShowAll = _a.onRenderGroupShowAll, onRenderGroupFooter = _a.onRenderGroupFooter, onShouldVirtualize = _a.onShouldVirtualize, group = _a.group, compact = _a.compact;
            var nestingDepth = subGroup.level ? subGroup.level + 1 : groupNestingDepth;
            return !subGroup || subGroup.count > 0 || (groupProps && groupProps.showEmptyGroups) ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](GroupedListSection, { ref: function (ref) { return (_this._subGroupRefs['subGroup_' + subGroupIndex] = ref); }, key: _this._getGroupKey(subGroup, subGroupIndex), dragDropEvents: dragDropEvents, dragDropHelper: dragDropHelper, eventsToRegister: eventsToRegister, footerProps: footerProps, getGroupItemLimit: getGroupItemLimit, group: subGroup, groupIndex: subGroupIndex, groupNestingDepth: nestingDepth, groupProps: groupProps, headerProps: headerProps, items: items, listProps: listProps, onRenderCell: onRenderCell, selection: selection, selectionMode: selectionMode, showAllProps: showAllProps, viewport: viewport, onRenderGroupHeader: onRenderGroupHeader, onRenderGroupShowAll: onRenderGroupShowAll, onRenderGroupFooter: onRenderGroupFooter, onShouldVirtualize: onShouldVirtualize, groups: group ? group.children : [], compact: compact })) : null;
        };
        /**
         * collect all the data we need to enable drag/drop for a group
         */
        _this._getGroupDragDropOptions = function () {
            var _a = _this.props, group = _a.group, groupIndex = _a.groupIndex, dragDropEvents = _a.dragDropEvents, eventsToRegister = _a.eventsToRegister;
            var options = {
                eventMap: eventsToRegister,
                selectionIndex: -1,
                context: { data: group, index: groupIndex, isGroup: true },
                updateDropState: _this._updateDroppingState,
                canDrag: dragDropEvents.canDrag,
                canDrop: dragDropEvents.canDrop,
                onDrop: dragDropEvents.onDrop,
                onDragStart: dragDropEvents.onDragStart,
                onDragEnter: dragDropEvents.onDragEnter,
                onDragLeave: dragDropEvents.onDragLeave,
                onDragEnd: dragDropEvents.onDragEnd,
                onDragOver: dragDropEvents.onDragOver,
            };
            return options;
        };
        /**
         * update groupIsDropping state based on the input value, which is used to change style during drag and drop
         *
         * @param newValue - new isDropping state value
         * @param event - the event trigger dropping state change which can be dragenter, dragleave etc
         */
        _this._updateDroppingState = function (newIsDropping, event) {
            var isDropping = _this.state.isDropping;
            var _a = _this.props, dragDropEvents = _a.dragDropEvents, group = _a.group;
            if (isDropping !== newIsDropping) {
                if (isDropping) {
                    if (dragDropEvents && dragDropEvents.onDragLeave) {
                        dragDropEvents.onDragLeave(group, event);
                    }
                }
                else {
                    if (dragDropEvents && dragDropEvents.onDragEnter) {
                        _this._droppingClassName = dragDropEvents.onDragEnter(group, event);
                    }
                }
                _this.setState({ isDropping: newIsDropping });
            }
        };
        var selection = props.selection, group = props.group;
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["initializeComponentRef"])(_this);
        _this._id = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getId"])('GroupedListSection');
        _this.state = {
            isDropping: false,
            isSelected: selection && group ? selection.isRangeSelected(group.startIndex, group.count) : false,
        };
        _this._events = new _Utilities__WEBPACK_IMPORTED_MODULE_2__["EventGroup"](_this);
        return _this;
    }
    GroupedListSection.prototype.componentDidMount = function () {
        var _a = this.props, dragDropHelper = _a.dragDropHelper, selection = _a.selection;
        if (dragDropHelper && this._root.current) {
            this._dragDropSubscription = dragDropHelper.subscribe(this._root.current, this._events, this._getGroupDragDropOptions());
        }
        if (selection) {
            this._events.on(selection, _utilities_selection_index__WEBPACK_IMPORTED_MODULE_3__["SELECTION_CHANGE"], this._onSelectionChange);
        }
    };
    GroupedListSection.prototype.componentWillUnmount = function () {
        this._events.dispose();
        if (this._dragDropSubscription) {
            this._dragDropSubscription.dispose();
        }
    };
    GroupedListSection.prototype.componentDidUpdate = function (previousProps) {
        if (this.props.group !== previousProps.group ||
            this.props.groupIndex !== previousProps.groupIndex ||
            this.props.dragDropHelper !== previousProps.dragDropHelper) {
            if (this._dragDropSubscription) {
                this._dragDropSubscription.dispose();
                delete this._dragDropSubscription;
            }
            if (this.props.dragDropHelper && this._root.current) {
                this._dragDropSubscription = this.props.dragDropHelper.subscribe(this._root.current, this._events, this._getGroupDragDropOptions());
            }
        }
    };
    GroupedListSection.prototype.render = function () {
        var _a = this.props, getGroupItemLimit = _a.getGroupItemLimit, group = _a.group, groupIndex = _a.groupIndex, headerProps = _a.headerProps, showAllProps = _a.showAllProps, footerProps = _a.footerProps, viewport = _a.viewport, selectionMode = _a.selectionMode, _b = _a.onRenderGroupHeader, onRenderGroupHeader = _b === void 0 ? this._onRenderGroupHeader : _b, _c = _a.onRenderGroupShowAll, onRenderGroupShowAll = _c === void 0 ? this._onRenderGroupShowAll : _c, _d = _a.onRenderGroupFooter, onRenderGroupFooter = _d === void 0 ? this._onRenderGroupFooter : _d, onShouldVirtualize = _a.onShouldVirtualize, groupedListClassNames = _a.groupedListClassNames, groups = _a.groups, compact = _a.compact, _e = _a.listProps, listProps = _e === void 0 ? {} : _e;
        var isSelected = this.state.isSelected;
        var renderCount = group && getGroupItemLimit ? getGroupItemLimit(group) : Infinity;
        var isShowAllVisible = group &&
            !group.children &&
            !group.isCollapsed &&
            !group.isShowingAll &&
            (group.count > renderCount || group.hasMoreData);
        var hasNestedGroups = group && group.children && group.children.length > 0;
        var version = listProps.version;
        var dividerProps = {
            group: group,
            groupIndex: groupIndex,
            groupLevel: group ? group.level : 0,
            isSelected: isSelected,
            selected: isSelected,
            viewport: viewport,
            selectionMode: selectionMode,
            groups: groups,
            compact: compact,
        };
        var ariaControlsProps = {
            groupedListId: this._id,
            ariaSetSize: groups ? groups.length : undefined,
            ariaPosInSet: groupIndex !== undefined ? groupIndex + 1 : undefined,
        };
        var groupHeaderProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, headerProps), dividerProps), ariaControlsProps);
        var groupShowAllProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, showAllProps), dividerProps);
        var groupFooterProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, footerProps), dividerProps);
        var isDraggable = !!this.props.dragDropHelper &&
            this._getGroupDragDropOptions().canDrag(group) &&
            !!this.props.dragDropEvents.canDragGroups;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ ref: this._root }, (isDraggable && { draggable: true }), { className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])(groupedListClassNames && groupedListClassNames.group, this._getDroppingClassName()), role: "presentation" }),
            onRenderGroupHeader(groupHeaderProps, this._onRenderGroupHeader),
            group && group.isCollapsed ? null : hasNestedGroups ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_List__WEBPACK_IMPORTED_MODULE_7__["List"], { role: "presentation", ref: this._list, items: group ? group.children : [], onRenderCell: this._renderSubGroup, getItemCountForPage: this._returnOne, onShouldVirtualize: onShouldVirtualize, version: version, id: this._id })) : (this._onRenderGroup(renderCount)),
            group && group.isCollapsed
                ? null
                : isShowAllVisible && onRenderGroupShowAll(groupShowAllProps, this._onRenderGroupShowAll),
            onRenderGroupFooter(groupFooterProps, this._onRenderGroupFooter)));
    };
    GroupedListSection.prototype.forceUpdate = function () {
        _super.prototype.forceUpdate.call(this);
        this.forceListUpdate();
    };
    GroupedListSection.prototype.forceListUpdate = function () {
        var group = this.props.group;
        if (this._list.current) {
            this._list.current.forceUpdate();
            if (group && group.children && group.children.length > 0) {
                var subGroupCount = group.children.length;
                for (var i = 0; i < subGroupCount; i++) {
                    var subGroup = this._list.current.pageRefs['subGroup_' + String(i)];
                    if (subGroup) {
                        subGroup.forceListUpdate();
                    }
                }
            }
        }
        else {
            var subGroup = this._subGroupRefs['subGroup_' + String(0)];
            if (subGroup) {
                subGroup.forceListUpdate();
            }
        }
    };
    GroupedListSection.prototype._onSelectionChange = function () {
        var _a = this.props, group = _a.group, selection = _a.selection;
        if (selection && group) {
            var isSelected = selection.isRangeSelected(group.startIndex, group.count);
            if (isSelected !== this.state.isSelected) {
                this.setState({ isSelected: isSelected });
            }
        }
    };
    GroupedListSection.prototype._onRenderGroupCell = function (onRenderCell, groupNestingDepth) {
        return function (item, itemIndex) {
            return onRenderCell(groupNestingDepth, item, itemIndex);
        };
    };
    GroupedListSection.prototype._onRenderGroup = function (renderCount) {
        var _a = this.props, group = _a.group, items = _a.items, onRenderCell = _a.onRenderCell, listProps = _a.listProps, groupNestingDepth = _a.groupNestingDepth, onShouldVirtualize = _a.onShouldVirtualize, groupProps = _a.groupProps;
        var count = group && !group.isShowingAll ? group.count : items.length;
        var startIndex = group ? group.startIndex : 0;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_List__WEBPACK_IMPORTED_MODULE_7__["List"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ role: groupProps && groupProps.role ? groupProps.role : 'presentation', items: items, onRenderCell: this._onRenderGroupCell(onRenderCell, groupNestingDepth), ref: this._list, renderCount: Math.min(count, renderCount), startIndex: startIndex, onShouldVirtualize: onShouldVirtualize, id: this._id }, listProps)));
    };
    GroupedListSection.prototype._returnOne = function () {
        return 1;
    };
    GroupedListSection.prototype._getGroupKey = function (group, index) {
        return 'group-' + (group && group.key ? group.key : String(group.level) + String(index));
    };
    /**
     * get the correct css class to reflect the dropping state for a given group
     *
     * If the group is the current drop target, return the default dropping class name
     * Otherwise, return '';
     *
     */
    GroupedListSection.prototype._getDroppingClassName = function () {
        var isDropping = this.state.isDropping;
        var _a = this.props, group = _a.group, groupedListClassNames = _a.groupedListClassNames;
        isDropping = !!(group && isDropping);
        return Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])(isDropping && this._droppingClassName, isDropping && DEFAULT_DROPPING_CSS_CLASS, isDropping && groupedListClassNames && groupedListClassNames.groupIsDropping);
    };
    return GroupedListSection;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=GroupedListSection.js.map

/***/ }),

/***/ "ED3/":
/*!******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/react-hooks@7.13.9_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/react-hooks/lib/useSetInterval.js ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: useSetInterval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSetInterval", function() { return useSetInterval; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useConst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useConst */ "SKm6");


/**
 *  Returns a wrapper function for `setInterval` which automatically handles disposal.
 */
var useSetInterval = function () {
    var intervalIds = Object(_useConst__WEBPACK_IMPORTED_MODULE_1__["useConst"])({});
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () { return function () {
        for (var _i = 0, _a = Object.keys(intervalIds); _i < _a.length; _i++) {
            var id = _a[_i];
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            clearInterval(id);
        }
    }; }, 
    // useConst ensures this will never change, but react-hooks/exhaustive-deps doesn't know that
    [intervalIds]);
    return Object(_useConst__WEBPACK_IMPORTED_MODULE_1__["useConst"])({
        setInterval: function (func, duration) {
            var id = setInterval(func, duration);
            intervalIds[id] = 1;
            return id;
        },
        clearInterval: function (id) {
            delete intervalIds[id];
            clearInterval(id);
        },
    });
};
//# sourceMappingURL=useSetInterval.js.map

/***/ }),

/***/ "Ea+4":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Layer/LayerHost.js ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: LayerHost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerHost", function() { return LayerHost; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _Layer_notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Layer.notification */ "V7Tt");




var LayerHost = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LayerHost, _super);
    function LayerHost() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LayerHost.prototype.shouldComponentUpdate = function () {
        return false;
    };
    LayerHost.prototype.componentDidMount = function () {
        Object(_Layer_notification__WEBPACK_IMPORTED_MODULE_3__["notifyHostChanged"])(this.props.id);
    };
    LayerHost.prototype.componentWillUnmount = function () {
        Object(_Layer_notification__WEBPACK_IMPORTED_MODULE_3__["notifyHostChanged"])(this.props.id);
    };
    LayerHost.prototype.render = function () {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props, { className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])('ms-LayerHost', this.props.className) }));
    };
    return LayerHost;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=LayerHost.js.map

/***/ }),

/***/ "ElRa":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Checkbox/Checkbox.base.js ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: CheckboxBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxBase", function() { return CheckboxBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Icon */ "56LG");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _KeytipData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../KeytipData */ "iaSa");





var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
var CheckboxBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CheckboxBase, _super);
    /**
     * Initialize a new instance of the Checkbox
     * @param props - Props for the component
     * @param context - Context or initial state for the base component.
     */
    function CheckboxBase(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this._checkBox = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._renderContent = function (checked, indeterminate, keytipAttributes) {
            if (keytipAttributes === void 0) { keytipAttributes = {}; }
            var _a = _this.props, disabled = _a.disabled, inputProps = _a.inputProps, name = _a.name, ariaLabel = _a.ariaLabel, ariaLabelledBy = _a.ariaLabelledBy, ariaDescribedBy = _a.ariaDescribedBy, _b = _a.onRenderLabel, onRenderLabel = _b === void 0 ? _this._onRenderLabel : _b, checkmarkIconProps = _a.checkmarkIconProps, ariaPositionInSet = _a.ariaPositionInSet, ariaSetSize = _a.ariaSetSize, title = _a.title, label = _a.label;
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _this._classNames.root, title: title },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Utilities__WEBPACK_IMPORTED_MODULE_2__["FocusRects"], null),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ type: "checkbox" }, inputProps, { "data-ktp-execute-target": keytipAttributes['data-ktp-execute-target'], checked: checked, disabled: disabled, className: _this._classNames.input, ref: _this._checkBox, name: name, id: _this._id, title: title, onChange: _this._onChange, onFocus: _this._onFocus, onBlur: _this._onBlur, "aria-disabled": disabled, "aria-label": ariaLabel || label, "aria-labelledby": ariaLabelledBy, "aria-describedby": Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["mergeAriaAttributeValues"])(ariaDescribedBy, keytipAttributes['aria-describedby']), "aria-posinset": ariaPositionInSet, "aria-setsize": ariaSetSize, "aria-checked": indeterminate ? 'mixed' : checked ? 'true' : 'false' })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { className: _this._classNames.label, htmlFor: _this._id },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _this._classNames.checkbox, "data-ktp-target": keytipAttributes['data-ktp-target'] },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Icon__WEBPACK_IMPORTED_MODULE_3__["Icon"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ iconName: "CheckMark" }, checkmarkIconProps, { className: _this._classNames.checkmark }))),
                    onRenderLabel(_this.props, _this._onRenderLabel))));
        };
        _this._onFocus = function (ev) {
            var inputProps = _this.props.inputProps;
            if (inputProps && inputProps.onFocus) {
                inputProps.onFocus(ev);
            }
        };
        _this._onBlur = function (ev) {
            var inputProps = _this.props.inputProps;
            if (inputProps && inputProps.onBlur) {
                inputProps.onBlur(ev);
            }
        };
        _this._onChange = function (ev) {
            var onChange = _this.props.onChange;
            var _a = _this.state, isChecked = _a.isChecked, isIndeterminate = _a.isIndeterminate;
            if (!isIndeterminate) {
                if (onChange) {
                    onChange(ev, !isChecked);
                }
                if (_this.props.checked === undefined) {
                    _this.setState({ isChecked: !isChecked });
                }
            }
            else {
                // If indeterminate, clicking the checkbox *only* removes the indeterminate state (or if
                // controlled, lets the consumer know to change it by calling onChange). It doesn't
                // change the checked state.
                if (onChange) {
                    onChange(ev, isChecked);
                }
                if (_this.props.indeterminate === undefined) {
                    _this.setState({ isIndeterminate: false });
                }
            }
        };
        _this._onRenderLabel = function (props) {
            var label = props.label, title = props.title;
            return label ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { "aria-hidden": "true", className: _this._classNames.text, title: title }, label)) : null;
        };
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["initializeComponentRef"])(_this);
        if (true) {
            Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["warnMutuallyExclusive"])('Checkbox', props, {
                checked: 'defaultChecked',
                indeterminate: 'defaultIndeterminate',
            });
        }
        _this._id = _this.props.id || Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getId"])('checkbox-');
        _this.state = {
            isChecked: !!(props.checked !== undefined ? props.checked : props.defaultChecked),
            isIndeterminate: !!(props.indeterminate !== undefined ? props.indeterminate : props.defaultIndeterminate),
        };
        return _this;
    }
    CheckboxBase.getDerivedStateFromProps = function (nextProps, prevState) {
        var stateUpdate = {};
        if (nextProps.indeterminate !== undefined) {
            stateUpdate.isIndeterminate = !!nextProps.indeterminate;
        }
        if (nextProps.checked !== undefined) {
            stateUpdate.isChecked = !!nextProps.checked;
        }
        return Object.keys(stateUpdate).length ? stateUpdate : null;
    };
    /**
     * Render the Checkbox based on passed props
     */
    CheckboxBase.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, disabled = _a.disabled, boxSide = _a.boxSide, theme = _a.theme, styles = _a.styles, _b = _a.onRenderLabel, onRenderLabel = _b === void 0 ? this._onRenderLabel : _b, keytipProps = _a.keytipProps;
        var _c = this.state, isChecked = _c.isChecked, isIndeterminate = _c.isIndeterminate;
        this._classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            disabled: disabled,
            indeterminate: isIndeterminate,
            checked: isChecked,
            reversed: boxSide !== 'start',
            isUsingCustomLabelRender: onRenderLabel !== this._onRenderLabel,
        });
        if (keytipProps) {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_KeytipData__WEBPACK_IMPORTED_MODULE_4__["KeytipData"], { keytipProps: keytipProps, disabled: disabled }, function (keytipAttributes) { return _this._renderContent(isChecked, isIndeterminate, keytipAttributes); }));
        }
        return this._renderContent(isChecked, isIndeterminate);
    };
    Object.defineProperty(CheckboxBase.prototype, "indeterminate", {
        get: function () {
            return !!this.state.isIndeterminate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckboxBase.prototype, "checked", {
        get: function () {
            return !!this.state.isChecked;
        },
        enumerable: true,
        configurable: true
    });
    CheckboxBase.prototype.focus = function () {
        if (this._checkBox.current) {
            this._checkBox.current.focus();
        }
    };
    CheckboxBase.defaultProps = {
        boxSide: 'start',
    };
    return CheckboxBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=Checkbox.base.js.map

/***/ }),

/***/ "Ev1G":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/utilities/keytips/KeytipConfig.js ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: buildKeytipConfigMap, constructKeytip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildKeytipConfigMap", function() { return buildKeytipConfigMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constructKeytip", function() { return constructKeytip; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Builds a map of ID to IKeytipProps
 *
 * @param config - IKeytipConfig object
 * @returns Config map
 */
function buildKeytipConfigMap(config) {
    var configMap = {};
    for (var _i = 0, _a = config.keytips; _i < _a.length; _i++) {
        var keytip = _a[_i];
        constructKeytip(configMap, [], keytip);
    }
    return configMap;
}
/**
 * Constructs a keytip from an IKeytipConfigItem and puts it in the configMap
 *
 * @param configMap - IKeytipConfigMap to store the keytip in
 * @param parentSequence - string of the parent keytip
 * @param keytip - IKeytipConfigItem data
 */
function constructKeytip(configMap, parentSequence, keytip) {
    // Compute full key sequence
    var sequence = keytip.sequence ? keytip.sequence : keytip.content.toLocaleLowerCase();
    var keytipSequence = parentSequence.concat(sequence);
    // Save props in configMap
    var keytipProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, keytip.optionalProps), { keySequences: keytipSequence, content: keytip.content });
    configMap[keytip.id] = keytipProps;
    if (keytip.children) {
        for (var _i = 0, _a = keytip.children; _i < _a.length; _i++) {
            var child = _a[_i];
            // Create keytips for all children
            constructKeytip(configMap, keytipSequence, child);
        }
    }
}
//# sourceMappingURL=KeytipConfig.js.map

/***/ }),

/***/ "Eyzw":
/*!************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/set-version@7.0.23/node_modules/@uifabric/set-version/lib/index.js ***!
  \************************************************************************************************************************************/
/*! exports provided: setVersion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setVersion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setVersion */ "guqf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setVersion", function() { return _setVersion__WEBPACK_IMPORTED_MODULE_0__["setVersion"]; });



Object(_setVersion__WEBPACK_IMPORTED_MODULE_0__["setVersion"])('@uifabric/set-version', '6.0.0');
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "F3Wv":
/*!***********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Link.js ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/Link.js


/***/ }),

/***/ "FaVw":
/*!************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Dialog/Dialog.base.js ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: DialogBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogBase", function() { return DialogBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _DialogContent_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DialogContent.types */ "A5R/");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Modal */ "Vr3T");
/* harmony import */ var _utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utilities/decorators/withResponsiveMode */ "5qgq");
/* harmony import */ var _utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _DialogContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DialogContent */ "+dJA");






var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();

var DefaultModalProps = {
    isDarkOverlay: false,
    isBlocking: false,
    className: '',
    containerClassName: '',
    topOffsetFixed: false,
};
var DefaultDialogContentProps = {
    type: _DialogContent_types__WEBPACK_IMPORTED_MODULE_3__["DialogType"].normal,
    className: '',
    topButtonsProps: [],
};
var DialogBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DialogBase, _super);
    function DialogBase(props) {
        var _this = _super.call(this, props) || this;
        _this._getSubTextId = function () {
            // eslint-disable-next-line deprecation/deprecation
            var _a = _this.props, ariaDescribedById = _a.ariaDescribedById, modalProps = _a.modalProps, dialogContentProps = _a.dialogContentProps, subText = _a.subText;
            var id = (modalProps && modalProps.subtitleAriaId) || ariaDescribedById;
            if (!id) {
                id = ((dialogContentProps && dialogContentProps.subText) || subText) && _this._defaultSubTextId;
            }
            return id;
        };
        _this._getTitleTextId = function () {
            // eslint-disable-next-line deprecation/deprecation
            var _a = _this.props, ariaLabelledById = _a.ariaLabelledById, modalProps = _a.modalProps, dialogContentProps = _a.dialogContentProps, title = _a.title;
            var id = (modalProps && modalProps.titleAriaId) || ariaLabelledById;
            if (!id) {
                id = ((dialogContentProps && dialogContentProps.title) || title) && _this._defaultTitleTextId;
            }
            return id;
        };
        _this._id = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getId"])('Dialog');
        _this._defaultTitleTextId = _this._id + '-title';
        _this._defaultSubTextId = _this._id + '-subText';
        if (true) {
            Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["warnDeprecations"])('Dialog', props, {
                isOpen: 'hidden',
                type: 'dialogContentProps.type',
                subText: 'dialogContentProps.subText',
                contentClassName: 'dialogContentProps.className',
                topButtonsProps: 'dialogContentProps.topButtonsProps',
                className: 'modalProps.className',
                isDarkOverlay: 'modalProps.isDarkOverlay',
                isBlocking: 'modalProps.isBlocking',
                containerClassName: 'modalProps.containerClassName',
                onDismissed: 'modalProps.onDismissed',
                onLayerDidMount: 'modalProps.layerProps.onLayerDidMount',
                ariaDescribedById: 'modalProps.subtitleAriaId',
                ariaLabelledById: 'modalProps.titleAriaId',
            });
        }
        return _this;
    }
    DialogBase.prototype.render = function () {
        var _a, _b;
        var _c = this.props, 
        /* eslint-disable deprecation/deprecation */
        className = _c.className, containerClassName = _c.containerClassName, contentClassName = _c.contentClassName, elementToFocusOnDismiss = _c.elementToFocusOnDismiss, firstFocusableSelector = _c.firstFocusableSelector, forceFocusInsideTrap = _c.forceFocusInsideTrap, styles = _c.styles, hidden = _c.hidden, ignoreExternalFocusing = _c.ignoreExternalFocusing, isBlocking = _c.isBlocking, isClickableOutsideFocusTrap = _c.isClickableOutsideFocusTrap, isDarkOverlay = _c.isDarkOverlay, isOpen = _c.isOpen, onDismiss = _c.onDismiss, onDismissed = _c.onDismissed, onLayerDidMount = _c.onLayerDidMount, responsiveMode = _c.responsiveMode, subText = _c.subText, theme = _c.theme, title = _c.title, topButtonsProps = _c.topButtonsProps, type = _c.type, 
        /* eslint-enable deprecation/deprecation */
        minWidth = _c.minWidth, maxWidth = _c.maxWidth, modalProps = _c.modalProps;
        var mergedLayerProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (modalProps ? modalProps.layerProps : { onLayerDidMount: onLayerDidMount }));
        if (onLayerDidMount && !mergedLayerProps.onLayerDidMount) {
            mergedLayerProps.onLayerDidMount = onLayerDidMount;
        }
        var dialogDraggableClassName;
        var dragOptions;
        // if we are draggable, make sure we are using the correct
        // draggable classname and selectors
        if (modalProps && modalProps.dragOptions && !modalProps.dragOptions.dragHandleSelector) {
            dialogDraggableClassName = 'ms-Dialog-draggable-header';
            dragOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, modalProps.dragOptions), { dragHandleSelector: "." + dialogDraggableClassName });
        }
        else {
            dragOptions = modalProps && modalProps.dragOptions;
        }
        var mergedModalProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, DefaultModalProps), { className: className,
            containerClassName: containerClassName,
            isBlocking: isBlocking,
            isDarkOverlay: isDarkOverlay,
            onDismissed: onDismissed }), modalProps), { layerProps: mergedLayerProps, dragOptions: dragOptions });
        var dialogContentProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ className: contentClassName, subText: subText,
            title: title,
            topButtonsProps: topButtonsProps,
            type: type }, DefaultDialogContentProps), this.props.dialogContentProps), { draggableHeaderClassName: dialogDraggableClassName, titleProps: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ 
                // eslint-disable-next-line deprecation/deprecation
                id: ((_a = this.props.dialogContentProps) === null || _a === void 0 ? void 0 : _a.titleId) || this._defaultTitleTextId }, (_b = this.props.dialogContentProps) === null || _b === void 0 ? void 0 : _b.titleProps) });
        var classNames = getClassNames(styles, {
            theme: theme,
            className: mergedModalProps.className,
            containerClassName: mergedModalProps.containerClassName,
            hidden: hidden,
            dialogDefaultMinWidth: minWidth,
            dialogDefaultMaxWidth: maxWidth,
        });
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Modal__WEBPACK_IMPORTED_MODULE_4__["Modal"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ elementToFocusOnDismiss: elementToFocusOnDismiss, firstFocusableSelector: firstFocusableSelector, forceFocusInsideTrap: forceFocusInsideTrap, ignoreExternalFocusing: ignoreExternalFocusing, isClickableOutsideFocusTrap: isClickableOutsideFocusTrap, onDismissed: mergedModalProps.onDismissed, responsiveMode: responsiveMode }, mergedModalProps, { isDarkOverlay: mergedModalProps.isDarkOverlay, isBlocking: mergedModalProps.isBlocking, isOpen: isOpen !== undefined ? isOpen : !hidden, className: classNames.root, containerClassName: classNames.main, onDismiss: onDismiss ? onDismiss : mergedModalProps.onDismiss, subtitleAriaId: this._getSubTextId(), titleAriaId: this._getTitleTextId() }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_DialogContent__WEBPACK_IMPORTED_MODULE_6__["DialogContent"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ subTextId: this._defaultSubTextId, title: dialogContentProps.title, subText: dialogContentProps.subText, showCloseButton: mergedModalProps.isBlocking, topButtonsProps: dialogContentProps.topButtonsProps, type: dialogContentProps.type, onDismiss: onDismiss ? onDismiss : dialogContentProps.onDismiss, className: dialogContentProps.className }, dialogContentProps), this.props.children)));
    };
    DialogBase.defaultProps = {
        hidden: true,
    };
    DialogBase = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_5__["withResponsiveMode"]
    ], DialogBase);
    return DialogBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=Dialog.base.js.map

/***/ }),

/***/ "G9th":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupHeader.js ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: GroupHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupHeader", function() { return GroupHeader; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _GroupHeader_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GroupHeader.styles */ "HKbE");
/* harmony import */ var _GroupHeader_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GroupHeader.base */ "pf3H");



var GroupHeader = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_GroupHeader_base__WEBPACK_IMPORTED_MODULE_2__["GroupHeaderBase"], _GroupHeader_styles__WEBPACK_IMPORTED_MODULE_1__["getStyles"], undefined, {
    scope: 'GroupHeader',
});
//# sourceMappingURL=GroupHeader.js.map

/***/ }),

/***/ "GDPH":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupedList.js ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: GroupedList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupedList", function() { return GroupedList; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _GroupedList_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GroupedList.styles */ "9jil");
/* harmony import */ var _GroupedList_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GroupedList.base */ "9lkW");



var GroupedList = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_GroupedList_base__WEBPACK_IMPORTED_MODULE_2__["GroupedListBase"], _GroupedList_styles__WEBPACK_IMPORTED_MODULE_1__["getStyles"], undefined, {
    scope: 'GroupedList',
});
//# sourceMappingURL=GroupedList.js.map

/***/ }),

/***/ "GKG/":
/*!******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/utilities/keytips/index.js ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: transitionKeysAreEqual, transitionKeysContain, buildKeytipConfigMap, constructKeytip, KTP_PREFIX, KTP_SEPARATOR, KTP_FULL_PREFIX, DATAKTP_TARGET, DATAKTP_EXECUTE_TARGET, DATAKTP_ARIA_TARGET, KTP_LAYER_ID, KTP_ARIA_SEPARATOR, KeytipEvents, KeytipManager, sequencesToID, mergeOverflows, ktpTargetFromSequences, ktpTargetFromId, getAriaDescribedBy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IKeytipTransitionKey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IKeytipTransitionKey */ "7OcI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transitionKeysAreEqual", function() { return _IKeytipTransitionKey__WEBPACK_IMPORTED_MODULE_0__["transitionKeysAreEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transitionKeysContain", function() { return _IKeytipTransitionKey__WEBPACK_IMPORTED_MODULE_0__["transitionKeysContain"]; });

/* harmony import */ var _KeytipConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KeytipConfig */ "Ev1G");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildKeytipConfigMap", function() { return _KeytipConfig__WEBPACK_IMPORTED_MODULE_1__["buildKeytipConfigMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "constructKeytip", function() { return _KeytipConfig__WEBPACK_IMPORTED_MODULE_1__["constructKeytip"]; });

/* harmony import */ var _KeytipConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./KeytipConstants */ "gLqG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KTP_PREFIX", function() { return _KeytipConstants__WEBPACK_IMPORTED_MODULE_2__["KTP_PREFIX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KTP_SEPARATOR", function() { return _KeytipConstants__WEBPACK_IMPORTED_MODULE_2__["KTP_SEPARATOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KTP_FULL_PREFIX", function() { return _KeytipConstants__WEBPACK_IMPORTED_MODULE_2__["KTP_FULL_PREFIX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DATAKTP_TARGET", function() { return _KeytipConstants__WEBPACK_IMPORTED_MODULE_2__["DATAKTP_TARGET"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DATAKTP_EXECUTE_TARGET", function() { return _KeytipConstants__WEBPACK_IMPORTED_MODULE_2__["DATAKTP_EXECUTE_TARGET"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DATAKTP_ARIA_TARGET", function() { return _KeytipConstants__WEBPACK_IMPORTED_MODULE_2__["DATAKTP_ARIA_TARGET"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KTP_LAYER_ID", function() { return _KeytipConstants__WEBPACK_IMPORTED_MODULE_2__["KTP_LAYER_ID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KTP_ARIA_SEPARATOR", function() { return _KeytipConstants__WEBPACK_IMPORTED_MODULE_2__["KTP_ARIA_SEPARATOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeytipEvents", function() { return _KeytipConstants__WEBPACK_IMPORTED_MODULE_2__["KeytipEvents"]; });

/* harmony import */ var _KeytipManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./KeytipManager */ "PfLA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeytipManager", function() { return _KeytipManager__WEBPACK_IMPORTED_MODULE_3__["KeytipManager"]; });

/* harmony import */ var _KeytipUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./KeytipUtils */ "OzR5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sequencesToID", function() { return _KeytipUtils__WEBPACK_IMPORTED_MODULE_4__["sequencesToID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeOverflows", function() { return _KeytipUtils__WEBPACK_IMPORTED_MODULE_4__["mergeOverflows"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ktpTargetFromSequences", function() { return _KeytipUtils__WEBPACK_IMPORTED_MODULE_4__["ktpTargetFromSequences"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ktpTargetFromId", function() { return _KeytipUtils__WEBPACK_IMPORTED_MODULE_4__["ktpTargetFromId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAriaDescribedBy", function() { return _KeytipUtils__WEBPACK_IMPORTED_MODULE_4__["getAriaDescribedBy"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "HKbE":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupHeader.styles.js ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "PL71");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _DetailsList_DetailsRow_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DetailsList/DetailsRow.styles */ "tCYI");
/* harmony import */ var _DetailsList_DetailsRowCheck_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DetailsList/DetailsRowCheck.styles */ "+m1z");
/* harmony import */ var _GroupSpacer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GroupSpacer */ "oao7");




// For every group level there is a GroupSpacer added. Importing this const to have the source value in one place.

var GlobalClassNames = {
    root: 'ms-GroupHeader',
    compact: 'ms-GroupHeader--compact',
    check: 'ms-GroupHeader-check',
    dropIcon: 'ms-GroupHeader-dropIcon',
    expand: 'ms-GroupHeader-expand',
    isCollapsed: 'is-collapsed',
    title: 'ms-GroupHeader-title',
    isSelected: 'is-selected',
    iconTag: 'ms-Icon--Tag',
    group: 'ms-GroupedList-group',
    isDropping: 'is-dropping',
};
var beziers = {
    easeOutCirc: 'cubic-bezier(0.075, 0.820, 0.165, 1.000)',
    easeOutSine: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
    easeInBack: 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
};
var DEFAULT_GROUP_HEADER_HEIGHT = 48;
var COMPACT_GROUP_HEADER_HEIGHT = 40;
var getStyles = function (props) {
    var _a, _b, _c, _d, _e;
    var theme = props.theme, className = props.className, selected = props.selected, isCollapsed = props.isCollapsed, compact = props.compact;
    // padding from the source to align GroupHeader title with DetailsRow's first cell.
    var cellLeftPadding = _DetailsList_DetailsRow_styles__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CELL_STYLE_PROPS"].cellLeftPadding;
    var finalRowHeight = compact ? COMPACT_GROUP_HEADER_HEIGHT : DEFAULT_GROUP_HEADER_HEIGHT;
    var semanticColors = theme.semanticColors, palette = theme.palette, fonts = theme.fonts;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
    var checkExpandResetStyles = [
        Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getFocusStyle"])(theme),
        {
            cursor: 'default',
            background: 'none',
            backgroundColor: 'transparent',
            border: 'none',
            padding: 0,
        },
    ];
    return {
        root: [
            classNames.root,
            Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getFocusStyle"])(theme),
            theme.fonts.medium,
            {
                // keep the border for height but color it so it's invisible.
                borderBottom: "1px solid " + semanticColors.listBackground,
                cursor: 'default',
                userSelect: 'none',
                selectors: (_a = {
                        ':hover': {
                            background: semanticColors.listItemBackgroundHovered,
                            color: semanticColors.actionLinkHovered,
                        }
                    },
                    _a["&:hover ." + classNames.check] = {
                        opacity: 1,
                    },
                    _a["." + _Utilities__WEBPACK_IMPORTED_MODULE_1__["IsFocusVisibleClassName"] + " &:focus ." + classNames.check] = {
                        opacity: 1,
                    },
                    _a[":global(." + classNames.group + "." + classNames.isDropping + ")"] = {
                        selectors: (_b = {},
                            _b["& > ." + classNames.root + " ." + classNames.dropIcon] = {
                                transition: "transform " + _Styling__WEBPACK_IMPORTED_MODULE_0__["AnimationVariables"].durationValue4 + " " + beziers.easeOutCirc + " " +
                                    ("opacity " + _Styling__WEBPACK_IMPORTED_MODULE_0__["AnimationVariables"].durationValue1 + " " + beziers.easeOutSine),
                                transitionDelay: _Styling__WEBPACK_IMPORTED_MODULE_0__["AnimationVariables"].durationValue3,
                                opacity: 1,
                                transform: "rotate(0.2deg) scale(1);",
                            },
                            _b["." + classNames.check] = {
                                opacity: 0,
                            },
                            _b),
                    },
                    _a),
            },
            selected && [
                classNames.isSelected,
                {
                    background: semanticColors.listItemBackgroundChecked,
                    selectors: (_c = {
                            ':hover': {
                                background: semanticColors.listItemBackgroundCheckedHovered,
                            }
                        },
                        _c["" + classNames.check] = {
                            opacity: 1,
                        },
                        _c),
                },
            ],
            compact && [classNames.compact, { border: 'none' }],
            className,
        ],
        groupHeaderContainer: [
            {
                display: 'flex',
                alignItems: 'center',
                height: finalRowHeight,
            },
        ],
        headerCount: [
            {
                padding: '0px 4px',
            },
        ],
        check: [
            classNames.check,
            checkExpandResetStyles,
            {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                // paddingTop and marginTop brought from the DetailsRow.styles.ts with explanation below.
                // Ensure that the check cell covers the top border of the cell.
                // This ensures the click target does not leave a spot which would
                // cause other items to be deselected.
                paddingTop: 1,
                marginTop: -1,
                opacity: 0,
                width: _DetailsList_DetailsRowCheck_styles__WEBPACK_IMPORTED_MODULE_3__["CHECK_CELL_WIDTH"],
                height: finalRowHeight,
                selectors: (_d = {},
                    _d["." + _Utilities__WEBPACK_IMPORTED_MODULE_1__["IsFocusVisibleClassName"] + " &:focus"] = {
                        opacity: 1,
                    },
                    _d),
            },
        ],
        expand: [
            classNames.expand,
            checkExpandResetStyles,
            {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: fonts.small.fontSize,
                width: _GroupSpacer__WEBPACK_IMPORTED_MODULE_4__["SPACER_WIDTH"],
                height: finalRowHeight,
                color: selected ? palette.neutralPrimary : palette.neutralSecondary,
                selectors: {
                    ':hover': {
                        backgroundColor: selected ? palette.neutralQuaternary : palette.neutralLight,
                    },
                    ':active': {
                        backgroundColor: selected ? palette.neutralTertiaryAlt : palette.neutralQuaternaryAlt,
                    },
                },
            },
        ],
        expandIsCollapsed: [
            isCollapsed
                ? [
                    classNames.isCollapsed,
                    {
                        transform: 'rotate(0deg)',
                        transformOrigin: '50% 50%',
                        transition: 'transform .1s linear',
                    },
                ]
                : {
                    transform: Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["getRTL"])(theme) ? 'rotate(-90deg)' : 'rotate(90deg)',
                    transformOrigin: '50% 50%',
                    transition: 'transform .1s linear',
                },
        ],
        title: [
            classNames.title,
            {
                paddingLeft: cellLeftPadding,
                fontSize: compact ? fonts.medium.fontSize : fonts.mediumPlus.fontSize,
                fontWeight: isCollapsed ? _Styling__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].regular : _Styling__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].semibold,
                cursor: 'pointer',
                outline: 0,
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
            },
        ],
        dropIcon: [
            classNames.dropIcon,
            {
                position: 'absolute',
                left: -26,
                fontSize: _Styling__WEBPACK_IMPORTED_MODULE_0__["IconFontSizes"].large,
                color: palette.neutralSecondary,
                transition: "transform " + _Styling__WEBPACK_IMPORTED_MODULE_0__["AnimationVariables"].durationValue2 + " " + beziers.easeInBack + ", " +
                    ("opacity " + _Styling__WEBPACK_IMPORTED_MODULE_0__["AnimationVariables"].durationValue4 + " " + beziers.easeOutSine),
                opacity: 0,
                transform: 'rotate(0.2deg) scale(0.65)',
                transformOrigin: '10px 10px',
                selectors: (_e = {},
                    _e[":global(." + classNames.iconTag + ")"] = {
                        position: 'absolute',
                    },
                    _e),
            },
        ],
    };
};
//# sourceMappingURL=GroupHeader.styles.js.map

/***/ }),

/***/ "HP5x":
/*!***********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/List.js ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/List.js


/***/ }),

/***/ "I5L8":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupFooter.styles.js ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "PL71");

var GlobalClassNames = {
    root: 'ms-groupFooter',
};
var getStyles = function (props) {
    var theme = props.theme, className = props.className;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
    return {
        root: [
            theme.fonts.medium,
            classNames.root,
            {
                position: 'relative',
                padding: '5px 38px',
            },
            className,
        ],
    };
};
//# sourceMappingURL=GroupFooter.styles.js.map

/***/ }),

/***/ "ISIA":
/*!************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Check.js ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/./lib/Check.js
var pkg = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
module.exports = pkg.workaround_Check;

/***/ }),

/***/ "IsAY":
/*!****************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Icon/index.js ***!
  \****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/./lib/components/Icon/index.js
var pkg = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
module.exports = pkg.workaround_IconIndex;

/***/ }),

/***/ "JBVq":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsList.styles.js ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "PL71");

var GlobalClassNames = {
    root: 'ms-DetailsList',
    compact: 'ms-DetailsList--Compact',
    contentWrapper: 'ms-DetailsList-contentWrapper',
    headerWrapper: 'ms-DetailsList-headerWrapper',
    isFixed: 'is-fixed',
    isHorizontalConstrained: 'is-horizontalConstrained',
    listCell: 'ms-List-cell',
};
var getStyles = function (props) {
    var _a, _b;
    var theme = props.theme, className = props.className, isHorizontalConstrained = props.isHorizontalConstrained, compact = props.compact, isFixed = props.isFixed;
    var semanticColors = theme.semanticColors;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
    return {
        root: [
            classNames.root,
            theme.fonts.small,
            {
                position: 'relative',
                color: semanticColors.listText,
                selectors: (_a = {},
                    _a["& ." + classNames.listCell] = {
                        minHeight: 38,
                        wordBreak: 'break-word',
                    },
                    _a),
            },
            isFixed && classNames.isFixed,
            compact && [
                classNames.compact,
                {
                    selectors: (_b = {},
                        _b["." + classNames.listCell] = {
                            minHeight: 32,
                        },
                        _b),
                },
            ],
            isHorizontalConstrained && [
                classNames.isHorizontalConstrained,
                {
                    overflowX: 'auto',
                    overflowY: 'visible',
                    WebkitOverflowScrolling: 'touch',
                },
            ],
            className,
        ],
        focusZone: [
            {
                display: 'inline-block',
                minWidth: '100%',
                minHeight: 1,
            },
        ],
        headerWrapper: classNames.headerWrapper,
        contentWrapper: classNames.contentWrapper,
    };
};
//# sourceMappingURL=DetailsList.styles.js.map

/***/ }),

/***/ "K2Cj":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupShowAll.styles.js ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "PL71");

var GlobalClassNames = {
    root: 'ms-GroupShowAll',
    link: 'ms-Link',
};
var getStyles = function (props) {
    var _a;
    var theme = props.theme;
    var fonts = theme.fonts;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
    return {
        root: [
            classNames.root,
            {
                position: 'relative',
                padding: '10px 84px',
                cursor: 'pointer',
                selectors: (_a = {},
                    _a["." + classNames.link] = {
                        fontSize: fonts.small.fontSize,
                    },
                    _a),
            },
        ],
    };
};
//# sourceMappingURL=GroupShowAll.styles.js.map

/***/ }),

/***/ "KQ3P":
/*!************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Layer/Layer.styles.js ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "PL71");

var GlobalClassNames = {
    root: 'ms-Layer',
    rootNoHost: 'ms-Layer--fixed',
    content: 'ms-Layer-content',
};
var getStyles = function (props) {
    var className = props.className, isNotHost = props.isNotHost, theme = props.theme;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
    return {
        root: [
            classNames.root,
            theme.fonts.medium,
            isNotHost && [
                classNames.rootNoHost,
                {
                    position: 'fixed',
                    zIndex: _Styling__WEBPACK_IMPORTED_MODULE_0__["ZIndexes"].Layer,
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    visibility: 'hidden',
                },
            ],
            className,
        ],
        content: [
            classNames.content,
            {
                visibility: 'visible',
            },
        ],
    };
};
//# sourceMappingURL=Layer.styles.js.map

/***/ }),

/***/ "KjqC":
/*!*****************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/react-hooks@7.13.9_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/react-hooks/lib/useSetTimeout.js ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: useSetTimeout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSetTimeout", function() { return useSetTimeout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useConst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useConst */ "SKm6");


/**
 *  Returns a wrapper function for `setTimeout` which automatically handles disposal.
 */
var useSetTimeout = function () {
    var timeoutIds = Object(_useConst__WEBPACK_IMPORTED_MODULE_1__["useConst"])({});
    // Cleanup function.
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () { return function () {
        for (var _i = 0, _a = Object.keys(timeoutIds); _i < _a.length; _i++) {
            var id = _a[_i];
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            clearTimeout(id);
        }
    }; }, 
    // useConst ensures this will never change, but react-hooks/exhaustive-deps doesn't know that
    [timeoutIds]);
    // Return wrapper which will auto cleanup.
    return Object(_useConst__WEBPACK_IMPORTED_MODULE_1__["useConst"])({
        setTimeout: function (func, duration) {
            var id = setTimeout(func, duration);
            timeoutIds[id] = 1;
            return id;
        },
        clearTimeout: function (id) {
            delete timeoutIds[id];
            clearTimeout(id);
        },
    });
};
//# sourceMappingURL=useSetTimeout.js.map

/***/ }),

/***/ "Lbeb":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@fluentui/react-window-provider@1.0.1_c129be21209ec549b9ba61bf76d54bcc/node_modules/@fluentui/react-window-provider/lib/WindowProvider.js ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: WindowContext, useWindow, useDocument, WindowProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowContext", function() { return WindowContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useWindow", function() { return useWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDocument", function() { return useDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowProvider", function() { return WindowProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Context for providing the window.
 */
var WindowContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"]({
    window: typeof window === 'object' ? window : undefined,
});
/**
 * Hook to access the window object. This can be overridden contextually using the `WindowProvider`.
 */
var useWindow = function () { return react__WEBPACK_IMPORTED_MODULE_0__["useContext"](WindowContext).window; };
/**
 * Hook to access the document object. This can be overridden contextually using the `WindowProvider`.
 */
var useDocument = function () { var _a; return (_a = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](WindowContext).window) === null || _a === void 0 ? void 0 : _a.document; };
/**
 * Component to provide the window object contextually. This is useful when rendering content to an element
 * contained within a child window or iframe element, where event handlers and styling must be projected
 * to an alternative window or document.
 */
var WindowProvider = function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](WindowContext.Provider, { value: props }, props.children);
};
//# sourceMappingURL=WindowProvider.js.map

/***/ }),

/***/ "MnMY":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupedList.types.js ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: CollapseAllVisibility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapseAllVisibility", function() { return CollapseAllVisibility; });
/**
 * {@docCategory GroupedList}
 */
var CollapseAllVisibility;
(function (CollapseAllVisibility) {
    CollapseAllVisibility[CollapseAllVisibility["hidden"] = 0] = "hidden";
    CollapseAllVisibility[CollapseAllVisibility["visible"] = 1] = "visible";
})(CollapseAllVisibility || (CollapseAllVisibility = {}));
//# sourceMappingURL=GroupedList.types.js.map

/***/ }),

/***/ "NMYH":
/*!****************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/FocusZone.js ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/FocusZone.js


/***/ }),

/***/ "OBNh":
/*!*************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Fabric.js ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/Fabric.js


/***/ }),

/***/ "OqUb":
/*!**************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Overlay.js ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/Overlay.js


/***/ }),

/***/ "OzR5":
/*!************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/utilities/keytips/KeytipUtils.js ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: sequencesToID, mergeOverflows, ktpTargetFromSequences, ktpTargetFromId, getAriaDescribedBy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sequencesToID", function() { return sequencesToID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeOverflows", function() { return mergeOverflows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ktpTargetFromSequences", function() { return ktpTargetFromSequences; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ktpTargetFromId", function() { return ktpTargetFromId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAriaDescribedBy", function() { return getAriaDescribedBy; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _KeytipConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KeytipConstants */ "gLqG");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");



/**
 * Converts a whole set of KeySequences into one keytip ID, which will be the ID for the last keytip sequence specified
 * keySequences should not include the initial keytip 'start' sequence.
 *
 * @param keySequences - Full path of IKeySequences for one keytip.
 * @returns String to use for the keytip ID.
 */
function sequencesToID(keySequences) {
    return keySequences.reduce(function (prevValue, keySequence) {
        return prevValue + _KeytipConstants__WEBPACK_IMPORTED_MODULE_1__["KTP_SEPARATOR"] + keySequence.split('').join(_KeytipConstants__WEBPACK_IMPORTED_MODULE_1__["KTP_SEPARATOR"]);
    }, _KeytipConstants__WEBPACK_IMPORTED_MODULE_1__["KTP_PREFIX"]);
}
/**
 * Merges an overflow sequence with a key sequence.
 *
 * @param keySequences - Full sequence for one keytip.
 * @param overflowKeySequences - Full overflow keytip sequence.
 * @returns Sequence that will be used by the keytip when in the overflow.
 */
function mergeOverflows(keySequences, overflowKeySequences) {
    var overflowSequenceLen = overflowKeySequences.length;
    var overflowSequence = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(overflowKeySequences).pop();
    var newKeySequences = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(keySequences);
    return Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["addElementAtIndex"])(newKeySequences, overflowSequenceLen - 1, overflowSequence);
}
/**
 * Constructs the data-ktp-target attribute selector from a full key sequence.
 *
 * @param keySequences - Full string[] for a Keytip.
 * @returns String selector to use to query for the keytip target.
 */
function ktpTargetFromSequences(keySequences) {
    return '[' + _KeytipConstants__WEBPACK_IMPORTED_MODULE_1__["DATAKTP_TARGET"] + '="' + sequencesToID(keySequences) + '"]';
}
/**
 * Constructs the data-ktp-execute-target attribute selector from a keytip ID.
 *
 * @param keytipId - ID of the Keytip.
 * @returns String selector to use to query for the keytip execute target.
 */
function ktpTargetFromId(keytipId) {
    return '[' + _KeytipConstants__WEBPACK_IMPORTED_MODULE_1__["DATAKTP_EXECUTE_TARGET"] + '="' + keytipId + '"]';
}
/**
 * Gets the aria-describedby value to put on the component with this keytip.
 *
 * @param keySequences - KeySequences of the keytip.
 * @returns The aria-describedby value to set on the component with this keytip.
 */
function getAriaDescribedBy(keySequences) {
    var describedby = ' ' + _KeytipConstants__WEBPACK_IMPORTED_MODULE_1__["KTP_LAYER_ID"];
    if (!keySequences.length) {
        // Return just the layer ID
        return describedby;
    }
    return describedby + ' ' + sequencesToID(keySequences);
}
//# sourceMappingURL=KeytipUtils.js.map

/***/ }),

/***/ "P2cQ":
/*!*****************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/index.js ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Loading @uifabric/utilities/./lib/index.js
var pkg = __webpack_require__(/*! @ms/uifabric-styling-bundle */ "fglE");
module.exports = pkg._Utilities;

/***/ }),

/***/ "PL71":
/*!**************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Styling.js ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/Styling.js


/***/ }),

/***/ "PXOV":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Modal/Modal.js ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _Modal_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal.base */ "+MEO");
/* harmony import */ var _Modal_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal.styles */ "+msp");



var Modal = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_Modal_base__WEBPACK_IMPORTED_MODULE_1__["ModalBase"], _Modal_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, {
    scope: 'Modal',
    fields: ['theme', 'styles', 'enableAriaHiddenSiblings'],
});
//# sourceMappingURL=Modal.js.map

/***/ }),

/***/ "PfLA":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/utilities/keytips/KeytipManager.js ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: KeytipManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeytipManager", function() { return KeytipManager; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _utilities_keytips_KeytipConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/keytips/KeytipConstants */ "gLqG");



/**
 * This class is responsible for handling registering, updating, and unregistering of keytips
 */
var KeytipManager = /** @class */ (function () {
    function KeytipManager() {
        this.keytips = {};
        this.persistedKeytips = {};
        this.sequenceMapping = {};
        // This is (and should be) updated and kept in sync
        // with the inKeytipMode in KeytipLayer.
        this.inKeytipMode = false;
        // Boolean that gets checked before entering keytip mode by the KeytipLayer
        // Used for an override in special cases (e.g. Disable entering keytip mode when a modal is shown)
        this.shouldEnterKeytipMode = true;
        // Boolean to indicate whether to delay firing an event to update subscribers of
        // keytip data changed.
        this.delayUpdatingKeytipChange = false;
    }
    /**
     * Static function to get singleton KeytipManager instance
     *
     * @returns Singleton KeytipManager instance
     */
    KeytipManager.getInstance = function () {
        return this._instance;
    };
    /**
     * Initialization code to set set parameters to define
     * how the KeytipManager handles keytip data.
     *
     * @param delayUpdatingKeytipChange - T/F if we should delay notifiying keytip subscribers
     * of keytip changes
     */
    KeytipManager.prototype.init = function (delayUpdatingKeytipChange) {
        this.delayUpdatingKeytipChange = delayUpdatingKeytipChange;
    };
    /**
     * Registers a keytip
     *
     * @param keytipProps - Keytip to register
     * @param persisted - T/F if this keytip should be persisted, default is false
     * @returns Unique ID for this keytip
     */
    KeytipManager.prototype.register = function (keytipProps, persisted) {
        if (persisted === void 0) { persisted = false; }
        var props = keytipProps;
        if (!persisted) {
            // Add the overflowSetSequence if necessary
            props = this.addParentOverflow(keytipProps);
            this.sequenceMapping[props.keySequences.toString()] = props;
        }
        // Create a unique keytip
        var uniqueKeytip = this._getUniqueKtp(props);
        // Add to dictionary
        persisted
            ? (this.persistedKeytips[uniqueKeytip.uniqueID] = uniqueKeytip)
            : (this.keytips[uniqueKeytip.uniqueID] = uniqueKeytip);
        // We only want to add something new if we are currently showing keytip mode
        if (this.inKeytipMode || !this.delayUpdatingKeytipChange) {
            var event_1 = persisted ? _utilities_keytips_KeytipConstants__WEBPACK_IMPORTED_MODULE_2__["KeytipEvents"].PERSISTED_KEYTIP_ADDED : _utilities_keytips_KeytipConstants__WEBPACK_IMPORTED_MODULE_2__["KeytipEvents"].KEYTIP_ADDED;
            _Utilities__WEBPACK_IMPORTED_MODULE_1__["EventGroup"].raise(this, event_1, {
                keytip: props,
                uniqueID: uniqueKeytip.uniqueID,
            });
        }
        return uniqueKeytip.uniqueID;
    };
    /**
     * Update a keytip
     *
     * @param keytipProps - Keytip to update
     * @param uniqueID - Unique ID of this keytip
     */
    KeytipManager.prototype.update = function (keytipProps, uniqueID) {
        var newKeytipProps = this.addParentOverflow(keytipProps);
        var uniqueKeytip = this._getUniqueKtp(newKeytipProps, uniqueID);
        var oldKeyTip = this.keytips[uniqueID];
        if (oldKeyTip) {
            // Update everything except 'visible'
            uniqueKeytip.keytip.visible = oldKeyTip.keytip.visible;
            // Update keytip in this.keytips
            this.keytips[uniqueID] = uniqueKeytip;
            // Update the sequence to be up to date
            delete this.sequenceMapping[oldKeyTip.keytip.keySequences.toString()];
            this.sequenceMapping[uniqueKeytip.keytip.keySequences.toString()] = uniqueKeytip.keytip;
            // Raise event only if we are currently in keytip mode
            if (this.inKeytipMode || !this.delayUpdatingKeytipChange) {
                _Utilities__WEBPACK_IMPORTED_MODULE_1__["EventGroup"].raise(this, _utilities_keytips_KeytipConstants__WEBPACK_IMPORTED_MODULE_2__["KeytipEvents"].KEYTIP_UPDATED, {
                    keytip: uniqueKeytip.keytip,
                    uniqueID: uniqueKeytip.uniqueID,
                });
            }
        }
    };
    /**
     * Unregisters a keytip
     *
     * @param keytipToRemove - IKeytipProps of the keytip to remove
     * @param uniqueID - Unique ID of this keytip
     * @param persisted - T/F if this keytip should be persisted, default is false
     */
    KeytipManager.prototype.unregister = function (keytipToRemove, uniqueID, persisted) {
        if (persisted === void 0) { persisted = false; }
        persisted ? delete this.persistedKeytips[uniqueID] : delete this.keytips[uniqueID];
        !persisted && delete this.sequenceMapping[keytipToRemove.keySequences.toString()];
        var event = persisted ? _utilities_keytips_KeytipConstants__WEBPACK_IMPORTED_MODULE_2__["KeytipEvents"].PERSISTED_KEYTIP_REMOVED : _utilities_keytips_KeytipConstants__WEBPACK_IMPORTED_MODULE_2__["KeytipEvents"].KEYTIP_REMOVED;
        // Update keytips only if we're in keytip mode
        if (this.inKeytipMode || !this.delayUpdatingKeytipChange) {
            _Utilities__WEBPACK_IMPORTED_MODULE_1__["EventGroup"].raise(this, event, {
                keytip: keytipToRemove,
                uniqueID: uniqueID,
            });
        }
    };
    /**
     * Manual call to enter keytip mode
     */
    KeytipManager.prototype.enterKeytipMode = function () {
        _Utilities__WEBPACK_IMPORTED_MODULE_1__["EventGroup"].raise(this, _utilities_keytips_KeytipConstants__WEBPACK_IMPORTED_MODULE_2__["KeytipEvents"].ENTER_KEYTIP_MODE);
    };
    /**
     * Manual call to exit keytip mode
     */
    KeytipManager.prototype.exitKeytipMode = function () {
        _Utilities__WEBPACK_IMPORTED_MODULE_1__["EventGroup"].raise(this, _utilities_keytips_KeytipConstants__WEBPACK_IMPORTED_MODULE_2__["KeytipEvents"].EXIT_KEYTIP_MODE);
    };
    /**
     * Gets all IKeytipProps from this.keytips
     *
     * @returns All keytips stored in the manager
     */
    KeytipManager.prototype.getKeytips = function () {
        var _this = this;
        return Object.keys(this.keytips).map(function (key) { return _this.keytips[key].keytip; });
    };
    /**
     * Adds the overflowSetSequence to the keytipProps if its parent keytip also has it
     *
     * @param keytipProps - Keytip props to add overflowSetSequence to if necessary
     * @returns - Modified keytip props, if needed to be modified
     */
    KeytipManager.prototype.addParentOverflow = function (keytipProps) {
        var fullSequence = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(keytipProps.keySequences);
        fullSequence.pop();
        if (fullSequence.length !== 0) {
            var parentKeytip = this.sequenceMapping[fullSequence.toString()];
            if (parentKeytip && parentKeytip.overflowSetSequence) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, keytipProps), { overflowSetSequence: parentKeytip.overflowSetSequence });
            }
        }
        return keytipProps;
    };
    /**
     * Public function to bind for overflow items that have a submenu
     */
    KeytipManager.prototype.menuExecute = function (overflowButtonSequences, keytipSequences) {
        _Utilities__WEBPACK_IMPORTED_MODULE_1__["EventGroup"].raise(this, _utilities_keytips_KeytipConstants__WEBPACK_IMPORTED_MODULE_2__["KeytipEvents"].PERSISTED_KEYTIP_EXECUTE, {
            overflowButtonSequences: overflowButtonSequences,
            keytipSequences: keytipSequences,
        });
    };
    /**
     * Creates an IUniqueKeytip object
     *
     * @param keytipProps - IKeytipProps
     * @param uniqueID - Unique ID, will default to the next unique ID if not passed
     * @returns IUniqueKeytip object
     */
    KeytipManager.prototype._getUniqueKtp = function (keytipProps, uniqueID) {
        if (uniqueID === void 0) { uniqueID = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["getId"])(); }
        return { keytip: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, keytipProps), uniqueID: uniqueID };
    };
    KeytipManager._instance = new KeytipManager();
    return KeytipManager;
}());

//# sourceMappingURL=KeytipManager.js.map

/***/ }),

/***/ "Q21x":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Popup/index.js ***!
  \*****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/./lib/components/Popup/index.js
var pkg = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
module.exports = pkg.workaround_PopupIndex;

/***/ }),

/***/ "R7/2":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupFooter.base.js ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: GroupFooterBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupFooterBase", function() { return GroupFooterBase; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _GroupSpacer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GroupSpacer */ "oao7");



var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["classNamesFunction"])();
var GroupFooterBase = function (props) {
    var group = props.group, groupLevel = props.groupLevel, footerText = props.footerText, indentWidth = props.indentWidth, styles = props.styles, theme = props.theme;
    var classNames = getClassNames(styles, { theme: theme });
    if (group && footerText) {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: classNames.root },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_GroupSpacer__WEBPACK_IMPORTED_MODULE_2__["GroupSpacer"], { indentWidth: indentWidth, count: groupLevel }),
            footerText));
    }
    return null;
};
//# sourceMappingURL=GroupFooter.base.js.map

/***/ }),

/***/ "S37p":
/*!**************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/react-hooks@7.13.9_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/react-hooks/lib/useOnEvent.js ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: useOnEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useOnEvent", function() { return useOnEvent; });
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/utilities */ "P2cQ");
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Hook to attach an event handler on mount and handle cleanup.
 * @param element - Element (or ref to an element) to attach the event handler to
 * @param eventName - The event to attach a handler for
 * @param callback - The handler for the event
 * @param useCapture - Whether or not to attach the handler for the capture phase
 */
function useOnEvent(element, eventName, callback, useCapture) {
    // Use a ref for the callback to prevent repeatedly attaching/unattaching callbacks that are unstable across renders
    var callbackRef = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](callback);
    callbackRef.current = callback;
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
        var actualElement = element && 'current' in element ? element.current : element;
        if (!actualElement) {
            return;
        }
        var dispose = Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["on"])(actualElement, eventName, function (ev) { return callbackRef.current(ev); }, useCapture);
        return dispose;
    }, [element, eventName, useCapture]);
}
//# sourceMappingURL=useOnEvent.js.map

/***/ }),

/***/ "SKm6":
/*!************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/react-hooks@7.13.9_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/react-hooks/lib/useConst.js ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: useConst */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useConst", function() { return useConst; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Hook to initialize and return a constant value. Unlike `React.useMemo`, this is guaranteed to
 * always return the same value (and if the initializer is a function, only call it once).
 * This is similar to setting a private member in a class constructor.
 *
 * If the value should ever change based on dependencies, use `React.useMemo` instead.
 *
 * @param initialValue - Initial value, or function to get the initial value. Similar to `useState`,
 * only the value/function passed in the first time this is called is respected.
 * @returns The value. The identity of this value will always be the same.
 */
function useConst(initialValue) {
    // Use useRef to store the value because it's the least expensive built-in hook that works here
    // (we could also use `const [value] = React.useState(initialValue)` but that's more expensive
    // internally due to reducer handling which we don't need)
    var ref = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]();
    if (ref.current === undefined) {
        // Box the value in an object so we can tell if it's initialized even if the initializer
        // returns/is undefined
        ref.current = {
            value: typeof initialValue === 'function' ? initialValue() : initialValue,
        };
    }
    return ref.current.value;
}
//# sourceMappingURL=useConst.js.map

/***/ }),

/***/ "TRok":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsColumn.base.js ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: DetailsColumnBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsColumnBase", function() { return DetailsColumnBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Icon */ "56LG");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _DetailsList_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DetailsList.types */ "ddaB");
/* harmony import */ var _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DetailsRow.styles */ "tCYI");






var MOUSEDOWN_PRIMARY_BUTTON = 0; // for mouse down event we are using ev.button property, 0 means left button
var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["classNamesFunction"])();
var TRANSITION_DURATION_DRAG = 200; // ms
var TRANSITION_DURATION_DROP = 1500; // ms
var CLASSNAME_ADD_INTERVAL = 20; // ms
/**
 * Component for rendering columns in a `DetailsList`.
 *
 * {@docCategory DetailsList}
 */
var DetailsColumnBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DetailsColumnBase, _super);
    function DetailsColumnBase(props) {
        var _this = _super.call(this, props) || this;
        _this._root = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._onRenderColumnHeaderTooltip = function (tooltipHostProps) {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: tooltipHostProps.hostClassName }, tooltipHostProps.children);
        };
        _this._onColumnClick = function (ev) {
            var _a = _this.props, onColumnClick = _a.onColumnClick, column = _a.column;
            if (column.columnActionsMode === _DetailsList_types__WEBPACK_IMPORTED_MODULE_4__["ColumnActionsMode"].disabled) {
                return;
            }
            if (column.onColumnClick) {
                column.onColumnClick(ev, column);
            }
            if (onColumnClick) {
                onColumnClick(ev, column);
            }
        };
        _this._onDragStart = function (item, itemIndex, selectedItems, event) {
            var classNames = _this._classNames;
            if (itemIndex) {
                _this._updateHeaderDragInfo(itemIndex);
                _this._root.current.classList.add(classNames.borderWhileDragging);
                _this._async.setTimeout(function () {
                    if (_this._root.current) {
                        _this._root.current.classList.add(classNames.noBorderWhileDragging);
                    }
                }, CLASSNAME_ADD_INTERVAL);
            }
        };
        _this._onDragEnd = function (item, event) {
            var classNames = _this._classNames;
            if (event) {
                _this._updateHeaderDragInfo(-1, event);
            }
            _this._root.current.classList.remove(classNames.borderWhileDragging);
            _this._root.current.classList.remove(classNames.noBorderWhileDragging);
        };
        _this._updateHeaderDragInfo = function (itemIndex, event) {
            /* eslint-disable deprecation/deprecation */
            if (_this.props.setDraggedItemIndex) {
                _this.props.setDraggedItemIndex(itemIndex);
            }
            /* eslint-enable deprecation/deprecation */
            if (_this.props.updateDragInfo) {
                _this.props.updateDragInfo({ itemIndex: itemIndex }, event);
            }
        };
        _this._onColumnContextMenu = function (ev) {
            var _a = _this.props, onColumnContextMenu = _a.onColumnContextMenu, column = _a.column;
            if (column.onColumnContextMenu) {
                column.onColumnContextMenu(column, ev);
                ev.preventDefault();
            }
            if (onColumnContextMenu) {
                onColumnContextMenu(column, ev);
                ev.preventDefault();
            }
        };
        _this._onRootMouseDown = function (ev) {
            var isDraggable = _this.props.isDraggable;
            // Ignore anything except the primary button.
            if (isDraggable && ev.button === MOUSEDOWN_PRIMARY_BUTTON) {
                ev.stopPropagation();
            }
        };
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["initializeComponentRef"])(_this);
        _this._async = new _Utilities__WEBPACK_IMPORTED_MODULE_3__["Async"](_this);
        _this._events = new _Utilities__WEBPACK_IMPORTED_MODULE_3__["EventGroup"](_this);
        return _this;
    }
    DetailsColumnBase.prototype.render = function () {
        var _a = this.props, column = _a.column, columnIndex = _a.columnIndex, parentId = _a.parentId, isDraggable = _a.isDraggable, styles = _a.styles, theme = _a.theme, _b = _a.cellStyleProps, cellStyleProps = _b === void 0 ? _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_CELL_STYLE_PROPS"] : _b, _c = _a.useFastIcons, useFastIcons = _c === void 0 ? true : _c;
        var _d = this.props.onRenderColumnHeaderTooltip, onRenderColumnHeaderTooltip = _d === void 0 ? this._onRenderColumnHeaderTooltip : _d;
        this._classNames = getClassNames(styles, {
            theme: theme,
            headerClassName: column.headerClassName,
            iconClassName: column.iconClassName,
            isActionable: column.columnActionsMode !== _DetailsList_types__WEBPACK_IMPORTED_MODULE_4__["ColumnActionsMode"].disabled,
            isEmpty: !column.name,
            isIconVisible: column.isSorted || column.isGrouped || column.isFiltered,
            isPadded: column.isPadded,
            isIconOnly: column.isIconOnly,
            cellStyleProps: cellStyleProps,
            transitionDurationDrag: TRANSITION_DURATION_DRAG,
            transitionDurationDrop: TRANSITION_DURATION_DROP,
        });
        var classNames = this._classNames;
        var IconComponent = useFastIcons ? _Icon__WEBPACK_IMPORTED_MODULE_2__["FontIcon"] : _Icon__WEBPACK_IMPORTED_MODULE_2__["Icon"];
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: column.key, ref: this._root, role: 'columnheader', "aria-sort": column.isSorted ? (column.isSortedDescending ? 'descending' : 'ascending') : 'none', "aria-colindex": columnIndex, className: classNames.root, "data-is-draggable": isDraggable, draggable: isDraggable, style: {
                    width: column.calculatedWidth +
                        cellStyleProps.cellLeftPadding +
                        cellStyleProps.cellRightPadding +
                        (column.isPadded ? cellStyleProps.cellExtraRightPadding : 0),
                }, "data-automationid": 'ColumnsHeaderColumn', "data-item-key": column.key },
                isDraggable && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](IconComponent, { iconName: "GripperBarVertical", className: classNames.gripperBarVerticalStyle })),
                onRenderColumnHeaderTooltip({
                    hostClassName: classNames.cellTooltip,
                    id: parentId + "-" + column.key + "-tooltip",
                    setAriaDescribedBy: false,
                    column: column,
                    content: column.columnActionsMode !== _DetailsList_types__WEBPACK_IMPORTED_MODULE_4__["ColumnActionsMode"].disabled ? column.ariaLabel : '',
                    children: (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { id: parentId + "-" + column.key, "aria-label": column.isIconOnly ? column.name : undefined, "aria-labelledby": column.isIconOnly ? undefined : parentId + "-" + column.key + "-name", className: classNames.cellTitle, "data-is-focusable": column.columnActionsMode !== _DetailsList_types__WEBPACK_IMPORTED_MODULE_4__["ColumnActionsMode"].disabled, role: column.columnActionsMode !== _DetailsList_types__WEBPACK_IMPORTED_MODULE_4__["ColumnActionsMode"].disabled &&
                            (column.onColumnClick !== undefined || this.props.onColumnClick !== undefined)
                            ? 'button'
                            : undefined, "aria-describedby": !this.props.onRenderColumnHeaderTooltip && this._hasAccessibleLabel()
                            ? parentId + "-" + column.key + "-tooltip"
                            : undefined, onContextMenu: this._onColumnContextMenu, onClick: this._onColumnClick, "aria-haspopup": column.columnActionsMode === _DetailsList_types__WEBPACK_IMPORTED_MODULE_4__["ColumnActionsMode"].hasDropdown, "aria-expanded": column.columnActionsMode === _DetailsList_types__WEBPACK_IMPORTED_MODULE_4__["ColumnActionsMode"].hasDropdown ? !!column.isMenuOpen : undefined },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { id: parentId + "-" + column.key + "-name", className: classNames.cellName },
                            (column.iconName || column.iconClassName) && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](IconComponent, { className: classNames.iconClassName, iconName: column.iconName })),
                            column.isIconOnly ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: classNames.accessibleLabel }, column.name)) : (column.name)),
                        column.isFiltered && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](IconComponent, { className: classNames.nearIcon, iconName: "Filter" }),
                        column.isSorted && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](IconComponent, { className: classNames.sortIcon, iconName: column.isSortedDescending ? 'SortDown' : 'SortUp' })),
                        column.isGrouped && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](IconComponent, { className: classNames.nearIcon, iconName: "GroupedDescending" }),
                        column.columnActionsMode === _DetailsList_types__WEBPACK_IMPORTED_MODULE_4__["ColumnActionsMode"].hasDropdown && !column.isIconOnly && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](IconComponent, { "aria-hidden": true, className: classNames.filterChevron, iconName: "ChevronDown" })))),
                }, this._onRenderColumnHeaderTooltip)),
            !this.props.onRenderColumnHeaderTooltip ? this._renderAccessibleLabel() : null));
    };
    DetailsColumnBase.prototype.componentDidMount = function () {
        var _this = this;
        if (this.props.dragDropHelper && this.props.isDraggable) {
            this._addDragDropHandling();
        }
        var classNames = this._classNames;
        if (this.props.isDropped) {
            if (this._root.current) {
                this._root.current.classList.add(classNames.borderAfterDropping);
                this._async.setTimeout(function () {
                    if (_this._root.current) {
                        _this._root.current.classList.add(classNames.noBorderAfterDropping);
                    }
                }, CLASSNAME_ADD_INTERVAL);
            }
            this._async.setTimeout(function () {
                if (_this._root.current) {
                    _this._root.current.classList.remove(classNames.borderAfterDropping);
                    _this._root.current.classList.remove(classNames.noBorderAfterDropping);
                }
            }, TRANSITION_DURATION_DROP + CLASSNAME_ADD_INTERVAL);
        }
    };
    DetailsColumnBase.prototype.componentWillUnmount = function () {
        if (this._dragDropSubscription) {
            this._dragDropSubscription.dispose();
            delete this._dragDropSubscription;
        }
        this._async.dispose();
        this._events.dispose();
    };
    DetailsColumnBase.prototype.componentDidUpdate = function () {
        if (!this._dragDropSubscription && this.props.dragDropHelper && this.props.isDraggable) {
            this._addDragDropHandling();
        }
        if (this._dragDropSubscription && !this.props.isDraggable) {
            this._dragDropSubscription.dispose();
            this._events.off(this._root.current, 'mousedown');
            delete this._dragDropSubscription;
        }
    };
    DetailsColumnBase.prototype._getColumnDragDropOptions = function () {
        var _this = this;
        var columnIndex = this.props.columnIndex;
        var options = {
            selectionIndex: columnIndex,
            context: { data: columnIndex, index: columnIndex },
            canDrag: function () { return _this.props.isDraggable; },
            canDrop: function () { return false; },
            onDragStart: this._onDragStart,
            updateDropState: function () { return undefined; },
            onDrop: function () { return undefined; },
            onDragEnd: this._onDragEnd,
        };
        return options;
    };
    DetailsColumnBase.prototype._hasAccessibleLabel = function () {
        var column = this.props.column;
        return !!(column.ariaLabel ||
            column.filterAriaLabel ||
            column.sortAscendingAriaLabel ||
            column.sortDescendingAriaLabel ||
            column.groupAriaLabel);
    };
    DetailsColumnBase.prototype._renderAccessibleLabel = function () {
        var _a = this.props, column = _a.column, parentId = _a.parentId;
        var classNames = this._classNames;
        return this._hasAccessibleLabel() && !this.props.onRenderColumnHeaderTooltip ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { key: column.key + "_label", id: parentId + "-" + column.key + "-tooltip", className: classNames.accessibleLabel },
            column.ariaLabel,
            (column.isFiltered && column.filterAriaLabel) || null,
            (column.isSorted &&
                (column.isSortedDescending ? column.sortDescendingAriaLabel : column.sortAscendingAriaLabel)) ||
                null,
            (column.isGrouped && column.groupAriaLabel) || null)) : null;
    };
    DetailsColumnBase.prototype._addDragDropHandling = function () {
        this._dragDropSubscription = this.props.dragDropHelper.subscribe(this._root.current, this._events, this._getColumnDragDropOptions());
        // We need to use native on this to prevent MarqueeSelection from handling the event before us.
        this._events.on(this._root.current, 'mousedown', this._onRootMouseDown);
    };
    return DetailsColumnBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=DetailsColumn.base.js.map

/***/ }),

/***/ "TUa0":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/utilities/groupedList/GroupedListUtility.js ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: GetGroupCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetGroupCount", function() { return GetGroupCount; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Takes an array of groups and returns a count of the groups and all descendant groups.
 * @param groups - The array of groups to count.
 */
var GetGroupCount = function (groups) {
    var total = 0;
    if (groups) {
        var remainingGroups = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(groups);
        var currentGroup = void 0;
        while (remainingGroups && remainingGroups.length > 0) {
            ++total;
            currentGroup = remainingGroups.pop();
            if (currentGroup && currentGroup.children) {
                remainingGroups.push.apply(remainingGroups, currentGroup.children);
            }
        }
    }
    return total;
};
//# sourceMappingURL=GroupedListUtility.js.map

/***/ }),

/***/ "TbFi":
/*!*****************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/getId.js ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Loading @uifabric/utilities/./lib/getId.js
var pkg = __webpack_require__(/*! @ms/uifabric-styling-bundle */ "fglE");
module.exports = pkg._Utilities;

/***/ }),

/***/ "Ubdd":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Layer/Layer.js ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: Layer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layer", function() { return Layer; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _Layer_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layer.base */ "Ao4p");
/* harmony import */ var _Layer_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layer.styles */ "KQ3P");



var Layer = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_Layer_base__WEBPACK_IMPORTED_MODULE_1__["LayerBase"], _Layer_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, {
    scope: 'Layer',
    fields: ['hostId', 'theme', 'styles'],
});
//# sourceMappingURL=Layer.js.map

/***/ }),

/***/ "V7Tt":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Layer/Layer.notification.js ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: registerLayer, unregisterLayer, notifyHostChanged, setDefaultTarget, getDefaultTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerLayer", function() { return registerLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregisterLayer", function() { return unregisterLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notifyHostChanged", function() { return notifyHostChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDefaultTarget", function() { return setDefaultTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultTarget", function() { return getDefaultTarget; });
var _layersByHostId = {};
var _defaultHostSelector;
/**
 * Register a layer for a given host id
 * @param hostId Id of the layer host
 * @param layer Layer instance
 */
function registerLayer(hostId, callback) {
    if (!_layersByHostId[hostId]) {
        _layersByHostId[hostId] = [];
    }
    _layersByHostId[hostId].push(callback);
}
/**
 * Unregister a layer for a given host id
 * @param hostId Id of the layer host
 * @param layer Layer instance
 */
function unregisterLayer(hostId, callback) {
    if (_layersByHostId[hostId]) {
        var idx = _layersByHostId[hostId].indexOf(callback);
        if (idx >= 0) {
            _layersByHostId[hostId].splice(idx, 1);
            if (_layersByHostId[hostId].length === 0) {
                delete _layersByHostId[hostId];
            }
        }
    }
}
/**
 * Used for notifying applicable Layers that a host is available/unavailable and to re-evaluate Layers that
 * care about the specific host.
 */
function notifyHostChanged(id) {
    if (_layersByHostId[id]) {
        _layersByHostId[id].forEach(function (callback) { return callback(); });
    }
}
/**
 * Sets the default target selector to use when determining the host in which
 * Layered content will be injected into. If not provided, an element will be
 * created at the end of the document body.
 *
 * Passing in a falsey value will clear the default target and reset back to
 * using a created element at the end of document body.
 */
function setDefaultTarget(selector) {
    _defaultHostSelector = selector;
}
/**
 * Get the default target selector when determining a host
 */
function getDefaultTarget() {
    return _defaultHostSelector;
}
//# sourceMappingURL=Layer.notification.js.map

/***/ }),

/***/ "Vr3T":
/*!************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Modal.js ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: Modal, ModalBase, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Modal_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Modal/index */ "2uJf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return _components_Modal_index__WEBPACK_IMPORTED_MODULE_0__["Modal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalBase", function() { return _components_Modal_index__WEBPACK_IMPORTED_MODULE_0__["ModalBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _components_Modal_index__WEBPACK_IMPORTED_MODULE_0__["Modal"]; });



//# sourceMappingURL=Modal.js.map

/***/ }),

/***/ "WEXx":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsList.js ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: DetailsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsList", function() { return DetailsList; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _DetailsList_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DetailsList.base */ "1xj0");
/* harmony import */ var _DetailsList_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetailsList.styles */ "JBVq");



var DetailsList = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_DetailsList_base__WEBPACK_IMPORTED_MODULE_1__["DetailsListBase"], _DetailsList_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, {
    scope: 'DetailsList',
});
//# sourceMappingURL=DetailsList.js.map

/***/ }),

/***/ "WiZN":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Dialog/DialogContent.styles.js ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "PL71");

var GlobalClassNames = {
    contentLgHeader: 'ms-Dialog-lgHeader',
    close: 'ms-Dialog--close',
    subText: 'ms-Dialog-subText',
    header: 'ms-Dialog-header',
    headerLg: 'ms-Dialog--lgHeader',
    button: 'ms-Dialog-button ms-Dialog-button--close',
    inner: 'ms-Dialog-inner',
    content: 'ms-Dialog-content',
    title: 'ms-Dialog-title',
};
var getStyles = function (props) {
    var _a, _b, _c;
    var className = props.className, theme = props.theme, isLargeHeader = props.isLargeHeader, isClose = props.isClose, hidden = props.hidden, isMultiline = props.isMultiline, draggableHeaderClassName = props.draggableHeaderClassName;
    var palette = theme.palette, fonts = theme.fonts, effects = theme.effects, semanticColors = theme.semanticColors;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
    return {
        content: [
            isLargeHeader && [
                classNames.contentLgHeader,
                {
                    borderTop: "4px solid " + palette.themePrimary,
                },
            ],
            isClose && classNames.close,
            {
                flexGrow: 1,
                overflowY: 'hidden',
            },
            className,
        ],
        subText: [
            classNames.subText,
            fonts.medium,
            {
                margin: '0 0 24px 0',
                color: semanticColors.bodySubtext,
                lineHeight: '1.5',
                wordWrap: 'break-word',
                fontWeight: _Styling__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].regular,
            },
        ],
        header: [
            classNames.header,
            {
                position: 'relative',
                width: '100%',
                boxSizing: 'border-box',
            },
            isClose && classNames.close,
            draggableHeaderClassName && [
                draggableHeaderClassName,
                {
                    cursor: 'move',
                },
            ],
        ],
        button: [
            classNames.button,
            hidden && {
                selectors: {
                    '.ms-Icon.ms-Icon--Cancel': {
                        color: semanticColors.buttonText,
                        fontSize: _Styling__WEBPACK_IMPORTED_MODULE_0__["IconFontSizes"].medium,
                    },
                },
            },
        ],
        inner: [
            classNames.inner,
            {
                padding: '0 24px 24px',
                selectors: (_a = {},
                    _a["@media (min-width: " + _Styling__WEBPACK_IMPORTED_MODULE_0__["ScreenWidthMinSmall"] + "px) and (max-width: " + _Styling__WEBPACK_IMPORTED_MODULE_0__["ScreenWidthMaxSmall"] + "px)"] = {
                        padding: '0 16px 16px',
                    },
                    _a),
            },
        ],
        innerContent: [
            classNames.content,
            {
                position: 'relative',
                width: '100%',
            },
        ],
        title: [
            classNames.title,
            fonts.xLarge,
            {
                color: semanticColors.bodyText,
                margin: '0',
                minHeight: fonts.xLarge.fontSize,
                padding: '16px 46px 20px 24px',
                lineHeight: 'normal',
                selectors: (_b = {},
                    _b["@media (min-width: " + _Styling__WEBPACK_IMPORTED_MODULE_0__["ScreenWidthMinSmall"] + "px) and (max-width: " + _Styling__WEBPACK_IMPORTED_MODULE_0__["ScreenWidthMaxSmall"] + "px)"] = {
                        padding: '16px 46px 16px 16px',
                    },
                    _b),
            },
            isLargeHeader && {
                color: semanticColors.menuHeader,
            },
            isMultiline && { fontSize: fonts.xxLarge.fontSize },
        ],
        topButton: [
            {
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                position: 'absolute',
                top: '0',
                right: '0',
                padding: '15px 15px 0 0',
                selectors: (_c = {
                        '> *': {
                            flex: '0 0 auto',
                        },
                        '.ms-Dialog-button': {
                            color: semanticColors.buttonText,
                        },
                        '.ms-Dialog-button:hover': {
                            color: semanticColors.buttonTextHovered,
                            borderRadius: effects.roundedCorner2,
                        }
                    },
                    _c["@media (min-width: " + _Styling__WEBPACK_IMPORTED_MODULE_0__["ScreenWidthMinSmall"] + "px) and (max-width: " + _Styling__WEBPACK_IMPORTED_MODULE_0__["ScreenWidthMaxSmall"] + "px)"] = {
                        padding: '15px 8px 0 0',
                    },
                    _c),
            },
        ],
    };
};
//# sourceMappingURL=DialogContent.styles.js.map

/***/ }),

/***/ "YCgd":
/*!************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/utilities/selection/Selection.js ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: Selection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/utilities */ "P2cQ");
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Selection", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["Selection"]; });


//# sourceMappingURL=Selection.js.map

/***/ }),

/***/ "YZp6":
/*!************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Layer.js ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: Layer, LayerBase, LayerHost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version */ "hwCN");
/* harmony import */ var _components_Layer_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Layer/index */ "ehuN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layer", function() { return _components_Layer_index__WEBPACK_IMPORTED_MODULE_1__["Layer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayerBase", function() { return _components_Layer_index__WEBPACK_IMPORTED_MODULE_1__["LayerBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayerHost", function() { return _components_Layer_index__WEBPACK_IMPORTED_MODULE_1__["LayerHost"]; });



//# sourceMappingURL=Layer.js.map

/***/ }),

/***/ "Z1Bs":
/*!******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/react-hooks@7.13.9_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/react-hooks/lib/useForceUpdate.js ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: useForceUpdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useForceUpdate", function() { return useForceUpdate; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useConst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useConst */ "SKm6");


/**
 * Hook to force update a function component by updating a dummy state.
 */
function useForceUpdate() {
    var _a = react__WEBPACK_IMPORTED_MODULE_0__["useState"](0), setValue = _a[1];
    var forceUpdate = Object(_useConst__WEBPACK_IMPORTED_MODULE_1__["useConst"])(function () { return function () { return setValue(function (value) { return ++value; }); }; });
    return forceUpdate;
}
//# sourceMappingURL=useForceUpdate.js.map

/***/ }),

/***/ "Z9S6":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsColumn.js ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: DetailsColumn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsColumn", function() { return DetailsColumn; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _DetailsColumn_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DetailsColumn.base */ "TRok");
/* harmony import */ var _DetailsColumn_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetailsColumn.styles */ "lbay");



var DetailsColumn = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_DetailsColumn_base__WEBPACK_IMPORTED_MODULE_1__["DetailsColumnBase"], _DetailsColumn_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, { scope: 'DetailsColumn' });
//# sourceMappingURL=DetailsColumn.js.map

/***/ }),

/***/ "a+oq":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsHeader.styles.js ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: HEADER_HEIGHT, getCellStyles, getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEADER_HEIGHT", function() { return HEADER_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCellStyles", function() { return getCellStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "PL71");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetailsRow.styles */ "tCYI");
/* harmony import */ var _GroupedList_GroupSpacer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../GroupedList/GroupSpacer */ "oao7");



// For every group level there is a GroupSpacer added. Importing this const to have the source value in one place.

var GlobalClassNames = {
    tooltipHost: 'ms-TooltipHost',
    root: 'ms-DetailsHeader',
    cell: 'ms-DetailsHeader-cell',
    cellIsCheck: 'ms-DetailsHeader-cellIsCheck',
    collapseButton: 'ms-DetailsHeader-collapseButton',
    isCollapsed: 'is-collapsed',
    isAllSelected: 'is-allSelected',
    isSelectAllHidden: 'is-selectAllHidden',
    isResizingColumn: 'is-resizingColumn',
    cellSizer: 'ms-DetailsHeader-cellSizer',
    isResizing: 'is-resizing',
    dropHintCircleStyle: 'ms-DetailsHeader-dropHintCircleStyle',
    dropHintCaretStyle: 'ms-DetailsHeader-dropHintCaretStyle',
    dropHintLineStyle: 'ms-DetailsHeader-dropHintLineStyle',
    cellTitle: 'ms-DetailsHeader-cellTitle',
    cellName: 'ms-DetailsHeader-cellName',
    filterChevron: 'ms-DetailsHeader-filterChevron',
    gripperBarVertical: 'ms-DetailsColumn-gripperBarVertical',
    checkTooltip: 'ms-DetailsHeader-checkTooltip',
    check: 'ms-DetailsHeader-check',
};
var HEADER_HEIGHT = 42;
var getCellStyles = function (props) {
    var theme = props.theme, _a = props.cellStyleProps, cellStyleProps = _a === void 0 ? _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CELL_STYLE_PROPS"] : _a;
    var semanticColors = theme.semanticColors;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
    return [
        classNames.cell,
        Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getFocusStyle"])(theme),
        {
            color: semanticColors.bodyText,
            position: 'relative',
            display: 'inline-block',
            boxSizing: 'border-box',
            padding: "0 " + cellStyleProps.cellRightPadding + "px 0 " + cellStyleProps.cellLeftPadding + "px",
            lineHeight: 'inherit',
            margin: '0',
            height: HEADER_HEIGHT,
            verticalAlign: 'top',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            textAlign: 'left',
        },
    ];
};
var getStyles = function (props) {
    var _a, _b, _c, _d;
    var theme = props.theme, className = props.className, isAllSelected = props.isAllSelected, isResizingColumn = props.isResizingColumn, isSizing = props.isSizing, isAllCollapsed = props.isAllCollapsed, _e = props.cellStyleProps, cellStyleProps = _e === void 0 ? _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CELL_STYLE_PROPS"] : _e;
    var semanticColors = theme.semanticColors, palette = theme.palette, fonts = theme.fonts;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
    var colors = {
        iconForegroundColor: semanticColors.bodySubtext,
        headerForegroundColor: semanticColors.bodyText,
        headerBackgroundColor: semanticColors.bodyBackground,
        dropdownChevronForegroundColor: palette.neutralTertiary,
        resizerColor: palette.neutralTertiaryAlt,
    };
    var cellSizerFadeInStyles = {
        opacity: 1,
        transition: 'opacity 0.3s linear',
    };
    var cellStyles = getCellStyles(props);
    return {
        root: [
            classNames.root,
            fonts.small,
            {
                display: 'inline-block',
                background: colors.headerBackgroundColor,
                position: 'relative',
                minWidth: '100%',
                verticalAlign: 'top',
                height: HEADER_HEIGHT,
                lineHeight: HEADER_HEIGHT,
                whiteSpace: 'nowrap',
                boxSizing: 'content-box',
                paddingBottom: '1px',
                paddingTop: '16px',
                borderBottom: "1px solid " + semanticColors.bodyDivider,
                cursor: 'default',
                userSelect: 'none',
                selectors: (_a = {},
                    _a["&:hover ." + classNames.check] = {
                        opacity: 1,
                    },
                    _a["& ." + classNames.tooltipHost + " ." + classNames.checkTooltip] = {
                        display: 'block',
                    },
                    _a),
            },
            isAllSelected && classNames.isAllSelected,
            isResizingColumn && classNames.isResizingColumn,
            className,
        ],
        check: [
            classNames.check,
            {
                height: HEADER_HEIGHT,
            },
            {
                selectors: (_b = {},
                    _b["." + _Utilities__WEBPACK_IMPORTED_MODULE_1__["IsFocusVisibleClassName"] + " &:focus"] = {
                        opacity: 1,
                    },
                    _b),
            },
        ],
        cellWrapperPadded: {
            paddingRight: cellStyleProps.cellExtraRightPadding + cellStyleProps.cellRightPadding,
        },
        cellIsCheck: [
            cellStyles,
            classNames.cellIsCheck,
            {
                position: 'relative',
                padding: 0,
                margin: 0,
                display: 'inline-flex',
                alignItems: 'center',
                border: 'none',
            },
            isAllSelected && {
                opacity: 1,
            },
        ],
        cellIsGroupExpander: [
            cellStyles,
            {
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: fonts.small.fontSize,
                padding: 0,
                border: 'none',
                width: _GroupedList_GroupSpacer__WEBPACK_IMPORTED_MODULE_3__["SPACER_WIDTH"],
                color: palette.neutralSecondary,
                selectors: {
                    ':hover': {
                        backgroundColor: palette.neutralLighter,
                    },
                    ':active': {
                        backgroundColor: palette.neutralLight,
                    },
                },
            },
        ],
        cellIsActionable: {
            selectors: {
                ':hover': {
                    color: semanticColors.bodyText,
                    background: semanticColors.listHeaderBackgroundHovered,
                },
                ':active': {
                    background: semanticColors.listHeaderBackgroundPressed,
                },
            },
        },
        cellIsEmpty: {
            textOverflow: 'clip',
        },
        cellSizer: [
            classNames.cellSizer,
            Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["focusClear"])(),
            {
                display: 'inline-block',
                position: 'relative',
                cursor: 'ew-resize',
                bottom: 0,
                top: 0,
                overflow: 'hidden',
                height: 'inherit',
                background: 'transparent',
                zIndex: 1,
                width: 16,
                selectors: (_c = {
                        ':after': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            bottom: 0,
                            width: 1,
                            background: colors.resizerColor,
                            opacity: 0,
                            left: '50%',
                        },
                        ':focus:after': cellSizerFadeInStyles,
                        ':hover:after': cellSizerFadeInStyles
                    },
                    _c["&." + classNames.isResizing + ":after"] = [
                        cellSizerFadeInStyles,
                        {
                            boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.4)',
                        },
                    ],
                    _c),
            },
        ],
        cellIsResizing: classNames.isResizing,
        cellSizerStart: {
            margin: '0 -8px',
        },
        cellSizerEnd: {
            margin: 0,
            marginLeft: -16,
        },
        collapseButton: [
            classNames.collapseButton,
            {
                transformOrigin: '50% 50%',
                transition: 'transform .1s linear',
            },
            isAllCollapsed
                ? [
                    classNames.isCollapsed,
                    {
                        transform: 'rotate(0deg)',
                    },
                ]
                : {
                    transform: Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["getRTL"])(theme) ? 'rotate(-90deg)' : 'rotate(90deg)',
                },
        ],
        checkTooltip: classNames.checkTooltip,
        sizingOverlay: isSizing && {
            position: 'absolute',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            cursor: 'ew-resize',
            background: 'rgba(255, 255, 255, 0)',
            selectors: (_d = {},
                _d[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                    background: 'transparent',
                    MsHighContrastAdjust: 'none',
                },
                _d),
        },
        accessibleLabel: _Styling__WEBPACK_IMPORTED_MODULE_0__["hiddenContentStyle"],
        dropHintCircleStyle: [
            classNames.dropHintCircleStyle,
            {
                display: 'inline-block',
                visibility: 'hidden',
                position: 'absolute',
                bottom: 0,
                height: 9,
                width: 9,
                borderRadius: '50%',
                marginLeft: -5,
                top: 34,
                overflow: 'visible',
                zIndex: 10,
                border: "1px solid " + palette.themePrimary,
                background: palette.white,
            },
        ],
        dropHintCaretStyle: [
            classNames.dropHintCaretStyle,
            {
                display: 'none',
                position: 'absolute',
                top: -28,
                left: -6.5,
                fontSize: fonts.medium.fontSize,
                color: palette.themePrimary,
                overflow: 'visible',
                zIndex: 10,
            },
        ],
        dropHintLineStyle: [
            classNames.dropHintLineStyle,
            {
                display: 'none',
                position: 'absolute',
                bottom: 0,
                top: 0,
                overflow: 'hidden',
                height: 42,
                width: 1,
                background: palette.themePrimary,
                zIndex: 10,
            },
        ],
        dropHintStyle: {
            display: 'inline-block',
            position: 'absolute',
        },
    };
};
//# sourceMappingURL=DetailsHeader.styles.js.map

/***/ }),

/***/ "aBU9":
/*!***************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/react-hooks@7.13.9_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/react-hooks/lib/usePrevious.js ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: usePrevious */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePrevious", function() { return usePrevious; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Hook keeping track of a given value from a previous execution of the component the Hook is used in.
 *
 * See [React Hooks FAQ](https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state)
 */
function usePrevious(value) {
    var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        ref.current = value;
    });
    return ref.current;
}
//# sourceMappingURL=usePrevious.js.map

/***/ }),

/***/ "cB7q":
/*!****************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/react-hooks@7.13.9_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/react-hooks/lib/useRefEffect.js ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: useRefEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRefEffect", function() { return useRefEffect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Creates a ref, and calls a callback whenever the ref changes to a non-null value. The callback can optionally return
 * a cleanup function that'll be called before the value changes, and when the ref is unmounted.
 *
 * This can be used to work around a limitation that useEffect cannot depend on `ref.current` (see
 * https://github.com/facebook/react/issues/14387#issuecomment-503616820).
 *
 * Usage example:
 * ```ts
 * const myRef = useRefEffect<HTMLElement>(element => {
 *  ...
 *  return () => { ... cleanup ... };
 * });
 * ```
 * ```jsx
 * <div ref={myRef} />
 * ```
 *
 * @param callback - Called whenever the ref's value changes to non-null. Can optionally return a cleanup function.
 * @param initial - (Optional) The initial value for the ref.
 *
 * @returns A function that should be called to set the ref's value. The object also has a `.current` member that can be
 * used to access the ref's value (like a normal RefObject). It can be hooked up to an element's `ref` property.
 */
function useRefEffect(callback, initial) {
    if (initial === void 0) { initial = null; }
    var data = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]({
        ref: Object.assign(function (value) {
            if (data.ref.current !== value) {
                if (data.cleanup) {
                    data.cleanup();
                    data.cleanup = undefined;
                }
                data.ref.current = value;
                if (value !== null) {
                    data.cleanup = data.callback(value);
                }
            }
        }, {
            current: initial,
        }),
        callback: callback,
    }).current;
    data.callback = callback;
    return data.ref;
}
//# sourceMappingURL=useRefEffect.js.map

/***/ }),

/***/ "cuTR":
/*!*********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/react-hooks@7.13.9_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/react-hooks/lib/useId.js ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: useId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useId", function() { return useId; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _uifabric_utilities_lib_getId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uifabric/utilities/lib/getId */ "TbFi");
/* harmony import */ var _uifabric_utilities_lib_getId__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_uifabric_utilities_lib_getId__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Hook to generate a unique ID in the global scope (spanning across duplicate copies of the same library).
 *
 * @param prefix - Optional prefix for the ID
 * @param providedId - Optional id provided by a parent component. Defaults to the provided value if present,
 *  without conditioning the hook call
 * @returns The ID
 */
function useId(prefix, providedId) {
    // getId should only be called once since it updates the global constant for the next ID value.
    // (While an extra update isn't likely to cause problems in practice, it's better to avoid it.)
    var ref = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](providedId);
    if (!ref.current) {
        ref.current = Object(_uifabric_utilities_lib_getId__WEBPACK_IMPORTED_MODULE_1__["getId"])(prefix);
    }
    return ref.current;
}
//# sourceMappingURL=useId.js.map

/***/ }),

/***/ "dEgj":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/utilities/DraggableZone/DraggableZone.js ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: DraggableZone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraggableZone", function() { return DraggableZone; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DraggableZone_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DraggableZone.styles */ "ev4G");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utilities */ "mkpW");




var eventMapping = {
    touch: {
        start: 'touchstart',
        move: 'touchmove',
        stop: 'touchend',
    },
    mouse: {
        start: 'mousedown',
        move: 'mousemove',
        stop: 'mouseup',
    },
};
var DraggableZone = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DraggableZone, _super);
    function DraggableZone(props) {
        var _this = _super.call(this, props) || this;
        _this._currentEventType = eventMapping.mouse;
        _this._events = [];
        _this._onMouseDown = function (event) {
            var onMouseDown = react__WEBPACK_IMPORTED_MODULE_1__["Children"].only(_this.props.children).props.onMouseDown;
            if (onMouseDown) {
                onMouseDown(event);
            }
            _this._currentEventType = eventMapping.mouse;
            return _this._onDragStart(event);
        };
        _this._onMouseUp = function (event) {
            var onMouseUp = react__WEBPACK_IMPORTED_MODULE_1__["Children"].only(_this.props.children).props.onMouseUp;
            if (onMouseUp) {
                onMouseUp(event);
            }
            _this._currentEventType = eventMapping.mouse;
            return _this._onDragStop(event);
        };
        _this._onTouchStart = function (event) {
            var onTouchStart = react__WEBPACK_IMPORTED_MODULE_1__["Children"].only(_this.props.children).props.onTouchStart;
            if (onTouchStart) {
                onTouchStart(event);
            }
            _this._currentEventType = eventMapping.touch;
            return _this._onDragStart(event);
        };
        _this._onTouchEnd = function (event) {
            var onTouchEnd = react__WEBPACK_IMPORTED_MODULE_1__["Children"].only(_this.props.children).props.onTouchEnd;
            if (onTouchEnd) {
                onTouchEnd(event);
            }
            _this._currentEventType = eventMapping.touch;
            _this._onDragStop(event);
        };
        _this._onDragStart = function (event) {
            // Only handle left click for dragging
            if (typeof event.button === 'number' && event.button !== 0) {
                return false;
            }
            // If the target doesn't match the handleSelector OR
            // if the target does match the preventDragSelector, bail out
            if ((_this.props.handleSelector && !_this._matchesSelector(event.target, _this.props.handleSelector)) ||
                (_this.props.preventDragSelector &&
                    _this._matchesSelector(event.target, _this.props.preventDragSelector))) {
                return;
            }
            // Remember the touch identifier if this is a touch event so we can
            // distinguish between individual touches in multitouch scenarios
            // by remembering which touch point we were given
            _this._touchId = _this._getTouchId(event);
            var position = _this._getControlPosition(event);
            if (position === undefined) {
                return;
            }
            var dragData = _this._createDragDataFromPosition(position);
            _this.props.onStart && _this.props.onStart(event, dragData);
            _this.setState({
                isDragging: true,
                lastPosition: position,
            });
            // hook up the appropriate mouse/touch events to the body to ensure
            // smooth dragging
            _this._events = [
                Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["on"])(document.body, _this._currentEventType.move, _this._onDrag, true /* use capture phase */),
                Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["on"])(document.body, _this._currentEventType.stop, _this._onDragStop, true /* use capture phase */),
            ];
        };
        _this._onDrag = function (event) {
            // Prevent scrolling on mobile devices
            if (event.type === 'touchmove') {
                event.preventDefault();
            }
            var position = _this._getControlPosition(event);
            if (!position) {
                return;
            }
            // create the updated drag data from the position data
            var updatedData = _this._createUpdatedDragData(_this._createDragDataFromPosition(position));
            var updatedPosition = updatedData.position;
            _this.props.onDragChange && _this.props.onDragChange(event, updatedData);
            _this.setState({
                position: updatedPosition,
                lastPosition: position,
            });
        };
        _this._onDragStop = function (event) {
            if (!_this.state.isDragging) {
                return;
            }
            var position = _this._getControlPosition(event);
            if (!position) {
                return;
            }
            var baseDragData = _this._createDragDataFromPosition(position);
            // Set dragging to false and reset the lastPosition
            _this.setState({
                isDragging: false,
                lastPosition: undefined,
            });
            _this.props.onStop && _this.props.onStop(event, baseDragData);
            if (_this.props.position) {
                _this.setState({
                    position: _this.props.position,
                });
            }
            // Remove event handlers
            _this._events.forEach(function (dispose) { return dispose(); });
        };
        _this.state = {
            isDragging: false,
            position: _this.props.position || { x: 0, y: 0 },
            lastPosition: undefined,
        };
        return _this;
    }
    DraggableZone.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.position && (!prevProps.position || this.props.position !== prevProps.position)) {
            this.setState({ position: this.props.position });
        }
    };
    DraggableZone.prototype.componentWillUnmount = function () {
        this._events.forEach(function (dispose) { return dispose(); });
    };
    DraggableZone.prototype.render = function () {
        var child = react__WEBPACK_IMPORTED_MODULE_1__["Children"].only(this.props.children);
        var props = child.props;
        var position = this.props.position;
        var _a = this.state, statePosition = _a.position, isDragging = _a.isDragging;
        var x = statePosition.x;
        var y = statePosition.y;
        if (position && !isDragging) {
            x = position.x;
            y = position.y;
        }
        return react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"](child, {
            style: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props.style), { transform: "translate(" + x + "px, " + y + "px)" }),
            className: Object(_DraggableZone_styles__WEBPACK_IMPORTED_MODULE_2__["getClassNames"])(props.className, this.state.isDragging).root,
            onMouseDown: this._onMouseDown,
            onMouseUp: this._onMouseUp,
            onTouchStart: this._onTouchStart,
            onTouchEnd: this._onTouchEnd,
        });
    };
    /**
     * Get the control position based off the event that fired
     * @param event - The event to get offsets from
     */
    DraggableZone.prototype._getControlPosition = function (event) {
        var touchObj = this._getActiveTouch(event);
        // did we get the right touch?
        if (this._touchId !== undefined && !touchObj) {
            return undefined;
        }
        var eventToGetOffset = touchObj || event;
        return {
            x: eventToGetOffset.clientX,
            y: eventToGetOffset.clientY,
        };
    };
    /**
     * Get the active touch point that we have saved from the event's TouchList
     * @param event - The event used to get the TouchList for the active touch point
     */
    DraggableZone.prototype._getActiveTouch = function (event) {
        return ((event.targetTouches && this._findTouchInTouchList(event.targetTouches)) ||
            (event.changedTouches && this._findTouchInTouchList(event.changedTouches)));
    };
    /**
     * Get the initial touch identifier associated with the given event
     * @param event - The event that contains the TouchList
     */
    DraggableZone.prototype._getTouchId = function (event) {
        var touch = (event.targetTouches && event.targetTouches[0]) || (event.changedTouches && event.changedTouches[0]);
        if (touch) {
            return touch.identifier;
        }
    };
    /**
     * Returns if an element (or any of the element's parents) match the given selector
     */
    DraggableZone.prototype._matchesSelector = function (element, selector) {
        if (!element || element === document.body) {
            return false;
        }
        var matchesSelectorFn = element.matches || element.webkitMatchesSelector || element.msMatchesSelector /* for IE */;
        if (!matchesSelectorFn) {
            return false;
        }
        return matchesSelectorFn.call(element, selector) || this._matchesSelector(element.parentElement, selector);
    };
    /**
     * Attempts to find the Touch that matches the identifier  we stored in dragStart
     * @param touchList The TouchList to look for the stored identifier from dragStart
     */
    DraggableZone.prototype._findTouchInTouchList = function (touchList) {
        if (this._touchId === undefined) {
            return;
        }
        for (var i = 0; i < touchList.length; i++) {
            if (touchList[i].identifier === this._touchId) {
                return touchList[i];
            }
        }
        return undefined;
    };
    /**
     * Create DragData based off of the last known position and the new position passed in
     * @param position The new position as part of the drag
     */
    DraggableZone.prototype._createDragDataFromPosition = function (position) {
        var lastPosition = this.state.lastPosition;
        // If we have no lastPosition, use the given position
        // for last position
        if (lastPosition === undefined) {
            return {
                delta: { x: 0, y: 0 },
                lastPosition: position,
                position: position,
            };
        }
        return {
            delta: {
                x: position.x - lastPosition.x,
                y: position.y - lastPosition.y,
            },
            lastPosition: lastPosition,
            position: position,
        };
    };
    /**
     * Creates an updated DragData based off the current position and given baseDragData
     * @param baseDragData The base DragData (from _createDragDataFromPosition) used to calculate the updated positions
     */
    DraggableZone.prototype._createUpdatedDragData = function (baseDragData) {
        var position = this.state.position;
        return {
            position: {
                x: position.x + baseDragData.delta.x,
                y: position.y + baseDragData.delta.y,
            },
            delta: baseDragData.delta,
            lastPosition: position,
        };
    };
    return DraggableZone;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=DraggableZone.js.map

/***/ }),

/***/ "ddaB":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsList.types.js ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: ColumnActionsMode, ConstrainMode, ColumnDragEndLocation, DetailsListLayoutMode, CheckboxVisibility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnActionsMode", function() { return ColumnActionsMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstrainMode", function() { return ConstrainMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnDragEndLocation", function() { return ColumnDragEndLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsListLayoutMode", function() { return DetailsListLayoutMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxVisibility", function() { return CheckboxVisibility; });
/**
 * Enum to describe how a particular column header behaves.
 * This is used to to specify the property `IColumn.columnActionsMode`.
 * If `IColumn.columnActionsMode` is undefined, it's equivalent to `ColumnActionsMode.clickable`.
 * {@docCategory DetailsList}
 */
var ColumnActionsMode;
(function (ColumnActionsMode) {
    /** Renders the column header as disabled. */
    ColumnActionsMode[ColumnActionsMode["disabled"] = 0] = "disabled";
    /** Renders the column header as clickable. Default value. */
    ColumnActionsMode[ColumnActionsMode["clickable"] = 1] = "clickable";
    /** Renders the column header as clickable and displays the dropdown chevron. */
    ColumnActionsMode[ColumnActionsMode["hasDropdown"] = 2] = "hasDropdown";
})(ColumnActionsMode || (ColumnActionsMode = {}));
/**
 * {@docCategory DetailsList}
 */
var ConstrainMode;
(function (ConstrainMode) {
    /** Lets the content grow which allows the page to manage scrolling. */
    ConstrainMode[ConstrainMode["unconstrained"] = 0] = "unconstrained";
    /** Constrains the list to the given layout space. */
    ConstrainMode[ConstrainMode["horizontalConstrained"] = 1] = "horizontalConstrained";
})(ConstrainMode || (ConstrainMode = {}));
/**
 * Enum to describe where the column has been dropped, after starting the drag
 * {@docCategory DetailsList}
 */
var ColumnDragEndLocation;
(function (ColumnDragEndLocation) {
    /** Drag ended outside of current list */
    ColumnDragEndLocation[ColumnDragEndLocation["outside"] = 0] = "outside";
    /** Drag ended within current list */
    ColumnDragEndLocation[ColumnDragEndLocation["surface"] = 1] = "surface";
    /** Drag ended on header */
    ColumnDragEndLocation[ColumnDragEndLocation["header"] = 2] = "header";
})(ColumnDragEndLocation || (ColumnDragEndLocation = {}));
/**
 * {@docCategory DetailsList}
 */
var DetailsListLayoutMode;
(function (DetailsListLayoutMode) {
    /**
     * Lets the user resize columns and makes not attempt to fit them.
     */
    DetailsListLayoutMode[DetailsListLayoutMode["fixedColumns"] = 0] = "fixedColumns";
    /**
     * Manages which columns are visible, tries to size them according to their min/max rules and drops
     * off columns that can't fit and have isCollapsible set.
     */
    DetailsListLayoutMode[DetailsListLayoutMode["justified"] = 1] = "justified";
})(DetailsListLayoutMode || (DetailsListLayoutMode = {}));
/**
 * {@docCategory DetailsList}
 */
var CheckboxVisibility;
(function (CheckboxVisibility) {
    /** Visible on hover. */
    CheckboxVisibility[CheckboxVisibility["onHover"] = 0] = "onHover";
    /** Visible always. */
    CheckboxVisibility[CheckboxVisibility["always"] = 1] = "always";
    /** Hide checkboxes. */
    CheckboxVisibility[CheckboxVisibility["hidden"] = 2] = "hidden";
})(CheckboxVisibility || (CheckboxVisibility = {}));
//# sourceMappingURL=DetailsList.types.js.map

/***/ }),

/***/ "ehuN":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Layer/index.js ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: Layer, LayerBase, LayerHost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layer */ "Ubdd");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layer", function() { return _Layer__WEBPACK_IMPORTED_MODULE_0__["Layer"]; });

/* harmony import */ var _Layer_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layer.base */ "Ao4p");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayerBase", function() { return _Layer_base__WEBPACK_IMPORTED_MODULE_1__["LayerBase"]; });

/* harmony import */ var _LayerHost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LayerHost */ "Ea+4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayerHost", function() { return _LayerHost__WEBPACK_IMPORTED_MODULE_2__["LayerHost"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "epn0":
/*!*************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Button.js ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/Button.js


/***/ }),

/***/ "ev4G":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/utilities/DraggableZone/DraggableZone.styles.js ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: getClassNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClassNames", function() { return getClassNames; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Styling */ "PL71");


var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["memoizeFunction"])(function (className, isDragging) {
    return {
        root: Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["mergeStyles"])(className, isDragging && {
            touchAction: 'none',
            selectors: {
                '& *': {
                    userSelect: 'none',
                },
            },
        }),
    };
});
//# sourceMappingURL=DraggableZone.styles.js.map

/***/ }),

/***/ "fyAn":
/*!**************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Spinner.js ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/Spinner.js


/***/ }),

/***/ "gLqG":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/utilities/keytips/KeytipConstants.js ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: KTP_PREFIX, KTP_SEPARATOR, KTP_FULL_PREFIX, DATAKTP_TARGET, DATAKTP_EXECUTE_TARGET, DATAKTP_ARIA_TARGET, KTP_LAYER_ID, KTP_ARIA_SEPARATOR, KeytipEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KTP_PREFIX", function() { return KTP_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KTP_SEPARATOR", function() { return KTP_SEPARATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KTP_FULL_PREFIX", function() { return KTP_FULL_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATAKTP_TARGET", function() { return DATAKTP_TARGET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATAKTP_EXECUTE_TARGET", function() { return DATAKTP_EXECUTE_TARGET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATAKTP_ARIA_TARGET", function() { return DATAKTP_ARIA_TARGET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KTP_LAYER_ID", function() { return KTP_LAYER_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KTP_ARIA_SEPARATOR", function() { return KTP_ARIA_SEPARATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeytipEvents", function() { return KeytipEvents; });
var KTP_PREFIX = 'ktp';
var KTP_SEPARATOR = '-';
var KTP_FULL_PREFIX = KTP_PREFIX + KTP_SEPARATOR;
var DATAKTP_TARGET = 'data-ktp-target';
var DATAKTP_EXECUTE_TARGET = 'data-ktp-execute-target';
var DATAKTP_ARIA_TARGET = 'data-ktp-aria-target';
var KTP_LAYER_ID = 'ktp-layer-id';
var KTP_ARIA_SEPARATOR = ', ';
// Events
var KeytipEvents;
(function (KeytipEvents) {
    KeytipEvents.KEYTIP_ADDED = 'keytipAdded';
    KeytipEvents.KEYTIP_REMOVED = 'keytipRemoved';
    KeytipEvents.KEYTIP_UPDATED = 'keytipUpdated';
    KeytipEvents.PERSISTED_KEYTIP_ADDED = 'persistedKeytipAdded';
    KeytipEvents.PERSISTED_KEYTIP_REMOVED = 'persistedKeytipRemoved';
    KeytipEvents.PERSISTED_KEYTIP_EXECUTE = 'persistedKeytipExecute';
    KeytipEvents.ENTER_KEYTIP_MODE = 'enterKeytipMode';
    KeytipEvents.EXIT_KEYTIP_MODE = 'exitKeytipMode';
})(KeytipEvents || (KeytipEvents = {}));
//# sourceMappingURL=KeytipConstants.js.map

/***/ }),

/***/ "guqf":
/*!*****************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/set-version@7.0.23/node_modules/@uifabric/set-version/lib/setVersion.js ***!
  \*****************************************************************************************************************************************/
/*! exports provided: setVersion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setVersion", function() { return setVersion; });
// A packages cache that makes sure that we don't inject the same packageName twice in the same bundle -
// this cache is local to the module closure inside this bundle
var packagesCache = {};
// Cache access to window to avoid IE11 memory leak.
var _win = undefined;
try {
    _win = window;
}
catch (e) {
    /* no-op */
}
function setVersion(packageName, packageVersion) {
    if (typeof _win !== 'undefined') {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var packages = (_win.__packages__ = _win.__packages__ || {});
        // We allow either the global packages or local packages caches to invalidate so testing can
        // just clear the global to set this state
        if (!packages[packageName] || !packagesCache[packageName]) {
            packagesCache[packageName] = packageVersion;
            var versions = (packages[packageName] = packages[packageName] || []);
            versions.push(packageVersion);
        }
    }
}
//# sourceMappingURL=setVersion.js.map

/***/ }),

/***/ "gw9X":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Checkbox/Checkbox.styles.js ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Styling */ "PL71");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");



var GlobalClassNames = {
    root: 'ms-Checkbox',
    label: 'ms-Checkbox-label',
    checkbox: 'ms-Checkbox-checkbox',
    checkmark: 'ms-Checkbox-checkmark',
    text: 'ms-Checkbox-text',
};
var MS_CHECKBOX_LABEL_SIZE = '20px';
var MS_CHECKBOX_TRANSITION_DURATION = '200ms';
var MS_CHECKBOX_TRANSITION_TIMING = 'cubic-bezier(.4, 0, .23, 1)';
var getStyles = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
    var className = props.className, theme = props.theme, reversed = props.reversed, checked = props.checked, disabled = props.disabled, isUsingCustomLabelRender = props.isUsingCustomLabelRender, indeterminate = props.indeterminate;
    var semanticColors = theme.semanticColors, effects = theme.effects, palette = theme.palette, fonts = theme.fonts;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getGlobalClassNames"])(GlobalClassNames, theme);
    var checkmarkFontColor = semanticColors.inputForegroundChecked;
    // TODO: after updating the semanticColors slots mapping this needs to be semanticColors.inputBorder
    var checkmarkFontColorHovered = palette.neutralSecondary;
    // TODO: after updating the semanticColors slots mapping this needs to be semanticColors.smallInputBorder
    var checkboxBorderColor = palette.neutralPrimary;
    var checkboxBorderIndeterminateColor = semanticColors.inputBackgroundChecked;
    var checkboxBorderColorChecked = semanticColors.inputBackgroundChecked;
    var checkboxBorderColorDisabled = semanticColors.disabledBodySubtext;
    var checkboxBorderHoveredColor = semanticColors.inputBorderHovered;
    var checkboxBorderIndeterminateHoveredColor = semanticColors.inputBackgroundCheckedHovered;
    var checkboxBackgroundChecked = semanticColors.inputBackgroundChecked;
    // TODO: after updating the semanticColors slots mapping the following 2 tokens need to be
    // semanticColors.inputBackgroundCheckedHovered
    var checkboxBackgroundCheckedHovered = semanticColors.inputBackgroundCheckedHovered;
    var checkboxBorderColorCheckedHovered = semanticColors.inputBackgroundCheckedHovered;
    var checkboxHoveredTextColor = semanticColors.inputTextHovered;
    var checkboxBackgroundDisabledChecked = semanticColors.disabledBodySubtext;
    var checkboxTextColor = semanticColors.bodyText;
    var checkboxTextColorDisabled = semanticColors.disabledText;
    var indeterminateDotStyles = [
        (_a = {
                content: '""',
                borderRadius: effects.roundedCorner2,
                position: 'absolute',
                width: 10,
                height: 10,
                top: 4,
                left: 4,
                boxSizing: 'border-box',
                borderWidth: 5,
                borderStyle: 'solid',
                borderColor: disabled ? checkboxBorderColorDisabled : checkboxBorderIndeterminateColor,
                transitionProperty: 'border-width, border, border-color',
                transitionDuration: MS_CHECKBOX_TRANSITION_DURATION,
                transitionTimingFunction: MS_CHECKBOX_TRANSITION_TIMING
            },
            _a[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                borderColor: 'WindowText',
            },
            _a),
    ];
    return {
        root: [
            classNames.root,
            {
                position: 'relative',
                display: 'flex',
            },
            reversed && 'reversed',
            checked && 'is-checked',
            !disabled && 'is-enabled',
            disabled && 'is-disabled',
            !disabled && [
                !checked && (_b = {},
                    _b[":hover ." + classNames.checkbox] = (_c = {
                            borderColor: checkboxBorderHoveredColor
                        },
                        _c[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                            borderColor: 'Highlight',
                        },
                        _c),
                    _b[":focus ." + classNames.checkbox] = { borderColor: checkboxBorderHoveredColor },
                    _b[":hover ." + classNames.checkmark] = (_d = {
                            color: checkmarkFontColorHovered,
                            opacity: '1'
                        },
                        _d[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                            color: 'Highlight',
                        },
                        _d),
                    _b),
                checked &&
                    !indeterminate && (_e = {},
                    _e[":hover ." + classNames.checkbox] = {
                        background: checkboxBackgroundCheckedHovered,
                        borderColor: checkboxBorderColorCheckedHovered,
                    },
                    _e[":focus ." + classNames.checkbox] = {
                        background: checkboxBackgroundCheckedHovered,
                        borderColor: checkboxBorderColorCheckedHovered,
                    },
                    _e[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = (_f = {},
                        _f[":hover ." + classNames.checkbox] = {
                            background: 'Highlight',
                            borderColor: 'Highlight',
                        },
                        _f[":focus ." + classNames.checkbox] = {
                            background: 'Highlight',
                        },
                        _f[":focus:hover ." + classNames.checkbox] = {
                            background: 'Highlight',
                        },
                        _f[":focus:hover ." + classNames.checkmark] = {
                            color: 'Window',
                        },
                        _f[":hover ." + classNames.checkmark] = {
                            color: 'Window',
                        },
                        _f),
                    _e),
                indeterminate && (_g = {},
                    _g[":hover ." + classNames.checkbox + ", :hover ." + classNames.checkbox + ":after"] = (_h = {
                            borderColor: checkboxBorderIndeterminateHoveredColor
                        },
                        _h[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                            borderColor: 'WindowText',
                        },
                        _h),
                    _g[":focus ." + classNames.checkbox] = {
                        borderColor: checkboxBorderIndeterminateHoveredColor,
                    },
                    _g[":hover ." + classNames.checkmark] = {
                        opacity: '0',
                    },
                    _g),
                (_j = {},
                    _j[":hover ." + classNames.text + ", :focus ." + classNames.text] = (_k = {
                            color: checkboxHoveredTextColor
                        },
                        _k[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                            color: disabled ? 'GrayText' : 'WindowText',
                        },
                        _k),
                    _j),
            ],
            className,
        ],
        input: (_l = {
                position: 'absolute',
                background: 'none',
                opacity: 0
            },
            _l["." + _Utilities__WEBPACK_IMPORTED_MODULE_2__["IsFocusVisibleClassName"] + " &:focus + label::before"] = (_m = {
                    outline: '1px solid ' + theme.palette.neutralSecondary,
                    outlineOffset: '2px'
                },
                _m[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                    outline: '1px solid ActiveBorder',
                },
                _m),
            _l),
        label: [
            classNames.label,
            theme.fonts.medium,
            {
                display: 'flex',
                alignItems: isUsingCustomLabelRender ? 'center' : 'flex-start',
                cursor: disabled ? 'default' : 'pointer',
                position: 'relative',
                userSelect: 'none',
            },
            reversed && {
                flexDirection: 'row-reverse',
                justifyContent: 'flex-end',
            },
            {
                '&::before': {
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    content: '""',
                    pointerEvents: 'none',
                },
            },
        ],
        checkbox: [
            classNames.checkbox,
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])((_o = { position: 'relative', display: 'flex', flexShrink: 0, alignItems: 'center', justifyContent: 'center', height: MS_CHECKBOX_LABEL_SIZE, width: MS_CHECKBOX_LABEL_SIZE, border: "1px solid " + checkboxBorderColor, borderRadius: effects.roundedCorner2, boxSizing: 'border-box', transitionProperty: 'background, border, border-color', transitionDuration: MS_CHECKBOX_TRANSITION_DURATION, transitionTimingFunction: MS_CHECKBOX_TRANSITION_TIMING, 
                    /* in case the icon is bigger than the box */
                    overflow: 'hidden', ':after': indeterminate ? indeterminateDotStyles : null }, _o[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                borderColor: 'WindowText',
            }, _o), Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getEdgeChromiumNoHighContrastAdjustSelector"])()),
            indeterminate && {
                borderColor: checkboxBorderIndeterminateColor,
            },
            !reversed
                ? // This margin on the checkbox is for backwards compat. Notably it has the effect where a customRender
                    // is used, there will be only a 4px margin from checkbox to label. The label by default would have
                    // another 4px margin for a total of 8px margin between checkbox and label. We don't combine the two
                    // (and move it into the text) to not incur a breaking change for everyone using custom render atm.
                    {
                        marginRight: 4,
                    }
                : {
                    marginLeft: 4,
                },
            !disabled &&
                !indeterminate &&
                checked && (_p = {
                    background: checkboxBackgroundChecked,
                    borderColor: checkboxBorderColorChecked
                },
                _p[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                    background: 'Highlight',
                    borderColor: 'Highlight',
                },
                _p),
            disabled && (_q = {
                    borderColor: checkboxBorderColorDisabled
                },
                _q[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                    borderColor: 'GrayText',
                },
                _q),
            checked &&
                disabled && (_r = {
                    background: checkboxBackgroundDisabledChecked,
                    borderColor: checkboxBorderColorDisabled
                },
                _r[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                    background: 'Window',
                },
                _r),
        ],
        checkmark: [
            classNames.checkmark,
            (_s = {
                    opacity: checked ? '1' : '0',
                    color: checkmarkFontColor
                },
                _s[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                    color: disabled ? 'GrayText' : 'Window',
                    MsHighContrastAdjust: 'none',
                },
                _s),
        ],
        text: [
            classNames.text,
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])((_t = { color: disabled ? checkboxTextColorDisabled : checkboxTextColor, fontSize: fonts.medium.fontSize, lineHeight: '20px' }, _t[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                color: disabled ? 'GrayText' : 'WindowText',
            }, _t), Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getEdgeChromiumNoHighContrastAdjustSelector"])()),
            !reversed
                ? {
                    marginLeft: 4,
                }
                : {
                    marginRight: 4,
                },
        ],
    };
};
//# sourceMappingURL=Checkbox.styles.js.map

/***/ }),

/***/ "gwC2":
/*!************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Check/Check.styles.js ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: CheckGlobalClassNames, getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckGlobalClassNames", function() { return CheckGlobalClassNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "PL71");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utilities */ "mkpW");


var CheckGlobalClassNames = {
    root: 'ms-Check',
    circle: 'ms-Check-circle',
    check: 'ms-Check-check',
    /** Must be manually applied to the parent element of the check. */
    checkHost: 'ms-Check-checkHost',
};
var getStyles = function (props) {
    var _a, _b, _c, _d, _e;
    // eslint-disable-next-line deprecation/deprecation
    var _f = props.height, height = _f === void 0 ? props.checkBoxHeight || '18px' : _f, checked = props.checked, className = props.className, theme = props.theme;
    var palette = theme.palette, semanticColors = theme.semanticColors, fonts = theme.fonts;
    var isRTL = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["getRTL"])(theme);
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(CheckGlobalClassNames, theme);
    var sharedCircleCheck = {
        fontSize: height,
        position: 'absolute',
        left: 0,
        top: 0,
        width: height,
        height: height,
        textAlign: 'center',
        verticalAlign: 'middle',
    };
    return {
        root: [
            classNames.root,
            fonts.medium,
            {
                // lineHeight currently needs to be a string to output without 'px'
                lineHeight: '1',
                width: height,
                height: height,
                verticalAlign: 'top',
                position: 'relative',
                userSelect: 'none',
                selectors: (_a = {
                        ':before': {
                            content: '""',
                            position: 'absolute',
                            top: '1px',
                            right: '1px',
                            bottom: '1px',
                            left: '1px',
                            borderRadius: '50%',
                            opacity: 1,
                            background: semanticColors.bodyBackground,
                        }
                    },
                    _a["." + classNames.checkHost + ":hover &, ." + classNames.checkHost + ":focus &, &:hover, &:focus"] = {
                        opacity: 1,
                    },
                    _a),
            },
            checked && [
                'is-checked',
                {
                    selectors: {
                        ':before': {
                            background: palette.themePrimary,
                            opacity: 1,
                            selectors: (_b = {},
                                _b[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                                    background: 'Window',
                                },
                                _b),
                        },
                    },
                },
            ],
            className,
        ],
        circle: [
            classNames.circle,
            sharedCircleCheck,
            {
                color: palette.neutralSecondary,
                selectors: (_c = {},
                    _c[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                        color: 'WindowText',
                    },
                    _c),
            },
            checked && {
                color: palette.white,
            },
        ],
        check: [
            classNames.check,
            sharedCircleCheck,
            {
                opacity: 0,
                color: palette.neutralSecondary,
                fontSize: _Styling__WEBPACK_IMPORTED_MODULE_0__["IconFontSizes"].medium,
                left: isRTL ? '-0.5px' : '.5px',
                selectors: (_d = {
                        ':hover': {
                            opacity: 1,
                        }
                    },
                    _d[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                        MsHighContrastAdjust: 'none',
                    },
                    _d),
            },
            checked && {
                opacity: 1,
                color: palette.white,
                fontWeight: 900,
                selectors: (_e = {},
                    _e[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                        border: 'none',
                        color: 'WindowText',
                    },
                    _e),
            },
        ],
        checkHost: classNames.checkHost,
    };
};
//# sourceMappingURL=Check.styles.js.map

/***/ }),

/***/ "hwCN":
/*!**************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/version.js ***!
  \**************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uifabric_set_version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/set-version */ "Eyzw");
// Do not modify this file; it is generated as part of publish.
// The checked in version is a placeholder only and will not be updated.

Object(_uifabric_set_version__WEBPACK_IMPORTED_MODULE_0__["setVersion"])('office-ui-fabric-react', '7.155.4');
//# sourceMappingURL=version.js.map

/***/ }),

/***/ "iaSa":
/*!*****************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/KeytipData.js ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: KeytipData, useKeytipRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_KeytipData_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/KeytipData/index */ "tpD7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeytipData", function() { return _components_KeytipData_index__WEBPACK_IMPORTED_MODULE_0__["KeytipData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useKeytipRef", function() { return _components_KeytipData_index__WEBPACK_IMPORTED_MODULE_0__["useKeytipRef"]; });


//# sourceMappingURL=KeytipData.js.map

/***/ }),

/***/ "j6qd":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/KeytipData/useKeytipData.js ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: useKeytipData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useKeytipData", function() { return useKeytipData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _uifabric_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uifabric/react-hooks */ "v+W9");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _utilities_keytips_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/keytips/index */ "GKG/");





/**
 * Hook that creates attributes for components which are enabled with Keytip.
 */
function useKeytipData(options) {
    var _a, _b;
    var uniqueId = react__WEBPACK_IMPORTED_MODULE_1__["useRef"]();
    var keytipProps = options.keytipProps
        ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ disabled: options.disabled }, options.keytipProps) : undefined;
    var keytipManager = Object(_uifabric_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useConst"])(_utilities_keytips_index__WEBPACK_IMPORTED_MODULE_4__["KeytipManager"].getInstance());
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
        // Register Keytip in KeytipManager
        if (keytipProps) {
            uniqueId.current = keytipManager.register(keytipProps);
        }
        return function () {
            // Unregister Keytip in KeytipManager
            keytipProps && keytipManager.unregister(keytipProps, uniqueId.current);
        };
        // this is meant to run only at mount, and updates are handled separately
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    var prevOptions = Object(_uifabric_react_hooks__WEBPACK_IMPORTED_MODULE_2__["usePrevious"])(options);
    if (uniqueId.current &&
        keytipProps &&
        (((_a = prevOptions) === null || _a === void 0 ? void 0 : _a.keytipProps) !== options.keytipProps || ((_b = prevOptions) === null || _b === void 0 ? void 0 : _b.disabled) !== options.disabled)) {
        keytipManager.update(keytipProps, uniqueId.current);
    }
    var nativeKeytipProps = {
        ariaDescribedBy: undefined,
        keytipId: undefined,
    };
    if (keytipProps) {
        nativeKeytipProps = getKeytipData(keytipManager, keytipProps, options.ariaDescribedBy);
    }
    return nativeKeytipProps;
}
/**
 * Gets the aria- and data- attributes to attach to the component
 * @param keytipProps - options for Keytip
 * @param describedByPrepend - ariaDescribedBy value to prepend
 */
function getKeytipData(keytipManager, keytipProps, describedByPrepend) {
    // Add the parent overflow sequence if necessary
    var newKeytipProps = keytipManager.addParentOverflow(keytipProps);
    // Construct aria-describedby and data-ktp-id attributes
    var ariaDescribedBy = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["mergeAriaAttributeValues"])(describedByPrepend, Object(_utilities_keytips_index__WEBPACK_IMPORTED_MODULE_4__["getAriaDescribedBy"])(newKeytipProps.keySequences));
    var keySequences = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(newKeytipProps.keySequences);
    if (newKeytipProps.overflowSetSequence) {
        keySequences = Object(_utilities_keytips_index__WEBPACK_IMPORTED_MODULE_4__["mergeOverflows"])(keySequences, newKeytipProps.overflowSetSequence);
    }
    var keytipId = Object(_utilities_keytips_index__WEBPACK_IMPORTED_MODULE_4__["sequencesToID"])(keySequences);
    return {
        ariaDescribedBy: ariaDescribedBy,
        keytipId: keytipId,
    };
}
//# sourceMappingURL=useKeytipData.js.map

/***/ }),

/***/ "jkXB":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsRowCheck.js ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: DetailsRowCheck */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsRowCheck", function() { return DetailsRowCheck; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _Check__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Check */ "ISIA");
/* harmony import */ var _Check__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Check__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _DetailsRowCheck_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DetailsRowCheck.styles */ "+m1z");
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @uifabric/utilities */ "P2cQ");
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_5__);






var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
var DetailsRowCheckBase = function (props) {
    var _a = props.isVisible, isVisible = _a === void 0 ? false : _a, _b = props.canSelect, canSelect = _b === void 0 ? false : _b, _c = props.anySelected, anySelected = _c === void 0 ? false : _c, _d = props.selected, selected = _d === void 0 ? false : _d, _e = props.isHeader, isHeader = _e === void 0 ? false : _e, className = props.className, checkClassName = props.checkClassName, styles = props.styles, theme = props.theme, compact = props.compact, onRenderDetailsCheckbox = props.onRenderDetailsCheckbox, _f = props.useFastIcons, useFastIcons = _f === void 0 ? true : _f, // must be removed from buttonProps
    buttonProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(props, ["isVisible", "canSelect", "anySelected", "selected", "isHeader", "className", "checkClassName", "styles", "theme", "compact", "onRenderDetailsCheckbox", "useFastIcons"]);
    var defaultCheckboxRender = useFastIcons ? _fastDefaultCheckboxRender : _defaultCheckboxRender;
    var onRenderCheckbox = onRenderDetailsCheckbox
        ? Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_5__["composeRenderFunction"])(onRenderDetailsCheckbox, defaultCheckboxRender)
        : defaultCheckboxRender;
    var classNames = getClassNames(styles, {
        theme: theme,
        canSelect: canSelect,
        selected: selected,
        anySelected: anySelected,
        className: className,
        isHeader: isHeader,
        isVisible: isVisible,
        compact: compact,
    });
    var detailsCheckboxProps = {
        checked: selected,
        theme: theme,
    };
    return canSelect ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, buttonProps, { role: "checkbox", 
        // eslint-disable-next-line deprecation/deprecation
        className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])(classNames.root, classNames.check), "aria-checked": selected, "data-selection-toggle": true, "data-automationid": "DetailsRowCheck" }), onRenderCheckbox(detailsCheckboxProps))) : (
    // eslint-disable-next-line deprecation/deprecation
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, buttonProps, { className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])(classNames.root, classNames.check) })));
};
var FastCheck = react__WEBPACK_IMPORTED_MODULE_1__["memo"](function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Check__WEBPACK_IMPORTED_MODULE_3__["Check"], { theme: props.theme, checked: props.checked, className: props.className, useFastIcons: true });
});
function _defaultCheckboxRender(checkboxProps) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Check__WEBPACK_IMPORTED_MODULE_3__["Check"], { checked: checkboxProps.checked });
}
function _fastDefaultCheckboxRender(checkboxProps) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](FastCheck, { theme: checkboxProps.theme, checked: checkboxProps.checked });
}
var DetailsRowCheck = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["styled"])(DetailsRowCheckBase, _DetailsRowCheck_styles__WEBPACK_IMPORTED_MODULE_4__["getStyles"], undefined, { scope: 'DetailsRowCheck' }, true);
//# sourceMappingURL=DetailsRowCheck.js.map

/***/ }),

/***/ "k11K":
/*!****************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/warn.js ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Loading @uifabric/utilities/./lib/warn.js
var pkg = __webpack_require__(/*! @ms/uifabric-styling-bundle */ "fglE");
module.exports = pkg._Utilities;

/***/ }),

/***/ "kVD3":
/*!******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/GroupedList.js ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: GroupedList, GroupedListBase, CollapseAllVisibility, GroupHeader, GroupFooter, GroupShowAll, GroupSpacer, GroupedListSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_GroupedList_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/GroupedList/index */ "y86Q");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupedList", function() { return _components_GroupedList_index__WEBPACK_IMPORTED_MODULE_0__["GroupedList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupedListBase", function() { return _components_GroupedList_index__WEBPACK_IMPORTED_MODULE_0__["GroupedListBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollapseAllVisibility", function() { return _components_GroupedList_index__WEBPACK_IMPORTED_MODULE_0__["CollapseAllVisibility"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupHeader", function() { return _components_GroupedList_index__WEBPACK_IMPORTED_MODULE_0__["GroupHeader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupFooter", function() { return _components_GroupedList_index__WEBPACK_IMPORTED_MODULE_0__["GroupFooter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupShowAll", function() { return _components_GroupedList_index__WEBPACK_IMPORTED_MODULE_0__["GroupShowAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupSpacer", function() { return _components_GroupedList_index__WEBPACK_IMPORTED_MODULE_0__["GroupSpacer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupedListSection", function() { return _components_GroupedList_index__WEBPACK_IMPORTED_MODULE_0__["GroupedListSection"]; });


//# sourceMappingURL=GroupedList.js.map

/***/ }),

/***/ "lbay":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsColumn.styles.js ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Styling */ "PL71");
/* harmony import */ var _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetailsRow.styles */ "tCYI");
/* harmony import */ var _DetailsHeader_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DetailsHeader.styles */ "a+oq");




var GlobalClassNames = {
    isActionable: 'is-actionable',
    cellIsCheck: 'ms-DetailsHeader-cellIsCheck',
    collapseButton: 'ms-DetailsHeader-collapseButton',
    isCollapsed: 'is-collapsed',
    isAllSelected: 'is-allSelected',
    isSelectAllHidden: 'is-selectAllHidden',
    isResizingColumn: 'is-resizingColumn',
    isEmpty: 'is-empty',
    isIconVisible: 'is-icon-visible',
    cellSizer: 'ms-DetailsHeader-cellSizer',
    isResizing: 'is-resizing',
    dropHintCircleStyle: 'ms-DetailsHeader-dropHintCircleStyle',
    dropHintLineStyle: 'ms-DetailsHeader-dropHintLineStyle',
    cellTitle: 'ms-DetailsHeader-cellTitle',
    cellName: 'ms-DetailsHeader-cellName',
    filterChevron: 'ms-DetailsHeader-filterChevron',
    gripperBarVerticalStyle: 'ms-DetailsColumn-gripperBar',
    nearIcon: 'ms-DetailsColumn-nearIcon',
};
var getStyles = function (props) {
    var _a;
    var theme = props.theme, headerClassName = props.headerClassName, iconClassName = props.iconClassName, isActionable = props.isActionable, isEmpty = props.isEmpty, isIconVisible = props.isIconVisible, isPadded = props.isPadded, isIconOnly = props.isIconOnly, _b = props.cellStyleProps, cellStyleProps = _b === void 0 ? _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CELL_STYLE_PROPS"] : _b, transitionDurationDrag = props.transitionDurationDrag, transitionDurationDrop = props.transitionDurationDrop;
    var semanticColors = theme.semanticColors, palette = theme.palette, fonts = theme.fonts;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getGlobalClassNames"])(GlobalClassNames, theme);
    var colors = {
        iconForegroundColor: semanticColors.bodySubtext,
        headerForegroundColor: semanticColors.bodyText,
        headerBackgroundColor: semanticColors.bodyBackground,
        dropdownChevronForegroundColor: palette.neutralTertiary,
        resizerColor: palette.neutralTertiaryAlt,
    };
    var nearIconStyle = {
        color: colors.iconForegroundColor,
        opacity: 1,
        paddingLeft: 8,
    };
    var borderWhileDragging = {
        outline: "1px solid " + palette.themePrimary,
    };
    var borderAfterDragOrDrop = {
        outlineColor: 'transparent',
    };
    return {
        root: [
            Object(_DetailsHeader_styles__WEBPACK_IMPORTED_MODULE_3__["getCellStyles"])(props),
            fonts.small,
            isActionable && [
                classNames.isActionable,
                {
                    selectors: {
                        ':hover': {
                            color: semanticColors.bodyText,
                            background: semanticColors.listHeaderBackgroundHovered,
                        },
                        ':active': {
                            background: semanticColors.listHeaderBackgroundPressed,
                        },
                    },
                },
            ],
            isEmpty && [
                classNames.isEmpty,
                {
                    textOverflow: 'clip',
                },
            ],
            isIconVisible && classNames.isIconVisible,
            isPadded && {
                paddingRight: cellStyleProps.cellExtraRightPadding + cellStyleProps.cellRightPadding,
            },
            {
                selectors: {
                    ':hover i[data-icon-name="GripperBarVertical"]': {
                        display: 'block',
                    },
                },
            },
            headerClassName,
        ],
        gripperBarVerticalStyle: {
            display: 'none',
            position: 'absolute',
            textAlign: 'left',
            color: palette.neutralTertiary,
            left: 1,
        },
        nearIcon: [classNames.nearIcon, nearIconStyle],
        sortIcon: [
            nearIconStyle,
            {
                paddingLeft: 4,
                position: 'relative',
                top: 1,
            },
        ],
        iconClassName: [
            {
                color: colors.iconForegroundColor,
                opacity: 1,
            },
            iconClassName,
        ],
        filterChevron: [
            classNames.filterChevron,
            {
                color: colors.dropdownChevronForegroundColor,
                paddingLeft: 6,
                verticalAlign: 'middle',
                fontSize: fonts.small.fontSize,
            },
        ],
        cellTitle: [
            classNames.cellTitle,
            Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getFocusStyle"])(theme),
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'stretch', boxSizing: 'border-box', overflow: 'hidden', padding: "0 " + cellStyleProps.cellRightPadding + "px 0 " + cellStyleProps.cellLeftPadding + "px" }, (isIconOnly
                ? {
                    alignContent: 'flex-end',
                    maxHeight: '100%',
                    flexWrap: 'wrap-reverse',
                }
                : {})),
        ],
        cellName: [
            classNames.cellName,
            {
                flex: '0 1 auto',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                fontWeight: _Styling__WEBPACK_IMPORTED_MODULE_1__["FontWeights"].semibold,
                fontSize: fonts.medium.fontSize,
            },
            isIconOnly && {
                selectors: (_a = {},
                    _a["." + classNames.nearIcon] = {
                        paddingLeft: 0,
                    },
                    _a),
            },
        ],
        cellTooltip: {
            display: 'block',
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
        },
        accessibleLabel: _Styling__WEBPACK_IMPORTED_MODULE_1__["hiddenContentStyle"],
        borderWhileDragging: borderWhileDragging,
        noBorderWhileDragging: [borderAfterDragOrDrop, { transition: "outline " + transitionDurationDrag + "ms ease" }],
        borderAfterDropping: borderWhileDragging,
        noBorderAfterDropping: [borderAfterDragOrDrop, { transition: "outline  " + transitionDurationDrop + "ms ease" }],
    };
};
//# sourceMappingURL=DetailsColumn.styles.js.map

/***/ }),

/***/ "miSs":
/*!**************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/react-hooks@7.13.9_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/react-hooks/lib/useBoolean.js ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: useBoolean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useBoolean", function() { return useBoolean; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useConst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useConst */ "SKm6");


/**
 * Hook to store a value and generate callbacks for setting the value to true or false.
 * The identity of the callbacks will always stay the same.
 *
 * @param initialState - Initial value
 * @returns Array with the current value and an object containing the updater callbacks.
 */
function useBoolean(initialState) {
    var _a = react__WEBPACK_IMPORTED_MODULE_0__["useState"](initialState), value = _a[0], setValue = _a[1];
    // Storing the value in a ref is redundant but allows the `toggle` callback to have a
    // constant identity, which overall is probably better for consumers' perf.
    var valueRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](value);
    var setTrue = Object(_useConst__WEBPACK_IMPORTED_MODULE_1__["useConst"])(function () { return function () {
        setValue(true);
        valueRef.current = true;
    }; });
    var setFalse = Object(_useConst__WEBPACK_IMPORTED_MODULE_1__["useConst"])(function () { return function () {
        setValue(false);
        valueRef.current = false;
    }; });
    var toggle = Object(_useConst__WEBPACK_IMPORTED_MODULE_1__["useConst"])(function () { return function () { return (valueRef.current ? setFalse() : setTrue()); }; });
    return [value, { setTrue: setTrue, setFalse: setFalse, toggle: toggle }];
}
//# sourceMappingURL=useBoolean.js.map

/***/ }),

/***/ "mkpW":
/*!****************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/Utilities.js ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/office-ui-fabric-react-bundle */ "KL1q");
/* harmony import */ var _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _microsoft_office_ui_fabric_react_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading office-ui-fabric-react/./lib/Utilities.js


/***/ }),

/***/ "nL6P":
/*!********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/react-hooks@7.13.9_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/react-hooks/lib/useConstCallback.js ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: useConstCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useConstCallback", function() { return useConstCallback; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @deprecated Deprecated due to potential for misuse (see package readme).
 * Use `React.useCallback` instead.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useConstCallback(callback) {
    var ref = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]();
    if (!ref.current) {
        ref.current = callback;
    }
    return ref.current;
}
//# sourceMappingURL=useConstCallback.js.map

/***/ }),

/***/ "ngOG":
/*!************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/react-hooks@7.13.9_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/react-hooks/lib/useControllableValue.js ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: useControllableValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useControllableValue", function() { return useControllableValue; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useConst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useConst */ "SKm6");


function useControllableValue(controlledValue, defaultUncontrolledValue, onChange) {
    var _a = react__WEBPACK_IMPORTED_MODULE_0__["useState"](defaultUncontrolledValue), value = _a[0], setValue = _a[1];
    var isControlled = Object(_useConst__WEBPACK_IMPORTED_MODULE_1__["useConst"])(controlledValue !== undefined);
    var currentValue = isControlled ? controlledValue : value;
    // Duplicate the current value and onChange in refs so they're accessible from
    // setValueOrCallOnChange without creating a new callback every time
    var valueRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](currentValue);
    var onChangeRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](onChange);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        valueRef.current = currentValue;
        onChangeRef.current = onChange;
    });
    // To match the behavior of the setter returned by React.useState, this callback's identity
    // should never change. This means it MUST NOT directly reference variables that can change.
    var setValueOrCallOnChange = Object(_useConst__WEBPACK_IMPORTED_MODULE_1__["useConst"])(function () { return function (update, ev) {
        // Assuming here that TValue is not a function, because a controllable value will typically
        // be something a user can enter as input
        var newValue = typeof update === 'function' ? update(valueRef.current) : update;
        if (onChangeRef.current) {
            onChangeRef.current(ev, newValue);
        }
        if (!isControlled) {
            setValue(newValue);
        }
    }; });
    return [currentValue, setValueOrCallOnChange];
}
//# sourceMappingURL=useControllableValue.js.map

/***/ }),

/***/ "oao7":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupSpacer.js ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: SPACER_WIDTH, GroupSpacer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPACER_WIDTH", function() { return SPACER_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupSpacer", function() { return GroupSpacer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var SPACER_WIDTH = 36;
var GroupSpacer = function (props) {
    var count = props.count, _a = props.indentWidth, indentWidth = _a === void 0 ? SPACER_WIDTH : _a, _b = props.role, role = _b === void 0 ? 'presentation' : _b;
    var width = count * indentWidth;
    return count > 0 ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: 'ms-GroupSpacer', style: { display: 'inline-block', width: width }, role: role })) : null;
};
//# sourceMappingURL=GroupSpacer.js.map

/***/ }),

/***/ "pVr0":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/utilities/dragdrop/index.js ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: DragDropHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DragDropHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DragDropHelper */ "uGAW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DragDropHelper", function() { return _DragDropHelper__WEBPACK_IMPORTED_MODULE_0__["DragDropHelper"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "pf3H":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupHeader.base.js ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: GroupHeaderBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupHeaderBase", function() { return GroupHeaderBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _utilities_selection_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/selection/index */ "v+17");
/* harmony import */ var _Check__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Check */ "ISIA");
/* harmony import */ var _Check__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Check__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Icon */ "56LG");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Icon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _GroupSpacer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GroupSpacer */ "oao7");
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Spinner */ "fyAn");








var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
var GroupHeaderBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GroupHeaderBase, _super);
    function GroupHeaderBase(props) {
        var _this = _super.call(this, props) || this;
        _this._toggleCollapse = function () {
            var _a = _this.props, group = _a.group, onToggleCollapse = _a.onToggleCollapse, isGroupLoading = _a.isGroupLoading;
            var isCollapsed = _this.state.isCollapsed;
            var newCollapsed = !isCollapsed;
            var newLoadingVisible = !newCollapsed && isGroupLoading && isGroupLoading(group);
            _this.setState({
                isCollapsed: newCollapsed,
                isLoadingVisible: newLoadingVisible,
            });
            if (onToggleCollapse) {
                onToggleCollapse(group);
            }
        };
        _this._onKeyUp = function (ev) {
            var _a = _this.props, group = _a.group, onGroupHeaderKeyUp = _a.onGroupHeaderKeyUp;
            if (onGroupHeaderKeyUp) {
                onGroupHeaderKeyUp(ev, group);
            }
            if (!ev.defaultPrevented) {
                var shouldOpen = _this.state.isCollapsed && ev.which === Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getRTLSafeKeyCode"])(_Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].right, _this.props.theme);
                var shouldClose = !_this.state.isCollapsed && ev.which === Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getRTLSafeKeyCode"])(_Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].left, _this.props.theme);
                if (shouldClose || shouldOpen) {
                    _this._toggleCollapse();
                    ev.stopPropagation();
                    ev.preventDefault();
                }
            }
        };
        _this._onToggleClick = function (ev) {
            _this._toggleCollapse();
            ev.stopPropagation();
            ev.preventDefault();
        };
        _this._onToggleSelectGroupClick = function (ev) {
            var _a = _this.props, onToggleSelectGroup = _a.onToggleSelectGroup, group = _a.group;
            if (onToggleSelectGroup) {
                onToggleSelectGroup(group);
            }
            ev.preventDefault();
            ev.stopPropagation();
        };
        _this._onHeaderClick = function () {
            var _a = _this.props, group = _a.group, onGroupHeaderClick = _a.onGroupHeaderClick, onToggleSelectGroup = _a.onToggleSelectGroup;
            if (onGroupHeaderClick) {
                onGroupHeaderClick(group);
            }
            else if (onToggleSelectGroup) {
                onToggleSelectGroup(group);
            }
        };
        _this._onRenderTitle = function (props) {
            var group = props.group, ariaColSpan = props.ariaColSpan;
            if (!group) {
                return null;
            }
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _this._classNames.title, role: "gridcell", "aria-colspan": ariaColSpan },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, group.name),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: _this._classNames.headerCount },
                    "(",
                    group.count,
                    group.hasMoreData && '+',
                    ")")));
        };
        _this.state = {
            isCollapsed: (_this.props.group && _this.props.group.isCollapsed),
            isLoadingVisible: false,
        };
        return _this;
    }
    GroupHeaderBase.getDerivedStateFromProps = function (nextProps, previousState) {
        if (nextProps.group) {
            var newCollapsed = nextProps.group.isCollapsed;
            var isGroupLoading = nextProps.isGroupLoading;
            var newLoadingVisible = !newCollapsed && isGroupLoading && isGroupLoading(nextProps.group);
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, previousState), { isCollapsed: newCollapsed || false, isLoadingVisible: newLoadingVisible || false });
        }
        return previousState;
    };
    GroupHeaderBase.prototype.render = function () {
        var _a = this.props, group = _a.group, _b = _a.groupLevel, groupLevel = _b === void 0 ? 0 : _b, viewport = _a.viewport, selectionMode = _a.selectionMode, loadingText = _a.loadingText, 
        // eslint-disable-next-line deprecation/deprecation
        _c = _a.isSelected, 
        // eslint-disable-next-line deprecation/deprecation
        isSelected = _c === void 0 ? false : _c, _d = _a.selected, selected = _d === void 0 ? false : _d, indentWidth = _a.indentWidth, _e = _a.onRenderTitle, onRenderTitle = _e === void 0 ? this._onRenderTitle : _e, onRenderGroupHeaderCheckbox = _a.onRenderGroupHeaderCheckbox, _f = _a.isCollapsedGroupSelectVisible, isCollapsedGroupSelectVisible = _f === void 0 ? true : _f, expandButtonProps = _a.expandButtonProps, expandButtonIcon = _a.expandButtonIcon, selectAllButtonProps = _a.selectAllButtonProps, theme = _a.theme, styles = _a.styles, className = _a.className, compact = _a.compact, ariaPosInSet = _a.ariaPosInSet, ariaSetSize = _a.ariaSetSize, useFastIcons = _a.useFastIcons;
        var defaultCheckboxRender = useFastIcons ? this._fastDefaultCheckboxRender : this._defaultCheckboxRender;
        var onRenderCheckbox = onRenderGroupHeaderCheckbox
            ? Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["composeRenderFunction"])(onRenderGroupHeaderCheckbox, defaultCheckboxRender)
            : defaultCheckboxRender;
        var _g = this.state, isCollapsed = _g.isCollapsed, isLoadingVisible = _g.isLoadingVisible;
        var canSelectGroup = selectionMode === _utilities_selection_index__WEBPACK_IMPORTED_MODULE_3__["SelectionMode"].multiple;
        var isSelectionCheckVisible = canSelectGroup && (isCollapsedGroupSelectVisible || !(group && group.isCollapsed));
        var currentlySelected = selected || isSelected;
        var isRTL = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getRTL"])(theme);
        this._classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            selected: currentlySelected,
            isCollapsed: isCollapsed,
            compact: compact,
        });
        if (!group) {
            return null;
        }
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this._classNames.root, style: viewport ? { minWidth: viewport.width } : {}, onClick: this._onHeaderClick, role: "row", "aria-setsize": ariaSetSize, "aria-posinset": ariaPosInSet, "data-is-focusable": true, onKeyUp: this._onKeyUp, "aria-label": group.ariaLabel || group.name, "aria-expanded": !this.state.isCollapsed, "aria-level": groupLevel + 1 },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this._classNames.groupHeaderContainer, role: "presentation" },
                isSelectionCheckVisible ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { role: "gridcell" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ "data-is-focusable": false, type: "button", className: this._classNames.check, role: "checkbox", "aria-checked": currentlySelected, "data-selection-toggle": true, onClick: this._onToggleSelectGroupClick }, selectAllButtonProps), onRenderCheckbox({ checked: currentlySelected, theme: theme }, onRenderCheckbox)))) : (selectionMode !== _utilities_selection_index__WEBPACK_IMPORTED_MODULE_3__["SelectionMode"].none && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_GroupSpacer__WEBPACK_IMPORTED_MODULE_6__["GroupSpacer"], { indentWidth: indentWidth, count: 1 })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_GroupSpacer__WEBPACK_IMPORTED_MODULE_6__["GroupSpacer"], { indentWidth: indentWidth, count: groupLevel }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this._classNames.dropIcon, role: "presentation" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Icon__WEBPACK_IMPORTED_MODULE_5__["Icon"], { iconName: "Tag" })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { role: "gridcell" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ "data-is-focusable": false, type: "button", className: this._classNames.expand, onClick: this._onToggleClick, "aria-expanded": !this.state.isCollapsed }, expandButtonProps),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Icon__WEBPACK_IMPORTED_MODULE_5__["Icon"], { className: this._classNames.expandIsCollapsed, iconName: expandButtonIcon || (isRTL ? 'ChevronLeftMed' : 'ChevronRightMed') }))),
                onRenderTitle(this.props, this._onRenderTitle),
                isLoadingVisible && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Spinner__WEBPACK_IMPORTED_MODULE_7__["Spinner"], { label: loadingText }))));
    };
    GroupHeaderBase.prototype._defaultCheckboxRender = function (checkboxProps) {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Check__WEBPACK_IMPORTED_MODULE_4__["Check"], { checked: checkboxProps.checked });
    };
    GroupHeaderBase.prototype._fastDefaultCheckboxRender = function (checkboxProps) {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](FastCheck, { theme: checkboxProps.theme, checked: checkboxProps.checked });
    };
    GroupHeaderBase.defaultProps = {
        expandButtonProps: { 'aria-label': 'expand collapse group' },
    };
    return GroupHeaderBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

var FastCheck = react__WEBPACK_IMPORTED_MODULE_1__["memo"](function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Check__WEBPACK_IMPORTED_MODULE_4__["Check"], { theme: props.theme, checked: props.checked, className: props.className, useFastIcons: true });
});
//# sourceMappingURL=GroupHeader.base.js.map

/***/ }),

/***/ "qepx":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/KeytipData/KeytipData.js ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: KeytipData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeytipData", function() { return KeytipData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_keytips_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/keytips/index */ "GKG/");
/* harmony import */ var _useKeytipData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useKeytipData */ "j6qd");



/**
 * A small element to help the target component correctly read out its aria-describedby for its Keytip
 * {@docCategory Keytips}
 */
var KeytipData = function (props) {
    var _a;
    var children = props.children, keytipDataProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(props, ["children"]);
    var _b = Object(_useKeytipData__WEBPACK_IMPORTED_MODULE_2__["useKeytipData"])(keytipDataProps), keytipId = _b.keytipId, ariaDescribedBy = _b.ariaDescribedBy;
    return children((_a = {},
        _a[_utilities_keytips_index__WEBPACK_IMPORTED_MODULE_1__["DATAKTP_TARGET"]] = keytipId,
        _a[_utilities_keytips_index__WEBPACK_IMPORTED_MODULE_1__["DATAKTP_EXECUTE_TARGET"]] = keytipId,
        _a['aria-describedby'] = ariaDescribedBy,
        _a));
};
//# sourceMappingURL=KeytipData.js.map

/***/ }),

/***/ "r2Go":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsRowFields.js ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: DetailsRowFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsRowFields", function() { return DetailsRowFields; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetailsRow.styles */ "tCYI");



var getCellText = function (item, column) {
    var value = item && column && column.fieldName ? item[column.fieldName] : '';
    if (value === null || value === undefined) {
        value = '';
    }
    if (typeof value === 'boolean') {
        return value.toString();
    }
    return value;
};
/**
 * Component for rendering a row's cells in a `DetailsList`.
 *
 * {@docCategory DetailsList}
 */
var DetailsRowFields = function (props) {
    var columns = props.columns, columnStartIndex = props.columnStartIndex, rowClassNames = props.rowClassNames, _a = props.cellStyleProps, cellStyleProps = _a === void 0 ? _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CELL_STYLE_PROPS"] : _a, item = props.item, itemIndex = props.itemIndex, onRenderItemColumn = props.onRenderItemColumn, getCellValueKey = props.getCellValueKey, cellsByColumn = props.cellsByColumn, enableUpdateAnimations = props.enableUpdateAnimations;
    var cellValueKeysRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]();
    var cellValueKeys = cellValueKeysRef.current || (cellValueKeysRef.current = {});
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: rowClassNames.fields, "data-automationid": "DetailsRowFields", role: "presentation" }, columns.map(function (column, columnIndex) {
        var width = typeof column.calculatedWidth === 'undefined'
            ? 'auto'
            : column.calculatedWidth +
                cellStyleProps.cellLeftPadding +
                cellStyleProps.cellRightPadding +
                (column.isPadded ? cellStyleProps.cellExtraRightPadding : 0);
        var _a = column.onRender, onRender = _a === void 0 ? onRenderItemColumn : _a, _b = column.getValueKey, getValueKey = _b === void 0 ? getCellValueKey : _b;
        var cellContentsRender = cellsByColumn && column.key in cellsByColumn
            ? cellsByColumn[column.key]
            : onRender
                ? onRender(item, itemIndex, column)
                : getCellText(item, column);
        var previousValueKey = cellValueKeys[column.key];
        var cellValueKey = enableUpdateAnimations && getValueKey ? getValueKey(item, itemIndex, column) : undefined;
        var showAnimation = false;
        if (cellValueKey !== undefined && previousValueKey !== undefined && cellValueKey !== previousValueKey) {
            showAnimation = true;
        }
        cellValueKeys[column.key] = cellValueKey;
        // generate a key that auto-dirties when content changes, to force the container to re-render,
        // to trigger animation
        var key = "" + column.key + (cellValueKey !== undefined ? "-" + cellValueKey : '');
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: key, role: column.isRowHeader ? 'rowheader' : 'gridcell', "aria-readonly": true, "aria-colindex": columnIndex + columnStartIndex + 1, className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["css"])(column.className, column.isMultiline && rowClassNames.isMultiline, column.isRowHeader && rowClassNames.isRowHeader, rowClassNames.cell, column.isPadded ? rowClassNames.cellPadded : rowClassNames.cellUnpadded, showAnimation && rowClassNames.cellAnimation), style: { width: width }, "data-automationid": "DetailsRowCell", "data-automation-key": column.key }, cellContentsRender));
    })));
};
//# sourceMappingURL=DetailsRowFields.js.map

/***/ }),

/***/ "surb":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsHeader.base.js ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: DetailsHeaderBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsHeaderBase", function() { return DetailsHeaderBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _DetailsList_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DetailsList.types */ "ddaB");
/* harmony import */ var _FocusZone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../FocusZone */ "NMYH");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Icon */ "56LG");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Icon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Layer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Layer */ "YZp6");
/* harmony import */ var _GroupedList_GroupSpacer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../GroupedList/GroupSpacer */ "oao7");
/* harmony import */ var _GroupedList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../GroupedList */ "kVD3");
/* harmony import */ var _DetailsRowCheck__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DetailsRowCheck */ "jkXB");
/* harmony import */ var _utilities_selection_interfaces__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utilities/selection/interfaces */ "2Xb7");
/* harmony import */ var _utilities_dragdrop_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utilities/dragdrop/index */ "pVr0");
/* harmony import */ var _components_DetailsList_DetailsColumn__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/DetailsList/DetailsColumn */ "Z9S6");
/* harmony import */ var _DetailsHeader_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./DetailsHeader.types */ "9ehK");














var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
var MOUSEDOWN_PRIMARY_BUTTON = 0; // for mouse down event we are using ev.button property, 0 means left button
var MOUSEMOVE_PRIMARY_BUTTON = 1; // for mouse move event we are using ev.buttons property, 1 means left button
var NO_COLUMNS = [];
var DetailsHeaderBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DetailsHeaderBase, _super);
    function DetailsHeaderBase(props) {
        var _this = _super.call(this, props) || this;
        _this._rootElement = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._rootComponent = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._draggedColumnIndex = -1;
        _this._dropHintDetails = {};
        _this._updateDroppingState = function (newValue, event) {
            if (_this._draggedColumnIndex >= 0 && event.type !== 'drop' && !newValue) {
                _this._resetDropHints();
            }
        };
        _this._onDragOver = function (item, event) {
            if (_this._draggedColumnIndex >= 0) {
                event.stopPropagation();
                _this._computeDropHintToBeShown(event.clientX);
            }
        };
        _this._onDrop = function (item, event) {
            // Safe to assume this is defined since we're handling a drop event
            var columnReorderProps = _this._getColumnReorderProps();
            // Target index will not get changed if draggeditem is after target item.
            if (_this._draggedColumnIndex >= 0 && event) {
                var targetIndex = _this._draggedColumnIndex > _this._currentDropHintIndex
                    ? _this._currentDropHintIndex
                    : _this._currentDropHintIndex - 1;
                var isValidDrop = _this._isValidCurrentDropHintIndex();
                event.stopPropagation();
                if (isValidDrop) {
                    _this._onDropIndexInfo.sourceIndex = _this._draggedColumnIndex;
                    _this._onDropIndexInfo.targetIndex = targetIndex;
                    if (columnReorderProps.onColumnDrop) {
                        var dragDropDetails = {
                            draggedIndex: _this._draggedColumnIndex,
                            targetIndex: targetIndex,
                        };
                        columnReorderProps.onColumnDrop(dragDropDetails);
                        /* eslint-disable deprecation/deprecation */
                    }
                    else if (columnReorderProps.handleColumnReorder) {
                        columnReorderProps.handleColumnReorder(_this._draggedColumnIndex, targetIndex);
                        /* eslint-enable deprecation/deprecation */
                    }
                }
            }
            _this._resetDropHints();
            _this._dropHintDetails = {};
            _this._draggedColumnIndex = -1;
        };
        _this._updateDragInfo = function (props, event) {
            // Safe to assume this is defined since we're handling a drag event
            var columnReorderProps = _this._getColumnReorderProps();
            var itemIndex = props.itemIndex;
            if (itemIndex >= 0) {
                // Column index is set based on the checkbox
                _this._draggedColumnIndex = _this._isCheckboxColumnHidden() ? itemIndex - 1 : itemIndex - 2;
                _this._getDropHintPositions();
                if (columnReorderProps.onColumnDragStart) {
                    columnReorderProps.onColumnDragStart(true);
                }
            }
            else if (event && _this._draggedColumnIndex >= 0) {
                _this._resetDropHints();
                _this._draggedColumnIndex = -1;
                _this._dropHintDetails = {};
                if (columnReorderProps.onColumnDragEnd) {
                    var columnDragEndLocation = _this._isEventOnHeader(event);
                    columnReorderProps.onColumnDragEnd({ dropLocation: columnDragEndLocation }, event);
                }
            }
        };
        _this._getDropHintPositions = function () {
            var _a = _this.props.columns, columns = _a === void 0 ? NO_COLUMNS : _a;
            // Safe to assume this is defined since we're handling a drag/drop event
            var columnReorderProps = _this._getColumnReorderProps();
            var prevX = 0;
            var prevMid = 0;
            var prevRef;
            var frozenColumnCountFromStart = columnReorderProps.frozenColumnCountFromStart || 0;
            var frozenColumnCountFromEnd = columnReorderProps.frozenColumnCountFromEnd || 0;
            for (var i = frozenColumnCountFromStart; i < columns.length - frozenColumnCountFromEnd + 1; i++) {
                if (_this._rootElement.current) {
                    var dropHintElement = _this._rootElement.current.querySelectorAll('#columnDropHint_' + i)[0];
                    if (dropHintElement) {
                        if (i === frozenColumnCountFromStart) {
                            prevX = dropHintElement.offsetLeft;
                            prevMid = dropHintElement.offsetLeft;
                            prevRef = dropHintElement;
                        }
                        else {
                            var newMid = (dropHintElement.offsetLeft + prevX) / 2;
                            _this._dropHintDetails[i - 1] = {
                                originX: prevX,
                                startX: prevMid,
                                endX: newMid,
                                dropHintElementRef: prevRef,
                            };
                            prevMid = newMid;
                            prevRef = dropHintElement;
                            prevX = dropHintElement.offsetLeft;
                            if (i === columns.length - frozenColumnCountFromEnd) {
                                _this._dropHintDetails[i] = {
                                    originX: prevX,
                                    startX: prevMid,
                                    endX: dropHintElement.offsetLeft,
                                    dropHintElementRef: prevRef,
                                };
                            }
                        }
                    }
                }
            }
        };
        /**
         * Based on the given cursor position, finds the nearest drop hint and updates the state to make it visible
         */
        _this._computeDropHintToBeShown = function (clientX) {
            var isRtl = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getRTL"])(_this.props.theme);
            if (_this._rootElement.current) {
                var clientRect = _this._rootElement.current.getBoundingClientRect();
                var headerOriginX = clientRect.left;
                var eventXRelativePosition = clientX - headerOriginX;
                var currentDropHintIndex = _this._currentDropHintIndex;
                if (_this._isValidCurrentDropHintIndex()) {
                    if (_liesBetween(isRtl, eventXRelativePosition, _this._dropHintDetails[currentDropHintIndex].startX, _this._dropHintDetails[currentDropHintIndex].endX)) {
                        return;
                    }
                }
                var _a = _this.props.columns, columns = _a === void 0 ? NO_COLUMNS : _a;
                // Safe to assume this is defined since we're handling a drag/drop event
                var columnReorderProps = _this._getColumnReorderProps();
                var frozenColumnCountFromStart = columnReorderProps.frozenColumnCountFromStart || 0;
                var frozenColumnCountFromEnd = columnReorderProps.frozenColumnCountFromEnd || 0;
                var currentIndex = frozenColumnCountFromStart;
                var lastValidColumn = columns.length - frozenColumnCountFromEnd;
                var indexToUpdate = -1;
                if (_isBefore(isRtl, eventXRelativePosition, _this._dropHintDetails[currentIndex].endX)) {
                    indexToUpdate = currentIndex;
                }
                else if (_isAfter(isRtl, eventXRelativePosition, _this._dropHintDetails[lastValidColumn].startX)) {
                    indexToUpdate = lastValidColumn;
                }
                else if (_this._isValidCurrentDropHintIndex()) {
                    if (_this._dropHintDetails[currentDropHintIndex + 1] &&
                        _liesBetween(isRtl, eventXRelativePosition, _this._dropHintDetails[currentDropHintIndex + 1].startX, _this._dropHintDetails[currentDropHintIndex + 1].endX)) {
                        indexToUpdate = currentDropHintIndex + 1;
                    }
                    else if (_this._dropHintDetails[currentDropHintIndex - 1] &&
                        _liesBetween(isRtl, eventXRelativePosition, _this._dropHintDetails[currentDropHintIndex - 1].startX, _this._dropHintDetails[currentDropHintIndex - 1].endX)) {
                        indexToUpdate = currentDropHintIndex - 1;
                    }
                }
                if (indexToUpdate === -1) {
                    var startIndex = frozenColumnCountFromStart;
                    var endIndex = lastValidColumn;
                    while (startIndex < endIndex) {
                        var middleIndex = Math.ceil((endIndex + startIndex) / 2);
                        if (_liesBetween(isRtl, eventXRelativePosition, _this._dropHintDetails[middleIndex].startX, _this._dropHintDetails[middleIndex].endX)) {
                            indexToUpdate = middleIndex;
                            break;
                        }
                        else if (_isBefore(isRtl, eventXRelativePosition, _this._dropHintDetails[middleIndex].originX)) {
                            endIndex = middleIndex;
                        }
                        else if (_isAfter(isRtl, eventXRelativePosition, _this._dropHintDetails[middleIndex].originX)) {
                            startIndex = middleIndex;
                        }
                    }
                }
                if (indexToUpdate === _this._draggedColumnIndex || indexToUpdate === _this._draggedColumnIndex + 1) {
                    if (_this._isValidCurrentDropHintIndex()) {
                        _this._resetDropHints();
                    }
                }
                else if (currentDropHintIndex !== indexToUpdate && indexToUpdate >= 0) {
                    _this._resetDropHints();
                    _this._updateDropHintElement(_this._dropHintDetails[indexToUpdate].dropHintElementRef, 'inline-block');
                    _this._currentDropHintIndex = indexToUpdate;
                }
            }
        };
        _this._renderColumnSizer = function (_a) {
            var _b;
            var columnIndex = _a.columnIndex;
            var _c = _this.props.columns, columns = _c === void 0 ? NO_COLUMNS : _c;
            var column = columns[columnIndex];
            var columnResizeDetails = _this.state.columnResizeDetails;
            var classNames = _this._classNames;
            return column.isResizable ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: column.key + "_sizer", "aria-hidden": true, role: "button", "data-is-focusable": false, onClick: _stopPropagation, "data-sizer-index": columnIndex, onBlur: _this._onSizerBlur, className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])(classNames.cellSizer, columnIndex < columns.length - 1 ? classNames.cellSizerStart : classNames.cellSizerEnd, (_b = {},
                    _b[classNames.cellIsResizing] = columnResizeDetails && columnResizeDetails.columnIndex === columnIndex,
                    _b)), onDoubleClick: _this._onSizerDoubleClick.bind(_this, columnIndex) })) : null;
        };
        _this._onRenderColumnHeaderTooltip = function (tooltipHostProps) {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: tooltipHostProps.hostClassName }, tooltipHostProps.children);
        };
        /**
         * Called when the select all toggle is clicked.
         */
        _this._onSelectAllClicked = function () {
            var selection = _this.props.selection;
            if (selection) {
                selection.toggleAllSelected();
            }
        };
        _this._onRootMouseDown = function (ev) {
            var columnIndexAttr = ev.target.getAttribute('data-sizer-index');
            var columnIndex = Number(columnIndexAttr);
            var _a = _this.props.columns, columns = _a === void 0 ? NO_COLUMNS : _a;
            if (columnIndexAttr === null || ev.button !== MOUSEDOWN_PRIMARY_BUTTON) {
                // Ignore anything except the primary button.
                return;
            }
            _this.setState({
                columnResizeDetails: {
                    columnIndex: columnIndex,
                    columnMinWidth: columns[columnIndex].calculatedWidth,
                    originX: ev.clientX,
                },
            });
            ev.preventDefault();
            ev.stopPropagation();
        };
        _this._onRootMouseMove = function (ev) {
            var _a = _this.state, columnResizeDetails = _a.columnResizeDetails, isSizing = _a.isSizing;
            if (columnResizeDetails && !isSizing && ev.clientX !== columnResizeDetails.originX) {
                _this.setState({ isSizing: true });
            }
        };
        _this._onRootKeyDown = function (ev) {
            var _a = _this.state, columnResizeDetails = _a.columnResizeDetails, isSizing = _a.isSizing;
            var _b = _this.props, _c = _b.columns, columns = _c === void 0 ? NO_COLUMNS : _c, onColumnResized = _b.onColumnResized;
            var columnIndexAttr = ev.target.getAttribute('data-sizer-index');
            if (!columnIndexAttr || isSizing) {
                return;
            }
            var columnIndex = Number(columnIndexAttr);
            if (!columnResizeDetails) {
                // eslint-disable-next-line deprecation/deprecation
                if (ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].enter) {
                    _this.setState({
                        columnResizeDetails: {
                            columnIndex: columnIndex,
                            columnMinWidth: columns[columnIndex].calculatedWidth,
                        },
                    });
                    ev.preventDefault();
                    ev.stopPropagation();
                }
            }
            else {
                var increment = void 0;
                // eslint-disable-next-line deprecation/deprecation
                if (ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].enter) {
                    _this.setState({
                        columnResizeDetails: undefined,
                    });
                    ev.preventDefault();
                    ev.stopPropagation();
                    // eslint-disable-next-line deprecation/deprecation
                }
                else if (ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].left) {
                    increment = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getRTL"])(_this.props.theme) ? 1 : -1;
                    // eslint-disable-next-line deprecation/deprecation
                }
                else if (ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].right) {
                    increment = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getRTL"])(_this.props.theme) ? -1 : 1;
                }
                if (increment) {
                    if (!ev.shiftKey) {
                        increment *= 10;
                    }
                    _this.setState({
                        columnResizeDetails: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, columnResizeDetails), { columnMinWidth: columnResizeDetails.columnMinWidth + increment }),
                    });
                    if (onColumnResized) {
                        onColumnResized(columns[columnIndex], columnResizeDetails.columnMinWidth + increment, columnIndex);
                    }
                    ev.preventDefault();
                    ev.stopPropagation();
                }
            }
        };
        /**
         * mouse move event handler in the header
         * it will set isSizing state to true when user clicked on the sizer and move the mouse.
         *
         * @param ev - mouse move event
         */
        _this._onSizerMouseMove = function (ev) {
            var 
            // use buttons property here since ev.button in some edge case is not upding well during the move.
            // but firefox doesn't support it, so we set the default value when it is not defined.
            buttons = ev.buttons;
            var _a = _this.props, onColumnIsSizingChanged = _a.onColumnIsSizingChanged, onColumnResized = _a.onColumnResized, _b = _a.columns, columns = _b === void 0 ? NO_COLUMNS : _b;
            var columnResizeDetails = _this.state.columnResizeDetails;
            if (buttons !== undefined && buttons !== MOUSEMOVE_PRIMARY_BUTTON) {
                // cancel mouse down event and return early when the primary button is not pressed
                _this._onSizerMouseUp(ev);
                return;
            }
            if (ev.clientX !== columnResizeDetails.originX) {
                if (onColumnIsSizingChanged) {
                    onColumnIsSizingChanged(columns[columnResizeDetails.columnIndex], true);
                }
            }
            if (onColumnResized) {
                var movement = ev.clientX - columnResizeDetails.originX;
                if (Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getRTL"])(_this.props.theme)) {
                    movement = -movement;
                }
                onColumnResized(columns[columnResizeDetails.columnIndex], columnResizeDetails.columnMinWidth + movement, columnResizeDetails.columnIndex);
            }
        };
        _this._onSizerBlur = function (ev) {
            var columnResizeDetails = _this.state.columnResizeDetails;
            if (columnResizeDetails) {
                _this.setState({
                    columnResizeDetails: undefined,
                    isSizing: false,
                });
            }
        };
        /**
         * mouse up event handler in the header
         * clear the resize related state.
         * This is to ensure we can catch double click event
         *
         * @param ev - mouse up event
         */
        _this._onSizerMouseUp = function (ev) {
            var _a = _this.props, _b = _a.columns, columns = _b === void 0 ? NO_COLUMNS : _b, onColumnIsSizingChanged = _a.onColumnIsSizingChanged;
            var columnResizeDetails = _this.state.columnResizeDetails;
            _this.setState({
                columnResizeDetails: undefined,
                isSizing: false,
            });
            if (onColumnIsSizingChanged) {
                onColumnIsSizingChanged(columns[columnResizeDetails.columnIndex], false);
            }
        };
        _this._onToggleCollapseAll = function () {
            var onToggleCollapseAll = _this.props.onToggleCollapseAll;
            var newCollapsed = !_this.state.isAllCollapsed;
            _this.setState({
                isAllCollapsed: newCollapsed,
            });
            if (onToggleCollapseAll) {
                onToggleCollapseAll(newCollapsed);
            }
        };
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["initializeComponentRef"])(_this);
        _this._events = new _Utilities__WEBPACK_IMPORTED_MODULE_2__["EventGroup"](_this);
        _this.state = {
            columnResizeDetails: undefined,
            isAllCollapsed: _this.props.isAllCollapsed,
            isAllSelected: !!_this.props.selection && _this.props.selection.isAllSelected(),
        };
        _this._onDropIndexInfo = {
            sourceIndex: -1,
            targetIndex: -1,
        };
        _this._id = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getId"])('header');
        _this._currentDropHintIndex = -1;
        // The drag drop handler won't do any work until subscribe() is called,
        // so always set it up for convenience
        _this._dragDropHelper = new _utilities_dragdrop_index__WEBPACK_IMPORTED_MODULE_11__["DragDropHelper"]({
            selection: {
                getSelection: function () {
                    return;
                },
            },
            minimumPixelsForDrag: _this.props.minimumPixelsForDrag,
        });
        return _this;
    }
    DetailsHeaderBase.prototype.componentDidMount = function () {
        var selection = this.props.selection;
        this._events.on(selection, _utilities_selection_interfaces__WEBPACK_IMPORTED_MODULE_10__["SELECTION_CHANGE"], this._onSelectionChanged);
        // this._rootElement.current will be null in tests using react-test-renderer
        if (this._rootElement.current) {
            // We need to use native on this to prevent MarqueeSelection from handling the event before us.
            this._events.on(this._rootElement.current, 'mousedown', this._onRootMouseDown);
            this._events.on(this._rootElement.current, 'keydown', this._onRootKeyDown);
            if (this._getColumnReorderProps()) {
                this._subscriptionObject = this._dragDropHelper.subscribe(this._rootElement.current, this._events, this._getHeaderDragDropOptions());
            }
        }
    };
    DetailsHeaderBase.prototype.componentDidUpdate = function (prevProps) {
        if (this._getColumnReorderProps()) {
            if (!this._subscriptionObject && this._rootElement.current) {
                this._subscriptionObject = this._dragDropHelper.subscribe(this._rootElement.current, this._events, this._getHeaderDragDropOptions());
            }
        }
        else if (this._subscriptionObject) {
            this._subscriptionObject.dispose();
            delete this._subscriptionObject;
        }
        if (this.props !== prevProps && this._onDropIndexInfo.sourceIndex >= 0 && this._onDropIndexInfo.targetIndex >= 0) {
            var _a = prevProps.columns, previousColumns = _a === void 0 ? NO_COLUMNS : _a;
            var _b = this.props.columns, columns = _b === void 0 ? NO_COLUMNS : _b;
            if (previousColumns[this._onDropIndexInfo.sourceIndex].key === columns[this._onDropIndexInfo.targetIndex].key) {
                this._onDropIndexInfo = {
                    sourceIndex: -1,
                    targetIndex: -1,
                };
            }
        }
        if (this.props.isAllCollapsed !== prevProps.isAllCollapsed) {
            this.setState({ isAllCollapsed: this.props.isAllCollapsed });
        }
    };
    DetailsHeaderBase.prototype.componentWillUnmount = function () {
        if (this._subscriptionObject) {
            this._subscriptionObject.dispose();
            delete this._subscriptionObject;
        }
        this._dragDropHelper.dispose();
        this._events.dispose();
    };
    DetailsHeaderBase.prototype.render = function () {
        var _this = this;
        var _a = this.props, _b = _a.columns, columns = _b === void 0 ? NO_COLUMNS : _b, ariaLabel = _a.ariaLabel, ariaLabelForToggleAllGroupsButton = _a.ariaLabelForToggleAllGroupsButton, ariaLabelForSelectAllCheckbox = _a.ariaLabelForSelectAllCheckbox, selectAllVisibility = _a.selectAllVisibility, ariaLabelForSelectionColumn = _a.ariaLabelForSelectionColumn, indentWidth = _a.indentWidth, onColumnClick = _a.onColumnClick, onColumnContextMenu = _a.onColumnContextMenu, _c = _a.onRenderColumnHeaderTooltip, onRenderColumnHeaderTooltip = _c === void 0 ? this._onRenderColumnHeaderTooltip : _c, styles = _a.styles, selectionMode = _a.selectionMode, theme = _a.theme, onRenderDetailsCheckbox = _a.onRenderDetailsCheckbox, groupNestingDepth = _a.groupNestingDepth, useFastIcons = _a.useFastIcons, checkboxVisibility = _a.checkboxVisibility, className = _a.className;
        var _d = this.state, isAllSelected = _d.isAllSelected, columnResizeDetails = _d.columnResizeDetails, isSizing = _d.isSizing, isAllCollapsed = _d.isAllCollapsed;
        var showCheckbox = selectAllVisibility !== _DetailsHeader_types__WEBPACK_IMPORTED_MODULE_13__["SelectAllVisibility"].none;
        var isCheckboxHidden = selectAllVisibility === _DetailsHeader_types__WEBPACK_IMPORTED_MODULE_13__["SelectAllVisibility"].hidden;
        var isCheckboxAlwaysVisible = checkboxVisibility === _DetailsList_types__WEBPACK_IMPORTED_MODULE_3__["CheckboxVisibility"].always;
        var columnReorderProps = this._getColumnReorderProps();
        var frozenColumnCountFromStart = columnReorderProps && columnReorderProps.frozenColumnCountFromStart
            ? columnReorderProps.frozenColumnCountFromStart
            : 0;
        var frozenColumnCountFromEnd = columnReorderProps && columnReorderProps.frozenColumnCountFromEnd
            ? columnReorderProps.frozenColumnCountFromEnd
            : 0;
        this._classNames = getClassNames(styles, {
            theme: theme,
            isAllSelected: isAllSelected,
            isSelectAllHidden: selectAllVisibility === _DetailsHeader_types__WEBPACK_IMPORTED_MODULE_13__["SelectAllVisibility"].hidden,
            isResizingColumn: !!columnResizeDetails && isSizing,
            isSizing: isSizing,
            isAllCollapsed: isAllCollapsed,
            isCheckboxHidden: isCheckboxHidden,
            className: className,
        });
        var classNames = this._classNames;
        var IconComponent = useFastIcons ? _Icon__WEBPACK_IMPORTED_MODULE_5__["FontIcon"] : _Icon__WEBPACK_IMPORTED_MODULE_5__["Icon"];
        var isRTL = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getRTL"])(theme);
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_FocusZone__WEBPACK_IMPORTED_MODULE_4__["FocusZone"], { role: "row", "aria-label": ariaLabel, className: classNames.root, componentRef: this._rootComponent, elementRef: this._rootElement, onMouseMove: this._onRootMouseMove, "data-automationid": "DetailsHeader", direction: _FocusZone__WEBPACK_IMPORTED_MODULE_4__["FocusZoneDirection"].horizontal },
            showCheckbox
                ? [
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: "__checkbox", className: classNames.cellIsCheck, "aria-labelledby": this._id + "-check", onClick: !isCheckboxHidden ? this._onSelectAllClicked : undefined, "aria-colindex": 1, role: 'columnheader' }, onRenderColumnHeaderTooltip({
                        hostClassName: classNames.checkTooltip,
                        id: this._id + "-checkTooltip",
                        setAriaDescribedBy: false,
                        content: ariaLabelForSelectAllCheckbox,
                        children: (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_DetailsRowCheck__WEBPACK_IMPORTED_MODULE_9__["DetailsRowCheck"], { id: this._id + "-check", "aria-label": selectionMode === _utilities_selection_interfaces__WEBPACK_IMPORTED_MODULE_10__["SelectionMode"].multiple
                                ? ariaLabelForSelectAllCheckbox
                                : ariaLabelForSelectionColumn, "aria-describedby": !isCheckboxHidden
                                ? ariaLabelForSelectAllCheckbox && !this.props.onRenderColumnHeaderTooltip
                                    ? this._id + "-checkTooltip"
                                    : undefined
                                : ariaLabelForSelectionColumn && !this.props.onRenderColumnHeaderTooltip
                                    ? this._id + "-checkTooltip"
                                    : undefined, "data-is-focusable": !isCheckboxHidden || undefined, isHeader: true, selected: isAllSelected, anySelected: false, canSelect: !isCheckboxHidden, className: classNames.check, onRenderDetailsCheckbox: onRenderDetailsCheckbox, useFastIcons: useFastIcons, isVisible: isCheckboxAlwaysVisible })),
                    }, this._onRenderColumnHeaderTooltip)),
                    !this.props.onRenderColumnHeaderTooltip ? (ariaLabelForSelectAllCheckbox && !isCheckboxHidden ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { key: "__checkboxLabel", id: this._id + "-checkTooltip", className: classNames.accessibleLabel, "aria-hidden": true }, ariaLabelForSelectAllCheckbox)) : ariaLabelForSelectionColumn && isCheckboxHidden ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { key: "__checkboxLabel", id: this._id + "-checkTooltip", className: classNames.accessibleLabel, "aria-hidden": true }, ariaLabelForSelectionColumn)) : null) : null,
                ]
                : null,
            groupNestingDepth > 0 && this.props.collapseAllVisibility === _GroupedList__WEBPACK_IMPORTED_MODULE_8__["CollapseAllVisibility"].visible ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.cellIsGroupExpander, onClick: this._onToggleCollapseAll, "data-is-focusable": true, "aria-label": ariaLabelForToggleAllGroupsButton, "aria-expanded": !isAllCollapsed, role: "columnheader" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](IconComponent, { className: classNames.collapseButton, iconName: isRTL ? 'ChevronLeftMed' : 'ChevronRightMed' }))) : null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_GroupedList_GroupSpacer__WEBPACK_IMPORTED_MODULE_7__["GroupSpacer"], { indentWidth: indentWidth, role: "gridcell", count: groupNestingDepth - 1 }),
            columns.map(function (column, columnIndex) {
                var _isDraggable = columnReorderProps
                    ? columnIndex >= frozenColumnCountFromStart && columnIndex < columns.length - frozenColumnCountFromEnd
                    : false;
                return [
                    columnReorderProps &&
                        (_isDraggable || columnIndex === columns.length - frozenColumnCountFromEnd) &&
                        _this._renderDropHint(columnIndex),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_DetailsList_DetailsColumn__WEBPACK_IMPORTED_MODULE_12__["DetailsColumn"], { column: column, styles: column.styles, key: column.key, columnIndex: (showCheckbox ? 2 : 1) + columnIndex, parentId: _this._id, isDraggable: _isDraggable, updateDragInfo: _this._updateDragInfo, dragDropHelper: _this._dragDropHelper, onColumnClick: onColumnClick, onColumnContextMenu: onColumnContextMenu, 
                        // Do not render tooltips by default, but allow for override via props.
                        onRenderColumnHeaderTooltip: _this.props.onRenderColumnHeaderTooltip, isDropped: _this._onDropIndexInfo.targetIndex === columnIndex, cellStyleProps: _this.props.cellStyleProps, useFastIcons: useFastIcons }),
                    _this._renderColumnDivider(columnIndex),
                ];
            }),
            columnReorderProps && frozenColumnCountFromEnd === 0 && this._renderDropHint(columns.length),
            isSizing && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Layer__WEBPACK_IMPORTED_MODULE_6__["Layer"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.sizingOverlay, onMouseMove: this._onSizerMouseMove, onMouseUp: this._onSizerMouseUp })))));
    };
    /** Set focus to the active thing in the focus area. */
    DetailsHeaderBase.prototype.focus = function () {
        var _a;
        return !!((_a = this._rootComponent.current) === null || _a === void 0 ? void 0 : _a.focus());
    };
    /**
     * Gets column reorder props from this.props. If the calling code is part of setting up or
     * handling drag/drop events, it's safe to assume that this method's return value is defined
     * (because drag/drop handling will only be set up if reorder props are given).
     */
    DetailsHeaderBase.prototype._getColumnReorderProps = function () {
        var _a = this.props, columnReorderOptions = _a.columnReorderOptions, columnReorderProps = _a.columnReorderProps;
        return columnReorderProps || (columnReorderOptions && Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, columnReorderOptions), { onColumnDragEnd: undefined }));
    };
    DetailsHeaderBase.prototype._getHeaderDragDropOptions = function () {
        var options = {
            selectionIndex: 1,
            context: { data: this, index: 0 },
            canDrag: function () { return false; },
            canDrop: function () { return true; },
            onDragStart: function () { return undefined; },
            updateDropState: this._updateDroppingState,
            onDrop: this._onDrop,
            onDragEnd: function () { return undefined; },
            onDragOver: this._onDragOver,
        };
        return options;
    };
    DetailsHeaderBase.prototype._isValidCurrentDropHintIndex = function () {
        return this._currentDropHintIndex >= 0;
    };
    /**
     * @returns whether or not the "Select All" checkbox column is hidden.
     */
    DetailsHeaderBase.prototype._isCheckboxColumnHidden = function () {
        var _a = this.props, selectionMode = _a.selectionMode, checkboxVisibility = _a.checkboxVisibility;
        return selectionMode === _utilities_selection_interfaces__WEBPACK_IMPORTED_MODULE_10__["SelectionMode"].none || checkboxVisibility === _DetailsList_types__WEBPACK_IMPORTED_MODULE_3__["CheckboxVisibility"].hidden;
    };
    DetailsHeaderBase.prototype._resetDropHints = function () {
        if (this._currentDropHintIndex >= 0) {
            this._updateDropHintElement(this._dropHintDetails[this._currentDropHintIndex].dropHintElementRef, 'none');
            this._currentDropHintIndex = -1;
        }
    };
    DetailsHeaderBase.prototype._updateDropHintElement = function (element, displayProperty) {
        element.childNodes[1].style.display = displayProperty;
        element.childNodes[0].style.display = displayProperty;
    };
    DetailsHeaderBase.prototype._isEventOnHeader = function (event) {
        if (this._rootElement.current) {
            var clientRect = this._rootElement.current.getBoundingClientRect();
            if (event.clientX > clientRect.left &&
                event.clientX < clientRect.right &&
                event.clientY > clientRect.top &&
                event.clientY < clientRect.bottom) {
                return _DetailsList_types__WEBPACK_IMPORTED_MODULE_3__["ColumnDragEndLocation"].header;
            }
        }
    };
    DetailsHeaderBase.prototype._renderColumnDivider = function (columnIndex) {
        var _a = this.props.columns, columns = _a === void 0 ? NO_COLUMNS : _a;
        var column = columns[columnIndex];
        var onRenderDivider = column.onRenderDivider;
        return onRenderDivider
            ? onRenderDivider({ column: column, columnIndex: columnIndex }, this._renderColumnSizer)
            : this._renderColumnSizer({ column: column, columnIndex: columnIndex });
    };
    DetailsHeaderBase.prototype._renderDropHint = function (dropHintIndex) {
        var classNames = this._classNames;
        var IconComponent = this.props.useFastIcons ? _Icon__WEBPACK_IMPORTED_MODULE_5__["FontIcon"] : _Icon__WEBPACK_IMPORTED_MODULE_5__["Icon"];
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: 'dropHintKey', className: classNames.dropHintStyle, id: "columnDropHint_" + dropHintIndex },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { role: "presentation", key: "dropHintCircleKey", className: classNames.dropHintCaretStyle, "data-is-focusable": false, "data-sizer-index": dropHintIndex, "aria-hidden": true },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](IconComponent, { iconName: 'CircleShapeSolid' })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: "dropHintLineKey", "aria-hidden": true, "data-is-focusable": false, "data-sizer-index": dropHintIndex, className: classNames.dropHintLineStyle })));
    };
    /**
     * double click on the column sizer will auto ajust column width
     * to fit the longest content among current rendered rows.
     *
     * @param columnIndex - index of the column user double clicked
     * @param ev - mouse double click event
     */
    DetailsHeaderBase.prototype._onSizerDoubleClick = function (columnIndex, ev) {
        var _a = this.props, onColumnAutoResized = _a.onColumnAutoResized, _b = _a.columns, columns = _b === void 0 ? NO_COLUMNS : _b;
        if (onColumnAutoResized) {
            onColumnAutoResized(columns[columnIndex], columnIndex);
        }
    };
    DetailsHeaderBase.prototype._onSelectionChanged = function () {
        var isAllSelected = !!this.props.selection && this.props.selection.isAllSelected();
        if (this.state.isAllSelected !== isAllSelected) {
            this.setState({
                isAllSelected: isAllSelected,
            });
        }
    };
    DetailsHeaderBase.defaultProps = {
        selectAllVisibility: _DetailsHeader_types__WEBPACK_IMPORTED_MODULE_13__["SelectAllVisibility"].visible,
        collapseAllVisibility: _GroupedList__WEBPACK_IMPORTED_MODULE_8__["CollapseAllVisibility"].visible,
        useFastIcons: true,
    };
    return DetailsHeaderBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

function _liesBetween(rtl, target, left, right) {
    return rtl ? target <= left && target >= right : target >= left && target <= right;
}
function _isBefore(rtl, a, b) {
    return rtl ? a >= b : a <= b;
}
function _isAfter(rtl, a, b) {
    return rtl ? a <= b : a >= b;
}
function _stopPropagation(ev) {
    ev.stopPropagation();
}
//# sourceMappingURL=DetailsHeader.base.js.map

/***/ }),

/***/ "t04b":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Dialog/Dialog.styles.js ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "PL71");

var GlobalClassNames = {
    root: 'ms-Dialog',
};
var getStyles = function (props) {
    var _a;
    var className = props.className, containerClassName = props.containerClassName, // eslint-disable-line deprecation/deprecation
    _b = props.dialogDefaultMinWidth, // eslint-disable-line deprecation/deprecation
    dialogDefaultMinWidth = _b === void 0 ? '288px' : _b, _c = props.dialogDefaultMaxWidth, dialogDefaultMaxWidth = _c === void 0 ? '340px' : _c, hidden = props.hidden, theme = props.theme;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
    return {
        root: [classNames.root, theme.fonts.medium, className],
        main: [
            {
                width: dialogDefaultMinWidth,
                outline: '3px solid transparent',
                selectors: (_a = {},
                    _a["@media (min-width: " + _Styling__WEBPACK_IMPORTED_MODULE_0__["ScreenWidthMinMedium"] + "px)"] = {
                        width: 'auto',
                        maxWidth: dialogDefaultMaxWidth,
                        minWidth: dialogDefaultMinWidth,
                    },
                    _a),
            },
            !hidden && { display: 'flex' },
            containerClassName,
        ],
    };
};
//# sourceMappingURL=Dialog.styles.js.map

/***/ }),

/***/ "tApQ":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsHeader.js ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: DetailsHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsHeader", function() { return DetailsHeader; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _DetailsHeader_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DetailsHeader.base */ "surb");
/* harmony import */ var _DetailsHeader_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetailsHeader.styles */ "a+oq");



var DetailsHeader = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_DetailsHeader_base__WEBPACK_IMPORTED_MODULE_1__["DetailsHeaderBase"], _DetailsHeader_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, { scope: 'DetailsHeader' });
//# sourceMappingURL=DetailsHeader.js.map

/***/ }),

/***/ "tCYI":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsRow.styles.js ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: DetailsRowGlobalClassNames, DEFAULT_CELL_STYLE_PROPS, DEFAULT_ROW_HEIGHTS, getDetailsRowStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsRowGlobalClassNames", function() { return DetailsRowGlobalClassNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CELL_STYLE_PROPS", function() { return DEFAULT_CELL_STYLE_PROPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_ROW_HEIGHTS", function() { return DEFAULT_ROW_HEIGHTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDetailsRowStyles", function() { return getDetailsRowStyles; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Styling */ "PL71");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");



var DetailsRowGlobalClassNames = {
    root: 'ms-DetailsRow',
    // TODO: in Fabric 7.0 lowercase the 'Compact' for consistency across other components.
    compact: 'ms-DetailsList--Compact',
    cell: 'ms-DetailsRow-cell',
    cellAnimation: 'ms-DetailsRow-cellAnimation',
    cellCheck: 'ms-DetailsRow-cellCheck',
    check: 'ms-DetailsRow-check',
    cellMeasurer: 'ms-DetailsRow-cellMeasurer',
    listCellFirstChild: 'ms-List-cell:first-child',
    isContentUnselectable: 'is-contentUnselectable',
    isSelected: 'is-selected',
    isCheckVisible: 'is-check-visible',
    isRowHeader: 'is-row-header',
    fields: 'ms-DetailsRow-fields',
};
var IsFocusableSelector = "[data-is-focusable='true']";
var DEFAULT_CELL_STYLE_PROPS = {
    cellLeftPadding: 12,
    cellRightPadding: 8,
    cellExtraRightPadding: 24,
};
// Source of default row heights to share.
var DEFAULT_ROW_HEIGHTS = {
    rowHeight: 42,
    compactRowHeight: 32,
};
// Constant values
var values = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, DEFAULT_ROW_HEIGHTS), { rowVerticalPadding: 11, compactRowVerticalPadding: 6 });
var getDetailsRowStyles = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    var theme = props.theme, isSelected = props.isSelected, canSelect = props.canSelect, droppingClassName = props.droppingClassName, anySelected = props.anySelected, isCheckVisible = props.isCheckVisible, checkboxCellClassName = props.checkboxCellClassName, compact = props.compact, className = props.className, _o = props.cellStyleProps, cellStyleProps = _o === void 0 ? DEFAULT_CELL_STYLE_PROPS : _o, enableUpdateAnimations = props.enableUpdateAnimations;
    var palette = theme.palette, fonts = theme.fonts;
    var neutralPrimary = palette.neutralPrimary, white = palette.white, neutralSecondary = palette.neutralSecondary, neutralLighter = palette.neutralLighter, neutralLight = palette.neutralLight, neutralDark = palette.neutralDark, neutralQuaternaryAlt = palette.neutralQuaternaryAlt;
    var focusBorder = theme.semanticColors.focusBorder;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getGlobalClassNames"])(DetailsRowGlobalClassNames, theme);
    var colors = {
        // Default
        defaultHeaderText: neutralPrimary,
        defaultMetaText: neutralSecondary,
        defaultBackground: white,
        // Default Hover
        defaultHoverHeaderText: neutralDark,
        defaultHoverMetaText: neutralPrimary,
        defaultHoverBackground: neutralLighter,
        // Selected
        selectedHeaderText: neutralDark,
        selectedMetaText: neutralPrimary,
        selectedBackground: neutralLight,
        // Selected Hover
        selectedHoverHeaderText: neutralDark,
        selectedHoverMetaText: neutralPrimary,
        selectedHoverBackground: neutralQuaternaryAlt,
        // Focus
        focusHeaderText: neutralDark,
        focusMetaText: neutralPrimary,
        focusBackground: neutralLight,
        focusHoverBackground: neutralQuaternaryAlt,
    };
    // Selected row styles
    var selectedStyles = [
        Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getFocusStyle"])(theme, { inset: -1, borderColor: focusBorder, outlineColor: white }),
        classNames.isSelected,
        {
            color: colors.selectedMetaText,
            background: colors.selectedBackground,
            borderBottom: "1px solid " + white,
            selectors: (_a = {
                    '&:before': {
                        position: 'absolute',
                        display: 'block',
                        top: -1,
                        height: 1,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        content: '',
                        borderTop: "1px solid " + white,
                    },
                    // Selected State hover
                    '&:hover': {
                        background: colors.selectedHoverBackground,
                        color: colors.selectedHoverMetaText,
                        selectors: (_b = {},
                            // Selected State hover meta cell
                            _b["." + classNames.cell + " " + _Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                                color: 'HighlightText',
                                selectors: {
                                    '> a': {
                                        color: 'HighlightText',
                                    },
                                },
                            },
                            // Selected State hover Header cell
                            _b["." + classNames.isRowHeader] = {
                                color: colors.selectedHoverHeaderText,
                                selectors: (_c = {},
                                    _c[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                                        color: 'HighlightText',
                                    },
                                    _c),
                            },
                            // Ensure high-contrast mode overrides default hover background
                            _b[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                                background: 'Highlight',
                            },
                            _b),
                    },
                    // Focus state
                    '&:focus': {
                        background: colors.focusBackground,
                        selectors: (_d = {},
                            // Selected State hover meta cell
                            _d["." + classNames.cell] = {
                                color: colors.focusMetaText,
                                selectors: (_e = {},
                                    _e[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                                        color: 'HighlightText',
                                        selectors: {
                                            '> a': {
                                                color: 'HighlightText',
                                            },
                                        },
                                    },
                                    _e),
                            },
                            // Row header cell
                            _d["." + classNames.isRowHeader] = {
                                color: colors.focusHeaderText,
                                selectors: (_f = {},
                                    _f[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                                        color: 'HighlightText',
                                    },
                                    _f),
                            },
                            // Ensure high-contrast mode overrides default focus background
                            _d[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                                background: 'Highlight',
                            },
                            _d),
                    }
                },
                _a[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                    background: 'Highlight',
                    color: 'HighlightText',
                    MsHighContrastAdjust: 'none',
                    selectors: {
                        a: {
                            color: 'HighlightText',
                        },
                    },
                },
                // Focus and hover state
                _a['&:focus:hover'] = {
                    background: colors.focusHoverBackground,
                },
                _a),
        },
    ];
    var cannotSelectStyles = [
        classNames.isContentUnselectable,
        {
            userSelect: 'none',
            cursor: 'default',
        },
    ];
    var rootCompactStyles = {
        minHeight: values.compactRowHeight,
        border: 0,
    };
    var cellCompactStyles = {
        minHeight: values.compactRowHeight,
        paddingTop: values.compactRowVerticalPadding,
        paddingBottom: values.compactRowVerticalPadding,
        paddingLeft: cellStyleProps.cellLeftPadding + "px",
    };
    var defaultCellStyles = [
        Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getFocusStyle"])(theme, { inset: -1 }),
        classNames.cell,
        {
            display: 'inline-block',
            position: 'relative',
            boxSizing: 'border-box',
            minHeight: values.rowHeight,
            verticalAlign: 'top',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            paddingTop: values.rowVerticalPadding,
            paddingBottom: values.rowVerticalPadding,
            paddingLeft: cellStyleProps.cellLeftPadding + "px",
            selectors: (_g = {
                    '& > button': {
                        maxWidth: '100%',
                    }
                },
                _g[IsFocusableSelector] = Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getFocusStyle"])(theme, { inset: -1, borderColor: neutralSecondary, outlineColor: white }),
                _g),
        },
        isSelected && {
            selectors: (_h = {},
                _h[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                    background: 'Highlight',
                    color: 'HighlightText',
                    MsHighContrastAdjust: 'none',
                    selectors: {
                        a: {
                            color: 'HighlightText',
                        },
                    },
                },
                _h),
        },
        compact && cellCompactStyles,
    ];
    return {
        root: [
            classNames.root,
            _Styling__WEBPACK_IMPORTED_MODULE_1__["AnimationClassNames"].fadeIn400,
            droppingClassName,
            theme.fonts.small,
            isCheckVisible && classNames.isCheckVisible,
            Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getFocusStyle"])(theme, { borderColor: focusBorder, outlineColor: white }),
            {
                borderBottom: "1px solid " + neutralLighter,
                background: colors.defaultBackground,
                color: colors.defaultMetaText,
                // This ensures that the row always tries to consume is minimum width and does not compress.
                display: 'inline-flex',
                minWidth: '100%',
                minHeight: values.rowHeight,
                whiteSpace: 'nowrap',
                padding: 0,
                boxSizing: 'border-box',
                verticalAlign: 'top',
                textAlign: 'left',
                selectors: (_j = {},
                    _j["." + classNames.listCellFirstChild + " &:before"] = {
                        display: 'none',
                    },
                    _j['&:hover'] = {
                        background: colors.defaultHoverBackground,
                        color: colors.defaultHoverMetaText,
                        selectors: (_k = {},
                            _k["." + classNames.isRowHeader] = {
                                color: colors.defaultHoverHeaderText,
                            },
                            _k),
                    },
                    _j["&:hover ." + classNames.check] = {
                        opacity: 1,
                    },
                    _j["." + _Utilities__WEBPACK_IMPORTED_MODULE_2__["IsFocusVisibleClassName"] + " &:focus ." + classNames.check] = {
                        opacity: 1,
                    },
                    _j),
            },
            isSelected && selectedStyles,
            !canSelect && cannotSelectStyles,
            compact && rootCompactStyles,
            className,
        ],
        cellUnpadded: {
            paddingRight: cellStyleProps.cellRightPadding + "px",
        },
        cellPadded: {
            paddingRight: cellStyleProps.cellExtraRightPadding + cellStyleProps.cellRightPadding + "px",
            selectors: (_l = {},
                _l["&." + classNames.cellCheck] = {
                    paddingRight: 0,
                },
                _l),
        },
        cell: defaultCellStyles,
        cellAnimation: enableUpdateAnimations && _Styling__WEBPACK_IMPORTED_MODULE_1__["AnimationStyles"].slideLeftIn40,
        cellMeasurer: [
            classNames.cellMeasurer,
            {
                overflow: 'visible',
                whiteSpace: 'nowrap',
            },
        ],
        checkCell: [
            defaultCellStyles,
            classNames.cellCheck,
            checkboxCellClassName,
            {
                padding: 0,
                // Ensure that the check cell covers the top border of the cell.
                // This ensures the click target does not leave a spot which would
                // cause other items to be deselected.
                paddingTop: 1,
                marginTop: -1,
                flexShrink: 0,
            },
        ],
        checkCover: {
            position: 'absolute',
            top: -1,
            left: 0,
            bottom: 0,
            right: 0,
            display: anySelected ? 'block' : 'none',
        },
        fields: [
            classNames.fields,
            {
                display: 'flex',
                alignItems: 'stretch',
            },
        ],
        isRowHeader: [
            classNames.isRowHeader,
            {
                color: colors.defaultHeaderText,
                fontSize: fonts.medium.fontSize,
            },
            isSelected && {
                color: colors.selectedHeaderText,
                fontWeight: _Styling__WEBPACK_IMPORTED_MODULE_1__["FontWeights"].semibold,
                selectors: (_m = {},
                    _m[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                        color: 'HighlightText',
                    },
                    _m),
            },
        ],
        isMultiline: [
            defaultCellStyles,
            {
                whiteSpace: 'normal',
                wordBreak: 'break-word',
                textOverflow: 'clip',
            },
        ],
        check: [classNames.check],
    };
};
//# sourceMappingURL=DetailsRow.styles.js.map

/***/ }),

/***/ "tpD7":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/KeytipData/index.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: KeytipData, useKeytipRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _KeytipData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KeytipData */ "qepx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeytipData", function() { return _KeytipData__WEBPACK_IMPORTED_MODULE_0__["KeytipData"]; });

/* harmony import */ var _useKeytipRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useKeytipRef */ "+eNG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useKeytipRef", function() { return _useKeytipRef__WEBPACK_IMPORTED_MODULE_1__["useKeytipRef"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "u2nG":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Checkbox/Checkbox.js ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: Checkbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return Checkbox; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _Checkbox_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Checkbox.base */ "ElRa");
/* harmony import */ var _Checkbox_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Checkbox.styles */ "gw9X");



var Checkbox = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_Checkbox_base__WEBPACK_IMPORTED_MODULE_1__["CheckboxBase"], _Checkbox_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, { scope: 'Checkbox' });
//# sourceMappingURL=Checkbox.js.map

/***/ }),

/***/ "uGAW":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/utilities/dragdrop/DragDropHelper.js ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: DragDropHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropHelper", function() { return DragDropHelper; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");

var MOUSEDOWN_PRIMARY_BUTTON = 0; // for mouse down event we are using ev.button property, 0 means left button
var MOUSEMOVE_PRIMARY_BUTTON = 1; // for mouse move event we are using ev.buttons property, 1 means left button
var DragDropHelper = /** @class */ (function () {
    function DragDropHelper(params) {
        this._selection = params.selection;
        this._dragEnterCounts = {};
        this._activeTargets = {};
        this._lastId = 0;
        // To make this class cheap to create, which allows simplifying some logic elsewhere,
        // only initialize the event group and global event handlers as needed.
        this._initialized = false;
    }
    DragDropHelper.prototype.dispose = function () {
        if (this._events) {
            this._events.dispose();
        }
    };
    DragDropHelper.prototype.subscribe = function (root, events, dragDropOptions) {
        var _this = this;
        if (!this._initialized) {
            this._events = new _Utilities__WEBPACK_IMPORTED_MODULE_0__["EventGroup"](this);
            var doc = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
            // clear drag data when mouse up, use capture event to ensure it will be run
            if (doc) {
                this._events.on(doc.body, 'mouseup', this._onMouseUp.bind(this), true);
                this._events.on(doc, 'mouseup', this._onDocumentMouseUp.bind(this), true);
            }
            this._initialized = true;
        }
        var _a = dragDropOptions.key, key = _a === void 0 ? "" + ++this._lastId : _a;
        var handlers = [];
        var onDragStart;
        var onDragLeave;
        var onDragEnter;
        var onDragEnd;
        var onDrop;
        var onDragOver;
        var onMouseDown;
        var isDraggable;
        var isDroppable;
        var activeTarget;
        if (dragDropOptions && root) {
            var eventMap = dragDropOptions.eventMap, context = dragDropOptions.context, updateDropState_1 = dragDropOptions.updateDropState;
            var dragDropTarget = {
                root: root,
                options: dragDropOptions,
                key: key,
            };
            isDraggable = this._isDraggable(dragDropTarget);
            isDroppable = this._isDroppable(dragDropTarget);
            if (isDraggable || isDroppable) {
                if (eventMap) {
                    for (var _i = 0, eventMap_1 = eventMap; _i < eventMap_1.length; _i++) {
                        var event_1 = eventMap_1[_i];
                        var handler = {
                            callback: event_1.callback.bind(null, context),
                            eventName: event_1.eventName,
                        };
                        handlers.push(handler);
                        this._events.on(root, handler.eventName, handler.callback);
                    }
                }
            }
            if (isDroppable) {
                // If the target is droppable, wire up global event listeners to track drop-related events.
                onDragLeave = function (event) {
                    if (!event.isHandled) {
                        event.isHandled = true;
                        _this._dragEnterCounts[key]--;
                        if (_this._dragEnterCounts[key] === 0) {
                            updateDropState_1(false /* isDropping */, event);
                        }
                    }
                };
                onDragEnter = function (event) {
                    event.preventDefault(); // needed for IE
                    if (!event.isHandled) {
                        event.isHandled = true;
                        _this._dragEnterCounts[key]++;
                        if (_this._dragEnterCounts[key] === 1) {
                            updateDropState_1(true /* isDropping */, event);
                        }
                    }
                };
                onDragEnd = function (event) {
                    _this._dragEnterCounts[key] = 0;
                    updateDropState_1(false /* isDropping */, event);
                };
                onDrop = function (event) {
                    _this._dragEnterCounts[key] = 0;
                    updateDropState_1(false /* isDropping */, event);
                    if (dragDropOptions.onDrop) {
                        dragDropOptions.onDrop(dragDropOptions.context.data, event);
                    }
                };
                onDragOver = function (event) {
                    event.preventDefault();
                    if (dragDropOptions.onDragOver) {
                        dragDropOptions.onDragOver(dragDropOptions.context.data, event);
                    }
                };
                this._dragEnterCounts[key] = 0;
                // dragenter and dragleave will be fired when hover to the child element
                // but we only want to change state when enter or leave the current element
                // use the count to ensure it.
                events.on(root, 'dragenter', onDragEnter);
                events.on(root, 'dragleave', onDragLeave);
                events.on(root, 'dragend', onDragEnd);
                events.on(root, 'drop', onDrop);
                events.on(root, 'dragover', onDragOver);
            }
            if (isDraggable) {
                // If the target is draggable, wire up local event listeners for mouse events.
                onMouseDown = this._onMouseDown.bind(this, dragDropTarget);
                onDragEnd = this._onDragEnd.bind(this, dragDropTarget);
                // We need to add in data so that on Firefox we show the ghost element when dragging
                onDragStart = function (event) {
                    var options = dragDropOptions;
                    if (options && options.onDragStart) {
                        options.onDragStart(options.context.data, options.context.index, _this._selection.getSelection(), event);
                    }
                    _this._isDragging = true;
                    if (event.dataTransfer) {
                        event.dataTransfer.setData('id', root.id);
                    }
                };
                events.on(root, 'dragstart', onDragStart);
                events.on(root, 'mousedown', onMouseDown);
                events.on(root, 'dragend', onDragEnd);
            }
            activeTarget = {
                target: dragDropTarget,
                dispose: function () {
                    if (_this._activeTargets[key] === activeTarget) {
                        delete _this._activeTargets[key];
                    }
                    if (root) {
                        for (var _i = 0, handlers_1 = handlers; _i < handlers_1.length; _i++) {
                            var handler = handlers_1[_i];
                            _this._events.off(root, handler.eventName, handler.callback);
                        }
                        if (isDroppable) {
                            events.off(root, 'dragenter', onDragEnter);
                            events.off(root, 'dragleave', onDragLeave);
                            events.off(root, 'dragend', onDragEnd);
                            events.off(root, 'dragover', onDragOver);
                            events.off(root, 'drop', onDrop);
                        }
                        if (isDraggable) {
                            events.off(root, 'dragstart', onDragStart);
                            events.off(root, 'mousedown', onMouseDown);
                            events.off(root, 'dragend', onDragEnd);
                        }
                    }
                },
            };
            this._activeTargets[key] = activeTarget;
        }
        return {
            key: key,
            dispose: function () {
                if (activeTarget) {
                    activeTarget.dispose();
                }
            },
        };
    };
    DragDropHelper.prototype.unsubscribe = function (root, key) {
        var activeTarget = this._activeTargets[key];
        if (activeTarget) {
            activeTarget.dispose();
        }
    };
    DragDropHelper.prototype._onDragEnd = function (target, event) {
        var options = target.options;
        if (options.onDragEnd) {
            options.onDragEnd(options.context.data, event);
        }
    };
    /**
     * clear drag data when mouse up on body
     */
    DragDropHelper.prototype._onMouseUp = function (event) {
        this._isDragging = false;
        if (this._dragData) {
            for (var _i = 0, _a = Object.keys(this._activeTargets); _i < _a.length; _i++) {
                var key = _a[_i];
                var activeTarget = this._activeTargets[key];
                if (activeTarget.target.root) {
                    this._events.off(activeTarget.target.root, 'mousemove');
                    this._events.off(activeTarget.target.root, 'mouseleave');
                }
            }
            if (this._dragData.dropTarget) {
                // raise dragleave event to let dropTarget know it need to remove dropping style
                _Utilities__WEBPACK_IMPORTED_MODULE_0__["EventGroup"].raise(this._dragData.dropTarget.root, 'dragleave');
                _Utilities__WEBPACK_IMPORTED_MODULE_0__["EventGroup"].raise(this._dragData.dropTarget.root, 'drop');
            }
        }
        this._dragData = null;
    };
    /**
     * clear drag data when mouse up outside of the document
     */
    DragDropHelper.prototype._onDocumentMouseUp = function (event) {
        var doc = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
        if (doc && event.target === doc.documentElement) {
            this._onMouseUp(event);
        }
    };
    /**
     * when mouse move over a new drop target while dragging some items,
     * fire dragleave on the old target and fire dragenter to the new target
     * The target will handle style change on dragenter and dragleave events.
     */
    DragDropHelper.prototype._onMouseMove = function (target, event) {
        var 
        // use buttons property here since ev.button in some edge case is not updating well during the move.
        // but firefox doesn't support it, so we set the default value when it is not defined.
        _a = event.buttons, 
        // use buttons property here since ev.button in some edge case is not updating well during the move.
        // but firefox doesn't support it, so we set the default value when it is not defined.
        buttons = _a === void 0 ? MOUSEMOVE_PRIMARY_BUTTON : _a;
        if (this._dragData && buttons !== MOUSEMOVE_PRIMARY_BUTTON) {
            // cancel mouse down event and return early when the primary button is not pressed
            this._onMouseUp(event);
            return;
        }
        var root = target.root, key = target.key;
        if (this._isDragging) {
            if (this._isDroppable(target)) {
                // we can have nested drop targets in the DOM, like a folder inside a group. In that case, when we drag into
                // the inner target (folder), we first set dropTarget to the inner element. But the same event is bubbled to the
                // outer target too, and we need to prevent the outer one from taking over.
                // So, check if the last dropTarget is not a child of the current.
                if (this._dragData) {
                    if (this._dragData.dropTarget &&
                        this._dragData.dropTarget.key !== key &&
                        !this._isChild(root, this._dragData.dropTarget.root)) {
                        if (this._dragEnterCounts[this._dragData.dropTarget.key] > 0) {
                            _Utilities__WEBPACK_IMPORTED_MODULE_0__["EventGroup"].raise(this._dragData.dropTarget.root, 'dragleave');
                            _Utilities__WEBPACK_IMPORTED_MODULE_0__["EventGroup"].raise(root, 'dragenter');
                            this._dragData.dropTarget = target;
                        }
                    }
                }
            }
        }
    };
    /**
     * when mouse leave a target while dragging some items, fire dragleave to the target
     */
    DragDropHelper.prototype._onMouseLeave = function (target, event) {
        if (this._isDragging) {
            if (this._dragData && this._dragData.dropTarget && this._dragData.dropTarget.key === target.key) {
                _Utilities__WEBPACK_IMPORTED_MODULE_0__["EventGroup"].raise(target.root, 'dragleave');
                this._dragData.dropTarget = undefined;
            }
        }
    };
    /**
     * when mouse down on a draggable item, we start to track dragdata.
     */
    DragDropHelper.prototype._onMouseDown = function (target, event) {
        if (event.button !== MOUSEDOWN_PRIMARY_BUTTON) {
            // Ignore anything except the primary button.
            return;
        }
        if (this._isDraggable(target)) {
            this._dragData = {
                clientX: event.clientX,
                clientY: event.clientY,
                eventTarget: event.target,
                dragTarget: target,
            };
            for (var _i = 0, _a = Object.keys(this._activeTargets); _i < _a.length; _i++) {
                var key = _a[_i];
                var activeTarget = this._activeTargets[key];
                if (activeTarget.target.root) {
                    this._events.on(activeTarget.target.root, 'mousemove', this._onMouseMove.bind(this, activeTarget.target));
                    this._events.on(activeTarget.target.root, 'mouseleave', this._onMouseLeave.bind(this, activeTarget.target));
                }
            }
        }
        else {
            this._dragData = null;
        }
    };
    /**
     * determine whether the child target is a descendant of the parent
     */
    DragDropHelper.prototype._isChild = function (parentElement, childElement) {
        while (childElement && childElement.parentElement) {
            if (childElement.parentElement === parentElement) {
                return true;
            }
            childElement = childElement.parentElement;
        }
        return false;
    };
    DragDropHelper.prototype._isDraggable = function (target) {
        var options = target.options;
        return !!(options.canDrag && options.canDrag(options.context.data));
    };
    DragDropHelper.prototype._isDroppable = function (target) {
        // TODO: take the drag item into consideration to prevent dragging an item into the same group
        var options = target.options;
        var dragContext = this._dragData && this._dragData.dragTarget ? this._dragData.dragTarget.options.context : undefined;
        return !!(options.canDrop && options.canDrop(options.context, dragContext));
    };
    return DragDropHelper;
}());

//# sourceMappingURL=DragDropHelper.js.map

/***/ }),

/***/ "uuEG":
/*!****************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@fluentui/react-window-provider@1.0.1_c129be21209ec549b9ba61bf76d54bcc/node_modules/@fluentui/react-window-provider/lib/index.js ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: WindowContext, useWindow, useDocument, WindowProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WindowProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WindowProvider */ "Lbeb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WindowContext", function() { return _WindowProvider__WEBPACK_IMPORTED_MODULE_0__["WindowContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useWindow", function() { return _WindowProvider__WEBPACK_IMPORTED_MODULE_0__["useWindow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDocument", function() { return _WindowProvider__WEBPACK_IMPORTED_MODULE_0__["useDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WindowProvider", function() { return _WindowProvider__WEBPACK_IMPORTED_MODULE_0__["WindowProvider"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "v+17":
/*!********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/utilities/selection/index.js ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: SELECTION_CHANGE, SelectionDirection, SelectionMode, Selection, SelectionZone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interfaces */ "2Xb7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SELECTION_CHANGE", function() { return _interfaces__WEBPACK_IMPORTED_MODULE_0__["SELECTION_CHANGE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionDirection", function() { return _interfaces__WEBPACK_IMPORTED_MODULE_0__["SelectionDirection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionMode", function() { return _interfaces__WEBPACK_IMPORTED_MODULE_0__["SelectionMode"]; });

/* harmony import */ var _Selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Selection */ "YCgd");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Selection", function() { return _Selection__WEBPACK_IMPORTED_MODULE_1__["Selection"]; });

/* harmony import */ var _SelectionZone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SelectionZone */ "0fxH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionZone", function() { return _SelectionZone__WEBPACK_IMPORTED_MODULE_2__["SelectionZone"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "v+W9":
/*!*********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/react-hooks@7.13.9_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/react-hooks/lib/index.js ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: useAsync, useBoolean, useConst, useConstCallback, useControllableValue, useForceUpdate, useId, useMergedRefs, useOnEvent, usePrevious, useRefEffect, useSetInterval, useSetTimeout, useTarget, useWarnings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version */ "33JT");
/* harmony import */ var _useAsync__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useAsync */ "0ve4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAsync", function() { return _useAsync__WEBPACK_IMPORTED_MODULE_1__["useAsync"]; });

/* harmony import */ var _useBoolean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useBoolean */ "miSs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useBoolean", function() { return _useBoolean__WEBPACK_IMPORTED_MODULE_2__["useBoolean"]; });

/* harmony import */ var _useConst__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useConst */ "SKm6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useConst", function() { return _useConst__WEBPACK_IMPORTED_MODULE_3__["useConst"]; });

/* harmony import */ var _useConstCallback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useConstCallback */ "nL6P");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useConstCallback", function() { return _useConstCallback__WEBPACK_IMPORTED_MODULE_4__["useConstCallback"]; });

/* harmony import */ var _useControllableValue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useControllableValue */ "ngOG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useControllableValue", function() { return _useControllableValue__WEBPACK_IMPORTED_MODULE_5__["useControllableValue"]; });

/* harmony import */ var _useForceUpdate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useForceUpdate */ "Z1Bs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useForceUpdate", function() { return _useForceUpdate__WEBPACK_IMPORTED_MODULE_6__["useForceUpdate"]; });

/* harmony import */ var _useId__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./useId */ "cuTR");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useId", function() { return _useId__WEBPACK_IMPORTED_MODULE_7__["useId"]; });

/* harmony import */ var _useMergedRefs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useMergedRefs */ "xzES");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMergedRefs", function() { return _useMergedRefs__WEBPACK_IMPORTED_MODULE_8__["useMergedRefs"]; });

/* harmony import */ var _useOnEvent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./useOnEvent */ "S37p");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useOnEvent", function() { return _useOnEvent__WEBPACK_IMPORTED_MODULE_9__["useOnEvent"]; });

/* harmony import */ var _usePrevious__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./usePrevious */ "aBU9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePrevious", function() { return _usePrevious__WEBPACK_IMPORTED_MODULE_10__["usePrevious"]; });

/* harmony import */ var _useRefEffect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./useRefEffect */ "cB7q");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRefEffect", function() { return _useRefEffect__WEBPACK_IMPORTED_MODULE_11__["useRefEffect"]; });

/* harmony import */ var _useSetInterval__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./useSetInterval */ "ED3/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSetInterval", function() { return _useSetInterval__WEBPACK_IMPORTED_MODULE_12__["useSetInterval"]; });

/* harmony import */ var _useSetTimeout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./useSetTimeout */ "KjqC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSetTimeout", function() { return _useSetTimeout__WEBPACK_IMPORTED_MODULE_13__["useSetTimeout"]; });

/* harmony import */ var _useTarget__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./useTarget */ "5GBt");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTarget", function() { return _useTarget__WEBPACK_IMPORTED_MODULE_14__["useTarget"]; });

/* harmony import */ var _useWarnings__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./useWarnings */ "DA5T");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useWarnings", function() { return _useWarnings__WEBPACK_IMPORTED_MODULE_15__["useWarnings"]; });

















//# sourceMappingURL=index.js.map

/***/ }),

/***/ "wjk+":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/Dialog/DialogContent.base.js ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: DialogContentBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogContentBase", function() { return DialogContentBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _DialogContent_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DialogContent.types */ "A5R/");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Button */ "epn0");
/* harmony import */ var _DialogFooter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DialogFooter */ "5xuA");
/* harmony import */ var _utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utilities/decorators/withResponsiveMode */ "5qgq");
/* harmony import */ var _utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_6__);







var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
var DialogFooterType = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_DialogFooter__WEBPACK_IMPORTED_MODULE_5__["DialogFooter"], null)).type;
var COMPONENT_NAME = 'DialogContent';
var DialogContentBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DialogContentBase, _super);
    function DialogContentBase(props) {
        var _this = _super.call(this, props) || this;
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["initializeComponentRef"])(_this);
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["warnDeprecations"])(COMPONENT_NAME, props, {
            titleId: 'titleProps.id',
        });
        return _this;
    }
    DialogContentBase.prototype.render = function () {
        var _a = this.props, showCloseButton = _a.showCloseButton, className = _a.className, closeButtonAriaLabel = _a.closeButtonAriaLabel, onDismiss = _a.onDismiss, subTextId = _a.subTextId, subText = _a.subText, _b = _a.titleProps, titleProps = _b === void 0 ? {} : _b, 
        // eslint-disable-next-line deprecation/deprecation
        titleId = _a.titleId, title = _a.title, type = _a.type, styles = _a.styles, theme = _a.theme, draggableHeaderClassName = _a.draggableHeaderClassName;
        var classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            isLargeHeader: type === _DialogContent_types__WEBPACK_IMPORTED_MODULE_3__["DialogType"].largeHeader,
            isClose: type === _DialogContent_types__WEBPACK_IMPORTED_MODULE_3__["DialogType"].close,
            draggableHeaderClassName: draggableHeaderClassName,
        });
        var groupings = this._groupChildren();
        var subTextContent;
        if (subText) {
            subTextContent = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: classNames.subText, id: subTextId }, subText));
        }
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.content },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.header },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ id: titleId, role: "heading", "aria-level": 1 }, titleProps, { className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])(classNames.title, titleProps.className) }), title),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.topButton },
                    this.props.topButtonsProps.map(function (props, index) { return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Button__WEBPACK_IMPORTED_MODULE_4__["IconButton"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ key: props.uniqueId || index }, props))); }),
                    (type === _DialogContent_types__WEBPACK_IMPORTED_MODULE_3__["DialogType"].close || (showCloseButton && type !== _DialogContent_types__WEBPACK_IMPORTED_MODULE_3__["DialogType"].largeHeader)) && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Button__WEBPACK_IMPORTED_MODULE_4__["IconButton"], { className: classNames.button, iconProps: { iconName: 'Cancel' }, ariaLabel: closeButtonAriaLabel, onClick: onDismiss, title: closeButtonAriaLabel })))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.inner },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.innerContent },
                    subTextContent,
                    groupings.contents),
                groupings.footers)));
    };
    // @TODO - typing the footers as an array of DialogFooter is difficult because
    // casing "child as DialogFooter" causes a problem because
    // "Neither type 'ReactElement<any>' nor type 'DialogFooter' is assignable to the other."
    DialogContentBase.prototype._groupChildren = function () {
        var groupings = {
            footers: [],
            contents: [],
        };
        react__WEBPACK_IMPORTED_MODULE_1__["Children"].map(this.props.children, function (child) {
            if (typeof child === 'object' && child !== null && child.type === DialogFooterType) {
                groupings.footers.push(child);
            }
            else {
                groupings.contents.push(child);
            }
        });
        return groupings;
    };
    DialogContentBase.defaultProps = {
        showCloseButton: false,
        className: '',
        topButtonsProps: [],
        closeButtonAriaLabel: 'Close',
    };
    DialogContentBase = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_6__["withResponsiveMode"]
    ], DialogContentBase);
    return DialogContentBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=DialogContent.base.js.map

/***/ }),

/***/ "wqXl":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/DetailsList/DetailsRow.js ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: DetailsRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsRow", function() { return DetailsRow; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _DetailsRow_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DetailsRow.base */ "DsUK");
/* harmony import */ var _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetailsRow.styles */ "tCYI");



var DetailsRow = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_DetailsRow_base__WEBPACK_IMPORTED_MODULE_1__["DetailsRowBase"], _DetailsRow_styles__WEBPACK_IMPORTED_MODULE_2__["getDetailsRowStyles"], undefined, {
    scope: 'DetailsRow',
});
//# sourceMappingURL=DetailsRow.js.map

/***/ }),

/***/ "xzES":
/*!*****************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/react-hooks@7.13.9_c129be21209ec549b9ba61bf76d54bcc/node_modules/@uifabric/react-hooks/lib/useMergedRefs.js ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: useMergedRefs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMergedRefs", function() { return useMergedRefs; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/**
 * React hook to merge multiple React refs (either MutableRefObjects or ref callbacks) into a single ref callback that
 * updates all provided refs
 * @param refs - Refs to collectively update with one ref value.
 * @returns A function with an attached "current" prop, so that it can be treated like a RefObject.
 */
function useMergedRefs() {
    var refs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        refs[_i] = arguments[_i];
    }
    var mergedCallback = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (value) {
        // Update the "current" prop hanging on the function.
        mergedCallback.current = value;
        for (var _i = 0, refs_1 = refs; _i < refs_1.length; _i++) {
            var ref = refs_1[_i];
            if (typeof ref === 'function') {
                ref(value);
            }
            else if (ref) {
                // work around the immutability of the React.Ref type
                ref.current = value;
            }
        }
    }, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(refs));
    return mergedCallback;
}
//# sourceMappingURL=useMergedRefs.js.map

/***/ }),

/***/ "y86Q":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/GroupedList/index.js ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: GroupedList, GroupedListBase, CollapseAllVisibility, GroupHeader, GroupFooter, GroupShowAll, GroupSpacer, GroupedListSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GroupedList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GroupedList */ "GDPH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupedList", function() { return _GroupedList__WEBPACK_IMPORTED_MODULE_0__["GroupedList"]; });

/* harmony import */ var _GroupedList_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GroupedList.base */ "9lkW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupedListBase", function() { return _GroupedList_base__WEBPACK_IMPORTED_MODULE_1__["GroupedListBase"]; });

/* harmony import */ var _GroupedList_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GroupedList.types */ "MnMY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollapseAllVisibility", function() { return _GroupedList_types__WEBPACK_IMPORTED_MODULE_2__["CollapseAllVisibility"]; });

/* harmony import */ var _GroupHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GroupHeader */ "G9th");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupHeader", function() { return _GroupHeader__WEBPACK_IMPORTED_MODULE_3__["GroupHeader"]; });

/* harmony import */ var _GroupFooter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GroupFooter */ "ym2C");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupFooter", function() { return _GroupFooter__WEBPACK_IMPORTED_MODULE_4__["GroupFooter"]; });

/* harmony import */ var _GroupShowAll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GroupShowAll */ "3OK7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupShowAll", function() { return _GroupShowAll__WEBPACK_IMPORTED_MODULE_5__["GroupShowAll"]; });

/* harmony import */ var _GroupSpacer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GroupSpacer */ "oao7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupSpacer", function() { return _GroupSpacer__WEBPACK_IMPORTED_MODULE_6__["GroupSpacer"]; });

/* harmony import */ var _GroupedListSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./GroupedListSection */ "E8BK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupedListSection", function() { return _GroupedListSection__WEBPACK_IMPORTED_MODULE_7__["GroupedListSection"]; });









//# sourceMappingURL=index.js.map

/***/ }),

/***/ "ym2C":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/office-ui-fabric-react@7.156.0_baa7aab8a1d5d20fe3858de8537800ba/node_modules/office-ui-fabric-react/lib/components/GroupedList/GroupFooter.js ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: GroupFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupFooter", function() { return GroupFooter; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mkpW");
/* harmony import */ var _GroupFooter_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GroupFooter.styles */ "I5L8");
/* harmony import */ var _GroupFooter_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GroupFooter.base */ "R7/2");



var GroupFooter = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_GroupFooter_base__WEBPACK_IMPORTED_MODULE_2__["GroupFooterBase"], _GroupFooter_styles__WEBPACK_IMPORTED_MODULE_1__["getStyles"], undefined, {
    scope: 'GroupFooter',
});
//# sourceMappingURL=GroupFooter.js.map

/***/ })

}]);
//# sourceMappingURL=chunk.vendors~page-picker-component_[locale].js.map