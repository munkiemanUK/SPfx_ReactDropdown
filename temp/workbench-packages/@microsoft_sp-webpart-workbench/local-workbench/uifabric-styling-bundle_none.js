define("17ce0976-e69a-4355-be84-89b69a74717d_0.1.0", ["tslib","react","@microsoft/load-themed-styles"], function(__WEBPACK_EXTERNAL_MODULE__17wl__, __WEBPACK_EXTERNAL_MODULE_cDcd__, __WEBPACK_EXTERNAL_MODULE_jOlS__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "8k4T");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+TOL":
/*!*****************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/array.js ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: findIndex, find, createArray, toMatrix, removeIndex, replaceElement, addElementAtIndex, flatten, arraysEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return findIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createArray", function() { return createArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toMatrix", function() { return toMatrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeIndex", function() { return removeIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceElement", function() { return replaceElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addElementAtIndex", function() { return addElementAtIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return flatten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arraysEqual", function() { return arraysEqual; });
/**
 * Helper to find the index of an item within an array, using a callback to
 * determine the match.
 *
 * @public
 * @param array - Array to search.
 * @param cb - Callback which returns true on matches.
 * @param fromIndex - Optional index to start from (defaults to 0)
 */
function findIndex(array, cb, fromIndex) {
    if (fromIndex === void 0) { fromIndex = 0; }
    var index = -1;
    for (var i = fromIndex; array && i < array.length; i++) {
        if (cb(array[i], i)) {
            index = i;
            break;
        }
    }
    return index;
}
/**
 * Helper to find the first item within an array that satisfies the callback.
 * @param array - Array to search
 * @param cb - Callback which returns true on matches
 */
function find(array, cb) {
    var index = findIndex(array, cb);
    if (index < 0) {
        return undefined;
    }
    return array[index];
}
/**
 * Creates an array of a given size and helper method to populate.
 *
 * @public
 * @param size - Size of array.
 * @param getItem - Callback to populate given cell index.
 */
function createArray(size, getItem) {
    var array = [];
    for (var i = 0; i < size; i++) {
        array.push(getItem(i));
    }
    return array;
}
/**
 * Convert the given array to a matrix with columnCount number
 * of columns.
 *
 * @public
 * @param items - The array to convert
 * @param columnCount - The number of columns for the resulting matrix
 * @returns A matrix of items
 */
function toMatrix(items, columnCount) {
    return items.reduce(function (rows, currentValue, index) {
        if (index % columnCount === 0) {
            rows.push([currentValue]);
        }
        else {
            rows[rows.length - 1].push(currentValue);
        }
        return rows;
    }, []);
}
/**
 * Given an array, it returns a new array that does not contain the item at the given index.
 * @param array - The array to operate on
 * @param index - The index of the element to remove
 */
function removeIndex(array, index) {
    return array.filter(function (_, i) { return index !== i; });
}
/**
 * Given an array, this function returns a new array where the element at a given index has been replaced.
 * @param array - The array to operate on
 * @param newElement - The element that will be placed in the new array
 * @param index - The index of the element that should be replaced
 */
function replaceElement(array, newElement, index) {
    var copy = array.slice();
    copy[index] = newElement;
    return copy;
}
/**
 * Given an array, this function returns a new array where an element has been inserted at the given index.
 * @param array - The array to operate on
 * @param index - The index where an element should be inserted
 * @param itemToAdd - The element to insert
 */
function addElementAtIndex(array, index, itemToAdd) {
    var copy = array.slice();
    copy.splice(index, 0, itemToAdd);
    return copy;
}
/**
 * Given an array where each element is of type T or T[], flatten it into an array of T
 * @param array - The array where each element can optionally also be an array
 */
function flatten(array) {
    var result = [];
    array.forEach(function (item) { return (result = result.concat(item)); });
    return result;
}
/**
 * Returns a boolean indicating if the two given arrays are equal in length and values.
 *
 * @param array1 - First array to compare
 * @param array2 - Second array to compare
 * @returns True if the arrays are the same length and have the same values in the same positions, false otherwise.
 */
function arraysEqual(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }
    for (var i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
}
//# sourceMappingURL=array.js.map

/***/ }),

/***/ "+UWI":
/*!*******************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/merge-styles@7.19.1/node_modules/@uifabric/merge-styles/lib/transforms/prefixRules.js ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: prefixRules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefixRules", function() { return prefixRules; });
/* harmony import */ var _getVendorSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getVendorSettings */ "1A8S");

var autoPrefixNames = {
    'user-select': 1,
};
function prefixRules(rulePairs, index) {
    var vendorSettings = Object(_getVendorSettings__WEBPACK_IMPORTED_MODULE_0__["getVendorSettings"])();
    var name = rulePairs[index];
    if (autoPrefixNames[name]) {
        var value = rulePairs[index + 1];
        if (autoPrefixNames[name]) {
            if (vendorSettings.isWebkit) {
                rulePairs.push('-webkit-' + name, value);
            }
            if (vendorSettings.isMoz) {
                rulePairs.push('-moz-' + name, value);
            }
            if (vendorSettings.isMs) {
                rulePairs.push('-ms-' + name, value);
            }
            if (vendorSettings.isOpera) {
                rulePairs.push('-o-' + name, value);
            }
        }
    }
}
//# sourceMappingURL=prefixRules.js.map

/***/ }),

/***/ "+daE":
/*!*****************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/focus.js ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: getFirstFocusable, getLastFocusable, getFirstTabbable, getLastTabbable, focusFirstChild, getPreviousElement, getNextElement, isElementVisible, isElementTabbable, isElementFocusZone, isElementFocusSubZone, doesElementContainFocus, shouldWrapFocus, focusAsync, getFocusableByIndexPath, getElementIndexPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFirstFocusable", function() { return getFirstFocusable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLastFocusable", function() { return getLastFocusable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFirstTabbable", function() { return getFirstTabbable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLastTabbable", function() { return getLastTabbable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusFirstChild", function() { return focusFirstChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreviousElement", function() { return getPreviousElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextElement", function() { return getNextElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElementVisible", function() { return isElementVisible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElementTabbable", function() { return isElementTabbable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElementFocusZone", function() { return isElementFocusZone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElementFocusSubZone", function() { return isElementFocusSubZone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doesElementContainFocus", function() { return doesElementContainFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldWrapFocus", function() { return shouldWrapFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusAsync", function() { return focusAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFocusableByIndexPath", function() { return getFocusableByIndexPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElementIndexPath", function() { return getElementIndexPath; });
/* harmony import */ var _dom_elementContainsAttribute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/elementContainsAttribute */ "si5M");
/* harmony import */ var _dom_elementContains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/elementContains */ "xOcl");
/* harmony import */ var _dom_getParent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom/getParent */ "nm55");
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom/getWindow */ "jfaJ");
/* harmony import */ var _dom_getDocument__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom/getDocument */ "NJXT");





var IS_FOCUSABLE_ATTRIBUTE = 'data-is-focusable';
var IS_VISIBLE_ATTRIBUTE = 'data-is-visible';
var FOCUSZONE_ID_ATTRIBUTE = 'data-focuszone-id';
var FOCUSZONE_SUB_ATTRIBUTE = 'data-is-sub-focuszone';
/**
 * Gets the first focusable element.
 *
 * @public
 */
function getFirstFocusable(rootElement, currentElement, includeElementsInFocusZones) {
    return getNextElement(rootElement, currentElement, true /*checkNode*/, false /*suppressParentTraversal*/, false /*suppressChildTraversal*/, includeElementsInFocusZones);
}
/**
 * Gets the last focusable element.
 *
 * @public
 */
function getLastFocusable(rootElement, currentElement, includeElementsInFocusZones) {
    return getPreviousElement(rootElement, currentElement, true /*checkNode*/, false /*suppressParentTraversal*/, true /*traverseChildren*/, includeElementsInFocusZones);
}
/**
 * Gets the first tabbable element. (The difference between focusable and tabbable is that tabbable elements are
 * focusable elements that also have tabIndex != -1.)
 * @param rootElement - The parent element to search beneath.
 * @param currentElement - The descendant of rootElement to start the search at.  This element is the first one checked,
 * and iteration continues forward.  Typical use passes rootElement.firstChild.
 * @param includeElementsInFocusZones - true if traversal should go into FocusZone descendants.
 * @param checkNode - Include currentElement in search when true. Defaults to true.
 * @public
 */
function getFirstTabbable(rootElement, currentElement, includeElementsInFocusZones, checkNode) {
    if (checkNode === void 0) { checkNode = true; }
    return getNextElement(rootElement, currentElement, checkNode, false /*suppressParentTraversal*/, false /*suppressChildTraversal*/, includeElementsInFocusZones, false /*allowFocusRoot*/, true /*tabbable*/);
}
/**
 * Gets the last tabbable element. (The difference between focusable and tabbable is that tabbable elements are
 * focusable elements that also have tabIndex != -1.)
 * @param rootElement - The parent element to search beneath.
 * @param currentElement - The descendant of rootElement to start the search at.  This element is the first one checked,
 * and iteration continues in reverse.  Typical use passes rootElement.lastChild.
 * @param includeElementsInFocusZones - true if traversal should go into FocusZone descendants.
 * @param checkNode - Include currentElement in search when true. Defaults to true.
 * @public
 */
function getLastTabbable(rootElement, currentElement, includeElementsInFocusZones, checkNode) {
    if (checkNode === void 0) { checkNode = true; }
    return getPreviousElement(rootElement, currentElement, checkNode, false /*suppressParentTraversal*/, true /*traverseChildren*/, includeElementsInFocusZones, false /*allowFocusRoot*/, true /*tabbable*/);
}
/**
 * Attempts to focus the first focusable element that is a child or child's child of the rootElement.
 *
 * @public
 * @param rootElement - Element to start the search for a focusable child.
 * @returns True if focus was set, false if it was not.
 */
function focusFirstChild(rootElement) {
    var element = getNextElement(rootElement, rootElement, true, false, false, true);
    if (element) {
        focusAsync(element);
        return true;
    }
    return false;
}
/**
 * Traverse to find the previous element.
 * If tabbable is true, the element must have tabIndex != -1.
 *
 * @public
 */
function getPreviousElement(rootElement, currentElement, checkNode, suppressParentTraversal, traverseChildren, includeElementsInFocusZones, allowFocusRoot, tabbable) {
    if (!currentElement || (!allowFocusRoot && currentElement === rootElement)) {
        return null;
    }
    var isCurrentElementVisible = isElementVisible(currentElement);
    // Check its children.
    if (traverseChildren &&
        isCurrentElementVisible &&
        (includeElementsInFocusZones || !(isElementFocusZone(currentElement) || isElementFocusSubZone(currentElement)))) {
        var childMatch = getPreviousElement(rootElement, currentElement.lastElementChild, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
        if (childMatch) {
            if ((tabbable && isElementTabbable(childMatch, true)) || !tabbable) {
                return childMatch;
            }
            var childMatchSiblingMatch = getPreviousElement(rootElement, childMatch.previousElementSibling, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
            if (childMatchSiblingMatch) {
                return childMatchSiblingMatch;
            }
            var childMatchParent = childMatch.parentElement;
            // At this point if we have not found any potential matches
            // start looking at the rest of the subtree under the currentParent.
            // NOTE: We do not want to recurse here because doing so could
            // cause elements to get skipped.
            while (childMatchParent && childMatchParent !== currentElement) {
                var childMatchParentMatch = getPreviousElement(rootElement, childMatchParent.previousElementSibling, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
                if (childMatchParentMatch) {
                    return childMatchParentMatch;
                }
                childMatchParent = childMatchParent.parentElement;
            }
        }
    }
    // Check the current node, if it's not the first traversal.
    if (checkNode && isCurrentElementVisible && isElementTabbable(currentElement, tabbable)) {
        return currentElement;
    }
    // Check its previous sibling.
    var siblingMatch = getPreviousElement(rootElement, currentElement.previousElementSibling, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
    if (siblingMatch) {
        return siblingMatch;
    }
    // Check its parent.
    if (!suppressParentTraversal) {
        return getPreviousElement(rootElement, currentElement.parentElement, true, false, false, includeElementsInFocusZones, allowFocusRoot, tabbable);
    }
    return null;
}
/**
 * Traverse to find the next focusable element.
 * If tabbable is true, the element must have tabIndex != -1.
 *
 * @public
 * @param checkNode - Include currentElement in search when true.
 */
function getNextElement(rootElement, currentElement, checkNode, suppressParentTraversal, suppressChildTraversal, includeElementsInFocusZones, allowFocusRoot, tabbable) {
    if (!currentElement || (currentElement === rootElement && suppressChildTraversal && !allowFocusRoot)) {
        return null;
    }
    var isCurrentElementVisible = isElementVisible(currentElement);
    // Check the current node, if it's not the first traversal.
    if (checkNode && isCurrentElementVisible && isElementTabbable(currentElement, tabbable)) {
        return currentElement;
    }
    // Check its children.
    if (!suppressChildTraversal &&
        isCurrentElementVisible &&
        (includeElementsInFocusZones || !(isElementFocusZone(currentElement) || isElementFocusSubZone(currentElement)))) {
        var childMatch = getNextElement(rootElement, currentElement.firstElementChild, true, true, false, includeElementsInFocusZones, allowFocusRoot, tabbable);
        if (childMatch) {
            return childMatch;
        }
    }
    if (currentElement === rootElement) {
        return null;
    }
    // Check its sibling.
    var siblingMatch = getNextElement(rootElement, currentElement.nextElementSibling, true, true, false, includeElementsInFocusZones, allowFocusRoot, tabbable);
    if (siblingMatch) {
        return siblingMatch;
    }
    if (!suppressParentTraversal) {
        return getNextElement(rootElement, currentElement.parentElement, false, false, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
    }
    return null;
}
/**
 * Determines if an element is visible.
 *
 * @public
 */
function isElementVisible(element) {
    // If the element is not valid, return false.
    if (!element || !element.getAttribute) {
        return false;
    }
    var visibilityAttribute = element.getAttribute(IS_VISIBLE_ATTRIBUTE);
    // If the element is explicitly marked with the visibility attribute, return that value as boolean.
    if (visibilityAttribute !== null && visibilityAttribute !== undefined) {
        return visibilityAttribute === 'true';
    }
    // Fallback to other methods of determining actual visibility.
    return (element.offsetHeight !== 0 ||
        element.offsetParent !== null ||
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        element.isVisible === true); // used as a workaround for testing.
}
/**
 * Determines if an element can receive focus programmatically or via a mouse click.
 * If checkTabIndex is true, additionally checks to ensure the element can be focused with the tab key,
 * meaning tabIndex != -1.
 *
 * @public
 */
function isElementTabbable(element, checkTabIndex) {
    // If this element is null or is disabled, it is not considered tabbable.
    if (!element || element.disabled) {
        return false;
    }
    var tabIndex = 0;
    var tabIndexAttributeValue = null;
    if (element && element.getAttribute) {
        tabIndexAttributeValue = element.getAttribute('tabIndex');
        if (tabIndexAttributeValue) {
            tabIndex = parseInt(tabIndexAttributeValue, 10);
        }
    }
    var isFocusableAttribute = element.getAttribute ? element.getAttribute(IS_FOCUSABLE_ATTRIBUTE) : null;
    var isTabIndexSet = tabIndexAttributeValue !== null && tabIndex >= 0;
    var result = !!element &&
        isFocusableAttribute !== 'false' &&
        (element.tagName === 'A' ||
            element.tagName === 'BUTTON' ||
            element.tagName === 'INPUT' ||
            element.tagName === 'TEXTAREA' ||
            element.tagName === 'SELECT' ||
            isFocusableAttribute === 'true' ||
            isTabIndexSet);
    return checkTabIndex ? tabIndex !== -1 && result : result;
}
/**
 * Determines if a given element is a focus zone.
 *
 * @public
 */
function isElementFocusZone(element) {
    return !!(element && element.getAttribute && !!element.getAttribute(FOCUSZONE_ID_ATTRIBUTE));
}
/**
 * Determines if a given element is a focus sub zone.
 *
 * @public
 */
function isElementFocusSubZone(element) {
    return !!(element && element.getAttribute && element.getAttribute(FOCUSZONE_SUB_ATTRIBUTE) === 'true');
}
/**
 * Determines if an element, or any of its children, contain focus.
 *
 * @public
 */
function doesElementContainFocus(element) {
    var document = Object(_dom_getDocument__WEBPACK_IMPORTED_MODULE_4__["getDocument"])(element);
    var currentActiveElement = document && document.activeElement;
    if (currentActiveElement && Object(_dom_elementContains__WEBPACK_IMPORTED_MODULE_1__["elementContains"])(element, currentActiveElement)) {
        return true;
    }
    return false;
}
/**
 * Determines if an, or any of its ancestors, sepcificies that it doesn't want focus to wrap
 * @param element - element to start searching from
 * @param noWrapDataAttribute - the no wrap data attribute to match (either)
 * @returns true if focus should wrap, false otherwise
 */
function shouldWrapFocus(element, noWrapDataAttribute) {
    return Object(_dom_elementContainsAttribute__WEBPACK_IMPORTED_MODULE_0__["elementContainsAttribute"])(element, noWrapDataAttribute) === 'true' ? false : true;
}
var targetToFocusOnNextRepaint = undefined;
/**
 * Sets focus to an element asynchronously. The focus will be set at the next browser repaint,
 * meaning it won't cause any extra recalculations. If more than one focusAsync is called during one frame,
 * only the latest called focusAsync element will actually be focused
 * @param element - The element to focus
 */
function focusAsync(element) {
    if (element) {
        // An element was already queued to be focused, so replace that one with the new element
        if (targetToFocusOnNextRepaint) {
            targetToFocusOnNextRepaint = element;
            return;
        }
        targetToFocusOnNextRepaint = element;
        var win = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_3__["getWindow"])(element);
        if (win) {
            // element.focus() is a no-op if the element is no longer in the DOM, meaning this is always safe
            win.requestAnimationFrame(function () {
                var focusableElement = targetToFocusOnNextRepaint;
                // We are done focusing for this frame, so reset the queued focus element
                targetToFocusOnNextRepaint = undefined;
                if (focusableElement) {
                    if (focusableElement.getAttribute && focusableElement.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'true') {
                        // Normally, a FocusZone would be responsible for setting the tabindex values on all its descendants.
                        // However, even this animation frame callback can pre-empt the rendering of a FocusZone's child elements,
                        // so it may be necessary to set the tabindex directly here.
                        if (!focusableElement.getAttribute('tabindex')) {
                            focusableElement.setAttribute('tabindex', '0');
                        }
                    }
                    focusableElement.focus();
                }
            });
        }
    }
}
/**
 * Finds the closest focusable element via an index path from a parent. See
 * `getElementIndexPath` for getting an index path from an element to a child.
 */
function getFocusableByIndexPath(parent, path) {
    var element = parent;
    for (var _i = 0, path_1 = path; _i < path_1.length; _i++) {
        var index = path_1[_i];
        var nextChild = element.children[Math.min(index, element.children.length - 1)];
        if (!nextChild) {
            break;
        }
        element = nextChild;
    }
    element =
        isElementTabbable(element) && isElementVisible(element)
            ? element
            : getNextElement(parent, element, true) || getPreviousElement(parent, element);
    return element;
}
/**
 * Finds the element index path from a parent element to a child element.
 *
 * If you had this node structure: "A has children [B, C] and C has child D",
 * the index path from A to D would be [1, 0], or `parent.chidren[1].children[0]`.
 */
function getElementIndexPath(fromElement, toElement) {
    var path = [];
    while (toElement && fromElement && toElement !== fromElement) {
        var parent_1 = Object(_dom_getParent__WEBPACK_IMPORTED_MODULE_2__["getParent"])(toElement, true);
        if (parent_1 === null) {
            return [];
        }
        path.unshift(Array.prototype.indexOf.call(parent_1.children, toElement));
        toElement = parent_1;
    }
    return path;
}
//# sourceMappingURL=focus.js.map

/***/ }),

/***/ "0Lfo":
/*!*************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/styling@7.16.19_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/styling/lib/styles/getFadedOverflowStyle.js ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: getFadedOverflowStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFadedOverflowStyle", function() { return getFadedOverflowStyle; });
var DEFAULT_HEIGHT = '50%';
var DEFAULT_WIDTH = 20;
/**
 * - Generates a style used to fade out an overflowing content by defining a style for an :after pseudo element.
 * - Apply it to the :after selector for all combination of states the parent of content might have (normal, hover,
 * selected, focus).
 * - Requires the target to have position set to relative and overflow set to hidden.
 *
 * @example
 * ```tsx
 * // Assuming the following DOM structure and the different background colors coming from
 * // the parent holding the content.
 * <div className={classNames.parent}>
 *   <span className={classNames.content}>Overflown Content</span>
 * </div>
 * ```
 * ```ts
 * // This is how the style set would look in Component.styles.ts
 * const { bodyBackground } = theme.semanticColors;
 * const { neutralLighter } = theme.palette;
 *
 * // The second argument of getFadedOverflowStyle function is a string representing a key of
 * // ISemanticColors or IPalette.
 *
 * const styles = {
 *   parent: [
 *     backgroundColor: bodyBackground,
 *     selectors: {
 *       '&:hover: {
 *         backgroundColor: neutralLighter
 *       },
 *       '$content:after': {
 *         ...getFadedOverflowStyle(theme, 'bodyBackground')
 *       },
 *       '&:hover $content:after': {
 *         ...getFadedOverflowStyle(theme, 'neutralLighter')
 *       }
 *     }
 *   ],
 *   content: [
 *     width: '100%',
 *     display: 'inline-block',
 *     position: 'relative',
 *     overflow: 'hidden'
 *   ]
 * }
 * ```
 * @param theme - The theme object to use.
 * @param color - The background color to fade out to. Accepts only keys of ISemanticColors or IPalette.
 * Defaults to 'bodyBackground'.
 * @param direction - The direction of the overflow. Defaults to horizontal.
 * @param width - The width of the fading overflow. Vertical direction defaults it to 100% vs 20px when horizontal.
 * @param height - The Height of the fading overflow. Vertical direction defaults it to 50% vs 100% when horizontal.
 * @returns The style object.
 */
function getFadedOverflowStyle(theme, color, direction, width, height) {
    if (color === void 0) { color = 'bodyBackground'; }
    if (direction === void 0) { direction = 'horizontal'; }
    if (width === void 0) { width = getDefaultValue('width', direction); }
    if (height === void 0) { height = getDefaultValue('height', direction); }
    // Get the color value string from the theme semanticColors or palette.
    var colorValue = theme.semanticColors[color] || theme.palette[color];
    // Get the red, green, blue values of the colorValue.
    var rgbColor = color2rgb(colorValue);
    // Apply opacity 0 to serve as a start color of the gradient.
    var rgba = "rgba(" + rgbColor.r + ", " + rgbColor.g + ", " + rgbColor.b + ", 0)";
    // Get the direction of the gradient. (mergeStyles takes care of RTL direction)
    var gradientDirection = direction === 'vertical' ? 'to bottom' : 'to right';
    return {
        content: '""',
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: width,
        height: height,
        pointerEvents: 'none',
        backgroundImage: "linear-gradient(" + gradientDirection + ", " + rgba + " 0%, " + colorValue + " 100%)",
    };
}
// TODO consider moving this to a separate module along with some more color functions from OUFR/utilities.
/**
 * Helper function to convert a string hex color to an RGB object.
 *
 * @param colorValue - Color to be converted from hex to rgba.
 */
function color2rgb(colorValue) {
    if (colorValue[0] === '#') {
        // If it's a hex code
        return {
            r: parseInt(colorValue.slice(1, 3), 16),
            g: parseInt(colorValue.slice(3, 5), 16),
            b: parseInt(colorValue.slice(5, 7), 16),
        };
    }
    else if (colorValue.indexOf('rgba(') === 0) {
        // If it's an rgba color string
        colorValue = colorValue.match(/rgba\(([^)]+)\)/)[1];
        var parts = colorValue.split(/ *, */).map(Number);
        return {
            r: parts[0],
            g: parts[1],
            b: parts[2],
        };
    }
    // The only remaining possibility is transparent.
    return {
        r: 255,
        g: 255,
        b: 255,
    };
}
/**
 * Helper function to get the default values for parameters of main function.
 *
 * @param style - Which style to get the default value for.
 * @param direction - What direction to take into consideration.
 */
function getDefaultValue(style, direction) {
    if (style === 'width') {
        return direction === 'horizontal' ? DEFAULT_WIDTH : '100%';
    }
    else {
        return direction === 'vertical' ? DEFAULT_HEIGHT : '100%';
    }
}
//# sourceMappingURL=getFadedOverflowStyle.js.map

/***/ }),

/***/ "0wEj":
/*!************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/styling@7.16.19_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/styling/lib/styles/getPlaceholderStyles.js ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: getPlaceholderStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlaceholderStyles", function() { return getPlaceholderStyles; });
/**
 * Generates placeholder style for each of the browsers supported by office-ui-fabric-react.
 * @param styles - The style to use.
 * @returns The placeholder style object for each browser depending on the placeholder directive it uses.
 */
function getPlaceholderStyles(styles) {
    return {
        selectors: {
            '::placeholder': styles,
            ':-ms-input-placeholder': styles,
            '::-ms-input-placeholder': styles,
        },
    };
}
//# sourceMappingURL=getPlaceholderStyles.js.map

/***/ }),

/***/ "17wl":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__17wl__;

/***/ }),

/***/ "1A8S":
/*!**************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/merge-styles@7.19.1/node_modules/@uifabric/merge-styles/lib/getVendorSettings.js ***!
  \**************************************************************************************************************************************************/
/*! exports provided: getVendorSettings, setVendorSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVendorSettings", function() { return getVendorSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setVendorSettings", function() { return setVendorSettings; });
var _vendorSettings;
function getVendorSettings() {
    if (!_vendorSettings) {
        var doc = typeof document !== 'undefined' ? document : undefined;
        var nav = typeof navigator !== 'undefined' ? navigator : undefined;
        var userAgent = nav ? nav.userAgent.toLowerCase() : undefined;
        if (!doc) {
            _vendorSettings = {
                isWebkit: true,
                isMoz: true,
                isOpera: true,
                isMs: true,
            };
        }
        else {
            _vendorSettings = {
                isWebkit: !!(doc && 'WebkitAppearance' in doc.documentElement.style),
                isMoz: !!(userAgent && userAgent.indexOf('firefox') > -1),
                isOpera: !!(userAgent && userAgent.indexOf('opera') > -1),
                isMs: !!(nav && (/rv:11.0/i.test(nav.userAgent) || /Edge\/\d./i.test(navigator.userAgent))),
            };
        }
    }
    return _vendorSettings;
}
/**
 * Sets the vendor settings for prefixing and vendor specific operations.
 */
function setVendorSettings(vendorSettings) {
    _vendorSettings = vendorSettings;
}
//# sourceMappingURL=getVendorSettings.js.map

/***/ }),

/***/ "1E/B":
/*!***************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/rtl.js ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: getRTL, setRTL, getRTLSafeKeyCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRTL", function() { return getRTL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRTL", function() { return setRTL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRTLSafeKeyCode", function() { return getRTLSafeKeyCode; });
/* harmony import */ var _KeyCodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KeyCodes */ "uze5");
/* harmony import */ var _dom_getDocument__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/getDocument */ "NJXT");
/* harmony import */ var _sessionStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sessionStorage */ "uyIp");
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @uifabric/merge-styles */ "7Xpn");




var RTL_LOCAL_STORAGE_KEY = 'isRTL';
// Default to undefined so that we initialize on first read.
var _isRTL;
/**
 * Gets the rtl state of the page (returns true if in rtl.)
 */
function getRTL(theme) {
    if (theme === void 0) { theme = {}; }
    if (theme.rtl !== undefined) {
        return theme.rtl;
    }
    if (_isRTL === undefined) {
        // Fabric supports persisting the RTL setting between page refreshes via session storage
        var savedRTL = Object(_sessionStorage__WEBPACK_IMPORTED_MODULE_2__["getItem"])(RTL_LOCAL_STORAGE_KEY);
        if (savedRTL !== null) {
            _isRTL = savedRTL === '1';
            setRTL(_isRTL);
        }
        var doc = Object(_dom_getDocument__WEBPACK_IMPORTED_MODULE_1__["getDocument"])();
        if (_isRTL === undefined && doc) {
            _isRTL = ((doc.body && doc.body.getAttribute('dir')) || doc.documentElement.getAttribute('dir')) === 'rtl';
            Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_3__["setRTL"])(_isRTL);
        }
    }
    return !!_isRTL;
}
/**
 * Sets the rtl state of the page (by adjusting the dir attribute of the html element.)
 */
function setRTL(isRTL, persistSetting) {
    if (persistSetting === void 0) { persistSetting = false; }
    var doc = Object(_dom_getDocument__WEBPACK_IMPORTED_MODULE_1__["getDocument"])();
    if (doc) {
        doc.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    }
    if (persistSetting) {
        Object(_sessionStorage__WEBPACK_IMPORTED_MODULE_2__["setItem"])(RTL_LOCAL_STORAGE_KEY, isRTL ? '1' : '0');
    }
    _isRTL = isRTL;
    Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_3__["setRTL"])(_isRTL);
}
/**
 * Returns the given key, but flips right/left arrows if necessary.
 */
function getRTLSafeKeyCode(key, theme) {
    if (theme === void 0) { theme = {}; }
    if (getRTL(theme)) {
        if (key === _KeyCodes__WEBPACK_IMPORTED_MODULE_0__["KeyCodes"].left) {
            key = _KeyCodes__WEBPACK_IMPORTED_MODULE_0__["KeyCodes"].right;
        }
        else if (key === _KeyCodes__WEBPACK_IMPORTED_MODULE_0__["KeyCodes"].right) {
            key = _KeyCodes__WEBPACK_IMPORTED_MODULE_0__["KeyCodes"].left;
        }
    }
    return key;
}
//# sourceMappingURL=rtl.js.map

/***/ }),

/***/ "1Ukg":
/*!**********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/styling@7.16.19_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/styling/lib/styles/scheme.js ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: getThemedContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getThemedContext", function() { return getThemedContext; });
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/utilities */ "P2cQ");

/**
 * @internal
 * This function is still in experimental phase in support of Foundation experimental development.
 * Its API signature and existence are subject to change.
 *
 * Modify context to activate the specified scheme or theme. For schemes, look in context (if available) and fall back
 * to global Customizations. If both scheme and theme are specified, scheme will be looked up in theme. In this case,
 * scheme must be present in theme arg, otherwise new context will default to theme arg (there is no fallback to
 * settings to look up scheme.)
 *
 * @param context - Context in which to get schemed customizations.
 * @param scheme - Scheme to get customizations for from theme arg (if supplied) OR from context and global settings.
 * @param theme - Theme to merge into context.
 * @returns modified schemed context if scheme is valid and not already applied, unmodified context otherwise.
 */
function getThemedContext(context, scheme, theme) {
    var newContext = context;
    var newSettings;
    // Only fall back to context and customizations when theme arg is not provided.
    var schemeSource = theme || _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["Customizations"].getSettings(['theme'], undefined, context.customizations).theme;
    if (theme) {
        newSettings = { theme: theme };
    }
    var schemeTheme = scheme && schemeSource && schemeSource.schemes && schemeSource.schemes[scheme];
    // These first two checks are logically redundant but TS doesn't infer schemeSource.schemes is defined
    // when schemeTheme is defined.
    if (schemeSource && schemeTheme && schemeSource !== schemeTheme) {
        newSettings = { theme: schemeTheme };
        newSettings.theme.schemes = schemeSource.schemes;
    }
    if (newSettings) {
        newContext = {
            customizations: {
                settings: Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["mergeSettings"])(context.customizations.settings, newSettings),
                scopedSettings: context.customizations.scopedSettings,
            },
        };
    }
    return newContext;
}
//# sourceMappingURL=scheme.js.map

/***/ }),

/***/ "1iP4":
/*!***************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/dom.js ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: elementContains, elementContainsAttribute, findElementRecursive, getChildren, getDocument, getParent, getRect, getVirtualParent, getWindow, isVirtualElement, on, portalContainsElement, raiseClick, DATA_PORTAL_ATTRIBUTE, setPortalAttribute, setVirtualParent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_elementContains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/elementContains */ "xOcl");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elementContains", function() { return _dom_elementContains__WEBPACK_IMPORTED_MODULE_0__["elementContains"]; });

/* harmony import */ var _dom_elementContainsAttribute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/elementContainsAttribute */ "si5M");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elementContainsAttribute", function() { return _dom_elementContainsAttribute__WEBPACK_IMPORTED_MODULE_1__["elementContainsAttribute"]; });

/* harmony import */ var _dom_findElementRecursive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom/findElementRecursive */ "FIGI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findElementRecursive", function() { return _dom_findElementRecursive__WEBPACK_IMPORTED_MODULE_2__["findElementRecursive"]; });

/* harmony import */ var _dom_getChildren__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom/getChildren */ "pWRy");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getChildren", function() { return _dom_getChildren__WEBPACK_IMPORTED_MODULE_3__["getChildren"]; });

/* harmony import */ var _dom_getDocument__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom/getDocument */ "NJXT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDocument", function() { return _dom_getDocument__WEBPACK_IMPORTED_MODULE_4__["getDocument"]; });

/* harmony import */ var _dom_getParent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dom/getParent */ "nm55");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getParent", function() { return _dom_getParent__WEBPACK_IMPORTED_MODULE_5__["getParent"]; });

/* harmony import */ var _dom_getRect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dom/getRect */ "w0Tv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRect", function() { return _dom_getRect__WEBPACK_IMPORTED_MODULE_6__["getRect"]; });

/* harmony import */ var _dom_getVirtualParent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dom/getVirtualParent */ "tatU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getVirtualParent", function() { return _dom_getVirtualParent__WEBPACK_IMPORTED_MODULE_7__["getVirtualParent"]; });

/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dom/getWindow */ "jfaJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWindow", function() { return _dom_getWindow__WEBPACK_IMPORTED_MODULE_8__["getWindow"]; });

/* harmony import */ var _dom_isVirtualElement__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dom/isVirtualElement */ "l7Dq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isVirtualElement", function() { return _dom_isVirtualElement__WEBPACK_IMPORTED_MODULE_9__["isVirtualElement"]; });

/* harmony import */ var _dom_on__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dom/on */ "NX+g");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "on", function() { return _dom_on__WEBPACK_IMPORTED_MODULE_10__["on"]; });

/* harmony import */ var _dom_portalContainsElement__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dom/portalContainsElement */ "zxpP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "portalContainsElement", function() { return _dom_portalContainsElement__WEBPACK_IMPORTED_MODULE_11__["portalContainsElement"]; });

/* harmony import */ var _dom_raiseClick__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dom/raiseClick */ "Golq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "raiseClick", function() { return _dom_raiseClick__WEBPACK_IMPORTED_MODULE_12__["raiseClick"]; });

/* harmony import */ var _dom_setPortalAttribute__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dom/setPortalAttribute */ "ZSQe");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DATA_PORTAL_ATTRIBUTE", function() { return _dom_setPortalAttribute__WEBPACK_IMPORTED_MODULE_13__["DATA_PORTAL_ATTRIBUTE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setPortalAttribute", function() { return _dom_setPortalAttribute__WEBPACK_IMPORTED_MODULE_13__["setPortalAttribute"]; });

/* harmony import */ var _dom_setVirtualParent__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dom/setVirtualParent */ "oKDY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setVirtualParent", function() { return _dom_setVirtualParent__WEBPACK_IMPORTED_MODULE_14__["setVirtualParent"]; });
















//# sourceMappingURL=dom.js.map

/***/ }),

/***/ "1wGJ":
/*!****************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/aria.js ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: mergeAriaAttributeValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeAriaAttributeValues", function() { return mergeAriaAttributeValues; });
/**
 * ARIA helper to concatenate attributes, returning undefined if all attributes
 * are undefined. (Empty strings are not a valid ARIA attribute value.)
 *
 * @param ariaAttributes - ARIA attributes to merge
 */
function mergeAriaAttributeValues() {
    var ariaAttributes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ariaAttributes[_i] = arguments[_i];
    }
    var mergedAttribute = ariaAttributes
        .filter(function (arg) { return arg; })
        .join(' ')
        .trim();
    return mergedAttribute === '' ? undefined : mergedAttribute;
}
//# sourceMappingURL=aria.js.map

/***/ }),

/***/ "2R51":
/*!**************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@fluentui/theme@1.7.1_c129be21209ec549b9ba61bf76d54bcc/node_modules/@fluentui/theme/lib/fonts/DefaultFontStyles.js ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: DefaultFontStyles, registerDefaultFontFaces */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultFontStyles", function() { return DefaultFontStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerDefaultFontFaces", function() { return registerDefaultFontFaces; });
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/merge-styles */ "7Xpn");
/* harmony import */ var _FluentFonts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FluentFonts */ "myQz");
/* harmony import */ var _createFontStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createFontStyles */ "Qt/S");
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @uifabric/utilities */ "P2cQ");




// Default urls.
var DefaultBaseUrl = 'https://static2.sharepointonline.com/files/fabric/assets';
// Standard font styling.
var DefaultFontStyles = Object(_createFontStyles__WEBPACK_IMPORTED_MODULE_2__["createFontStyles"])(Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_3__["getLanguage"])('sessionStorage'));
function _registerFontFace(fontFamily, url, fontWeight, localFontName) {
    fontFamily = "'" + fontFamily + "'";
    var localFontSrc = localFontName !== undefined ? "local('" + localFontName + "')," : '';
    Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["fontFace"])({
        fontFamily: fontFamily,
        src: localFontSrc + ("url('" + url + ".woff2') format('woff2'),") + ("url('" + url + ".woff') format('woff')"),
        fontWeight: fontWeight,
        fontStyle: 'normal',
        fontDisplay: 'swap',
    });
}
function _registerFontFaceSet(baseUrl, fontFamily, cdnFolder, cdnFontName, localFontName) {
    if (cdnFontName === void 0) { cdnFontName = 'segoeui'; }
    var urlBase = baseUrl + "/" + cdnFolder + "/" + cdnFontName;
    _registerFontFace(fontFamily, urlBase + '-light', _FluentFonts__WEBPACK_IMPORTED_MODULE_1__["FontWeights"].light, localFontName && localFontName + ' Light');
    _registerFontFace(fontFamily, urlBase + '-semilight', _FluentFonts__WEBPACK_IMPORTED_MODULE_1__["FontWeights"].semilight, localFontName && localFontName + ' SemiLight');
    _registerFontFace(fontFamily, urlBase + '-regular', _FluentFonts__WEBPACK_IMPORTED_MODULE_1__["FontWeights"].regular, localFontName);
    _registerFontFace(fontFamily, urlBase + '-semibold', _FluentFonts__WEBPACK_IMPORTED_MODULE_1__["FontWeights"].semibold, localFontName && localFontName + ' SemiBold');
    _registerFontFace(fontFamily, urlBase + '-bold', _FluentFonts__WEBPACK_IMPORTED_MODULE_1__["FontWeights"].bold, localFontName && localFontName + ' Bold');
}
function registerDefaultFontFaces(baseUrl) {
    if (baseUrl) {
        var fontUrl = baseUrl + "/fonts";
        // Produce @font-face definitions for all supported web fonts.
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_1__["LocalizedFontNames"].Thai, 'leelawadeeui-thai', 'leelawadeeui');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_1__["LocalizedFontNames"].Arabic, 'segoeui-arabic');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_1__["LocalizedFontNames"].Cyrillic, 'segoeui-cyrillic');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_1__["LocalizedFontNames"].EastEuropean, 'segoeui-easteuropean');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_1__["LocalizedFontNames"].Greek, 'segoeui-greek');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_1__["LocalizedFontNames"].Hebrew, 'segoeui-hebrew');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_1__["LocalizedFontNames"].Vietnamese, 'segoeui-vietnamese');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_1__["LocalizedFontNames"].WestEuropean, 'segoeui-westeuropean', 'segoeui', 'Segoe UI');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_1__["LocalizedFontFamilies"].Selawik, 'selawik', 'selawik');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_1__["LocalizedFontNames"].Armenian, 'segoeui-armenian');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_1__["LocalizedFontNames"].Georgian, 'segoeui-georgian');
        // Leelawadee UI (Thai) does not have a 'light' weight, so we override
        // the font-face generated above to use the 'semilight' weight instead.
        _registerFontFace('Leelawadee UI Web', fontUrl + "/leelawadeeui-thai/leelawadeeui-semilight", _FluentFonts__WEBPACK_IMPORTED_MODULE_1__["FontWeights"].light);
        // Leelawadee UI (Thai) does not have a 'semibold' weight, so we override
        // the font-face generated above to use the 'bold' weight instead.
        _registerFontFace('Leelawadee UI Web', fontUrl + "/leelawadeeui-thai/leelawadeeui-bold", _FluentFonts__WEBPACK_IMPORTED_MODULE_1__["FontWeights"].semibold);
    }
}
/**
 * Reads the fontBaseUrl from window.FabricConfig.fontBaseUrl or falls back to a default.
 */
function _getFontBaseUrl() {
    var _a, _b, _c;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var fabricConfig = (_a = Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_3__["getWindow"])()) === null || _a === void 0 ? void 0 : _a.FabricConfig;
    return _c = (_b = fabricConfig) === null || _b === void 0 ? void 0 : _b.fontBaseUrl, (_c !== null && _c !== void 0 ? _c : DefaultBaseUrl);
}
/**
 * Register the font faces.
 */
registerDefaultFontFaces(_getFontBaseUrl());
//# sourceMappingURL=DefaultFontStyles.js.map

/***/ }),

/***/ "2gKW":
/*!***************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/styling@7.16.19_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/styling/lib/classNames/AnimationClassNames.js ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: AnimationClassNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationClassNames", function() { return AnimationClassNames; });
/* harmony import */ var _utilities_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/index */ "YUCC");
/* harmony import */ var _styles_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/index */ "YWaz");


/**
 * {@docCategory AnimationClassNames}
 */
var AnimationClassNames = Object(_utilities_index__WEBPACK_IMPORTED_MODULE_0__["buildClassMap"])(_styles_index__WEBPACK_IMPORTED_MODULE_1__["AnimationStyles"]);
//# sourceMappingURL=AnimationClassNames.js.map

/***/ }),

/***/ "2qUy":
/*!*************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/DelayedRender.js ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: DelayedRender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelayedRender", function() { return DelayedRender; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Utility component for delaying the render of a child component after a given delay. This component
 * requires a single child component; don't pass in many components. Wrap multiple components in a DIV
 * if necessary.
 *
 * @public
 * {@docCategory DelayedRender}
 */
var DelayedRender = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DelayedRender, _super);
    function DelayedRender(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isRendered: false,
        };
        return _this;
    }
    DelayedRender.prototype.componentDidMount = function () {
        var _this = this;
        var delay = this.props.delay;
        this._timeoutId = window.setTimeout(function () {
            _this.setState({
                isRendered: true,
            });
        }, delay);
    };
    DelayedRender.prototype.componentWillUnmount = function () {
        if (this._timeoutId) {
            clearTimeout(this._timeoutId);
        }
    };
    DelayedRender.prototype.render = function () {
        return this.state.isRendered ? react__WEBPACK_IMPORTED_MODULE_1__["Children"].only(this.props.children) : null;
    };
    DelayedRender.defaultProps = {
        delay: 0,
    };
    return DelayedRender;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=DelayedRender.js.map

/***/ }),

/***/ "3DHI":
/*!**************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/GlobalSettings.js ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: GlobalSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalSettings", function() { return GlobalSettings; });
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/getWindow */ "jfaJ");

/**
 * Storing global state in local module variables has issues when more than one copy
 * if the module gets loaded on the page (due to a bundling error or simply by consuming
 * a prebundled script.)
 *
 * This file contains helpers to deal with the getting and setting local state, and allows
 * callers to get called back when it mutates.
 */
var GLOBAL_SETTINGS_PROP_NAME = '__globalSettings__';
var CALLBACK_STATE_PROP_NAME = '__callbacks__';
var _counter = 0;
/**
 * Global settings helper, which stores settings in the global (window) namespace.
 * If window is not provided, it will store settings in module scope. Provides a
 * way to observe changes as well when their values change.
 *
 * @public
 * {@docCategory GlobalSettings}
 */
var GlobalSettings = /** @class */ (function () {
    function GlobalSettings() {
    }
    GlobalSettings.getValue = function (key, defaultValue) {
        var globalSettings = _getGlobalSettings();
        if (globalSettings[key] === undefined) {
            globalSettings[key] = typeof defaultValue === 'function' ? defaultValue() : defaultValue;
        }
        return globalSettings[key];
    };
    GlobalSettings.setValue = function (key, value) {
        var globalSettings = _getGlobalSettings();
        var callbacks = globalSettings[CALLBACK_STATE_PROP_NAME];
        var oldValue = globalSettings[key];
        if (value !== oldValue) {
            globalSettings[key] = value;
            var changeDescription = {
                oldValue: oldValue,
                value: value,
                key: key,
            };
            for (var id in callbacks) {
                if (callbacks.hasOwnProperty(id)) {
                    callbacks[id](changeDescription);
                }
            }
        }
        return value;
    };
    GlobalSettings.addChangeListener = function (cb) {
        // Note: we use generated ids on the callbacks to create a map of the callbacks, which optimizes removal.
        // (It's faster to delete a key than it is to look up the index of an object and splice an array.)
        var id = cb.__id__;
        var callbacks = _getCallbacks();
        if (!id) {
            id = cb.__id__ = String(_counter++);
        }
        callbacks[id] = cb;
    };
    GlobalSettings.removeChangeListener = function (cb) {
        var callbacks = _getCallbacks();
        delete callbacks[cb.__id__];
    };
    return GlobalSettings;
}());

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _getGlobalSettings() {
    var _a;
    var win = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var globalObj = win || {};
    if (!globalObj[GLOBAL_SETTINGS_PROP_NAME]) {
        globalObj[GLOBAL_SETTINGS_PROP_NAME] = (_a = {},
            _a[CALLBACK_STATE_PROP_NAME] = {},
            _a);
    }
    return globalObj[GLOBAL_SETTINGS_PROP_NAME];
}
function _getCallbacks() {
    var globalSettings = _getGlobalSettings();
    return globalSettings[CALLBACK_STATE_PROP_NAME];
}
//# sourceMappingURL=GlobalSettings.js.map

/***/ }),

/***/ "3Pxt":
/*!************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/warn/warnControlledUsage.js ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: resetControlledWarnings, warnControlledUsage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetControlledWarnings", function() { return resetControlledWarnings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warnControlledUsage", function() { return warnControlledUsage; });
/* harmony import */ var _warn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warn */ "6dJl");
/* harmony import */ var _controlled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controlled */ "QWUC");


var warningsMap;
if (true) {
    warningsMap = {
        valueOnChange: {},
        valueDefaultValue: {},
        controlledToUncontrolled: {},
        uncontrolledToControlled: {},
    };
}
/** Reset controlled usage warnings for testing purposes. */
function resetControlledWarnings() {
    if (true) {
        warningsMap.valueOnChange = {};
        warningsMap.valueDefaultValue = {};
        warningsMap.controlledToUncontrolled = {};
        warningsMap.uncontrolledToControlled = {};
    }
}
/**
 * Check for and warn on the following error conditions with a form component:
 * - A value prop is provided (indicated it's being used as controlled) without a change handler,
 *    and the component is not read-only
 * - Both the value and defaultValue props are provided
 * - The component is attempting to switch between controlled and uncontrolled
 *
 * The messages mimic the warnings React gives for these error conditions on input elements.
 * The warning will only be displayed once per component ID.
 */
function warnControlledUsage(params) {
    if (true) {
        var componentId = params.componentId, componentName = params.componentName, defaultValueProp = params.defaultValueProp, props = params.props, oldProps = params.oldProps, onChangeProp = params.onChangeProp, readOnlyProp = params.readOnlyProp, valueProp = params.valueProp;
        // This warning logic closely follows what React does for native <input> elements.
        var oldIsControlled = oldProps ? Object(_controlled__WEBPACK_IMPORTED_MODULE_1__["isControlled"])(oldProps, valueProp) : undefined;
        var newIsControlled = Object(_controlled__WEBPACK_IMPORTED_MODULE_1__["isControlled"])(props, valueProp);
        if (newIsControlled) {
            // onChange (or readOnly) must be provided if value is provided
            var hasOnChange = !!props[onChangeProp];
            var isReadOnly = !!(readOnlyProp && props[readOnlyProp]);
            if (!(hasOnChange || isReadOnly) && !warningsMap.valueOnChange[componentId]) {
                warningsMap.valueOnChange[componentId] = true;
                Object(_warn__WEBPACK_IMPORTED_MODULE_0__["warn"])("Warning: You provided a '" + valueProp + "' prop to a " + componentName + " without an '" + onChangeProp + "' handler. " +
                    ("This will render a read-only field. If the field should be mutable use '" + defaultValueProp + "'. ") +
                    ("Otherwise, set '" + onChangeProp + "'" + (readOnlyProp ? " or '" + readOnlyProp + "'" : '') + "."));
            }
            // value and defaultValue are mutually exclusive
            var defaultValue = props[defaultValueProp];
            if (defaultValue !== undefined && defaultValue !== null && !warningsMap.valueDefaultValue[componentId]) {
                warningsMap.valueDefaultValue[componentId] = true;
                Object(_warn__WEBPACK_IMPORTED_MODULE_0__["warn"])("Warning: You provided both '" + valueProp + "' and '" + defaultValueProp + "' to a " + componentName + ". " +
                    ("Form fields must be either controlled or uncontrolled (specify either the '" + valueProp + "' prop, ") +
                    ("or the '" + defaultValueProp + "' prop, but not both). Decide between using a controlled or uncontrolled ") +
                    (componentName + " and remove one of these props. More info: https://fb.me/react-controlled-components"));
            }
        }
        // Warn if switching between uncontrolled and controlled. (One difference between this implementation
        // and React's <input> is that if oldIsControlled is indeterminate and newIsControlled true, we don't warn.)
        if (oldProps && newIsControlled !== oldIsControlled) {
            var oldType = oldIsControlled ? 'a controlled' : 'an uncontrolled';
            var newType = oldIsControlled ? 'uncontrolled' : 'controlled';
            var warnMap = oldIsControlled ? warningsMap.controlledToUncontrolled : warningsMap.uncontrolledToControlled;
            if (!warnMap[componentId]) {
                warnMap[componentId] = true;
                Object(_warn__WEBPACK_IMPORTED_MODULE_0__["warn"])("Warning: A component is changing " + oldType + " " + componentName + " to be " + newType + ". " +
                    (componentName + "s should not switch from controlled to uncontrolled (or vice versa). ") +
                    "Decide between using controlled or uncontrolled for the lifetime of the component. " +
                    "More info: https://fb.me/react-controlled-components");
            }
        }
    }
}
//# sourceMappingURL=warnControlledUsage.js.map

/***/ }),

/***/ "49j8":
/*!*******************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/version.js ***!
  \*******************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uifabric_set_version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/set-version */ "Eyzw");
// Do not modify this file; it is generated as part of publish.
// The checked in version is a placeholder only and will not be updated.

Object(_uifabric_set_version__WEBPACK_IMPORTED_MODULE_0__["setVersion"])('@uifabric/utilities', '7.33.1');
//# sourceMappingURL=version.js.map

/***/ }),

/***/ "4Y5s":
/*!******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/classNamesFunction.js ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: classNamesFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classNamesFunction", function() { return classNamesFunction; });
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/merge-styles */ "7Xpn");
/* harmony import */ var _rtl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rtl */ "1E/B");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "1iP4");



var MAX_CACHE_COUNT = 50;
var DEFAULT_SPECIFICITY_MULTIPLIER = 5;
var _memoizedClassNames = 0;
var stylesheet = _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["Stylesheet"].getInstance();
if (stylesheet && stylesheet.onReset) {
    stylesheet.onReset(function () { return _memoizedClassNames++; });
}
// Note that because of the caching nature within the classNames memoization,
// I've disabled this rule to simply be able to work with any types.
/* eslint-disable @typescript-eslint/no-explicit-any */
// This represents a prop we attach to each Map to indicate the cached return value
// associated with the graph node.
var retVal = '__retval__';
/**
 * Creates a getClassNames function which calls getStyles given the props, and injects them
 * into mergeStyleSets.
 *
 * Note that the props you pass in on every render should be in the same order and
 * immutable (numbers, strings, and booleans). This will allow the results to be memoized. Violating
 * these will cause extra recalcs to occur.
 */
function classNamesFunction(options) {
    // We build a trie where each node is a Map. The map entry key represents an argument
    // value, and the entry value is another node (Map). Each node has a `__retval__`
    // property which is used to hold the cached response.
    if (options === void 0) { options = {}; }
    // To derive the response, we can simply ensure the arguments are added or already
    // exist in the trie. At the last node, if there is a `__retval__` we return that. Otherwise
    // we call the `getStyles` api to evaluate, cache on the property, and return that.
    var map = new Map();
    var styleCalcCount = 0;
    var getClassNamesCount = 0;
    var currentMemoizedClassNames = _memoizedClassNames;
    var getClassNames = function (styleFunctionOrObject, styleProps) {
        if (styleProps === void 0) { styleProps = {}; }
        var _a, _b;
        // If useStaticStyles is true, styleFunctionOrObject returns slot to classname mappings.
        // If there is also no style overrides, we can skip merge styles completely and
        // simply return the result from the style funcion.
        if (options.useStaticStyles &&
            typeof styleFunctionOrObject === 'function' &&
            styleFunctionOrObject.__noStyleOverride__) {
            return styleFunctionOrObject(styleProps);
        }
        getClassNamesCount++;
        var current = map;
        var theme = styleProps.theme;
        var rtl = theme && theme.rtl !== undefined ? theme.rtl : Object(_rtl__WEBPACK_IMPORTED_MODULE_1__["getRTL"])();
        var disableCaching = options.disableCaching;
        // On reset of our stylesheet, reset memoized cache.
        if (currentMemoizedClassNames !== _memoizedClassNames) {
            currentMemoizedClassNames = _memoizedClassNames;
            map = new Map();
            styleCalcCount = 0;
        }
        if (!options.disableCaching) {
            current = _traverseMap(map, styleFunctionOrObject);
            current = _traverseMap(current, styleProps);
        }
        if (disableCaching || !current[retVal]) {
            if (styleFunctionOrObject === undefined) {
                current[retVal] = {};
            }
            else {
                current[retVal] = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["mergeCssSets"])([
                    (typeof styleFunctionOrObject === 'function'
                        ? styleFunctionOrObject(styleProps)
                        : styleFunctionOrObject),
                ], { rtl: !!rtl, specificityMultiplier: options.useStaticStyles ? DEFAULT_SPECIFICITY_MULTIPLIER : undefined });
            }
            if (!disableCaching) {
                styleCalcCount++;
            }
        }
        if (styleCalcCount > (options.cacheSize || MAX_CACHE_COUNT)) {
            var win = Object(_dom__WEBPACK_IMPORTED_MODULE_2__["getWindow"])();
            if ((_b = (_a = win) === null || _a === void 0 ? void 0 : _a.FabricConfig) === null || _b === void 0 ? void 0 : _b.enableClassNameCacheFullWarning) {
                // eslint-disable-next-line no-console
                console.warn("Styles are being recalculated too frequently. Cache miss rate is " + styleCalcCount + "/" + getClassNamesCount + ".");
                // eslint-disable-next-line no-console
                console.trace();
            }
            map.clear();
            styleCalcCount = 0;
            // Mutate the options passed in, that's all we can do.
            options.disableCaching = true;
        }
        // Note: the retVal is an attached property on the Map; not a key in the Map. We use this attached property to
        // cache the return value for this branch of the graph.
        return current[retVal];
    };
    return getClassNames;
}
function _traverseEdge(current, value) {
    value = _normalizeValue(value);
    if (!current.has(value)) {
        current.set(value, new Map());
    }
    return current.get(value);
}
function _traverseMap(current, inputs) {
    if (typeof inputs === 'function') {
        var cachedInputsFromStyled = inputs.__cachedInputs__;
        if (cachedInputsFromStyled) {
            // The styled helper will generate the styles function and will attach the cached
            // inputs (consisting of the default styles, customzied styles, and user provided styles.)
            // These should be used as cache keys for deriving the memoized value.
            for (var _i = 0, _a = inputs.__cachedInputs__; _i < _a.length; _i++) {
                var input = _a[_i];
                current = _traverseEdge(current, input);
            }
        }
        else {
            current = _traverseEdge(current, inputs);
        }
    }
    else if (typeof inputs === 'object') {
        for (var propName in inputs) {
            if (inputs.hasOwnProperty(propName)) {
                current = _traverseEdge(current, inputs[propName]);
            }
        }
    }
    return current;
}
function _normalizeValue(value) {
    switch (value) {
        case undefined:
            return '__undefined__';
        case null:
            return '__null__';
        default:
            return value;
    }
}
//# sourceMappingURL=classNamesFunction.js.map

/***/ }),

/***/ "5+uh":
/*!********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/styling@7.16.19_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/styling/lib/styles/PulsingBeaconAnimationStyles.js ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: PulsingBeaconAnimationStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PulsingBeaconAnimationStyles", function() { return PulsingBeaconAnimationStyles; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uifabric/merge-styles */ "7Xpn");


var DEFAULT_DURATION = '14s';
var DEFAULT_DELAY = '2s';
var DEFAULT_ITERATION_COUNT = '1';
function _continuousPulseStepOne(beaconColorOne, innerDimension) {
    return {
        borderColor: beaconColorOne,
        borderWidth: '0px',
        width: innerDimension,
        height: innerDimension,
    };
}
function _continuousPulseStepTwo(borderWidth) {
    return {
        opacity: 1,
        borderWidth: borderWidth,
    };
}
function _continuousPulseStepThree() {
    return {
        opacity: 1,
    };
}
function _continuousPulseStepFour(beaconColorTwo, outerDimension) {
    return {
        borderWidth: '0',
        width: outerDimension,
        height: outerDimension,
        opacity: 0,
        borderColor: beaconColorTwo,
    };
}
function _continuousPulseStepFive(beaconColorOne, innerDimension) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _continuousPulseStepOne(beaconColorOne, innerDimension)), {
        opacity: 0,
    });
}
function _continuousPulseAnimationDouble(beaconColorOne, beaconColorTwo, innerDimension, outerDimension, borderWidth) {
    return Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_1__["keyframes"])({
        '0%': _continuousPulseStepOne(beaconColorOne, innerDimension),
        '1.42%': _continuousPulseStepTwo(borderWidth),
        '3.57%': _continuousPulseStepThree(),
        '7.14%': _continuousPulseStepFour(beaconColorTwo, outerDimension),
        '8%': _continuousPulseStepFive(beaconColorOne, innerDimension),
        '29.99%': _continuousPulseStepFive(beaconColorOne, innerDimension),
        '30%': _continuousPulseStepOne(beaconColorOne, innerDimension),
        '31.42%': _continuousPulseStepTwo(borderWidth),
        '33.57%': _continuousPulseStepThree(),
        '37.14%': _continuousPulseStepFour(beaconColorTwo, outerDimension),
        '38%': _continuousPulseStepFive(beaconColorOne, innerDimension),
        '79.42%': _continuousPulseStepFive(beaconColorOne, innerDimension),
        '79.43': _continuousPulseStepOne(beaconColorOne, innerDimension),
        '81.85': _continuousPulseStepTwo(borderWidth),
        '83.42': _continuousPulseStepThree(),
        '87%': _continuousPulseStepFour(beaconColorTwo, outerDimension),
        '100%': {},
    });
}
function _continuousPulseAnimationSingle(beaconColorOne, beaconColorTwo, innerDimension, outerDimension, borderWidth) {
    return Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_1__["keyframes"])({
        '0%': _continuousPulseStepOne(beaconColorOne, innerDimension),
        '14.2%': _continuousPulseStepTwo(borderWidth),
        '35.7%': _continuousPulseStepThree(),
        '71.4%': _continuousPulseStepFour(beaconColorTwo, outerDimension),
        '100%': {},
    });
}
function _createDefaultAnimation(animationName, delayLength) {
    return {
        animationName: animationName,
        animationIterationCount: DEFAULT_ITERATION_COUNT,
        animationDuration: DEFAULT_DURATION,
        animationDelay: delayLength || DEFAULT_DELAY,
    };
}
var PulsingBeaconAnimationStyles = {
    continuousPulseAnimationDouble: _continuousPulseAnimationDouble,
    continuousPulseAnimationSingle: _continuousPulseAnimationSingle,
    createDefaultAnimation: _createDefaultAnimation,
};
//# sourceMappingURL=PulsingBeaconAnimationStyles.js.map

/***/ }),

/***/ "5XON":
/*!******************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@fluentui/dom-utilities@1.1.1/node_modules/@fluentui/dom-utilities/lib/findElementRecursive.js ***!
  \******************************************************************************************************************************************************/
/*! exports provided: findElementRecursive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findElementRecursive", function() { return findElementRecursive; });
/* harmony import */ var _getParent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getParent */ "j9TH");

/**
 * Finds the first parent element where the matchFunction returns true
 * @param element - element to start searching at
 * @param matchFunction - the function that determines if the element is a match
 * @returns the matched element or null no match was found
 */
function findElementRecursive(element, matchFunction) {
    if (!element || element === document.body) {
        return null;
    }
    return matchFunction(element) ? element : findElementRecursive(Object(_getParent__WEBPACK_IMPORTED_MODULE_0__["getParent"])(element), matchFunction);
}
//# sourceMappingURL=findElementRecursive.js.map

/***/ }),

/***/ "5vLE":
/*!******************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/object.js ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: shallowCompare, assign, filteredAssign, mapEnumByName, values, omit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shallowCompare", function() { return shallowCompare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filteredAssign", function() { return filteredAssign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapEnumByName", function() { return mapEnumByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "values", function() { return values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "omit", function() { return omit; });
/**
 * Compares a to b and b to a.
 *
 * @public
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function shallowCompare(a, b) {
    for (var propName in a) {
        if (a.hasOwnProperty(propName)) {
            if (!b.hasOwnProperty(propName) || b[propName] !== a[propName]) {
                return false;
            }
        }
    }
    for (var propName in b) {
        if (b.hasOwnProperty(propName)) {
            if (!a.hasOwnProperty(propName)) {
                return false;
            }
        }
    }
    return true;
}
/**
 * Makes a resulting merge of a bunch of objects. Pass in the target object followed by 1 or more
 * objects as arguments and they will be merged sequentially into the target. Note that this will
 * shallow merge; it will not create new cloned values for target members.
 *
 * @public
 * @param target - Target object to merge following object arguments into.
 * @param args - One or more objects that will be mixed into the target in the order they are provided.
 * @returns Resulting merged target.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function assign(target) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return filteredAssign.apply(this, [null, target].concat(args));
}
/**
 * Makes a resulting merge of a bunch of objects, but allows a filter function to be passed in to filter
 * the resulting merges. This allows for scenarios where you want to merge "everything except that one thing"
 * or "properties that start with data-". Note that this will shallow merge; it will not create new cloned
 * values for target members.
 *
 * @public
 * @param isAllowed - Callback to determine if the given propName is allowed in the result.
 * @param target - Target object to merge following object arguments into.
 * @param args - One or more objects that will be mixed into the target in the order they are provided.
 * @returns Resulting merged target.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function filteredAssign(isAllowed, target) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    target = target || {};
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var sourceObject = args_1[_a];
        if (sourceObject) {
            for (var propName in sourceObject) {
                if (sourceObject.hasOwnProperty(propName) && (!isAllowed || isAllowed(propName))) {
                    target[propName] = sourceObject[propName];
                }
            }
        }
    }
    return target;
}
/**
 * Takes an enum and iterates over each value of the enum (as a string), running the callback on each,
 * returning a mapped array.
 * @param theEnum - Enum to iterate over
 * @param callback - The first parameter the name of the entry, and the second parameter is the value
 * of that entry, which is the value you'd normally use when using the enum (usually a number).
 */
function mapEnumByName(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
theEnum, callback) {
    // map<any> to satisfy compiler since it doesn't realize we strip out undefineds in the .filter() call
    return Object.keys(theEnum)
        .map(function (p) {
        // map on each property name as a string
        if (String(Number(p)) !== p) {
            // if the property is not just a number (because enums in TypeScript will map both ways)
            return callback(p, theEnum[p]);
        }
        return undefined;
    })
        .filter(function (v) { return !!v; }); // only return elements with values
}
/**
 * Get all values in an object dictionary
 *
 * @param obj - The dictionary to get values for
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function values(obj) {
    return Object.keys(obj).reduce(function (arr, key) {
        arr.push(obj[key]);
        return arr;
    }, []);
}
/**
 * Tiny helper to do the minimal amount of work in duplicating an object but omitting some
 * props. This ends up faster than using object ...rest or reduce to filter.
 *
 * This behaves very much like filteredAssign, but does not merge many objects together,
 * uses an exclusion object map, and avoids spreads all for optimal performance.
 *
 * See perf test for background:
 * https://jsperf.com/omit-vs-rest-vs-reduce/1
 *
 * @param obj - The object to clone
 * @param exclusions - The array of keys to exclude
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function omit(obj, exclusions) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var result = {};
    for (var key in obj) {
        if (exclusions.indexOf(key) === -1 && obj.hasOwnProperty(key)) {
            result[key] = obj[key];
        }
    }
    return result;
}
//# sourceMappingURL=object.js.map

/***/ }),

/***/ "6dJl":
/*!*********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/warn/warn.js ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: warn, setWarningCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warn", function() { return warn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setWarningCallback", function() { return setWarningCallback; });
/* eslint-disable no-console */
var _warningCallback = undefined;
/**
 * Sends a warning to console, if the api is present.
 *
 * @public
 * @param message - Warning message.
 */
function warn(message) {
    if (_warningCallback && "dev" !== 'production') {
        _warningCallback(message);
    }
    else if (console && console.warn) {
        console.warn(message);
    }
}
/**
 * Configures the warning callback. Passing in undefined will reset it to use the default
 * console.warn function.
 *
 * @public
 * @param warningCallback - Callback to override the generated warnings.
 */
function setWarningCallback(warningCallback) {
    _warningCallback = warningCallback;
}
//# sourceMappingURL=warn.js.map

/***/ }),

/***/ "6gpT":
/*!*********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/styling@7.16.19_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/styling/lib/styles/fonts.js ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: LocalizedFontNames, LocalizedFontFamilies, FontSizes, FontWeights, IconFontSizes, createFontStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fluentui_theme_lib_fonts_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/theme/lib/fonts/index */ "hTVl");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalizedFontNames", function() { return _fluentui_theme_lib_fonts_index__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalizedFontFamilies", function() { return _fluentui_theme_lib_fonts_index__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontSizes", function() { return _fluentui_theme_lib_fonts_index__WEBPACK_IMPORTED_MODULE_0__["FontSizes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontWeights", function() { return _fluentui_theme_lib_fonts_index__WEBPACK_IMPORTED_MODULE_0__["FontWeights"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconFontSizes", function() { return _fluentui_theme_lib_fonts_index__WEBPACK_IMPORTED_MODULE_0__["IconFontSizes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFontStyles", function() { return _fluentui_theme_lib_fonts_index__WEBPACK_IMPORTED_MODULE_0__["createFontStyles"]; });


//# sourceMappingURL=fonts.js.map

/***/ }),

/***/ "7Xpn":
/*!**************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/merge-styles@7.19.1/node_modules/@uifabric/merge-styles/lib/index.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: mergeStyles, mergeCss, mergeStyleSets, mergeCssSets, concatStyleSets, concatStyleSetsWithProps, fontFace, keyframes, InjectionMode, Stylesheet, setRTL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mergeStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mergeStyles */ "zh6F");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeStyles", function() { return _mergeStyles__WEBPACK_IMPORTED_MODULE_0__["mergeStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeCss", function() { return _mergeStyles__WEBPACK_IMPORTED_MODULE_0__["mergeCss"]; });

/* harmony import */ var _mergeStyleSets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mergeStyleSets */ "W9LO");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeStyleSets", function() { return _mergeStyleSets__WEBPACK_IMPORTED_MODULE_1__["mergeStyleSets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeCssSets", function() { return _mergeStyleSets__WEBPACK_IMPORTED_MODULE_1__["mergeCssSets"]; });

/* harmony import */ var _concatStyleSets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./concatStyleSets */ "H7TR");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concatStyleSets", function() { return _concatStyleSets__WEBPACK_IMPORTED_MODULE_2__["concatStyleSets"]; });

/* harmony import */ var _concatStyleSetsWithProps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./concatStyleSetsWithProps */ "shz0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concatStyleSetsWithProps", function() { return _concatStyleSetsWithProps__WEBPACK_IMPORTED_MODULE_3__["concatStyleSetsWithProps"]; });

/* harmony import */ var _fontFace__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fontFace */ "b2AN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontFace", function() { return _fontFace__WEBPACK_IMPORTED_MODULE_4__["fontFace"]; });

/* harmony import */ var _keyframes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./keyframes */ "Z+z6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return _keyframes__WEBPACK_IMPORTED_MODULE_5__["keyframes"]; });

/* harmony import */ var _Stylesheet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Stylesheet */ "DPR3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InjectionMode", function() { return _Stylesheet__WEBPACK_IMPORTED_MODULE_6__["InjectionMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Stylesheet", function() { return _Stylesheet__WEBPACK_IMPORTED_MODULE_6__["Stylesheet"]; });

/* harmony import */ var _StyleOptionsState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./StyleOptionsState */ "V8pV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setRTL", function() { return _StyleOptionsState__WEBPACK_IMPORTED_MODULE_7__["setRTL"]; });

/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./version */ "aLKZ");









//# sourceMappingURL=index.js.map

/***/ }),

/***/ "7nOZ":
/*!******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/componentAs/composeComponentAs.js ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: composeComponentAs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "composeComponentAs", function() { return composeComponentAs; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../memoize */ "BYBg");



function createComposedComponent(outer) {
    var Outer = outer;
    var outerMemoizer = Object(_memoize__WEBPACK_IMPORTED_MODULE_2__["createMemoizer"])(function (inner) {
        if (outer === inner) {
            throw new Error('Attempted to compose a component with itself.');
        }
        var Inner = inner;
        var innerMemoizer = Object(_memoize__WEBPACK_IMPORTED_MODULE_2__["createMemoizer"])(function (defaultRender) {
            var InnerWithDefaultRender = function (innerProps) {
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Inner, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, innerProps, { defaultRender: defaultRender }));
            };
            return InnerWithDefaultRender;
        });
        var OuterWithDefaultRender = function (outerProps) {
            var defaultRender = outerProps.defaultRender;
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Outer, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, outerProps, { defaultRender: defaultRender ? innerMemoizer(defaultRender) : Inner }));
        };
        return OuterWithDefaultRender;
    });
    return outerMemoizer;
}
var componentAsMemoizer = Object(_memoize__WEBPACK_IMPORTED_MODULE_2__["createMemoizer"])(createComposedComponent);
/**
 * Composes two components which conform to the `IComponentAs` specification; that is, two
 * components which accept a `defaultRender` prop, which is a 'default' implementation of
 * a component which accepts the same overall props.
 *
 * @public
 */
function composeComponentAs(outer, inner) {
    return componentAsMemoizer(outer)(inner);
}
//# sourceMappingURL=composeComponentAs.js.map

/***/ }),

/***/ "8Un8":
/*!*************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/styling@7.16.19_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/styling/lib/classNames/index.js ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: AnimationClassNames, FontClassNames, ColorClassNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AnimationClassNames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnimationClassNames */ "2gKW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimationClassNames", function() { return _AnimationClassNames__WEBPACK_IMPORTED_MODULE_0__["AnimationClassNames"]; });

/* harmony import */ var _FontClassNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FontClassNames */ "Cp91");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontClassNames", function() { return _FontClassNames__WEBPACK_IMPORTED_MODULE_1__["FontClassNames"]; });

/* harmony import */ var _ColorClassNames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ColorClassNames */ "Kplb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorClassNames", function() { return _ColorClassNames__WEBPACK_IMPORTED_MODULE_2__["ColorClassNames"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "8ffK":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/warn/warnConditionallyRequiredProps.js ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: warnConditionallyRequiredProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warnConditionallyRequiredProps", function() { return warnConditionallyRequiredProps; });
/* harmony import */ var _warn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warn */ "6dJl");

/**
 * Warns when props are required if a condition is met.
 *
 * @public
 * @param componentName - The name of the component being used.
 * @param props - The props passed into the component.
 * @param requiredProps - The name of the props that are required when the condition is met.
 * @param conditionalPropName - The name of the prop that the condition is based on.
 * @param condition - Whether the condition is met.
 */
function warnConditionallyRequiredProps(componentName, props, requiredProps, conditionalPropName, condition) {
    if (condition === true && "dev" !== 'production') {
        for (var _i = 0, requiredProps_1 = requiredProps; _i < requiredProps_1.length; _i++) {
            var requiredPropName = requiredProps_1[_i];
            if (!(requiredPropName in props)) {
                Object(_warn__WEBPACK_IMPORTED_MODULE_0__["warn"])(componentName + " property '" + requiredPropName + "' is required when '" + conditionalPropName + "' is used.'");
            }
        }
    }
}
//# sourceMappingURL=warnConditionallyRequiredProps.js.map

/***/ }),

/***/ "8k4T":
/*!****************************************!*\
  !*** ./lib/uifabric-styling-bundle.js ***!
  \****************************************/
/*! exports provided: AnimationClassNames, FontClassNames, ColorClassNames, AnimationStyles, AnimationVariables, DefaultPalette, DefaultEffects, DefaultFontStyles, registerDefaultFontFaces, FontSizes, FontWeights, IconFontSizes, createFontStyles, getFocusStyle, focusClear, getFocusOutlineStyle, getInputFocusStyle, hiddenContentStyle, PulsingBeaconAnimationStyles, getGlobalClassNames, getThemedContext, ThemeSettingName, getTheme, loadTheme, createTheme, registerOnThemeChangeCallback, removeOnThemeChangeCallback, HighContrastSelector, HighContrastSelectorWhite, HighContrastSelectorBlack, EdgeChromiumHighContrastSelector, ScreenWidthMinSmall, ScreenWidthMinMedium, ScreenWidthMinLarge, ScreenWidthMinXLarge, ScreenWidthMinXXLarge, ScreenWidthMinXXXLarge, ScreenWidthMaxSmall, ScreenWidthMaxMedium, ScreenWidthMaxLarge, ScreenWidthMaxXLarge, ScreenWidthMaxXXLarge, ScreenWidthMinUhfMobile, getScreenSelector, getEdgeChromiumNoHighContrastAdjustSelector, normalize, noWrap, getFadedOverflowStyle, getPlaceholderStyles, ZIndexes, buildClassMap, getIcon, registerIcons, registerIconAlias, unregisterIcons, setIconOptions, getIconClassName, InjectionMode, Stylesheet, concatStyleSets, concatStyleSetsWithProps, fontFace, keyframes, mergeStyleSets, mergeStyles, mergeCss, _Utilities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Utilities", function() { return _Utilities; });
/* harmony import */ var _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/styling */ "dqzI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimationClassNames", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["AnimationClassNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontClassNames", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["FontClassNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorClassNames", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["ColorClassNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimationStyles", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["AnimationStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimationVariables", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["AnimationVariables"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultPalette", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["DefaultPalette"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultEffects", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["DefaultEffects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultFontStyles", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["DefaultFontStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerDefaultFontFaces", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["registerDefaultFontFaces"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontSizes", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["FontSizes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontWeights", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["FontWeights"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconFontSizes", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["IconFontSizes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFontStyles", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["createFontStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFocusStyle", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["getFocusStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "focusClear", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["focusClear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFocusOutlineStyle", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["getFocusOutlineStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInputFocusStyle", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["getInputFocusStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hiddenContentStyle", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["hiddenContentStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PulsingBeaconAnimationStyles", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["PulsingBeaconAnimationStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGlobalClassNames", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getThemedContext", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["getThemedContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeSettingName", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["ThemeSettingName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTheme", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["getTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadTheme", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["loadTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTheme", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["createTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerOnThemeChangeCallback", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["registerOnThemeChangeCallback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeOnThemeChangeCallback", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["removeOnThemeChangeCallback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HighContrastSelector", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HighContrastSelectorWhite", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelectorWhite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HighContrastSelectorBlack", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelectorBlack"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EdgeChromiumHighContrastSelector", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["EdgeChromiumHighContrastSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinSmall", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["ScreenWidthMinSmall"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinMedium", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["ScreenWidthMinMedium"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinLarge", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["ScreenWidthMinLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinXLarge", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["ScreenWidthMinXLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinXXLarge", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["ScreenWidthMinXXLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinXXXLarge", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["ScreenWidthMinXXXLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxSmall", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["ScreenWidthMaxSmall"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxMedium", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["ScreenWidthMaxMedium"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxLarge", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["ScreenWidthMaxLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxXLarge", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["ScreenWidthMaxXLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxXXLarge", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["ScreenWidthMaxXXLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinUhfMobile", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["ScreenWidthMinUhfMobile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getScreenSelector", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["getScreenSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEdgeChromiumNoHighContrastAdjustSelector", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["getEdgeChromiumNoHighContrastAdjustSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["normalize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noWrap", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["noWrap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFadedOverflowStyle", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["getFadedOverflowStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPlaceholderStyles", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["getPlaceholderStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ZIndexes", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["ZIndexes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildClassMap", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["buildClassMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIcon", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["getIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerIcons", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["registerIcons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerIconAlias", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["registerIconAlias"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unregisterIcons", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["unregisterIcons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setIconOptions", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["setIconOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIconClassName", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["getIconClassName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InjectionMode", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["InjectionMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Stylesheet", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["Stylesheet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concatStyleSets", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["concatStyleSets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concatStyleSetsWithProps", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["concatStyleSetsWithProps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontFace", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["fontFace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["keyframes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeStyleSets", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["mergeStyleSets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeStyles", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["mergeStyles"]; });

/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uifabric/merge-styles */ "7Xpn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeCss", function() { return _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_1__["mergeCss"]; });

/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uifabric/utilities */ "P2cQ");


// Isolated Utilities export
 // 1KB minified
// tslint:disable-next-line:export-name
var _Utilities = _uifabric_utilities__WEBPACK_IMPORTED_MODULE_2__;


/***/ }),

/***/ "AF+r":
/*!************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/localStorage.js ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: getItem, setItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItem", function() { return getItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setItem", function() { return setItem; });
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/getWindow */ "jfaJ");

/**
 * Fetches an item from local storage without throwing an exception
 * @param key The key of the item to fetch from local storage
 */
function getItem(key) {
    var result = null;
    try {
        var win = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
        result = win ? win.localStorage.getItem(key) : null;
    }
    catch (e) {
        /* Eat the exception */
    }
    return result;
}
/**
 * Inserts an item into local storage without throwing an exception
 * @param key The key of the item to add to local storage
 * @param data The data to put into local storage
 */
function setItem(key, data) {
    try {
        var win = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
        win && win.localStorage.setItem(key, data);
    }
    catch (e) {
        /* Eat the exception */
    }
}
//# sourceMappingURL=localStorage.js.map

/***/ }),

/***/ "AgfC":
/*!*******************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/merge-styles@7.19.1/node_modules/@uifabric/merge-styles/lib/transforms/rtlifyRules.js ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: rtlifyRules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rtlifyRules", function() { return rtlifyRules; });
var _a;
var LEFT = 'left';
var RIGHT = 'right';
var NO_FLIP = '@noflip';
var NAME_REPLACEMENTS = (_a = {},
    _a[LEFT] = RIGHT,
    _a[RIGHT] = LEFT,
    _a);
var VALUE_REPLACEMENTS = {
    'w-resize': 'e-resize',
    'sw-resize': 'se-resize',
    'nw-resize': 'ne-resize',
};
/**
 * RTLifies the rulePair in the array at the current index. This mutates the array for performance
 * reasons.
 */
function rtlifyRules(options, rulePairs, index) {
    if (options.rtl) {
        var name_1 = rulePairs[index];
        if (!name_1) {
            return;
        }
        var value = rulePairs[index + 1];
        if (typeof value === 'string' && value.indexOf(NO_FLIP) >= 0) {
            rulePairs[index + 1] = value.replace(/\s*(?:\/\*\s*)?\@noflip\b(?:\s*\*\/)?\s*?/g, '');
        }
        else if (name_1.indexOf(LEFT) >= 0) {
            rulePairs[index] = name_1.replace(LEFT, RIGHT);
        }
        else if (name_1.indexOf(RIGHT) >= 0) {
            rulePairs[index] = name_1.replace(RIGHT, LEFT);
        }
        else if (String(value).indexOf(LEFT) >= 0) {
            rulePairs[index + 1] = value.replace(LEFT, RIGHT);
        }
        else if (String(value).indexOf(RIGHT) >= 0) {
            rulePairs[index + 1] = value.replace(RIGHT, LEFT);
        }
        else if (NAME_REPLACEMENTS[name_1]) {
            rulePairs[index] = NAME_REPLACEMENTS[name_1];
        }
        else if (VALUE_REPLACEMENTS[value]) {
            rulePairs[index + 1] = VALUE_REPLACEMENTS[value];
        }
        else {
            switch (name_1) {
                case 'margin':
                case 'padding':
                    rulePairs[index + 1] = flipQuad(value);
                    break;
                case 'box-shadow':
                    rulePairs[index + 1] = negateNum(value, 0);
                    break;
            }
        }
    }
}
/**
 * Given a string value in a space delimited format (e.g. "1 2 3 4"), negates a particular value.
 */
function negateNum(value, partIndex) {
    var parts = value.split(' ');
    var numberVal = parseInt(parts[partIndex], 10);
    parts[0] = parts[0].replace(String(numberVal), String(numberVal * -1));
    return parts.join(' ');
}
/**
 * Given a string quad, flips the left and right values.
 */
function flipQuad(value) {
    if (typeof value === 'string') {
        var parts = value.split(' ');
        if (parts.length === 4) {
            return parts[0] + " " + parts[3] + " " + parts[2] + " " + parts[1];
        }
    }
    return value;
}
//# sourceMappingURL=rtlifyRules.js.map

/***/ }),

/***/ "AnRT":
/*!**************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/warn/warnMutuallyExclusive.js ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: warnMutuallyExclusive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warnMutuallyExclusive", function() { return warnMutuallyExclusive; });
/* harmony import */ var _warn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warn */ "6dJl");

/**
 * Warns when two props which are mutually exclusive are both being used.
 *
 * @public
 * @param componentName - The name of the component being used.
 * @param props - The props passed into the component.
 * @param exclusiveMap - A map where the key is a parameter, and the value is the other parameter.
 */
function warnMutuallyExclusive(componentName, props, exclusiveMap) {
    if (true) {
        for (var propName in exclusiveMap) {
            if (props && props[propName] !== undefined) {
                var propInExclusiveMapValue = exclusiveMap[propName];
                if (propInExclusiveMapValue && props[propInExclusiveMapValue] !== undefined) {
                    Object(_warn__WEBPACK_IMPORTED_MODULE_0__["warn"])(componentName + " property '" + propName + "' is mutually exclusive with '" + exclusiveMap[propName] + "'. " +
                        "Use one or the other.");
                }
            }
        }
    }
}
//# sourceMappingURL=warnMutuallyExclusive.js.map

/***/ }),

/***/ "AtTn":
/*!*******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@fluentui/theme@1.7.1_c129be21209ec549b9ba61bf76d54bcc/node_modules/@fluentui/theme/lib/utilities/makeSemanticColors.js ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: makeSemanticColors, getSemanticColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSemanticColors", function() { return makeSemanticColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSemanticColors", function() { return getSemanticColors; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);

/** Generates all the semantic slot colors based on the theme so far
 * We'll use these as fallbacks for semantic slots that the passed in theme did not define.
 * The caller must still mix in the customized semantic slots at the end.
 */
function makeSemanticColors(p, e, s, isInverted, depComments) {
    if (depComments === void 0) { depComments = false; }
    var semanticColors = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ primaryButtonBorder: 'transparent', errorText: !isInverted ? '#a4262c' : '#F1707B', messageText: !isInverted ? '#323130' : '#F3F2F1', messageLink: !isInverted ? '#005A9E' : '#6CB8F6', messageLinkHovered: !isInverted ? '#004578' : '#82C7FF', infoIcon: !isInverted ? '#605e5c' : '#C8C6C4', errorIcon: !isInverted ? '#A80000' : '#F1707B', blockingIcon: !isInverted ? '#FDE7E9' : '#442726', warningIcon: !isInverted ? '#797775' : '#C8C6C4', severeWarningIcon: !isInverted ? '#D83B01' : '#FCE100', successIcon: !isInverted ? '#107C10' : '#92C353', infoBackground: !isInverted ? '#f3f2f1' : '#323130', errorBackground: !isInverted ? '#FDE7E9' : '#442726', blockingBackground: !isInverted ? '#FDE7E9' : '#442726', warningBackground: !isInverted ? '#FFF4CE' : '#433519', severeWarningBackground: !isInverted ? '#FED9CC' : '#4F2A0F', successBackground: !isInverted ? '#DFF6DD' : '#393D1B', 
        // deprecated
        warningHighlight: !isInverted ? '#ffb900' : '#fff100', successText: !isInverted ? '#107C10' : '#92c353' }, s);
    var fullSemanticColors = getSemanticColors(p, e, semanticColors, isInverted);
    return _fixDeprecatedSlots(fullSemanticColors, depComments);
}
/**
 * Map partial platte and effects to partial semantic colors.
 */
function getSemanticColors(p, e, s, isInverted, depComments) {
    if (depComments === void 0) { depComments = false; }
    var _a, _b, _c;
    var result = {};
    // map palette
    var _d = p || {}, white = _d.white, black = _d.black, themePrimary = _d.themePrimary, themeDark = _d.themeDark, themeDarker = _d.themeDarker, themeDarkAlt = _d.themeDarkAlt, themeLighter = _d.themeLighter, neutralLight = _d.neutralLight, neutralLighter = _d.neutralLighter, neutralDark = _d.neutralDark, neutralQuaternary = _d.neutralQuaternary, neutralQuaternaryAlt = _d.neutralQuaternaryAlt, neutralPrimary = _d.neutralPrimary, neutralSecondary = _d.neutralSecondary, neutralSecondaryAlt = _d.neutralSecondaryAlt, neutralTertiary = _d.neutralTertiary, neutralTertiaryAlt = _d.neutralTertiaryAlt, neutralLighterAlt = _d.neutralLighterAlt, accent = _d.accent;
    if (white) {
        result.bodyBackground = white;
        result.bodyFrameBackground = white;
        result.accentButtonText = white;
        result.buttonBackground = white;
        result.primaryButtonText = white;
        result.primaryButtonTextHovered = white;
        result.primaryButtonTextPressed = white;
        result.inputBackground = white;
        result.inputForegroundChecked = white;
        result.listBackground = white;
        result.menuBackground = white;
        result.cardStandoutBackground = white;
    }
    if (black) {
        result.bodyTextChecked = black;
        result.buttonTextCheckedHovered = black;
    }
    if (themePrimary) {
        result.link = themePrimary;
        result.primaryButtonBackground = themePrimary;
        result.inputBackgroundChecked = themePrimary;
        result.inputIcon = themePrimary;
        result.inputFocusBorderAlt = themePrimary;
        result.menuIcon = themePrimary;
        result.menuHeader = themePrimary;
        result.accentButtonBackground = themePrimary;
    }
    if (themeDark) {
        result.primaryButtonBackgroundPressed = themeDark;
        result.inputBackgroundCheckedHovered = themeDark;
        result.inputIconHovered = themeDark;
    }
    if (themeDarker) {
        result.linkHovered = themeDarker;
    }
    if (themeDarkAlt) {
        result.primaryButtonBackgroundHovered = themeDarkAlt;
    }
    if (themeLighter) {
        result.inputPlaceholderBackgroundChecked = themeLighter;
    }
    if (neutralLight) {
        result.bodyBackgroundChecked = neutralLight;
        result.bodyFrameDivider = neutralLight;
        result.bodyDivider = neutralLight;
        result.variantBorder = neutralLight;
        result.buttonBackgroundCheckedHovered = neutralLight;
        result.buttonBackgroundPressed = neutralLight;
        result.listItemBackgroundChecked = neutralLight;
        result.listHeaderBackgroundPressed = neutralLight;
        result.menuItemBackgroundPressed = neutralLight;
        // eslint-disable-next-line deprecation/deprecation
        result.menuItemBackgroundChecked = neutralLight;
    }
    if (neutralLighter) {
        result.bodyBackgroundHovered = neutralLighter;
        result.buttonBackgroundHovered = neutralLighter;
        result.buttonBackgroundDisabled = neutralLighter;
        result.buttonBorderDisabled = neutralLighter;
        result.primaryButtonBackgroundDisabled = neutralLighter;
        result.disabledBackground = neutralLighter;
        result.listItemBackgroundHovered = neutralLighter;
        result.listHeaderBackgroundHovered = neutralLighter;
        result.menuItemBackgroundHovered = neutralLighter;
    }
    if (neutralQuaternary) {
        result.primaryButtonTextDisabled = neutralQuaternary;
        result.disabledSubtext = neutralQuaternary;
    }
    if (neutralQuaternaryAlt) {
        result.listItemBackgroundCheckedHovered = neutralQuaternaryAlt;
    }
    if (neutralTertiary) {
        result.disabledBodyText = neutralTertiary;
        result.variantBorderHovered = ((_a = s) === null || _a === void 0 ? void 0 : _a.variantBorderHovered) || neutralTertiary;
        result.buttonTextDisabled = neutralTertiary;
        result.inputIconDisabled = neutralTertiary;
        result.disabledText = neutralTertiary;
    }
    if (neutralPrimary) {
        result.bodyText = neutralPrimary;
        result.actionLink = neutralPrimary;
        result.buttonText = neutralPrimary;
        result.inputBorderHovered = neutralPrimary;
        result.inputText = neutralPrimary;
        result.listText = neutralPrimary;
        result.menuItemText = neutralPrimary;
    }
    if (neutralLighterAlt) {
        result.bodyStandoutBackground = neutralLighterAlt;
        result.defaultStateBackground = neutralLighterAlt;
    }
    if (neutralDark) {
        result.actionLinkHovered = neutralDark;
        result.buttonTextHovered = neutralDark;
        result.buttonTextChecked = neutralDark;
        result.buttonTextPressed = neutralDark;
        result.inputTextHovered = neutralDark;
        result.menuItemTextHovered = neutralDark;
    }
    if (neutralSecondary) {
        result.bodySubtext = neutralSecondary;
        result.focusBorder = neutralSecondary;
        result.inputBorder = neutralSecondary;
        result.smallInputBorder = neutralSecondary;
        result.inputPlaceholderText = neutralSecondary;
    }
    if (neutralSecondaryAlt) {
        result.buttonBorder = neutralSecondaryAlt;
    }
    if (neutralTertiaryAlt) {
        result.disabledBodySubtext = neutralTertiaryAlt;
        result.disabledBorder = neutralTertiaryAlt;
        result.buttonBackgroundChecked = neutralTertiaryAlt;
        result.menuDivider = neutralTertiaryAlt;
    }
    if (accent) {
        result.accentButtonBackground = accent;
    }
    // map effects
    if ((_b = e) === null || _b === void 0 ? void 0 : _b.elevation4) {
        result.cardShadow = e.elevation4;
    }
    if (!isInverted && ((_c = e) === null || _c === void 0 ? void 0 : _c.elevation8)) {
        result.cardShadowHovered = e.elevation8;
    }
    else if (result.variantBorderHovered) {
        result.cardShadowHovered = '0 0 1px ' + result.variantBorderHovered;
    }
    result = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, result), s);
    return result;
}
function _fixDeprecatedSlots(s, depComments) {
    // Add @deprecated tag as comment if enabled
    var dep = '';
    if (depComments === true) {
        dep = ' /* @deprecated */';
    }
    /* eslint-disable deprecation/deprecation */
    s.listTextColor = s.listText + dep;
    s.menuItemBackgroundChecked += dep;
    s.warningHighlight += dep;
    s.warningText = s.messageText + dep;
    s.successText += dep;
    /* eslint-enable deprecation/deprecation */
    return s;
}
//# sourceMappingURL=makeSemanticColors.js.map

/***/ }),

/***/ "BES4":
/*!********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/initials.js ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: getInitials */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitials", function() { return getInitials; });
/**
 * Regular expression matching characters to ignore when calculating the initials.
 * The first part matches characters within parenthesis, including the parenthesis.
 * The second part matches special ASCII characters except space, plus some unicode special characters.
 */
var UNWANTED_CHARS_REGEX = /\([^)]*\)|[\0-\u001F\!-/:-@\[-`\{-\u00BF\u0250-\u036F\uD800-\uFFFF]/g;
/**
 * Regular expression matching phone numbers. Applied after chars matching UNWANTED_CHARS_REGEX have been removed
 * and number has been trimmed for whitespaces
 */
var PHONENUMBER_REGEX = /^\d+[\d\s]*(:?ext|x|)\s*\d+$/i;
/** Regular expression matching one or more spaces. */
var MULTIPLE_WHITESPACES_REGEX = /\s+/g;
/**
 * Regular expression matching languages for which we currently don't support initials.
 * Arabic:   Arabic, Arabic Supplement, Arabic Extended-A.
 * Korean:   Hangul Jamo, Hangul Compatibility Jamo, Hangul Jamo Extended-A, Hangul Syllables, Hangul Jamo Extended-B.
 * Japanese: Hiragana, Katakana.
 * CJK:      CJK Unified Ideographs Extension A, CJK Unified Ideographs, CJK Compatibility Ideographs,
 *             CJK Unified Ideographs Extension B
 */
// eslint-disable-next-line @fluentui/max-len
var UNSUPPORTED_TEXT_REGEX = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uAC00-\uD7AF\uD7B0-\uD7FF\u3040-\u309F\u30A0-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF]|[\uD840-\uD869][\uDC00-\uDED6]/;
function getInitialsLatin(displayName, isRtl) {
    var initials = '';
    var splits = displayName.split(' ');
    if (splits.length === 2) {
        initials += splits[0].charAt(0).toUpperCase();
        initials += splits[1].charAt(0).toUpperCase();
    }
    else if (splits.length === 3) {
        initials += splits[0].charAt(0).toUpperCase();
        initials += splits[2].charAt(0).toUpperCase();
    }
    else if (splits.length !== 0) {
        initials += splits[0].charAt(0).toUpperCase();
    }
    if (isRtl && initials.length > 1) {
        return initials.charAt(1) + initials.charAt(0);
    }
    return initials;
}
function cleanupDisplayName(displayName) {
    displayName = displayName.replace(UNWANTED_CHARS_REGEX, '');
    displayName = displayName.replace(MULTIPLE_WHITESPACES_REGEX, ' ');
    displayName = displayName.trim();
    return displayName;
}
/**
 * Get (up to 2 characters) initials based on display name of the persona.
 *
 * @public
 */
function getInitials(displayName, isRtl, allowPhoneInitials) {
    if (!displayName) {
        return '';
    }
    displayName = cleanupDisplayName(displayName);
    // For names containing CJK characters, and phone numbers, we don't display initials
    if (UNSUPPORTED_TEXT_REGEX.test(displayName) || (!allowPhoneInitials && PHONENUMBER_REGEX.test(displayName))) {
        return '';
    }
    return getInitialsLatin(displayName, isRtl);
}
//# sourceMappingURL=initials.js.map

/***/ }),

/***/ "BYBg":
/*!*******************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/memoize.js ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: setMemoizeWeakMap, resetMemoizations, memoize, memoizeFunction, createMemoizer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMemoizeWeakMap", function() { return setMemoizeWeakMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetMemoizations", function() { return resetMemoizations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memoize", function() { return memoize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memoizeFunction", function() { return memoizeFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMemoizer", function() { return createMemoizer; });
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/merge-styles */ "7Xpn");

var _initializedStylesheetResets = false;
var _resetCounter = 0;
var _emptyObject = { empty: true };
var _dictionary = {};
var _weakMap = typeof WeakMap === 'undefined' ? null : WeakMap;
/**
 *  Test utility for providing a custom weakmap.
 *
 * @internal
 * */
function setMemoizeWeakMap(weakMap) {
    _weakMap = weakMap;
}
/**
 * Reset memoizations.
 */
function resetMemoizations() {
    _resetCounter++;
}
/**
 * Memoize decorator to be used on class methods. WARNING: the `this` reference
 * will be inaccessible within a memoized method, given that a cached method's `this`
 * would not be instance-specific.
 *
 * @public
 */
function memoize(target, key, descriptor) {
    // We bind to "null" to prevent people from inadvertently pulling values from "this",
    // rather than passing them in as input values which can be memoized.
    var fn = memoizeFunction(descriptor.value && descriptor.value.bind(null));
    return {
        configurable: true,
        get: function () {
            return fn;
        },
    };
}
/**
 * Memoizes a function; when you pass in the same parameters multiple times, it returns a cached result.
 * Be careful when passing in objects, you need to pass in the same INSTANCE for caching to work. Otherwise
 * it will grow the cache unnecessarily. Also avoid using default values that evaluate functions; passing in
 * undefined for a value and relying on a default function will execute it the first time, but will not
 * re-evaluate subsequent times which may have been unexpected.
 *
 * By default, the cache will reset after 100 permutations, to avoid abuse cases where the function is
 * unintendedly called with unique objects. Without a reset, the cache could grow infinitely, so we safeguard
 * by resetting. To override this behavior, pass a value of 0 to the maxCacheSize parameter.
 *
 * @public
 * @param cb - The function to memoize.
 * @param maxCacheSize - Max results to cache. If the cache exceeds this value, it will reset on the next call.
 * @param ignoreNullOrUndefinedResult - Flag to decide whether to cache callback result if it is undefined/null.
 * If the flag is set to true, the callback result is recomputed every time till the callback result is
 * not undefined/null for the first time, and then the non-undefined/null version gets cached.
 * @returns A memoized version of the function.
 */
function memoizeFunction(cb, maxCacheSize, ignoreNullOrUndefinedResult) {
    if (maxCacheSize === void 0) { maxCacheSize = 100; }
    if (ignoreNullOrUndefinedResult === void 0) { ignoreNullOrUndefinedResult = false; }
    // Avoid breaking scenarios which don't have weak map.
    if (!_weakMap) {
        return cb;
    }
    if (!_initializedStylesheetResets) {
        var stylesheet = _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["Stylesheet"].getInstance();
        if (stylesheet && stylesheet.onReset) {
            _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["Stylesheet"].getInstance().onReset(resetMemoizations);
        }
        _initializedStylesheetResets = true;
    }
    var rootNode;
    var cacheSize = 0;
    var localResetCounter = _resetCounter;
    return function memoizedFunction() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var currentNode = rootNode;
        if (rootNode === undefined ||
            localResetCounter !== _resetCounter ||
            (maxCacheSize > 0 && cacheSize > maxCacheSize)) {
            rootNode = _createNode();
            cacheSize = 0;
            localResetCounter = _resetCounter;
        }
        currentNode = rootNode;
        // Traverse the tree until we find the match.
        for (var i = 0; i < args.length; i++) {
            var arg = _normalizeArg(args[i]);
            if (!currentNode.map.has(arg)) {
                currentNode.map.set(arg, _createNode());
            }
            currentNode = currentNode.map.get(arg);
        }
        if (!currentNode.hasOwnProperty('value')) {
            currentNode.value = cb.apply(void 0, args);
            cacheSize++;
        }
        if (ignoreNullOrUndefinedResult && (currentNode.value === null || currentNode.value === undefined)) {
            currentNode.value = cb.apply(void 0, args);
        }
        return currentNode.value;
    };
}
/**
 * Creates a memoizer for a single-value function, backed by a WeakMap.
 * With a WeakMap, the memoized values are only kept as long as the source objects,
 * ensuring that there is no memory leak.
 *
 * This function assumes that the input values passed to the wrapped function will be
 * `function` or `object` types. To memoize functions which accept other inputs, use
 * `memoizeFunction`, which memoizes against arbitrary inputs using a lookup cache.
 *
 * @public
 */
function createMemoizer(getValue) {
    if (!_weakMap) {
        // Without a `WeakMap` implementation, memoization is not possible.
        return getValue;
    }
    var cache = new _weakMap();
    function memoizedGetValue(input) {
        if (!input || (typeof input !== 'function' && typeof input !== 'object')) {
            // A WeakMap can only be used to test against reference values, i.e. 'function' and 'object'.
            // All other inputs cannot be memoized against in this manner.
            return getValue(input);
        }
        if (cache.has(input)) {
            return cache.get(input);
        }
        var value = getValue(input);
        cache.set(input, value);
        return value;
    }
    return memoizedGetValue;
}
function _normalizeArg(val) {
    if (!val) {
        return _emptyObject;
    }
    else if (typeof val === 'object' || typeof val === 'function') {
        return val;
    }
    else if (!_dictionary[val]) {
        _dictionary[val] = { val: val };
    }
    return _dictionary[val];
}
function _createNode() {
    return {
        map: _weakMap ? new _weakMap() : null,
    };
}
//# sourceMappingURL=memoize.js.map

/***/ }),

/***/ "Bda6":
/*!***************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/createMergedRef.js ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: createMergedRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMergedRef", function() { return createMergedRef; });
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ "+TOL");

/**
 * Set up a ref resolver function given internal state managed for the ref.
 * @param local Set
 */
var createResolver = function (local) { return function (newValue) {
    for (var _i = 0, _a = local.refs; _i < _a.length; _i++) {
        var ref = _a[_i];
        if (typeof ref === 'function') {
            ref(newValue);
        }
        else if (ref) {
            // work around the immutability of the React.Ref type
            ref.current = newValue;
        }
    }
}; };
/**
 * Helper to merge refs from within class components.
 */
var createMergedRef = function (value) {
    var local = {
        refs: [],
    };
    return function () {
        var newRefs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newRefs[_i] = arguments[_i];
        }
        if (!local.resolver || !Object(_array__WEBPACK_IMPORTED_MODULE_0__["arraysEqual"])(local.refs, newRefs)) {
            local.resolver = createResolver(local);
        }
        local.refs = newRefs;
        return local.resolver;
    };
};
//# sourceMappingURL=createMergedRef.js.map

/***/ }),

/***/ "Cp91":
/*!**********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/styling@7.16.19_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/styling/lib/classNames/FontClassNames.js ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: FontClassNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontClassNames", function() { return FontClassNames; });
/* harmony import */ var _utilities_buildClassMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/buildClassMap */ "ljbO");
/* harmony import */ var _styles_DefaultFontStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/DefaultFontStyles */ "sBgr");


/**
 * {@docCategory FontClassNames}
 */
var FontClassNames = Object(_utilities_buildClassMap__WEBPACK_IMPORTED_MODULE_0__["buildClassMap"])(_styles_DefaultFontStyles__WEBPACK_IMPORTED_MODULE_1__["DefaultFontStyles"]);
//# sourceMappingURL=FontClassNames.js.map

/***/ }),

/***/ "CtHL":
/*!***************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/css.js ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: css */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/**
 * Concatination helper, which can merge class names together. Skips over falsey values.
 *
 * @public
 */
function css() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var classes = [];
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        if (arg) {
            if (typeof arg === 'string') {
                classes.push(arg);
            }
            else if (arg.hasOwnProperty('toString') && typeof arg.toString === 'function') {
                classes.push(arg.toString());
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                for (var key in arg) {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    if (arg[key]) {
                        classes.push(key);
                    }
                }
            }
        }
    }
    return classes.join(' ');
}
//# sourceMappingURL=css.js.map

/***/ }),

/***/ "D+h3":
/*!********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/styling@7.16.19_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/styling/lib/MergeStyles.js ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: InjectionMode, Stylesheet, concatStyleSets, concatStyleSetsWithProps, fontFace, keyframes, mergeStyleSets, mergeStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/merge-styles */ "7Xpn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InjectionMode", function() { return _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["InjectionMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Stylesheet", function() { return _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["Stylesheet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concatStyleSets", function() { return _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["concatStyleSets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concatStyleSetsWithProps", function() { return _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["concatStyleSetsWithProps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontFace", function() { return _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["fontFace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeStyleSets", function() { return _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["mergeStyleSets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeStyles", function() { return _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["mergeStyles"]; });


//# sourceMappingURL=MergeStyles.js.map

/***/ }),

/***/ "DPR3":
/*!*******************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/merge-styles@7.19.1/node_modules/@uifabric/merge-styles/lib/Stylesheet.js ***!
  \*******************************************************************************************************************************************/
/*! exports provided: InjectionMode, Stylesheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InjectionMode", function() { return InjectionMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stylesheet", function() { return Stylesheet; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);

var InjectionMode = {
    /**
     * Avoids style injection, use getRules() to read the styles.
     */
    none: 0,
    /**
     * Inserts rules using the insertRule api.
     */
    insertNode: 1,
    /**
     * Appends rules using appendChild.
     */
    appendChild: 2,
};
var STYLESHEET_SETTING = '__stylesheet__';
/**
 * MSIE 11 doesn't cascade styles based on DOM ordering, but rather on the order that each style node
 * is created. As such, to maintain consistent priority, IE11 should reuse a single style node.
 */
var REUSE_STYLE_NODE = typeof navigator !== 'undefined' && /rv:11.0/.test(navigator.userAgent);
var _global = {};
// Grab window.
try {
    _global = window;
}
catch (_a) {
    /* leave as blank object */
}
var _stylesheet;
/**
 * Represents the state of styles registered in the page. Abstracts
 * the surface for adding styles to the stylesheet, exposes helpers
 * for reading the styles registered in server rendered scenarios.
 *
 * @public
 */
var Stylesheet = /** @class */ (function () {
    function Stylesheet(config) {
        this._rules = [];
        this._preservedRules = [];
        this._rulesToInsert = [];
        this._counter = 0;
        this._keyToClassName = {};
        this._onResetCallbacks = [];
        this._classNameToArgs = {};
        this._config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ injectionMode: InjectionMode.insertNode, defaultPrefix: 'css', namespace: undefined, cspSettings: undefined }, config);
        this._keyToClassName = this._config.classNameCache || {};
    }
    /**
     * Gets the singleton instance.
     */
    Stylesheet.getInstance = function () {
        var _a;
        _stylesheet = _global[STYLESHEET_SETTING];
        if (!_stylesheet || (_stylesheet._lastStyleElement && _stylesheet._lastStyleElement.ownerDocument !== document)) {
            var fabricConfig = ((_a = _global) === null || _a === void 0 ? void 0 : _a.FabricConfig) || {};
            _stylesheet = _global[STYLESHEET_SETTING] = new Stylesheet(fabricConfig.mergeStyles);
        }
        return _stylesheet;
    };
    /**
     * Configures the stylesheet.
     */
    Stylesheet.prototype.setConfig = function (config) {
        this._config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._config), config);
    };
    /**
     * Configures a reset callback.
     *
     * @param callback - A callback which will be called when the Stylesheet is reset.
     */
    Stylesheet.prototype.onReset = function (callback) {
        this._onResetCallbacks.push(callback);
    };
    /**
     * Generates a unique classname.
     *
     * @param displayName - Optional value to use as a prefix.
     */
    Stylesheet.prototype.getClassName = function (displayName) {
        var namespace = this._config.namespace;
        var prefix = displayName || this._config.defaultPrefix;
        return "" + (namespace ? namespace + '-' : '') + prefix + "-" + this._counter++;
    };
    /**
     * Used internally to cache information about a class which was
     * registered with the stylesheet.
     */
    Stylesheet.prototype.cacheClassName = function (className, key, args, rules) {
        this._keyToClassName[key] = className;
        this._classNameToArgs[className] = {
            args: args,
            rules: rules,
        };
    };
    /**
     * Gets the appropriate classname given a key which was previously
     * registered using cacheClassName.
     */
    Stylesheet.prototype.classNameFromKey = function (key) {
        return this._keyToClassName[key];
    };
    /**
     * Gets all classnames cache with the stylesheet.
     */
    Stylesheet.prototype.getClassNameCache = function () {
        return this._keyToClassName;
    };
    /**
     * Gets the arguments associated with a given classname which was
     * previously registered using cacheClassName.
     */
    Stylesheet.prototype.argsFromClassName = function (className) {
        var entry = this._classNameToArgs[className];
        return entry && entry.args;
    };
    /**
     * Gets the arguments associated with a given classname which was
     * previously registered using cacheClassName.
     */
    Stylesheet.prototype.insertedRulesFromClassName = function (className) {
        var entry = this._classNameToArgs[className];
        return entry && entry.rules;
    };
    /**
     * Inserts a css rule into the stylesheet.
     * @param preserve - Preserves the rule beyond a reset boundary.
     */
    Stylesheet.prototype.insertRule = function (rule, preserve) {
        var injectionMode = this._config.injectionMode;
        var element = injectionMode !== InjectionMode.none ? this._getStyleElement() : undefined;
        if (preserve) {
            this._preservedRules.push(rule);
        }
        if (element) {
            switch (this._config.injectionMode) {
                case InjectionMode.insertNode:
                    var sheet = element.sheet;
                    try {
                        sheet.insertRule(rule, sheet.cssRules.length);
                    }
                    catch (e) {
                        // The browser will throw exceptions on unsupported rules (such as a moz prefix in webkit.)
                        // We need to swallow the exceptions for this scenario, otherwise we'd need to filter
                        // which could be slower and bulkier.
                    }
                    break;
                case InjectionMode.appendChild:
                    element.appendChild(document.createTextNode(rule));
                    break;
            }
        }
        else {
            this._rules.push(rule);
        }
        if (this._config.onInsertRule) {
            this._config.onInsertRule(rule);
        }
    };
    /**
     * Gets all rules registered with the stylesheet; only valid when
     * using InsertionMode.none.
     */
    Stylesheet.prototype.getRules = function (includePreservedRules) {
        return ((includePreservedRules ? this._preservedRules.join('') : '') + this._rules.join('') + this._rulesToInsert.join(''));
    };
    /**
     * Resets the internal state of the stylesheet. Only used in server
     * rendered scenarios where we're using InsertionMode.none.
     */
    Stylesheet.prototype.reset = function () {
        this._rules = [];
        this._rulesToInsert = [];
        this._counter = 0;
        this._classNameToArgs = {};
        this._keyToClassName = {};
        this._onResetCallbacks.forEach(function (callback) { return callback(); });
    };
    // Forces the regeneration of incoming styles without totally resetting the stylesheet.
    Stylesheet.prototype.resetKeys = function () {
        this._keyToClassName = {};
    };
    Stylesheet.prototype._getStyleElement = function () {
        var _this = this;
        if (!this._styleElement && typeof document !== 'undefined') {
            this._styleElement = this._createStyleElement();
            if (!REUSE_STYLE_NODE) {
                // Reset the style element on the next frame.
                window.requestAnimationFrame(function () {
                    _this._styleElement = undefined;
                });
            }
        }
        return this._styleElement;
    };
    Stylesheet.prototype._createStyleElement = function () {
        var head = document.head;
        var styleElement = document.createElement('style');
        styleElement.setAttribute('data-merge-styles', 'true');
        var cspSettings = this._config.cspSettings;
        if (cspSettings) {
            if (cspSettings.nonce) {
                styleElement.setAttribute('nonce', cspSettings.nonce);
            }
        }
        if (this._lastStyleElement) {
            // If the `nextElementSibling` is null, then the insertBefore will act as a regular append.
            // https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore#Syntax
            head.insertBefore(styleElement, this._lastStyleElement.nextElementSibling);
        }
        else {
            var placeholderStyleTag = this._findPlaceholderStyleTag();
            if (placeholderStyleTag) {
                head.insertBefore(styleElement, placeholderStyleTag.nextElementSibling);
            }
            else {
                head.insertBefore(styleElement, head.childNodes[0]);
            }
        }
        this._lastStyleElement = styleElement;
        return styleElement;
    };
    Stylesheet.prototype._findPlaceholderStyleTag = function () {
        var head = document.head;
        if (head) {
            return head.querySelector('style[data-merge-styles]');
        }
        return null;
    };
    return Stylesheet;
}());

//# sourceMappingURL=Stylesheet.js.map

/***/ }),

/***/ "Doda":
/*!***************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@fluentui/dom-utilities@1.1.1/node_modules/@fluentui/dom-utilities/lib/index.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: elementContains, elementContainsAttribute, findElementRecursive, getChildren, getParent, getVirtualParent, isVirtualElement, portalContainsElement, DATA_PORTAL_ATTRIBUTE, setPortalAttribute, setVirtualParent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _elementContains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementContains */ "j9DQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elementContains", function() { return _elementContains__WEBPACK_IMPORTED_MODULE_0__["elementContains"]; });

/* harmony import */ var _elementContainsAttribute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elementContainsAttribute */ "Lf5Z");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elementContainsAttribute", function() { return _elementContainsAttribute__WEBPACK_IMPORTED_MODULE_1__["elementContainsAttribute"]; });

/* harmony import */ var _findElementRecursive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./findElementRecursive */ "5XON");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findElementRecursive", function() { return _findElementRecursive__WEBPACK_IMPORTED_MODULE_2__["findElementRecursive"]; });

/* harmony import */ var _getChildren__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getChildren */ "oxeo");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getChildren", function() { return _getChildren__WEBPACK_IMPORTED_MODULE_3__["getChildren"]; });

/* harmony import */ var _getParent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getParent */ "j9TH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getParent", function() { return _getParent__WEBPACK_IMPORTED_MODULE_4__["getParent"]; });

/* harmony import */ var _getVirtualParent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getVirtualParent */ "JEWn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getVirtualParent", function() { return _getVirtualParent__WEBPACK_IMPORTED_MODULE_5__["getVirtualParent"]; });

/* harmony import */ var _isVirtualElement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isVirtualElement */ "aGpG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isVirtualElement", function() { return _isVirtualElement__WEBPACK_IMPORTED_MODULE_6__["isVirtualElement"]; });

/* harmony import */ var _portalContainsElement__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./portalContainsElement */ "KJs4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "portalContainsElement", function() { return _portalContainsElement__WEBPACK_IMPORTED_MODULE_7__["portalContainsElement"]; });

/* harmony import */ var _setPortalAttribute__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./setPortalAttribute */ "U/F6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DATA_PORTAL_ATTRIBUTE", function() { return _setPortalAttribute__WEBPACK_IMPORTED_MODULE_8__["DATA_PORTAL_ATTRIBUTE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setPortalAttribute", function() { return _setPortalAttribute__WEBPACK_IMPORTED_MODULE_8__["setPortalAttribute"]; });

/* harmony import */ var _setVirtualParent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./setVirtualParent */ "LdLG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setVirtualParent", function() { return _setVirtualParent__WEBPACK_IMPORTED_MODULE_9__["setVirtualParent"]; });











//# sourceMappingURL=index.js.map

/***/ }),

/***/ "DyX/":
/*!******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/setFocusVisibility.js ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: IsFocusVisibleClassName, IsFocusHiddenClassName, setFocusVisibility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsFocusVisibleClassName", function() { return IsFocusVisibleClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsFocusHiddenClassName", function() { return IsFocusHiddenClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFocusVisibility", function() { return setFocusVisibility; });
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/getWindow */ "jfaJ");

var IsFocusVisibleClassName = 'ms-Fabric--isFocusVisible';
var IsFocusHiddenClassName = 'ms-Fabric--isFocusHidden';
/**
 * Sets the visibility of focus styling.
 *
 * By default, focus styles (the box surrounding a focused Button, for example) only show up when navigational
 * keypresses occur (through Tab, arrows, PgUp/PgDn, Home and End), and are hidden when mouse interactions occur.
 * This API provides an imperative way to turn them on/off.
 *
 * A use case might be when you have a keypress like ctrl-f6 navigate to a particular region on the page,
 * and want focus to show up.
 *
 * @param enabled - whether to remove or add focus
 * @param target - optional target
 */
function setFocusVisibility(enabled, target) {
    var win = target ? Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__["getWindow"])(target) : Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
    if (win) {
        var classList = win.document.body.classList;
        classList.add(enabled ? IsFocusVisibleClassName : IsFocusHiddenClassName);
        classList.remove(enabled ? IsFocusHiddenClassName : IsFocusVisibleClassName);
    }
}
//# sourceMappingURL=setFocusVisibility.js.map

/***/ }),

/***/ "Eb+H":
/*!****************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/styling@7.16.19_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/styling/lib/styles/CommonStyles.js ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: HighContrastSelector, HighContrastSelectorWhite, HighContrastSelectorBlack, EdgeChromiumHighContrastSelector, ScreenWidthMinSmall, ScreenWidthMinMedium, ScreenWidthMinLarge, ScreenWidthMinXLarge, ScreenWidthMinXXLarge, ScreenWidthMinXXXLarge, ScreenWidthMaxSmall, ScreenWidthMaxMedium, ScreenWidthMaxLarge, ScreenWidthMaxXLarge, ScreenWidthMaxXXLarge, ScreenWidthMinUhfMobile, getScreenSelector, getEdgeChromiumNoHighContrastAdjustSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighContrastSelector", function() { return HighContrastSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighContrastSelectorWhite", function() { return HighContrastSelectorWhite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighContrastSelectorBlack", function() { return HighContrastSelectorBlack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdgeChromiumHighContrastSelector", function() { return EdgeChromiumHighContrastSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinSmall", function() { return ScreenWidthMinSmall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinMedium", function() { return ScreenWidthMinMedium; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinLarge", function() { return ScreenWidthMinLarge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinXLarge", function() { return ScreenWidthMinXLarge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinXXLarge", function() { return ScreenWidthMinXXLarge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinXXXLarge", function() { return ScreenWidthMinXXXLarge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxSmall", function() { return ScreenWidthMaxSmall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxMedium", function() { return ScreenWidthMaxMedium; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxLarge", function() { return ScreenWidthMaxLarge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxXLarge", function() { return ScreenWidthMaxXLarge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxXXLarge", function() { return ScreenWidthMaxXXLarge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinUhfMobile", function() { return ScreenWidthMinUhfMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScreenSelector", function() { return getScreenSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEdgeChromiumNoHighContrastAdjustSelector", function() { return getEdgeChromiumNoHighContrastAdjustSelector; });
var HighContrastSelector = '@media screen and (-ms-high-contrast: active)';
var HighContrastSelectorWhite = '@media screen and (-ms-high-contrast: black-on-white)';
var HighContrastSelectorBlack = '@media screen and (-ms-high-contrast: white-on-black)';
var EdgeChromiumHighContrastSelector = '@media screen and (forced-colors: active)';
var ScreenWidthMinSmall = 320;
var ScreenWidthMinMedium = 480;
var ScreenWidthMinLarge = 640;
var ScreenWidthMinXLarge = 1024;
var ScreenWidthMinXXLarge = 1366;
var ScreenWidthMinXXXLarge = 1920;
var ScreenWidthMaxSmall = ScreenWidthMinMedium - 1;
var ScreenWidthMaxMedium = ScreenWidthMinLarge - 1;
var ScreenWidthMaxLarge = ScreenWidthMinXLarge - 1;
var ScreenWidthMaxXLarge = ScreenWidthMinXXLarge - 1;
var ScreenWidthMaxXXLarge = ScreenWidthMinXXXLarge - 1;
var ScreenWidthMinUhfMobile = 768;
function getScreenSelector(min, max) {
    return "@media only screen and (min-width: " + min + "px) and (max-width: " + max + "px)";
}
/**
 * The style which turns off high contrast adjustment in (only) Edge Chromium browser.
 */
function getEdgeChromiumNoHighContrastAdjustSelector() {
    var _a;
    return _a = {},
        _a[EdgeChromiumHighContrastSelector] = {
            forcedColorAdjust: 'none',
        },
        _a;
}
//# sourceMappingURL=CommonStyles.js.map

/***/ }),

/***/ "EypS":
/*!*********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/getNativeElementProps.js ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: getNativeElementProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNativeElementProps", function() { return getNativeElementProps; });
/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./properties */ "WYFb");

var nativeElementMap = {
    label: _properties__WEBPACK_IMPORTED_MODULE_0__["labelProperties"],
    audio: _properties__WEBPACK_IMPORTED_MODULE_0__["audioProperties"],
    video: _properties__WEBPACK_IMPORTED_MODULE_0__["videoProperties"],
    ol: _properties__WEBPACK_IMPORTED_MODULE_0__["olProperties"],
    li: _properties__WEBPACK_IMPORTED_MODULE_0__["liProperties"],
    a: _properties__WEBPACK_IMPORTED_MODULE_0__["anchorProperties"],
    button: _properties__WEBPACK_IMPORTED_MODULE_0__["buttonProperties"],
    input: _properties__WEBPACK_IMPORTED_MODULE_0__["inputProperties"],
    textarea: _properties__WEBPACK_IMPORTED_MODULE_0__["textAreaProperties"],
    select: _properties__WEBPACK_IMPORTED_MODULE_0__["selectProperties"],
    option: _properties__WEBPACK_IMPORTED_MODULE_0__["optionProperties"],
    table: _properties__WEBPACK_IMPORTED_MODULE_0__["tableProperties"],
    tr: _properties__WEBPACK_IMPORTED_MODULE_0__["trProperties"],
    th: _properties__WEBPACK_IMPORTED_MODULE_0__["thProperties"],
    td: _properties__WEBPACK_IMPORTED_MODULE_0__["tdProperties"],
    colGroup: _properties__WEBPACK_IMPORTED_MODULE_0__["colGroupProperties"],
    col: _properties__WEBPACK_IMPORTED_MODULE_0__["colProperties"],
    form: _properties__WEBPACK_IMPORTED_MODULE_0__["formProperties"],
    iframe: _properties__WEBPACK_IMPORTED_MODULE_0__["iframeProperties"],
    img: _properties__WEBPACK_IMPORTED_MODULE_0__["imgProperties"],
};
/**
 * Given an element tagname and user props, filters the props to only allowed props for the given
 * element type.
 * @param tagName - Tag name (e.g. "div")
 * @param props - Props object
 * @param excludedPropNames - List of props to disallow
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getNativeElementProps(tagName, props, excludedPropNames) {
    var allowedPropNames = (tagName && nativeElementMap[tagName]) || _properties__WEBPACK_IMPORTED_MODULE_0__["htmlElementProperties"];
    return Object(_properties__WEBPACK_IMPORTED_MODULE_0__["getNativeProps"])(props, allowedPropNames, excludedPropNames);
}
//# sourceMappingURL=getNativeElementProps.js.map

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

/***/ "FIGI":
/*!************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/dom/findElementRecursive.js ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: findElementRecursive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fluentui_dom_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/dom-utilities */ "Doda");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findElementRecursive", function() { return _fluentui_dom_utilities__WEBPACK_IMPORTED_MODULE_0__["findElementRecursive"]; });


//# sourceMappingURL=findElementRecursive.js.map

/***/ }),

/***/ "FaL/":
/*!************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/styling@7.16.19_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/styling/lib/utilities/icons.js ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: registerIcons, unregisterIcons, registerIconAlias, getIcon, setIconOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerIcons", function() { return registerIcons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregisterIcons", function() { return unregisterIcons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerIconAlias", function() { return registerIconAlias; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIcon", function() { return getIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setIconOptions", function() { return setIconOptions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uifabric/utilities */ "P2cQ");
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uifabric/merge-styles */ "7Xpn");



var ICON_SETTING_NAME = 'icons';
var _iconSettings = _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["GlobalSettings"].getValue(ICON_SETTING_NAME, {
    __options: {
        disableWarnings: false,
        warnOnMissingIcons: true,
    },
    __remapped: {},
});
// Reset icon registration on stylesheet resets.
var stylesheet = _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_2__["Stylesheet"].getInstance();
if (stylesheet && stylesheet.onReset) {
    stylesheet.onReset(function () {
        for (var name_1 in _iconSettings) {
            if (_iconSettings.hasOwnProperty(name_1) && !!_iconSettings[name_1].subset) {
                _iconSettings[name_1].subset.className = undefined;
            }
        }
    });
}
/**
 * Normalizes an icon name for consistent mapping.
 * Current implementation is to convert the icon name to lower case.
 *
 * @param name - Icon name to normalize.
 * @returns {string} Normalized icon name to use for indexing and mapping.
 */
var normalizeIconName = function (name) { return name.toLowerCase(); };
/**
 * Registers a given subset of icons.
 *
 * @param iconSubset - the icon subset definition.
 */
function registerIcons(iconSubset, options) {
    var subset = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, iconSubset), { isRegistered: false, className: undefined });
    var icons = iconSubset.icons;
    // Grab options, optionally mix user provided ones on top.
    options = options ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _iconSettings.__options), options) : _iconSettings.__options;
    for (var iconName in icons) {
        if (icons.hasOwnProperty(iconName)) {
            var code = icons[iconName];
            var normalizedIconName = normalizeIconName(iconName);
            if (_iconSettings[normalizedIconName]) {
                _warnDuplicateIcon(iconName);
            }
            else {
                _iconSettings[normalizedIconName] = {
                    code: code,
                    subset: subset,
                };
            }
        }
    }
}
/**
 * Unregisters icons by name.
 *
 * @param iconNames - List of icons to unregister.
 */
function unregisterIcons(iconNames) {
    var options = _iconSettings.__options;
    var _loop_1 = function (iconName) {
        var normalizedIconName = normalizeIconName(iconName);
        if (_iconSettings[normalizedIconName]) {
            delete _iconSettings[normalizedIconName];
        }
        else {
            // Warn that we are trying to delete an icon that doesn't exist
            if (!options.disableWarnings) {
                Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["warn"])("The icon \"" + iconName + "\" tried to unregister but was not registered.");
            }
        }
        // Delete any aliases for this iconName
        if (_iconSettings.__remapped[normalizedIconName]) {
            delete _iconSettings.__remapped[normalizedIconName];
        }
        // Delete any items that were an alias for this iconName
        Object.keys(_iconSettings.__remapped).forEach(function (key) {
            if (_iconSettings.__remapped[key] === normalizedIconName) {
                delete _iconSettings.__remapped[key];
            }
        });
    };
    for (var _i = 0, iconNames_1 = iconNames; _i < iconNames_1.length; _i++) {
        var iconName = iconNames_1[_i];
        _loop_1(iconName);
    }
}
/**
 * Remaps one icon name to another.
 */
function registerIconAlias(iconName, mappedToName) {
    _iconSettings.__remapped[normalizeIconName(iconName)] = normalizeIconName(mappedToName);
}
/**
 * Gets an icon definition. If an icon is requested but the subset has yet to be registered,
 * it will get registered immediately.
 *
 * @public
 * @param name - Name of icon.
 */
function getIcon(name) {
    var icon = undefined;
    var options = _iconSettings.__options;
    name = name ? normalizeIconName(name) : '';
    name = _iconSettings.__remapped[name] || name;
    if (name) {
        icon = _iconSettings[name];
        if (icon) {
            var subset = icon.subset;
            if (subset && subset.fontFace) {
                if (!subset.isRegistered) {
                    Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_2__["fontFace"])(subset.fontFace);
                    subset.isRegistered = true;
                }
                if (!subset.className) {
                    subset.className = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_2__["mergeStyles"])(subset.style, {
                        fontFamily: subset.fontFace.fontFamily,
                        fontWeight: subset.fontFace.fontWeight || 'normal',
                        fontStyle: subset.fontFace.fontStyle || 'normal',
                    });
                }
            }
        }
        else {
            // eslint-disable-next-line deprecation/deprecation
            if (!options.disableWarnings && options.warnOnMissingIcons) {
                Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["warn"])("The icon \"" + name + "\" was used but not registered. See https://github.com/microsoft/fluentui/wiki/Using-icons for more information.");
            }
        }
    }
    return icon;
}
/**
 * Sets the icon options.
 *
 * @public
 */
function setIconOptions(options) {
    _iconSettings.__options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _iconSettings.__options), options);
}
var _missingIcons = [];
var _missingIconsTimer = undefined;
function _warnDuplicateIcon(iconName) {
    var options = _iconSettings.__options;
    var warningDelay = 2000;
    var maxIconsInMessage = 10;
    if (!options.disableWarnings) {
        _missingIcons.push(iconName);
        if (_missingIconsTimer === undefined) {
            _missingIconsTimer = setTimeout(function () {
                Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["warn"])("Some icons were re-registered. Applications should only call registerIcons for any given " +
                    "icon once. Redefining what an icon is may have unintended consequences. Duplicates " +
                    "include: \n" +
                    _missingIcons.slice(0, maxIconsInMessage).join(', ') +
                    (_missingIcons.length > maxIconsInMessage ? " (+ " + (_missingIcons.length - maxIconsInMessage) + " more)" : ''));
                _missingIconsTimer = undefined;
                _missingIcons = [];
            }, warningDelay);
        }
    }
}
//# sourceMappingURL=icons.js.map

/***/ }),

/***/ "Fx0A":
/*!*********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/warn/warnDeprecations.js ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: warnDeprecations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warnDeprecations", function() { return warnDeprecations; });
/* harmony import */ var _warn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warn */ "6dJl");

/**
 * Warns when a deprecated props are being used.
 *
 * @public
 * @param componentName - The name of the component being used.
 * @param props - The props passed into the component.
 * @param deprecationMap - The map of deprecations, where key is the prop name and the value is
 * either null or a replacement prop name.
 */
function warnDeprecations(componentName, props, deprecationMap) {
    if (true) {
        for (var propName in deprecationMap) {
            if (props && propName in props) {
                var deprecationMessage = componentName + " property '" + propName + "' was used but has been deprecated.";
                var replacementPropName = deprecationMap[propName];
                if (replacementPropName) {
                    deprecationMessage += " Use '" + replacementPropName + "' instead.";
                }
                Object(_warn__WEBPACK_IMPORTED_MODULE_0__["warn"])(deprecationMessage);
            }
        }
    }
}
//# sourceMappingURL=warnDeprecations.js.map

/***/ }),

/***/ "Golq":
/*!**************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/dom/raiseClick.js ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: raiseClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raiseClick", function() { return raiseClick; });
/** Raises a click event. */
function raiseClick(target) {
    var event = createNewEvent('MouseEvents');
    event.initEvent('click', true, true);
    target.dispatchEvent(event);
}
function createNewEvent(eventName) {
    var event;
    if (typeof Event === 'function') {
        // Chrome, Opera, Firefox
        event = new Event(eventName);
    }
    else {
        // IE
        event = document.createEvent('Event');
        event.initEvent(eventName, true, true);
    }
    return event;
}
//# sourceMappingURL=raiseClick.js.map

/***/ }),

/***/ "H7TR":
/*!************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/merge-styles@7.19.1/node_modules/@uifabric/merge-styles/lib/concatStyleSets.js ***!
  \************************************************************************************************************************************************/
/*! exports provided: concatStyleSets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concatStyleSets", function() { return concatStyleSets; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Combine a set of styles together (but does not register css classes).
 * @param styleSets - One or more stylesets to be merged (each param can also be falsy).
 */
function concatStyleSets() {
    var styleSets = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        styleSets[_i] = arguments[_i];
    }
    if (styleSets && styleSets.length === 1 && styleSets[0] && !styleSets[0].subComponentStyles) {
        return styleSets[0];
    }
    var mergedSet = {};
    // We process sub component styles in two phases. First we collect them, then we combine them into 1 style function.
    var workingSubcomponentStyles = {};
    for (var _a = 0, styleSets_1 = styleSets; _a < styleSets_1.length; _a++) {
        var currentSet = styleSets_1[_a];
        if (currentSet) {
            for (var prop in currentSet) {
                if (currentSet.hasOwnProperty(prop)) {
                    if (prop === 'subComponentStyles' && currentSet.subComponentStyles !== undefined) {
                        // subcomponent styles - style functions or objects
                        var currentComponentStyles = currentSet.subComponentStyles;
                        for (var subCompProp in currentComponentStyles) {
                            if (currentComponentStyles.hasOwnProperty(subCompProp)) {
                                if (workingSubcomponentStyles.hasOwnProperty(subCompProp)) {
                                    workingSubcomponentStyles[subCompProp].push(currentComponentStyles[subCompProp]);
                                }
                                else {
                                    workingSubcomponentStyles[subCompProp] = [currentComponentStyles[subCompProp]];
                                }
                            }
                        }
                        continue;
                    }
                    // the as any casts below is a workaround for ts 2.8.
                    // todo: remove cast to any in ts 2.9.
                    var mergedValue = mergedSet[prop];
                    var currentValue = currentSet[prop];
                    if (mergedValue === undefined) {
                        mergedSet[prop] = currentValue;
                    }
                    else {
                        mergedSet[prop] = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])((Array.isArray(mergedValue) ? mergedValue : [mergedValue]), (Array.isArray(currentValue) ? currentValue : [currentValue]));
                    }
                }
            }
        }
    }
    if (Object.keys(workingSubcomponentStyles).length > 0) {
        mergedSet.subComponentStyles = {};
        var mergedSubStyles = mergedSet.subComponentStyles;
        var _loop_1 = function (subCompProp) {
            if (workingSubcomponentStyles.hasOwnProperty(subCompProp)) {
                var workingSet_1 = workingSubcomponentStyles[subCompProp];
                mergedSubStyles[subCompProp] = function (styleProps) {
                    return concatStyleSets.apply(void 0, workingSet_1.map(function (styleFunctionOrObject) {
                        return typeof styleFunctionOrObject === 'function' ? styleFunctionOrObject(styleProps) : styleFunctionOrObject;
                    }));
                };
            }
        };
        // now we process the subcomponent styles if there are any
        for (var subCompProp in workingSubcomponentStyles) {
            _loop_1(subCompProp);
        }
    }
    return mergedSet;
}
//# sourceMappingURL=concatStyleSets.js.map

/***/ }),

/***/ "HYqL":
/*!********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/getPropsWithDefaults.js ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: getPropsWithDefaults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPropsWithDefaults", function() { return getPropsWithDefaults; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Function to apply default values to a component props object. This function is intended for function components,
 * to maintain parity with the `defaultProps` feature of class components. It accounts for properties that are
 * specified, but undefined.
 * @param defaultProps- An object with default values for various properties
 * @param propsWithoutDefaults- The props object passed into the component
 */
function getPropsWithDefaults(defaultProps, propsWithoutDefaults) {
    var props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, propsWithoutDefaults);
    for (var _i = 0, _a = Object.keys(defaultProps); _i < _a.length; _i++) {
        var key = _a[_i];
        if (props[key] === undefined) {
            props[key] = defaultProps[key];
        }
    }
    return props;
}
//# sourceMappingURL=getPropsWithDefaults.js.map

/***/ }),

/***/ "Hc29":
/*!***************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@fluentui/theme@1.7.1_c129be21209ec549b9ba61bf76d54bcc/node_modules/@fluentui/theme/lib/colors/index.js ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: CommunicationColors, NeutralColors, SharedColors, DefaultPalette */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FluentColors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FluentColors */ "xm5H");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommunicationColors", function() { return _FluentColors__WEBPACK_IMPORTED_MODULE_0__["CommunicationColors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NeutralColors", function() { return _FluentColors__WEBPACK_IMPORTED_MODULE_0__["NeutralColors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedColors", function() { return _FluentColors__WEBPACK_IMPORTED_MODULE_0__["SharedColors"]; });

/* harmony import */ var _DefaultPalette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DefaultPalette */ "eA0L");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultPalette", function() { return _DefaultPalette__WEBPACK_IMPORTED_MODULE_1__["DefaultPalette"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "Hijz":
/*!***********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@fluentui/theme@1.7.1_c129be21209ec549b9ba61bf76d54bcc/node_modules/@fluentui/theme/lib/effects/FluentDepths.js ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: Depths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Depths", function() { return Depths; });
var Depths;
(function (Depths) {
    Depths.depth0 = '0 0 0 0 transparent';
    Depths.depth4 = '0 1.6px 3.6px 0 rgba(0, 0, 0, 0.132), 0 0.3px 0.9px 0 rgba(0, 0, 0, 0.108)';
    Depths.depth8 = '0 3.2px 7.2px 0 rgba(0, 0, 0, 0.132), 0 0.6px 1.8px 0 rgba(0, 0, 0, 0.108)';
    Depths.depth16 = '0 6.4px 14.4px 0 rgba(0, 0, 0, 0.132), 0 1.2px 3.6px 0 rgba(0, 0, 0, 0.108)';
    Depths.depth64 = '0 25.6px 57.6px 0 rgba(0, 0, 0, 0.22), 0 4.8px 14.4px 0 rgba(0, 0, 0, 0.18)';
})(Depths || (Depths = {}));
//# sourceMappingURL=FluentDepths.js.map

/***/ }),

/***/ "ImWu":
/*!********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/keyboard.js ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: isDirectionalKeyCode, addDirectionalKeyCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDirectionalKeyCode", function() { return isDirectionalKeyCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDirectionalKeyCode", function() { return addDirectionalKeyCode; });
/* harmony import */ var _KeyCodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KeyCodes */ "uze5");
var _a;

var DirectionalKeyCodes = (_a = {},
    _a[_KeyCodes__WEBPACK_IMPORTED_MODULE_0__["KeyCodes"].up] = 1,
    _a[_KeyCodes__WEBPACK_IMPORTED_MODULE_0__["KeyCodes"].down] = 1,
    _a[_KeyCodes__WEBPACK_IMPORTED_MODULE_0__["KeyCodes"].left] = 1,
    _a[_KeyCodes__WEBPACK_IMPORTED_MODULE_0__["KeyCodes"].right] = 1,
    _a[_KeyCodes__WEBPACK_IMPORTED_MODULE_0__["KeyCodes"].home] = 1,
    _a[_KeyCodes__WEBPACK_IMPORTED_MODULE_0__["KeyCodes"].end] = 1,
    _a[_KeyCodes__WEBPACK_IMPORTED_MODULE_0__["KeyCodes"].tab] = 1,
    _a[_KeyCodes__WEBPACK_IMPORTED_MODULE_0__["KeyCodes"].pageUp] = 1,
    _a[_KeyCodes__WEBPACK_IMPORTED_MODULE_0__["KeyCodes"].pageDown] = 1,
    _a);
/**
 * Returns true if the keycode is a directional keyboard key.
 */
function isDirectionalKeyCode(which) {
    return !!DirectionalKeyCodes[which];
}
/**
 * Adds a keycode to the list of keys that, when pressed, should cause the focus outlines to be visible.
 * This can be used to add global shortcut keys that directionally move from section to section within
 * an app or between focus trap zones.
 */
function addDirectionalKeyCode(which) {
    DirectionalKeyCodes[which] = 1;
}
//# sourceMappingURL=keyboard.js.map

/***/ }),

/***/ "Is1m":
/*!****************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/styling@7.16.19_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/styling/lib/version.js ***!
  \****************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uifabric_set_version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/set-version */ "Eyzw");
// Do not modify this file; it is generated as part of publish.
// The checked in version is a placeholder only and will not be updated.

Object(_uifabric_set_version__WEBPACK_IMPORTED_MODULE_0__["setVersion"])('@uifabric/styling', '7.16.18');
//# sourceMappingURL=version.js.map

/***/ }),

/***/ "JCKL":
/*!******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/styling@7.16.19_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/styling/lib/styles/DefaultPalette.js ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: DefaultPalette */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fluentui_theme_lib_colors_DefaultPalette__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/theme/lib/colors/DefaultPalette */ "eA0L");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultPalette", function() { return _fluentui_theme_lib_colors_DefaultPalette__WEBPACK_IMPORTED_MODULE_0__["DefaultPalette"]; });


//# sourceMappingURL=DefaultPalette.js.map

/***/ }),

/***/ "JEWn":
/*!**************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@fluentui/dom-utilities@1.1.1/node_modules/@fluentui/dom-utilities/lib/getVirtualParent.js ***!
  \**************************************************************************************************************************************************/
/*! exports provided: getVirtualParent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVirtualParent", function() { return getVirtualParent; });
/* harmony import */ var _isVirtualElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isVirtualElement */ "aGpG");

/**
 * Gets the virtual parent given the child element, if it exists.
 *
 * @public
 */
function getVirtualParent(child) {
    var parent;
    if (child && Object(_isVirtualElement__WEBPACK_IMPORTED_MODULE_0__["isVirtualElement"])(child)) {
        parent = child._virtual.parent;
    }
    return parent;
}
//# sourceMappingURL=getVirtualParent.js.map

/***/ }),

/***/ "Jfjl":
/*!*************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@fluentui/theme@1.7.1_c129be21209ec549b9ba61bf76d54bcc/node_modules/@fluentui/theme/lib/motion/AnimationStyles.js ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: AnimationVariables, AnimationStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationVariables", function() { return AnimationVariables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationStyles", function() { return AnimationStyles; });
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/merge-styles */ "7Xpn");

/* Register the keyframes */
var EASING_FUNCTION_1 = 'cubic-bezier(.1,.9,.2,1)';
var EASING_FUNCTION_2 = 'cubic-bezier(.1,.25,.75,.9)';
var DURATION_1 = '0.167s';
var DURATION_2 = '0.267s';
var DURATION_3 = '0.367s';
var DURATION_4 = '0.467s';
var FADE_IN = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { opacity: 0 },
    to: { opacity: 1 },
});
var FADE_OUT = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { opacity: 1 },
    to: { opacity: 0, visibility: 'hidden' },
});
var SLIDE_RIGHT_IN10 = _createSlideInX(-10);
var SLIDE_RIGHT_IN20 = _createSlideInX(-20);
var SLIDE_RIGHT_IN40 = _createSlideInX(-40);
var SLIDE_RIGHT_IN400 = _createSlideInX(-400);
var SLIDE_LEFT_IN10 = _createSlideInX(10);
var SLIDE_LEFT_IN20 = _createSlideInX(20);
var SLIDE_LEFT_IN40 = _createSlideInX(40);
var SLIDE_LEFT_IN400 = _createSlideInX(400);
var SLIDE_UP_IN10 = _createSlideInY(10);
var SLIDE_UP_IN20 = _createSlideInY(20);
var SLIDE_DOWN_IN10 = _createSlideInY(-10);
var SLIDE_DOWN_IN20 = _createSlideInY(-20);
var SLIDE_RIGHT_OUT10 = _createSlideOutX(10);
var SLIDE_RIGHT_OUT20 = _createSlideOutX(20);
var SLIDE_RIGHT_OUT40 = _createSlideOutX(40);
var SLIDE_RIGHT_OUT400 = _createSlideOutX(400);
var SLIDE_LEFT_OUT10 = _createSlideOutX(-10);
var SLIDE_LEFT_OUT20 = _createSlideOutX(-20);
var SLIDE_LEFT_OUT40 = _createSlideOutX(-40);
var SLIDE_LEFT_OUT400 = _createSlideOutX(-400);
var SLIDE_UP_OUT10 = _createSlideOutY(-10);
var SLIDE_UP_OUT20 = _createSlideOutY(-20);
var SLIDE_DOWN_OUT10 = _createSlideOutY(10);
var SLIDE_DOWN_OUT20 = _createSlideOutY(20);
var SCALE_UP100 = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { transform: 'scale3d(.98,.98,1)' },
    to: { transform: 'scale3d(1,1,1)' },
});
var SCALE_DOWN98 = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { transform: 'scale3d(1,1,1)' },
    to: { transform: 'scale3d(.98,.98,1)' },
});
var SCALE_DOWN100 = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { transform: 'scale3d(1.03,1.03,1)' },
    to: { transform: 'scale3d(1,1,1)' },
});
var SCALE_UP103 = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { transform: 'scale3d(1,1,1)' },
    to: { transform: 'scale3d(1.03,1.03,1)' },
});
var ROTATE90 = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { transform: 'rotateZ(0deg)' },
    to: { transform: 'rotateZ(90deg)' },
});
var ROTATE_N90 = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { transform: 'rotateZ(0deg)' },
    to: { transform: 'rotateZ(-90deg)' },
});
/**
 * Exporting raw duraction values and easing functions to be used in custom animations
 */
var AnimationVariables = {
    easeFunction1: EASING_FUNCTION_1,
    easeFunction2: EASING_FUNCTION_2,
    durationValue1: DURATION_1,
    durationValue2: DURATION_2,
    durationValue3: DURATION_3,
    durationValue4: DURATION_4,
};
/**
 * All Fabric standard animations, exposed as json objects referencing predefined
 * keyframes. These objects can be mixed in with other class definitions.
 */
var AnimationStyles = {
    slideRightIn10: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN10, DURATION_3, EASING_FUNCTION_1),
    slideRightIn20: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN20, DURATION_3, EASING_FUNCTION_1),
    slideRightIn40: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN40, DURATION_3, EASING_FUNCTION_1),
    slideRightIn400: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN400, DURATION_3, EASING_FUNCTION_1),
    slideLeftIn10: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN10, DURATION_3, EASING_FUNCTION_1),
    slideLeftIn20: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN20, DURATION_3, EASING_FUNCTION_1),
    slideLeftIn40: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN40, DURATION_3, EASING_FUNCTION_1),
    slideLeftIn400: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN400, DURATION_3, EASING_FUNCTION_1),
    slideUpIn10: _createAnimation(FADE_IN + "," + SLIDE_UP_IN10, DURATION_3, EASING_FUNCTION_1),
    slideUpIn20: _createAnimation(FADE_IN + "," + SLIDE_UP_IN20, DURATION_3, EASING_FUNCTION_1),
    slideDownIn10: _createAnimation(FADE_IN + "," + SLIDE_DOWN_IN10, DURATION_3, EASING_FUNCTION_1),
    slideDownIn20: _createAnimation(FADE_IN + "," + SLIDE_DOWN_IN20, DURATION_3, EASING_FUNCTION_1),
    slideRightOut10: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT10, DURATION_3, EASING_FUNCTION_1),
    slideRightOut20: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT20, DURATION_3, EASING_FUNCTION_1),
    slideRightOut40: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT40, DURATION_3, EASING_FUNCTION_1),
    slideRightOut400: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT400, DURATION_3, EASING_FUNCTION_1),
    slideLeftOut10: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT10, DURATION_3, EASING_FUNCTION_1),
    slideLeftOut20: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT20, DURATION_3, EASING_FUNCTION_1),
    slideLeftOut40: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT40, DURATION_3, EASING_FUNCTION_1),
    slideLeftOut400: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT400, DURATION_3, EASING_FUNCTION_1),
    slideUpOut10: _createAnimation(FADE_OUT + "," + SLIDE_UP_OUT10, DURATION_3, EASING_FUNCTION_1),
    slideUpOut20: _createAnimation(FADE_OUT + "," + SLIDE_UP_OUT20, DURATION_3, EASING_FUNCTION_1),
    slideDownOut10: _createAnimation(FADE_OUT + "," + SLIDE_DOWN_OUT10, DURATION_3, EASING_FUNCTION_1),
    slideDownOut20: _createAnimation(FADE_OUT + "," + SLIDE_DOWN_OUT20, DURATION_3, EASING_FUNCTION_1),
    scaleUpIn100: _createAnimation(FADE_IN + "," + SCALE_UP100, DURATION_3, EASING_FUNCTION_1),
    scaleDownIn100: _createAnimation(FADE_IN + "," + SCALE_DOWN100, DURATION_3, EASING_FUNCTION_1),
    scaleUpOut103: _createAnimation(FADE_OUT + "," + SCALE_UP103, DURATION_1, EASING_FUNCTION_2),
    scaleDownOut98: _createAnimation(FADE_OUT + "," + SCALE_DOWN98, DURATION_1, EASING_FUNCTION_2),
    fadeIn100: _createAnimation(FADE_IN, DURATION_1, EASING_FUNCTION_2),
    fadeIn200: _createAnimation(FADE_IN, DURATION_2, EASING_FUNCTION_2),
    fadeIn400: _createAnimation(FADE_IN, DURATION_3, EASING_FUNCTION_2),
    fadeIn500: _createAnimation(FADE_IN, DURATION_4, EASING_FUNCTION_2),
    fadeOut100: _createAnimation(FADE_OUT, DURATION_1, EASING_FUNCTION_2),
    fadeOut200: _createAnimation(FADE_OUT, DURATION_2, EASING_FUNCTION_2),
    fadeOut400: _createAnimation(FADE_OUT, DURATION_3, EASING_FUNCTION_2),
    fadeOut500: _createAnimation(FADE_OUT, DURATION_4, EASING_FUNCTION_2),
    rotate90deg: _createAnimation(ROTATE90, '0.1s', EASING_FUNCTION_2),
    rotateN90deg: _createAnimation(ROTATE_N90, '0.1s', EASING_FUNCTION_2),
};
function _createAnimation(animationName, animationDuration, animationTimingFunction) {
    return {
        animationName: animationName,
        animationDuration: animationDuration,
        animationTimingFunction: animationTimingFunction,
        animationFillMode: 'both',
    };
}
function _createSlideInX(fromX) {
    return Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
        from: { transform: "translate3d(" + fromX + "px,0,0)", pointerEvents: 'none' },
        to: { transform: "translate3d(0,0,0)", pointerEvents: 'auto' },
    });
}
function _createSlideInY(fromY) {
    return Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
        from: { transform: "translate3d(0," + fromY + "px,0)", pointerEvents: 'none' },
        to: { transform: "translate3d(0,0,0)", pointerEvents: 'auto' },
    });
}
function _createSlideOutX(toX) {
    return Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
        from: { transform: "translate3d(0,0,0)" },
        to: { transform: "translate3d(" + toX + "px,0,0)" },
    });
}
function _createSlideOutY(toY) {
    return Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
        from: { transform: "translate3d(0,0,0)" },
        to: { transform: "translate3d(0," + toY + "px,0)" },
    });
}
//# sourceMappingURL=AnimationStyles.js.map

/***/ }),

/***/ "KJs4":
/*!*******************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@fluentui/dom-utilities@1.1.1/node_modules/@fluentui/dom-utilities/lib/portalContainsElement.js ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: portalContainsElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "portalContainsElement", function() { return portalContainsElement; });
/* harmony import */ var _findElementRecursive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./findElementRecursive */ "5XON");
/* harmony import */ var _setPortalAttribute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPortalAttribute */ "U/F6");


/**
 * Determine whether a target is within a portal from perspective of root or optional parent.
 * This function only works against portal components that use the setPortalAttribute function.
 * If both parent and child are within the same portal this function will return false.
 * @param target - Element to query portal containment status of.
 * @param parent - Optional parent perspective. Search for containing portal stops at parent
 * (or root if parent is undefined or invalid.)
 */
function portalContainsElement(target, parent) {
    var elementMatch = Object(_findElementRecursive__WEBPACK_IMPORTED_MODULE_0__["findElementRecursive"])(target, function (testElement) { return parent === testElement || testElement.hasAttribute(_setPortalAttribute__WEBPACK_IMPORTED_MODULE_1__["DATA_PORTAL_ATTRIBUTE"]); });
    return elementMatch !== null && elementMatch.hasAttribute(_setPortalAttribute__WEBPACK_IMPORTED_MODULE_1__["DATA_PORTAL_ATTRIBUTE"]);
}
//# sourceMappingURL=portalContainsElement.js.map

/***/ }),

/***/ "KODn":
/*!**************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/safeSetTimeout.js ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: safeSetTimeout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeSetTimeout", function() { return safeSetTimeout; });
/* harmony import */ var _extendComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extendComponent */ "X7hZ");

/**
 * Generates a function to be attached to a React component, which can be called
 * as a replacement to setTimeout. In-flight async calls will be auto canceled if the component
 * is unmounting before the async code is executed, preventing bugs where code
 * accesses things within the component after being unmounted.
 */
var safeSetTimeout = function (component) {
    var activeTimeouts;
    return function (cb, duration) {
        if (!activeTimeouts) {
            activeTimeouts = new Set();
            Object(_extendComponent__WEBPACK_IMPORTED_MODULE_0__["extendComponent"])(component, {
                componentWillUnmount: function () {
                    activeTimeouts.forEach(function (id) { return clearTimeout(id); });
                },
            });
        }
        var timeoutId = setTimeout(function () {
            activeTimeouts.delete(timeoutId);
            cb();
        }, duration);
        activeTimeouts.add(timeoutId);
    };
};
//# sourceMappingURL=safeSetTimeout.js.map

/***/ }),

/***/ "KVvR":
/*!**************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@fluentui/theme@1.7.1_c129be21209ec549b9ba61bf76d54bcc/node_modules/@fluentui/theme/lib/mergeThemes.js ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: mergeThemes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeThemes", function() { return mergeThemes; });
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/utilities */ "P2cQ");
/* harmony import */ var _utilities_makeSemanticColors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities/makeSemanticColors */ "AtTn");


/**
 * Merge a partial/full theme into a full theme and returns a merged full theme.
 */
function mergeThemes(theme, partialTheme) {
    if (partialTheme === void 0) { partialTheme = {}; }
    var _a, _b, _c, _d;
    var mergedTheme = Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["merge"])({}, theme, partialTheme, {
        semanticColors: Object(_utilities_makeSemanticColors__WEBPACK_IMPORTED_MODULE_1__["getSemanticColors"])(partialTheme.palette, partialTheme.effects, partialTheme.semanticColors, partialTheme.isInverted === undefined ? theme.isInverted : partialTheme.isInverted),
    });
    if (((_a = partialTheme.palette) === null || _a === void 0 ? void 0 : _a.themePrimary) && !((_b = partialTheme.palette) === null || _b === void 0 ? void 0 : _b.accent)) {
        mergedTheme.palette.accent = partialTheme.palette.themePrimary;
    }
    if (partialTheme.defaultFontStyle) {
        for (var _i = 0, _e = Object.keys(mergedTheme.fonts); _i < _e.length; _i++) {
            var fontStyle = _e[_i];
            mergedTheme.fonts[fontStyle] = Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["merge"])(mergedTheme.fonts[fontStyle], partialTheme.defaultFontStyle, (_d = (_c = partialTheme) === null || _c === void 0 ? void 0 : _c.fonts) === null || _d === void 0 ? void 0 : _d[fontStyle]);
        }
    }
    if (partialTheme.stylesheets) {
        mergedTheme.stylesheets = (theme.stylesheets || []).concat(partialTheme.stylesheets);
    }
    return mergedTheme;
}
//# sourceMappingURL=mergeThemes.js.map

/***/ }),

/***/ "KbAT":
/*!***********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/assertNever.js ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: assertNever */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertNever", function() { return assertNever; });
/**
 * AssertNever is a utility function that can be used for exhaustiveness checks in switch statements.
 *
 * @public
 */
function assertNever(x) {
    throw new Error('Unexpected object: ' + x);
}
//# sourceMappingURL=assertNever.js.map

/***/ }),

/***/ "Kmqd":
/*!*************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/safeRequestAnimationFrame.js ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: safeRequestAnimationFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeRequestAnimationFrame", function() { return safeRequestAnimationFrame; });
/* harmony import */ var _extendComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extendComponent */ "X7hZ");

/**
 * Generates a function to be attached to a React component, which can be called
 * as a replacement to RAF. In-flight async calls will be auto canceled if the component
 * is unmounting before the async code is executed, preventing bugs where code
 * accesses things within the component after being unmounted.
 */
var safeRequestAnimationFrame = function (component) {
    var activeTimeouts;
    return function (cb) {
        if (!activeTimeouts) {
            activeTimeouts = new Set();
            Object(_extendComponent__WEBPACK_IMPORTED_MODULE_0__["extendComponent"])(component, {
                componentWillUnmount: function () {
                    activeTimeouts.forEach(function (id) { return cancelAnimationFrame(id); });
                },
            });
        }
        var timeoutId = requestAnimationFrame(function () {
            activeTimeouts.delete(timeoutId);
            cb();
        });
        activeTimeouts.add(timeoutId);
    };
};
//# sourceMappingURL=safeRequestAnimationFrame.js.map

/***/ }),

/***/ "Kplb":
/*!***********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/styling@7.16.19_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/styling/lib/classNames/ColorClassNames.js ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: ColorClassNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorClassNames", function() { return ColorClassNames; });
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/merge-styles */ "7Xpn");
/* harmony import */ var _styles_DefaultPalette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/DefaultPalette */ "JCKL");
/* harmony import */ var _styles_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/index */ "YWaz");



var ColorClassNames = {};
for (var colorName in _styles_DefaultPalette__WEBPACK_IMPORTED_MODULE_1__["DefaultPalette"]) {
    if (_styles_DefaultPalette__WEBPACK_IMPORTED_MODULE_1__["DefaultPalette"].hasOwnProperty(colorName)) {
        // Foreground color
        _defineGetter(ColorClassNames, colorName, '', false, 'color');
        // Hover color
        _defineGetter(ColorClassNames, colorName, 'Hover', true, 'color');
        // Background color
        _defineGetter(ColorClassNames, colorName, 'Background', false, 'background');
        // Background hover
        _defineGetter(ColorClassNames, colorName, 'BackgroundHover', true, 'background');
        // Border color
        _defineGetter(ColorClassNames, colorName, 'Border', false, 'borderColor');
        // Border hover color
        _defineGetter(ColorClassNames, colorName, 'BorderHover', true, 'borderColor');
    }
}
/**
 * Defines a getter for the given class configuration.
 */
function _defineGetter(obj, colorName, suffix, isHover, cssProperty) {
    Object.defineProperty(obj, colorName + suffix, {
        get: function () {
            var _a;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var style = (_a = {}, _a[cssProperty] = Object(_styles_index__WEBPACK_IMPORTED_MODULE_2__["getTheme"])().palette[colorName], _a);
            return Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["mergeStyles"])(isHover ? { selectors: { ':hover': style } } : style).toString();
        },
        enumerable: true,
        configurable: true,
    });
}
//# sourceMappingURL=ColorClassNames.js.map

/***/ }),

/***/ "L09B":
/*!******************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/scroll.js ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: DATA_IS_SCROLLABLE_ATTRIBUTE, allowScrollOnElement, allowOverscrollOnElement, disableBodyScroll, enableBodyScroll, getScrollbarWidth, findScrollableParent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA_IS_SCROLLABLE_ATTRIBUTE", function() { return DATA_IS_SCROLLABLE_ATTRIBUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allowScrollOnElement", function() { return allowScrollOnElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allowOverscrollOnElement", function() { return allowOverscrollOnElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableBodyScroll", function() { return disableBodyScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableBodyScroll", function() { return enableBodyScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScrollbarWidth", function() { return getScrollbarWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findScrollableParent", function() { return findScrollableParent; });
/* harmony import */ var _dom_getDocument__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/getDocument */ "NJXT");
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uifabric/merge-styles */ "7Xpn");
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom/getWindow */ "jfaJ");



var _scrollbarWidth;
var _bodyScrollDisabledCount = 0;
var DisabledScrollClassName = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_1__["mergeStyles"])({
    overflow: 'hidden !important',
});
/**
 * Placing this attribute on scrollable divs optimizes detection to know
 * if the div is scrollable or not (given we can avoid expensive operations
 * like getComputedStyle.)
 *
 * @public
 */
var DATA_IS_SCROLLABLE_ATTRIBUTE = 'data-is-scrollable';
/**
 * Allows the user to scroll within a element,
 * while preventing the user from scrolling the body
 */
var allowScrollOnElement = function (element, events) {
    if (!element) {
        return;
    }
    var _previousClientY = 0;
    var _element = null;
    // remember the clientY for future calls of _preventOverscrolling
    var _saveClientY = function (event) {
        if (event.targetTouches.length === 1) {
            _previousClientY = event.targetTouches[0].clientY;
        }
    };
    // prevent the body from scrolling when the user attempts
    // to scroll past the top or bottom of the element
    var _preventOverscrolling = function (event) {
        // only respond to a single-finger touch
        if (event.targetTouches.length !== 1) {
            return;
        }
        // prevent the body touchmove handler from firing
        // so that scrolling is allowed within the element
        event.stopPropagation();
        if (!_element) {
            return;
        }
        var clientY = event.targetTouches[0].clientY - _previousClientY;
        var scrollableParent = findScrollableParent(event.target);
        if (scrollableParent) {
            _element = scrollableParent;
        }
        // if the element is scrolled to the top,
        // prevent the user from scrolling up
        if (_element.scrollTop === 0 && clientY > 0) {
            event.preventDefault();
        }
        // if the element is scrolled to the bottom,
        // prevent the user from scrolling down
        if (_element.scrollHeight - Math.ceil(_element.scrollTop) <= _element.clientHeight && clientY < 0) {
            event.preventDefault();
        }
    };
    events.on(element, 'touchstart', _saveClientY, { passive: false });
    events.on(element, 'touchmove', _preventOverscrolling, { passive: false });
    _element = element;
};
/**
 * Same as allowScrollOnElement but does not prevent overscrolling.
 */
var allowOverscrollOnElement = function (element, events) {
    if (!element) {
        return;
    }
    var _allowElementScroll = function (event) {
        event.stopPropagation();
    };
    events.on(element, 'touchmove', _allowElementScroll, { passive: false });
};
var _disableIosBodyScroll = function (event) {
    event.preventDefault();
};
/**
 * Disables the body scrolling.
 *
 * @public
 */
function disableBodyScroll() {
    var doc = Object(_dom_getDocument__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
    if (doc && doc.body && !_bodyScrollDisabledCount) {
        doc.body.classList.add(DisabledScrollClassName);
        doc.body.addEventListener('touchmove', _disableIosBodyScroll, { passive: false, capture: false });
    }
    _bodyScrollDisabledCount++;
}
/**
 * Enables the body scrolling.
 *
 * @public
 */
function enableBodyScroll() {
    if (_bodyScrollDisabledCount > 0) {
        var doc = Object(_dom_getDocument__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
        if (doc && doc.body && _bodyScrollDisabledCount === 1) {
            doc.body.classList.remove(DisabledScrollClassName);
            doc.body.removeEventListener('touchmove', _disableIosBodyScroll);
        }
        _bodyScrollDisabledCount--;
    }
}
/**
 * Calculates the width of a scrollbar for the browser/os.
 *
 * @public
 */
function getScrollbarWidth() {
    if (_scrollbarWidth === undefined) {
        var scrollDiv = document.createElement('div');
        scrollDiv.style.setProperty('width', '100px');
        scrollDiv.style.setProperty('height', '100px');
        scrollDiv.style.setProperty('overflow', 'scroll');
        scrollDiv.style.setProperty('position', 'absolute');
        scrollDiv.style.setProperty('top', '-9999px');
        document.body.appendChild(scrollDiv);
        // Get the scrollbar width
        _scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        // Delete the DIV
        document.body.removeChild(scrollDiv);
    }
    return _scrollbarWidth;
}
/**
 * Traverses up the DOM for the element with the data-is-scrollable=true attribute, or returns
 * document.body.
 *
 * @public
 */
function findScrollableParent(startingElement) {
    var el = startingElement;
    var doc = Object(_dom_getDocument__WEBPACK_IMPORTED_MODULE_0__["getDocument"])(startingElement);
    // First do a quick scan for the scrollable attribute.
    while (el && el !== doc.body) {
        if (el.getAttribute(DATA_IS_SCROLLABLE_ATTRIBUTE) === 'true') {
            return el;
        }
        el = el.parentElement;
    }
    // If we haven't found it, the use the slower method: compute styles to evaluate if overflow is set.
    el = startingElement;
    while (el && el !== doc.body) {
        if (el.getAttribute(DATA_IS_SCROLLABLE_ATTRIBUTE) !== 'false') {
            var computedStyles = getComputedStyle(el);
            var overflowY = computedStyles ? computedStyles.getPropertyValue('overflow-y') : '';
            if (overflowY && (overflowY === 'scroll' || overflowY === 'auto')) {
                return el;
            }
        }
        el = el.parentElement;
    }
    // Fall back to window scroll.
    if (!el || el === doc.body) {
        el = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_2__["getWindow"])(startingElement);
    }
    return el;
}
//# sourceMappingURL=scroll.js.map

/***/ }),

/***/ "LUy7":
/*!*****************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/merge.js ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: merge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/**
 * Simple deep merge function. Takes all arguments and returns a deep copy of the objects merged
 * together in the order provided. If an object creates a circular reference, it will assign the
 * original reference.
 */
function merge(target) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        _merge(target || {}, arg);
    }
    return target;
}
/**
 * The _merge helper iterates through all props on source and assigns them to target.
 * When the value is an object, we will create a deep clone of the object. However if
 * there is a circular reference, the value will not be deep cloned and will persist
 * the reference.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _merge(target, source, circularReferences) {
    if (circularReferences === void 0) { circularReferences = []; }
    circularReferences.push(source);
    for (var name_1 in source) {
        if (source.hasOwnProperty(name_1)) {
            if (name_1 !== '__proto__' && name_1 !== 'constructor' && name_1 !== 'prototype') {
                var value = source[name_1];
                if (typeof value === 'object' && value !== null) {
                    var isCircularReference = circularReferences.indexOf(value) > -1;
                    target[name_1] = (isCircularReference
                        ? value
                        : _merge(target[name_1] || {}, value, circularReferences));
                }
                else {
                    target[name_1] = value;
                }
            }
        }
    }
    circularReferences.pop();
    return target;
}
//# sourceMappingURL=merge.js.map

/***/ }),

/***/ "LdLG":
/*!**************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@fluentui/dom-utilities@1.1.1/node_modules/@fluentui/dom-utilities/lib/setVirtualParent.js ***!
  \**************************************************************************************************************************************************/
/*! exports provided: setVirtualParent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setVirtualParent", function() { return setVirtualParent; });
/**
 * Sets the virtual parent of an element.
 * Pass `undefined` as the `parent` to clear the virtual parent.
 *
 * @public
 */
function setVirtualParent(child, parent) {
    var virtualChild = child;
    var virtualParent = parent;
    if (!virtualChild._virtual) {
        virtualChild._virtual = {
            children: [],
        };
    }
    var oldParent = virtualChild._virtual.parent;
    if (oldParent && oldParent !== parent) {
        // Remove the child from its old parent.
        var index = oldParent._virtual.children.indexOf(virtualChild);
        if (index > -1) {
            oldParent._virtual.children.splice(index, 1);
        }
    }
    virtualChild._virtual.parent = virtualParent || undefined;
    if (virtualParent) {
        if (!virtualParent._virtual) {
            virtualParent._virtual = {
                children: [],
            };
        }
        virtualParent._virtual.children.push(virtualChild);
    }
}
//# sourceMappingURL=setVirtualParent.js.map

/***/ }),

/***/ "Lf5Z":
/*!**********************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@fluentui/dom-utilities@1.1.1/node_modules/@fluentui/dom-utilities/lib/elementContainsAttribute.js ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: elementContainsAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementContainsAttribute", function() { return elementContainsAttribute; });
/* harmony import */ var _findElementRecursive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./findElementRecursive */ "5XON");

/**
 * Determines if an element, or any of its ancestors, contain the given attribute
 * @param element - element to start searching at
 * @param attribute - the attribute to search for
 * @returns the value of the first instance found
 */
function elementContainsAttribute(element, attribute) {
    var elementMatch = Object(_findElementRecursive__WEBPACK_IMPORTED_MODULE_0__["findElementRecursive"])(element, function (testElement) { return testElement.hasAttribute(attribute); });
    return elementMatch && elementMatch.getAttribute(attribute);
}
//# sourceMappingURL=elementContainsAttribute.js.map

/***/ }),

/***/ "MPvv":
/*!*************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/customizations/Customizer.js ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: Customizer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customizer", function() { return Customizer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Customizations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Customizations */ "sl8a");
/* harmony import */ var _CustomizerContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CustomizerContext */ "qz1F");
/* harmony import */ var _mergeCustomizations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mergeCustomizations */ "f43f");





/**
 * The Customizer component allows for default props to be mixed into components which
 * are decorated with the customizable() decorator, or use the styled HOC. This enables
 * injection scenarios like:
 *
 * 1. render svg icons instead of the icon font within all buttons
 * 2. inject a custom theme object into a component
 *
 * Props are provided via the settings prop which should be one of the following:
 * - A json map which contains 1 or more name/value pairs representing injectable props.
 * - A function that receives the current settings and returns the new ones that apply to the scope
 *
 * @public
 */
var Customizer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Customizer, _super);
    function Customizer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._onCustomizationChange = function () { return _this.forceUpdate(); };
        return _this;
    }
    Customizer.prototype.componentDidMount = function () {
        _Customizations__WEBPACK_IMPORTED_MODULE_2__["Customizations"].observe(this._onCustomizationChange);
    };
    Customizer.prototype.componentWillUnmount = function () {
        _Customizations__WEBPACK_IMPORTED_MODULE_2__["Customizations"].unobserve(this._onCustomizationChange);
    };
    Customizer.prototype.render = function () {
        var _this = this;
        var contextTransform = this.props.contextTransform;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_CustomizerContext__WEBPACK_IMPORTED_MODULE_3__["CustomizerContext"].Consumer, null, function (parentContext) {
            var newContext = Object(_mergeCustomizations__WEBPACK_IMPORTED_MODULE_4__["mergeCustomizations"])(_this.props, parentContext);
            if (contextTransform) {
                newContext = contextTransform(newContext);
            }
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_CustomizerContext__WEBPACK_IMPORTED_MODULE_3__["CustomizerContext"].Provider, { value: newContext }, _this.props.children);
        }));
    };
    return Customizer;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=Customizer.js.map

/***/ }),

/***/ "MYt4":
/*!***************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/selection/index.js ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: SELECTION_CHANGE, SelectionMode, SelectionDirection, Selection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Selection_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Selection.types */ "iDCg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SELECTION_CHANGE", function() { return _Selection_types__WEBPACK_IMPORTED_MODULE_0__["SELECTION_CHANGE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionMode", function() { return _Selection_types__WEBPACK_IMPORTED_MODULE_0__["SelectionMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionDirection", function() { return _Selection_types__WEBPACK_IMPORTED_MODULE_0__["SelectionDirection"]; });

/* harmony import */ var _Selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Selection */ "vpjJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Selection", function() { return _Selection__WEBPACK_IMPORTED_MODULE_1__["Selection"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "NG/T":
/*!******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/styling@7.16.19_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/styling/lib/styles/DefaultEffects.js ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: DefaultEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fluentui_theme_lib_effects_DefaultEffects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/theme/lib/effects/DefaultEffects */ "Y12E");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultEffects", function() { return _fluentui_theme_lib_effects_DefaultEffects__WEBPACK_IMPORTED_MODULE_0__["DefaultEffects"]; });


//# sourceMappingURL=DefaultEffects.js.map

/***/ }),

/***/ "NJXT":
/*!***************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/dom/getDocument.js ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: getDocument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDocument", function() { return getDocument; });
/* harmony import */ var _setSSR__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setSSR */ "q6T1");

/**
 * Helper to get the document object. Note that in popup window cases, document
 * might be the wrong document, which is why we look at ownerDocument for the
 * truth. Also note that the SSR flag is used to test ssr scenarios even if
 * document is defined (from JSDOM for example.)
 *
 * @public
 */
function getDocument(rootElement) {
    if (_setSSR__WEBPACK_IMPORTED_MODULE_0__["_isSSR"] || typeof document === 'undefined') {
        return undefined;
    }
    else {
        var el = rootElement;
        return el && el.ownerDocument ? el.ownerDocument : document;
    }
}
//# sourceMappingURL=getDocument.js.map

/***/ }),

/***/ "NX+g":
/*!******************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/dom/on.js ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: on */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on", function() { return on; });
function on(element, eventName, callback, options) {
    element.addEventListener(eventName, callback, options);
    return function () { return element.removeEventListener(eventName, callback, options); };
}
//# sourceMappingURL=on.js.map

/***/ }),

/***/ "Oqak":
/*!*********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/styling@7.16.19_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/styling/lib/styles/theme.js ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: createTheme, ThemeSettingName, initializeThemeInCustomizations, getTheme, registerOnThemeChangeCallback, removeOnThemeChangeCallback, loadTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeSettingName", function() { return ThemeSettingName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeThemeInCustomizations", function() { return initializeThemeInCustomizations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTheme", function() { return getTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerOnThemeChangeCallback", function() { return registerOnThemeChangeCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeOnThemeChangeCallback", function() { return removeOnThemeChangeCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadTheme", function() { return loadTheme; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uifabric/utilities */ "P2cQ");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fluentui_theme_lib_createTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/theme/lib/createTheme */ "y4VG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTheme", function() { return _fluentui_theme_lib_createTheme__WEBPACK_IMPORTED_MODULE_3__["createTheme"]; });






var _theme = Object(_fluentui_theme_lib_createTheme__WEBPACK_IMPORTED_MODULE_3__["createTheme"])({});
var _onThemeChangeCallbacks = [];
var ThemeSettingName = 'theme';
function initializeThemeInCustomizations() {
    var _a;
    var _b, _c;
    if (!_uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["Customizations"].getSettings([ThemeSettingName]).theme) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var win = Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["getWindow"])();
        if ((_c = (_b = win) === null || _b === void 0 ? void 0 : _b.FabricConfig) === null || _c === void 0 ? void 0 : _c.theme) {
            _theme = Object(_fluentui_theme_lib_createTheme__WEBPACK_IMPORTED_MODULE_3__["createTheme"])(win.FabricConfig.theme);
        }
        // Set the default theme.
        _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["Customizations"].applySettings((_a = {}, _a[ThemeSettingName] = _theme, _a));
    }
}
initializeThemeInCustomizations();
/**
 * Gets the theme object
 * @param depComments - Whether to include deprecated tags as comments for deprecated slots.
 */
function getTheme(depComments) {
    if (depComments === void 0) { depComments = false; }
    if (depComments === true) {
        _theme = Object(_fluentui_theme_lib_createTheme__WEBPACK_IMPORTED_MODULE_3__["createTheme"])({}, depComments);
    }
    return _theme;
}
/**
 * Registers a callback that gets called whenever the theme changes.
 * This should only be used when the component cannot automatically get theme changes through its state.
 * This will not register duplicate callbacks.
 */
function registerOnThemeChangeCallback(callback) {
    if (_onThemeChangeCallbacks.indexOf(callback) === -1) {
        _onThemeChangeCallbacks.push(callback);
    }
}
/**
 * See registerOnThemeChangeCallback().
 * Removes previously registered callbacks.
 */
function removeOnThemeChangeCallback(callback) {
    var i = _onThemeChangeCallbacks.indexOf(callback);
    if (i === -1) {
        return;
    }
    _onThemeChangeCallbacks.splice(i, 1);
}
/**
 * Applies the theme, while filling in missing slots.
 * @param theme - Partial theme object.
 * @param depComments - Whether to include deprecated tags as comments for deprecated slots.
 */
function loadTheme(theme, depComments) {
    var _a;
    if (depComments === void 0) { depComments = false; }
    _theme = Object(_fluentui_theme_lib_createTheme__WEBPACK_IMPORTED_MODULE_3__["createTheme"])(theme, depComments);
    // Invoke the legacy method of theming the page as well.
    Object(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_2__["loadTheme"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _theme.palette), _theme.semanticColors), _theme.effects), _loadFonts(_theme)));
    _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["Customizations"].applySettings((_a = {}, _a[ThemeSettingName] = _theme, _a));
    _onThemeChangeCallbacks.forEach(function (callback) {
        try {
            callback(_theme);
        }
        catch (e) {
            // don't let a bad callback break everything else
        }
    });
    return _theme;
}
/**
 * Loads font variables into a JSON object.
 * @param theme - The theme object
 */
function _loadFonts(theme) {
    var lines = {};
    for (var _i = 0, _a = Object.keys(theme.fonts); _i < _a.length; _i++) {
        var fontName = _a[_i];
        var font = theme.fonts[fontName];
        for (var _b = 0, _c = Object.keys(font); _b < _c.length; _b++) {
            var propName = _c[_b];
            var name_1 = fontName + propName.charAt(0).toUpperCase() + propName.slice(1);
            var value = font[propName];
            if (propName === 'fontSize' && typeof value === 'number') {
                // if it's a number, convert it to px by default like our theming system does
                value = value + 'px';
            }
            lines[name_1] = value;
        }
    }
    return lines;
}
//# sourceMappingURL=theme.js.map

/***/ }),

/***/ "P2cQ":
/*!*****************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/index.js ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: Async, AutoScroll, BaseComponent, nullRender, DelayedRender, EventGroup, FabricPerformance, GlobalSettings, KeyCodes, Rectangle, appendFunction, mergeAriaAttributeValues, findIndex, find, createArray, toMatrix, removeIndex, replaceElement, addElementAtIndex, flatten, arraysEqual, asAsync, assertNever, classNamesFunction, composeComponentAs, isControlled, css, Customizations, Customizer, CustomizerContext, customizable, useCustomizationSettings, mergeCustomizations, mergeSettings, mergeScopedSettings, elementContains, elementContainsAttribute, findElementRecursive, getChildren, getDocument, getParent, getRect, getVirtualParent, getWindow, isVirtualElement, on, portalContainsElement, raiseClick, DATA_PORTAL_ATTRIBUTE, setPortalAttribute, setVirtualParent, extendComponent, getFirstFocusable, getLastFocusable, getFirstTabbable, getLastTabbable, focusFirstChild, getPreviousElement, getNextElement, isElementVisible, isElementTabbable, isElementFocusZone, isElementFocusSubZone, doesElementContainFocus, shouldWrapFocus, focusAsync, getFocusableByIndexPath, getElementIndexPath, getId, resetIds, getNativeElementProps, hoistMethods, unhoistMethods, hoistStatics, initializeComponentRef, initializeFocusRects, useFocusRects, FocusRects, getInitials, isDirectionalKeyCode, addDirectionalKeyCode, getLanguage, setLanguage, getDistanceBetweenPoints, fitContentToBounds, calculatePrecision, precisionRound, setMemoizeWeakMap, resetMemoizations, memoize, memoizeFunction, createMemoizer, merge, isIOS, modalize, assign, filteredAssign, mapEnumByName, shallowCompare, values, omit, isMac, hasHorizontalOverflow, hasVerticalOverflow, hasOverflow, baseElementEvents, baseElementProperties, htmlElementProperties, labelProperties, audioProperties, videoProperties, olProperties, liProperties, anchorProperties, buttonProperties, inputProperties, textAreaProperties, selectProperties, optionProperties, tableProperties, trProperties, thProperties, tdProperties, colGroupProperties, colProperties, formProperties, iframeProperties, imgProperties, imageProperties, divProperties, getNativeProps, composeRenderFunction, getResourceUrl, setBaseUrl, getRTL, setRTL, getRTLSafeKeyCode, safeRequestAnimationFrame, safeSetTimeout, DATA_IS_SCROLLABLE_ATTRIBUTE, allowScrollOnElement, allowOverscrollOnElement, disableBodyScroll, enableBodyScroll, getScrollbarWidth, findScrollableParent, SELECTION_CHANGE, SelectionMode, SelectionDirection, Selection, format, styled, warn, setWarningCallback, warnConditionallyRequiredProps, resetControlledWarnings, warnControlledUsage, warnDeprecations, warnMutuallyExclusive, isIE11, getPropsWithDefaults, setFocusVisibility, IsFocusVisibleClassName, setSSR, createMergedRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Async */ "mS7z");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Async", function() { return _Async__WEBPACK_IMPORTED_MODULE_0__["Async"]; });

/* harmony import */ var _AutoScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AutoScroll */ "YljV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutoScroll", function() { return _AutoScroll__WEBPACK_IMPORTED_MODULE_1__["AutoScroll"]; });

/* harmony import */ var _BaseComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseComponent */ "oLNk");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return _BaseComponent__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nullRender", function() { return _BaseComponent__WEBPACK_IMPORTED_MODULE_2__["nullRender"]; });

/* harmony import */ var _DelayedRender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DelayedRender */ "2qUy");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DelayedRender", function() { return _DelayedRender__WEBPACK_IMPORTED_MODULE_3__["DelayedRender"]; });

/* harmony import */ var _EventGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EventGroup */ "ZINP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventGroup", function() { return _EventGroup__WEBPACK_IMPORTED_MODULE_4__["EventGroup"]; });

/* harmony import */ var _FabricPerformance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FabricPerformance */ "wNiU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FabricPerformance", function() { return _FabricPerformance__WEBPACK_IMPORTED_MODULE_5__["FabricPerformance"]; });

/* harmony import */ var _GlobalSettings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GlobalSettings */ "3DHI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalSettings", function() { return _GlobalSettings__WEBPACK_IMPORTED_MODULE_6__["GlobalSettings"]; });

/* harmony import */ var _KeyCodes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./KeyCodes */ "uze5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeyCodes", function() { return _KeyCodes__WEBPACK_IMPORTED_MODULE_7__["KeyCodes"]; });

/* harmony import */ var _Rectangle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Rectangle */ "t1az");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rectangle", function() { return _Rectangle__WEBPACK_IMPORTED_MODULE_8__["Rectangle"]; });

/* harmony import */ var _appendFunction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./appendFunction */ "rrsp");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "appendFunction", function() { return _appendFunction__WEBPACK_IMPORTED_MODULE_9__["appendFunction"]; });

/* harmony import */ var _aria__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./aria */ "1wGJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeAriaAttributeValues", function() { return _aria__WEBPACK_IMPORTED_MODULE_10__["mergeAriaAttributeValues"]; });

/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./array */ "+TOL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return _array__WEBPACK_IMPORTED_MODULE_11__["findIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "find", function() { return _array__WEBPACK_IMPORTED_MODULE_11__["find"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createArray", function() { return _array__WEBPACK_IMPORTED_MODULE_11__["createArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toMatrix", function() { return _array__WEBPACK_IMPORTED_MODULE_11__["toMatrix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeIndex", function() { return _array__WEBPACK_IMPORTED_MODULE_11__["removeIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replaceElement", function() { return _array__WEBPACK_IMPORTED_MODULE_11__["replaceElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addElementAtIndex", function() { return _array__WEBPACK_IMPORTED_MODULE_11__["addElementAtIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return _array__WEBPACK_IMPORTED_MODULE_11__["flatten"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arraysEqual", function() { return _array__WEBPACK_IMPORTED_MODULE_11__["arraysEqual"]; });

/* harmony import */ var _asAsync__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./asAsync */ "enY7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asAsync", function() { return _asAsync__WEBPACK_IMPORTED_MODULE_12__["asAsync"]; });

/* harmony import */ var _assertNever__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assertNever */ "KbAT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertNever", function() { return _assertNever__WEBPACK_IMPORTED_MODULE_13__["assertNever"]; });

/* harmony import */ var _classNamesFunction__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./classNamesFunction */ "4Y5s");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "classNamesFunction", function() { return _classNamesFunction__WEBPACK_IMPORTED_MODULE_14__["classNamesFunction"]; });

/* harmony import */ var _componentAs_composeComponentAs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./componentAs/composeComponentAs */ "7nOZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "composeComponentAs", function() { return _componentAs_composeComponentAs__WEBPACK_IMPORTED_MODULE_15__["composeComponentAs"]; });

/* harmony import */ var _controlled__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./controlled */ "QWUC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isControlled", function() { return _controlled__WEBPACK_IMPORTED_MODULE_16__["isControlled"]; });

/* harmony import */ var _css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./css */ "CtHL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return _css__WEBPACK_IMPORTED_MODULE_17__["css"]; });

/* harmony import */ var _customizations_Customizations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./customizations/Customizations */ "sl8a");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Customizations", function() { return _customizations_Customizations__WEBPACK_IMPORTED_MODULE_18__["Customizations"]; });

/* harmony import */ var _customizations_Customizer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./customizations/Customizer */ "MPvv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Customizer", function() { return _customizations_Customizer__WEBPACK_IMPORTED_MODULE_19__["Customizer"]; });

/* harmony import */ var _customizations_CustomizerContext__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./customizations/CustomizerContext */ "qz1F");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomizerContext", function() { return _customizations_CustomizerContext__WEBPACK_IMPORTED_MODULE_20__["CustomizerContext"]; });

/* harmony import */ var _customizations_customizable__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./customizations/customizable */ "RO+p");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "customizable", function() { return _customizations_customizable__WEBPACK_IMPORTED_MODULE_21__["customizable"]; });

/* harmony import */ var _customizations_useCustomizationSettings__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./customizations/useCustomizationSettings */ "n/mG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCustomizationSettings", function() { return _customizations_useCustomizationSettings__WEBPACK_IMPORTED_MODULE_22__["useCustomizationSettings"]; });

/* harmony import */ var _customizations_mergeCustomizations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./customizations/mergeCustomizations */ "f43f");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeCustomizations", function() { return _customizations_mergeCustomizations__WEBPACK_IMPORTED_MODULE_23__["mergeCustomizations"]; });

/* harmony import */ var _customizations_mergeSettings__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./customizations/mergeSettings */ "yPdX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeSettings", function() { return _customizations_mergeSettings__WEBPACK_IMPORTED_MODULE_24__["mergeSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeScopedSettings", function() { return _customizations_mergeSettings__WEBPACK_IMPORTED_MODULE_24__["mergeScopedSettings"]; });

/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./dom */ "1iP4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elementContains", function() { return _dom__WEBPACK_IMPORTED_MODULE_25__["elementContains"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elementContainsAttribute", function() { return _dom__WEBPACK_IMPORTED_MODULE_25__["elementContainsAttribute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findElementRecursive", function() { return _dom__WEBPACK_IMPORTED_MODULE_25__["findElementRecursive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getChildren", function() { return _dom__WEBPACK_IMPORTED_MODULE_25__["getChildren"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDocument", function() { return _dom__WEBPACK_IMPORTED_MODULE_25__["getDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getParent", function() { return _dom__WEBPACK_IMPORTED_MODULE_25__["getParent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRect", function() { return _dom__WEBPACK_IMPORTED_MODULE_25__["getRect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getVirtualParent", function() { return _dom__WEBPACK_IMPORTED_MODULE_25__["getVirtualParent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWindow", function() { return _dom__WEBPACK_IMPORTED_MODULE_25__["getWindow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isVirtualElement", function() { return _dom__WEBPACK_IMPORTED_MODULE_25__["isVirtualElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "on", function() { return _dom__WEBPACK_IMPORTED_MODULE_25__["on"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "portalContainsElement", function() { return _dom__WEBPACK_IMPORTED_MODULE_25__["portalContainsElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "raiseClick", function() { return _dom__WEBPACK_IMPORTED_MODULE_25__["raiseClick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DATA_PORTAL_ATTRIBUTE", function() { return _dom__WEBPACK_IMPORTED_MODULE_25__["DATA_PORTAL_ATTRIBUTE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setPortalAttribute", function() { return _dom__WEBPACK_IMPORTED_MODULE_25__["setPortalAttribute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setVirtualParent", function() { return _dom__WEBPACK_IMPORTED_MODULE_25__["setVirtualParent"]; });

/* harmony import */ var _extendComponent__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./extendComponent */ "X7hZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extendComponent", function() { return _extendComponent__WEBPACK_IMPORTED_MODULE_26__["extendComponent"]; });

/* harmony import */ var _focus__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./focus */ "+daE");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFirstFocusable", function() { return _focus__WEBPACK_IMPORTED_MODULE_27__["getFirstFocusable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLastFocusable", function() { return _focus__WEBPACK_IMPORTED_MODULE_27__["getLastFocusable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFirstTabbable", function() { return _focus__WEBPACK_IMPORTED_MODULE_27__["getFirstTabbable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLastTabbable", function() { return _focus__WEBPACK_IMPORTED_MODULE_27__["getLastTabbable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "focusFirstChild", function() { return _focus__WEBPACK_IMPORTED_MODULE_27__["focusFirstChild"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPreviousElement", function() { return _focus__WEBPACK_IMPORTED_MODULE_27__["getPreviousElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNextElement", function() { return _focus__WEBPACK_IMPORTED_MODULE_27__["getNextElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isElementVisible", function() { return _focus__WEBPACK_IMPORTED_MODULE_27__["isElementVisible"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isElementTabbable", function() { return _focus__WEBPACK_IMPORTED_MODULE_27__["isElementTabbable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isElementFocusZone", function() { return _focus__WEBPACK_IMPORTED_MODULE_27__["isElementFocusZone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isElementFocusSubZone", function() { return _focus__WEBPACK_IMPORTED_MODULE_27__["isElementFocusSubZone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doesElementContainFocus", function() { return _focus__WEBPACK_IMPORTED_MODULE_27__["doesElementContainFocus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shouldWrapFocus", function() { return _focus__WEBPACK_IMPORTED_MODULE_27__["shouldWrapFocus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "focusAsync", function() { return _focus__WEBPACK_IMPORTED_MODULE_27__["focusAsync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFocusableByIndexPath", function() { return _focus__WEBPACK_IMPORTED_MODULE_27__["getFocusableByIndexPath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getElementIndexPath", function() { return _focus__WEBPACK_IMPORTED_MODULE_27__["getElementIndexPath"]; });

/* harmony import */ var _getId__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./getId */ "TbFi");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getId", function() { return _getId__WEBPACK_IMPORTED_MODULE_28__["getId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetIds", function() { return _getId__WEBPACK_IMPORTED_MODULE_28__["resetIds"]; });

/* harmony import */ var _getNativeElementProps__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./getNativeElementProps */ "EypS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNativeElementProps", function() { return _getNativeElementProps__WEBPACK_IMPORTED_MODULE_29__["getNativeElementProps"]; });

/* harmony import */ var _hoist__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./hoist */ "ybkr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hoistMethods", function() { return _hoist__WEBPACK_IMPORTED_MODULE_30__["hoistMethods"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unhoistMethods", function() { return _hoist__WEBPACK_IMPORTED_MODULE_30__["unhoistMethods"]; });

/* harmony import */ var _hoistStatics__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./hoistStatics */ "WGg5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hoistStatics", function() { return _hoistStatics__WEBPACK_IMPORTED_MODULE_31__["hoistStatics"]; });

/* harmony import */ var _initializeComponentRef__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./initializeComponentRef */ "m5sl");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initializeComponentRef", function() { return _initializeComponentRef__WEBPACK_IMPORTED_MODULE_32__["initializeComponentRef"]; });

/* harmony import */ var _initializeFocusRects__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./initializeFocusRects */ "vv7S");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initializeFocusRects", function() { return _initializeFocusRects__WEBPACK_IMPORTED_MODULE_33__["initializeFocusRects"]; });

/* harmony import */ var _useFocusRects__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./useFocusRects */ "SRHz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useFocusRects", function() { return _useFocusRects__WEBPACK_IMPORTED_MODULE_34__["useFocusRects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FocusRects", function() { return _useFocusRects__WEBPACK_IMPORTED_MODULE_34__["FocusRects"]; });

/* harmony import */ var _initials__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./initials */ "BES4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInitials", function() { return _initials__WEBPACK_IMPORTED_MODULE_35__["getInitials"]; });

/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./keyboard */ "ImWu");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDirectionalKeyCode", function() { return _keyboard__WEBPACK_IMPORTED_MODULE_36__["isDirectionalKeyCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addDirectionalKeyCode", function() { return _keyboard__WEBPACK_IMPORTED_MODULE_36__["addDirectionalKeyCode"]; });

/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./language */ "wTrF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLanguage", function() { return _language__WEBPACK_IMPORTED_MODULE_37__["getLanguage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setLanguage", function() { return _language__WEBPACK_IMPORTED_MODULE_37__["setLanguage"]; });

/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./math */ "xtRZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDistanceBetweenPoints", function() { return _math__WEBPACK_IMPORTED_MODULE_38__["getDistanceBetweenPoints"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fitContentToBounds", function() { return _math__WEBPACK_IMPORTED_MODULE_38__["fitContentToBounds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "calculatePrecision", function() { return _math__WEBPACK_IMPORTED_MODULE_38__["calculatePrecision"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "precisionRound", function() { return _math__WEBPACK_IMPORTED_MODULE_38__["precisionRound"]; });

/* harmony import */ var _memoize__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./memoize */ "BYBg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setMemoizeWeakMap", function() { return _memoize__WEBPACK_IMPORTED_MODULE_39__["setMemoizeWeakMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetMemoizations", function() { return _memoize__WEBPACK_IMPORTED_MODULE_39__["resetMemoizations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "memoize", function() { return _memoize__WEBPACK_IMPORTED_MODULE_39__["memoize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "memoizeFunction", function() { return _memoize__WEBPACK_IMPORTED_MODULE_39__["memoizeFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMemoizer", function() { return _memoize__WEBPACK_IMPORTED_MODULE_39__["createMemoizer"]; });

/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./merge */ "LUy7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _merge__WEBPACK_IMPORTED_MODULE_40__["merge"]; });

/* harmony import */ var _mobileDetector__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./mobileDetector */ "P82G");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIOS", function() { return _mobileDetector__WEBPACK_IMPORTED_MODULE_41__["isIOS"]; });

/* harmony import */ var _modalize__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./modalize */ "mSfd");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "modalize", function() { return _modalize__WEBPACK_IMPORTED_MODULE_42__["modalize"]; });

/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./object */ "5vLE");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return _object__WEBPACK_IMPORTED_MODULE_43__["assign"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filteredAssign", function() { return _object__WEBPACK_IMPORTED_MODULE_43__["filteredAssign"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapEnumByName", function() { return _object__WEBPACK_IMPORTED_MODULE_43__["mapEnumByName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shallowCompare", function() { return _object__WEBPACK_IMPORTED_MODULE_43__["shallowCompare"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "values", function() { return _object__WEBPACK_IMPORTED_MODULE_43__["values"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "omit", function() { return _object__WEBPACK_IMPORTED_MODULE_43__["omit"]; });

/* harmony import */ var _osDetector__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./osDetector */ "gh5T");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMac", function() { return _osDetector__WEBPACK_IMPORTED_MODULE_44__["isMac"]; });

/* harmony import */ var _overflow__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./overflow */ "ncf0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasHorizontalOverflow", function() { return _overflow__WEBPACK_IMPORTED_MODULE_45__["hasHorizontalOverflow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasVerticalOverflow", function() { return _overflow__WEBPACK_IMPORTED_MODULE_45__["hasVerticalOverflow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasOverflow", function() { return _overflow__WEBPACK_IMPORTED_MODULE_45__["hasOverflow"]; });

/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./properties */ "WYFb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "baseElementEvents", function() { return _properties__WEBPACK_IMPORTED_MODULE_46__["baseElementEvents"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "baseElementProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_46__["baseElementProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "htmlElementProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_46__["htmlElementProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "labelProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_46__["labelProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "audioProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_46__["audioProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "videoProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_46__["videoProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "olProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_46__["olProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "liProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_46__["liProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "anchorProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_46__["anchorProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buttonProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_46__["buttonProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inputProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_46__["inputProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textAreaProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_46__["textAreaProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_46__["selectProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "optionProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_46__["optionProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tableProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_46__["tableProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_46__["trProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_46__["thProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tdProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_46__["tdProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colGroupProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_46__["colGroupProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_46__["colProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_46__["formProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iframeProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_46__["iframeProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "imgProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_46__["imgProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "imageProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_46__["imageProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "divProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_46__["divProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNativeProps", function() { return _properties__WEBPACK_IMPORTED_MODULE_46__["getNativeProps"]; });

/* harmony import */ var _renderFunction_composeRenderFunction__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./renderFunction/composeRenderFunction */ "mCP2");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "composeRenderFunction", function() { return _renderFunction_composeRenderFunction__WEBPACK_IMPORTED_MODULE_47__["composeRenderFunction"]; });

/* harmony import */ var _resources__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./resources */ "sMlw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getResourceUrl", function() { return _resources__WEBPACK_IMPORTED_MODULE_48__["getResourceUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setBaseUrl", function() { return _resources__WEBPACK_IMPORTED_MODULE_48__["setBaseUrl"]; });

/* harmony import */ var _rtl__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./rtl */ "1E/B");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRTL", function() { return _rtl__WEBPACK_IMPORTED_MODULE_49__["getRTL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setRTL", function() { return _rtl__WEBPACK_IMPORTED_MODULE_49__["setRTL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRTLSafeKeyCode", function() { return _rtl__WEBPACK_IMPORTED_MODULE_49__["getRTLSafeKeyCode"]; });

/* harmony import */ var _safeRequestAnimationFrame__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./safeRequestAnimationFrame */ "Kmqd");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "safeRequestAnimationFrame", function() { return _safeRequestAnimationFrame__WEBPACK_IMPORTED_MODULE_50__["safeRequestAnimationFrame"]; });

/* harmony import */ var _safeSetTimeout__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./safeSetTimeout */ "KODn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "safeSetTimeout", function() { return _safeSetTimeout__WEBPACK_IMPORTED_MODULE_51__["safeSetTimeout"]; });

/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./scroll */ "L09B");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DATA_IS_SCROLLABLE_ATTRIBUTE", function() { return _scroll__WEBPACK_IMPORTED_MODULE_52__["DATA_IS_SCROLLABLE_ATTRIBUTE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allowScrollOnElement", function() { return _scroll__WEBPACK_IMPORTED_MODULE_52__["allowScrollOnElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allowOverscrollOnElement", function() { return _scroll__WEBPACK_IMPORTED_MODULE_52__["allowOverscrollOnElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "disableBodyScroll", function() { return _scroll__WEBPACK_IMPORTED_MODULE_52__["disableBodyScroll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enableBodyScroll", function() { return _scroll__WEBPACK_IMPORTED_MODULE_52__["enableBodyScroll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getScrollbarWidth", function() { return _scroll__WEBPACK_IMPORTED_MODULE_52__["getScrollbarWidth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findScrollableParent", function() { return _scroll__WEBPACK_IMPORTED_MODULE_52__["findScrollableParent"]; });

/* harmony import */ var _selection_index__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./selection/index */ "MYt4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SELECTION_CHANGE", function() { return _selection_index__WEBPACK_IMPORTED_MODULE_53__["SELECTION_CHANGE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionMode", function() { return _selection_index__WEBPACK_IMPORTED_MODULE_53__["SelectionMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionDirection", function() { return _selection_index__WEBPACK_IMPORTED_MODULE_53__["SelectionDirection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Selection", function() { return _selection_index__WEBPACK_IMPORTED_MODULE_53__["Selection"]; });

/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./string */ "gWET");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "format", function() { return _string__WEBPACK_IMPORTED_MODULE_54__["format"]; });

/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./styled */ "uL4z");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "styled", function() { return _styled__WEBPACK_IMPORTED_MODULE_55__["styled"]; });

/* harmony import */ var _warn__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./warn */ "k11K");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warn", function() { return _warn__WEBPACK_IMPORTED_MODULE_56__["warn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setWarningCallback", function() { return _warn__WEBPACK_IMPORTED_MODULE_56__["setWarningCallback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warnConditionallyRequiredProps", function() { return _warn__WEBPACK_IMPORTED_MODULE_56__["warnConditionallyRequiredProps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetControlledWarnings", function() { return _warn__WEBPACK_IMPORTED_MODULE_56__["resetControlledWarnings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warnControlledUsage", function() { return _warn__WEBPACK_IMPORTED_MODULE_56__["warnControlledUsage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warnDeprecations", function() { return _warn__WEBPACK_IMPORTED_MODULE_56__["warnDeprecations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warnMutuallyExclusive", function() { return _warn__WEBPACK_IMPORTED_MODULE_56__["warnMutuallyExclusive"]; });

/* harmony import */ var _ie11Detector__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./ie11Detector */ "hAUA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIE11", function() { return _ie11Detector__WEBPACK_IMPORTED_MODULE_57__["isIE11"]; });

/* harmony import */ var _getPropsWithDefaults__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./getPropsWithDefaults */ "HYqL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPropsWithDefaults", function() { return _getPropsWithDefaults__WEBPACK_IMPORTED_MODULE_58__["getPropsWithDefaults"]; });

/* harmony import */ var _setFocusVisibility__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./setFocusVisibility */ "DyX/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setFocusVisibility", function() { return _setFocusVisibility__WEBPACK_IMPORTED_MODULE_59__["setFocusVisibility"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IsFocusVisibleClassName", function() { return _setFocusVisibility__WEBPACK_IMPORTED_MODULE_59__["IsFocusVisibleClassName"]; });

/* harmony import */ var _dom_setSSR__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./dom/setSSR */ "q6T1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setSSR", function() { return _dom_setSSR__WEBPACK_IMPORTED_MODULE_60__["setSSR"]; });

/* harmony import */ var _createMergedRef__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./createMergedRef */ "Bda6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMergedRef", function() { return _createMergedRef__WEBPACK_IMPORTED_MODULE_61__["createMergedRef"]; });

/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./version */ "49j8");































































//# sourceMappingURL=index.js.map

/***/ }),

/***/ "P82G":
/*!**************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/mobileDetector.js ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: isIOS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIOS", function() { return isIOS; });
/**
 * Returns true if and only if the user is on a iOS device.
 * Used to determine whether iOS-specific behavior should be applied.
 */
var isIOS = function () {
    if (!window || !window.navigator || !window.navigator.userAgent) {
        return false;
    }
    return /iPad|iPhone|iPod/i.test(window.navigator.userAgent);
};
//# sourceMappingURL=mobileDetector.js.map

/***/ }),

/***/ "QWUC":
/*!**********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/controlled.js ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: isControlled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isControlled", function() { return isControlled; });
/**
 * Determines whether a component is controlled.
 * @param props - Component props
 * @param valueProp - Prop containing the controlled value
 * @returns true if controlled, false if uncontrolled
 */
function isControlled(props, valueProp) {
    // React's built-in <input> considers a prop to be provided if its value is non-null/undefined.
    // Mirror that behavior here (rather than checking for just undefined).
    return props[valueProp] !== undefined && props[valueProp] !== null;
}
//# sourceMappingURL=controlled.js.map

/***/ }),

/***/ "Qt/S":
/*!*************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@fluentui/theme@1.7.1_c129be21209ec549b9ba61bf76d54bcc/node_modules/@fluentui/theme/lib/fonts/createFontStyles.js ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: createFontStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFontStyles", function() { return createFontStyles; });
/* harmony import */ var _FluentFonts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FluentFonts */ "myQz");

// Fallback fonts, if specified system or web fonts are unavailable.
var FontFamilyFallbacks = "'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif";
// By default, we favor system fonts for the default.
// All localized fonts use a web font and never use the system font.
var defaultFontFamily = "'Segoe UI', '" + _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontNames"].WestEuropean + "'";
// Mapping of language prefix to to font family.
var LanguageToFontMap = {
    ar: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].Arabic,
    bg: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].Cyrillic,
    cs: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].EastEuropean,
    el: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].Greek,
    et: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].EastEuropean,
    he: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].Hebrew,
    hi: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].Hindi,
    hr: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].EastEuropean,
    hu: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].EastEuropean,
    ja: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].Japanese,
    kk: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].EastEuropean,
    ko: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].Korean,
    lt: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].EastEuropean,
    lv: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].EastEuropean,
    pl: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].EastEuropean,
    ru: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].Cyrillic,
    sk: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].EastEuropean,
    'sr-latn': _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].EastEuropean,
    th: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].Thai,
    tr: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].EastEuropean,
    uk: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].Cyrillic,
    vi: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].Vietnamese,
    'zh-hans': _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].ChineseSimplified,
    'zh-hant': _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].ChineseTraditional,
    hy: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].Armenian,
    ka: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].Georgian,
};
function _fontFamilyWithFallbacks(fontFamily) {
    return fontFamily + ", " + FontFamilyFallbacks;
}
/**
 * If there is a localized font for this language, return that.
 * Returns undefined if there is no localized font for that language.
 */
function _getLocalizedFontFamily(language) {
    for (var lang in LanguageToFontMap) {
        if (LanguageToFontMap.hasOwnProperty(lang) && language && lang.indexOf(language) === 0) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return LanguageToFontMap[lang];
        }
    }
    return defaultFontFamily;
}
function _createFont(size, weight, fontFamily) {
    return {
        fontFamily: fontFamily,
        MozOsxFontSmoothing: 'grayscale',
        WebkitFontSmoothing: 'antialiased',
        fontSize: size,
        fontWeight: weight,
    };
}
function createFontStyles(localeCode) {
    var localizedFont = _getLocalizedFontFamily(localeCode);
    var fontFamilyWithFallback = _fontFamilyWithFallbacks(localizedFont);
    var fontStyles = {
        tiny: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontSizes"].mini, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].regular, fontFamilyWithFallback),
        xSmall: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontSizes"].xSmall, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].regular, fontFamilyWithFallback),
        small: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontSizes"].small, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].regular, fontFamilyWithFallback),
        smallPlus: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontSizes"].smallPlus, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].regular, fontFamilyWithFallback),
        medium: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontSizes"].medium, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].regular, fontFamilyWithFallback),
        mediumPlus: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontSizes"].mediumPlus, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].regular, fontFamilyWithFallback),
        large: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontSizes"].large, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].regular, fontFamilyWithFallback),
        xLarge: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontSizes"].xLarge, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].semibold, fontFamilyWithFallback),
        xLargePlus: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontSizes"].xLargePlus, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].semibold, fontFamilyWithFallback),
        xxLarge: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontSizes"].xxLarge, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].semibold, fontFamilyWithFallback),
        xxLargePlus: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontSizes"].xxLargePlus, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].semibold, fontFamilyWithFallback),
        superLarge: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontSizes"].superLarge, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].semibold, fontFamilyWithFallback),
        mega: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontSizes"].mega, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].semibold, fontFamilyWithFallback),
    };
    return fontStyles;
}
//# sourceMappingURL=createFontStyles.js.map

/***/ }),

/***/ "RO+p":
/*!***************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/customizations/customizable.js ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: customizable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customizable", function() { return customizable; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Customizations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Customizations */ "sl8a");
/* harmony import */ var _hoistStatics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hoistStatics */ "WGg5");
/* harmony import */ var _CustomizerContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CustomizerContext */ "qz1F");
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @uifabric/merge-styles */ "7Xpn");






function customizable(scope, fields, concatStyles) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return function customizableFactory(ComposedComponent) {
        var _a;
        var resultClass = (_a = /** @class */ (function (_super) {
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ComponentWithInjectedProps, _super);
                function ComponentWithInjectedProps(props) {
                    var _this = _super.call(this, props) || this;
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    _this._styleCache = {};
                    _this._onSettingChanged = _this._onSettingChanged.bind(_this);
                    return _this;
                }
                ComponentWithInjectedProps.prototype.componentDidMount = function () {
                    _Customizations__WEBPACK_IMPORTED_MODULE_2__["Customizations"].observe(this._onSettingChanged);
                };
                ComponentWithInjectedProps.prototype.componentWillUnmount = function () {
                    _Customizations__WEBPACK_IMPORTED_MODULE_2__["Customizations"].unobserve(this._onSettingChanged);
                };
                ComponentWithInjectedProps.prototype.render = function () {
                    var _this = this;
                    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_CustomizerContext__WEBPACK_IMPORTED_MODULE_4__["CustomizerContext"].Consumer, null, function (context) {
                        var defaultProps = _Customizations__WEBPACK_IMPORTED_MODULE_2__["Customizations"].getSettings(fields, scope, context.customizations);
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        var componentProps = _this.props;
                        // If defaultProps.styles is a function, evaluate it before calling concatStyleSets
                        if (defaultProps.styles && typeof defaultProps.styles === 'function') {
                            defaultProps.styles = defaultProps.styles(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, defaultProps), componentProps));
                        }
                        // If concatStyles is true and custom styles have been defined compute those styles
                        if (concatStyles && defaultProps.styles) {
                            if (_this._styleCache.default !== defaultProps.styles ||
                                _this._styleCache.component !== componentProps.styles) {
                                var mergedStyles = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_5__["concatStyleSets"])(defaultProps.styles, componentProps.styles);
                                _this._styleCache.default = defaultProps.styles;
                                _this._styleCache.component = componentProps.styles;
                                _this._styleCache.merged = mergedStyles;
                            }
                            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ComposedComponent, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, defaultProps, componentProps, { styles: _this._styleCache.merged }));
                        }
                        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ComposedComponent, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, defaultProps, componentProps));
                    }));
                };
                ComponentWithInjectedProps.prototype._onSettingChanged = function () {
                    this.forceUpdate();
                };
                return ComponentWithInjectedProps;
            }(react__WEBPACK_IMPORTED_MODULE_1__["Component"])),
            _a.displayName = 'Customized' + scope,
            _a);
        return Object(_hoistStatics__WEBPACK_IMPORTED_MODULE_3__["hoistStatics"])(ComposedComponent, resultClass);
    };
}
//# sourceMappingURL=customizable.js.map

/***/ }),

/***/ "SRHz":
/*!*************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/useFocusRects.js ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: useFocusRects, FocusRects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFocusRects", function() { return useFocusRects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusRects", function() { return FocusRects; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/getWindow */ "jfaJ");
/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keyboard */ "ImWu");
/* harmony import */ var _setFocusVisibility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setFocusVisibility */ "DyX/");




/**
 * Counter for mounted component that uses focus rectangle.
 * We want to cleanup the listners before last component that uses focus rectangle unmounts.
 */
var mountCounters = new WeakMap();
function setMountCounters(key, delta) {
    var newValue;
    var currValue = mountCounters.get(key);
    if (currValue) {
        newValue = currValue + delta;
    }
    else {
        newValue = 1;
    }
    mountCounters.set(key, newValue);
    return newValue;
}
/**
 * Initializes the logic which:
 *
 * 1. Subscribes keydown and mousedown events. (It will only do it once per window,
 *    so it's safe to call this method multiple times.)
 * 2. When the user presses directional keyboard keys, adds the 'ms-Fabric--isFocusVisible' classname
 *    to the document body, removes the 'ms-Fabric-isFocusHidden' classname.
 * 3. When the user clicks a mouse button, adds the 'ms-Fabric-isFocusHidden' classname to the
 *    document body, removes the 'ms-Fabric--isFocusVisible' classname.
 *
 * This logic allows components on the page to conditionally render focus treatments based on
 * the existence of global classnames, which simplifies logic overall.
 *
 * @param rootRef - A Ref object. Focus rectangle can be applied on itself and all its children.
 */
function useFocusRects(rootRef) {
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        var _a, _b;
        var win = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_1__["getWindow"])((_a = rootRef) === null || _a === void 0 ? void 0 : _a.current);
        if (!win || ((_b = win.FabricConfig) === null || _b === void 0 ? void 0 : _b.disableFocusRects) === true) {
            return undefined;
        }
        var count = setMountCounters(win, 1);
        if (count <= 1) {
            win.addEventListener('mousedown', _onMouseDown, true);
            win.addEventListener('pointerdown', _onPointerDown, true);
            win.addEventListener('keydown', _onKeyDown, true);
        }
        return function () {
            var _a;
            if (!win || ((_a = win.FabricConfig) === null || _a === void 0 ? void 0 : _a.disableFocusRects) === true) {
                return;
            }
            count = setMountCounters(win, -1);
            if (count === 0) {
                win.removeEventListener('mousedown', _onMouseDown, true);
                win.removeEventListener('pointerdown', _onPointerDown, true);
                win.removeEventListener('keydown', _onKeyDown, true);
            }
        };
    }, [rootRef]);
}
/**
 * Function Component wrapper which enables calling `useFocusRects` hook.
 * Renders nothing.
 */
var FocusRects = function (props) {
    useFocusRects(props.rootRef);
    return null;
};
function _onMouseDown(ev) {
    Object(_setFocusVisibility__WEBPACK_IMPORTED_MODULE_3__["setFocusVisibility"])(false, ev.target);
}
function _onPointerDown(ev) {
    if (ev.pointerType !== 'mouse') {
        Object(_setFocusVisibility__WEBPACK_IMPORTED_MODULE_3__["setFocusVisibility"])(false, ev.target);
    }
}
function _onKeyDown(ev) {
    // eslint-disable-next-line deprecation/deprecation
    if (Object(_keyboard__WEBPACK_IMPORTED_MODULE_2__["isDirectionalKeyCode"])(ev.which)) {
        Object(_setFocusVisibility__WEBPACK_IMPORTED_MODULE_3__["setFocusVisibility"])(true, ev.target);
    }
}
//# sourceMappingURL=useFocusRects.js.map

/***/ }),

/***/ "T0TP":
/*!****************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@fluentui/theme@1.7.1_c129be21209ec549b9ba61bf76d54bcc/node_modules/@fluentui/theme/lib/effects/index.js ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: DefaultEffects, Depths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DefaultEffects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultEffects */ "Y12E");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultEffects", function() { return _DefaultEffects__WEBPACK_IMPORTED_MODULE_0__["DefaultEffects"]; });

/* harmony import */ var _FluentDepths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FluentDepths */ "Hijz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Depths", function() { return _FluentDepths__WEBPACK_IMPORTED_MODULE_1__["Depths"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "TbFi":
/*!*****************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/getId.js ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: getId, resetIds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getId", function() { return getId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetIds", function() { return resetIds; });
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/getWindow */ "jfaJ");
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uifabric/merge-styles */ "7Xpn");


// Initialize global window id.
var CURRENT_ID_PROPERTY = '__currentId__';
var DEFAULT_ID_STRING = 'id__';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var _global = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__["getWindow"])() || {};
if (_global[CURRENT_ID_PROPERTY] === undefined) {
    _global[CURRENT_ID_PROPERTY] = 0;
}
var _initializedStylesheetResets = false;
/**
 * Generates a unique id in the global scope (this spans across duplicate copies of the same library.)
 *
 * @public
 */
function getId(prefix) {
    if (!_initializedStylesheetResets) {
        // Configure ids to reset on stylesheet resets.
        var stylesheet = _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_1__["Stylesheet"].getInstance();
        if (stylesheet && stylesheet.onReset) {
            stylesheet.onReset(resetIds);
        }
        _initializedStylesheetResets = true;
    }
    var index = _global[CURRENT_ID_PROPERTY]++;
    return (prefix === undefined ? DEFAULT_ID_STRING : prefix) + index;
}
/**
 * Resets id counter to an (optional) number.
 *
 * @public
 */
function resetIds(counter) {
    if (counter === void 0) { counter = 0; }
    _global[CURRENT_ID_PROPERTY] = counter;
}
//# sourceMappingURL=getId.js.map

/***/ }),

/***/ "U/F6":
/*!****************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@fluentui/dom-utilities@1.1.1/node_modules/@fluentui/dom-utilities/lib/setPortalAttribute.js ***!
  \****************************************************************************************************************************************************/
/*! exports provided: DATA_PORTAL_ATTRIBUTE, setPortalAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA_PORTAL_ATTRIBUTE", function() { return DATA_PORTAL_ATTRIBUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPortalAttribute", function() { return setPortalAttribute; });
var DATA_PORTAL_ATTRIBUTE = 'data-portal-element';
/**
 * Identify element as a portal by setting an attribute.
 * @param element - Element to mark as a portal.
 */
function setPortalAttribute(element) {
    element.setAttribute(DATA_PORTAL_ATTRIBUTE, 'true');
}
//# sourceMappingURL=setPortalAttribute.js.map

/***/ }),

/***/ "V8pV":
/*!**************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/merge-styles@7.19.1/node_modules/@uifabric/merge-styles/lib/StyleOptionsState.js ***!
  \**************************************************************************************************************************************************/
/*! exports provided: setRTL, getRTL, getStyleOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRTL", function() { return setRTL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRTL", function() { return getRTL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyleOptions", function() { return getStyleOptions; });
/**
 * Sets the current RTL value.
 */
function setRTL(isRTL) {
    if (_rtl !== isRTL) {
        _rtl = isRTL;
    }
}
/**
 * Gets the current RTL value.
 */
function getRTL() {
    if (_rtl === undefined) {
        _rtl =
            typeof document !== 'undefined' &&
                !!document.documentElement &&
                document.documentElement.getAttribute('dir') === 'rtl';
    }
    return _rtl;
}
// This has been split into 2 lines because it was working in Fabric due to the code being transpiled to es5, so this
// was converted to var while not working in Fluent that uses babel to transpile the code to be es6-like. Splitting the
// logic into two lines, however, allows it to work in both scenarios.
var _rtl;
_rtl = getRTL();
function getStyleOptions() {
    return {
        rtl: getRTL(),
    };
}
//# sourceMappingURL=StyleOptionsState.js.map

/***/ }),

/***/ "W9LO":
/*!***********************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/merge-styles@7.19.1/node_modules/@uifabric/merge-styles/lib/mergeStyleSets.js ***!
  \***********************************************************************************************************************************************/
/*! exports provided: mergeStyleSets, mergeCssSets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeStyleSets", function() { return mergeStyleSets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeCssSets", function() { return mergeCssSets; });
/* harmony import */ var _concatStyleSets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./concatStyleSets */ "H7TR");
/* harmony import */ var _extractStyleParts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extractStyleParts */ "j+j+");
/* harmony import */ var _StyleOptionsState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StyleOptionsState */ "V8pV");
/* harmony import */ var _styleToClassName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styleToClassName */ "YlYl");




/**
 * Takes in one or more style set objects, each consisting of a set of areas,
 * each which will produce a class name. Using this is analogous to calling
 * `mergeStyles` for each property in the object, but ensures we maintain the
 * set ordering when multiple style sets are merged.
 *
 * @param styleSets - One or more style sets to be merged.
 */
function mergeStyleSets() {
    var styleSets = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        styleSets[_i] = arguments[_i];
    }
    return mergeCssSets(styleSets, Object(_StyleOptionsState__WEBPACK_IMPORTED_MODULE_2__["getStyleOptions"])());
}
/**
 * Takes in one or more style set objects, each1consisting of a set of areas,
 * each which will produce a class name. Using this is analogous to calling
 * `mergeCss` for each property in the object, but ensures the
 * set ordering when multiple style sets are merged.
 *
 * @param styleSets - One or more style sets to be merged.
 * @param options - (optional) Options to use when creating rules.
 */
function mergeCssSets(styleSets, options) {
    var _a, _b;
    var classNameSet = { subComponentStyles: {} };
    var styleSet = styleSets[0];
    if (!styleSet && styleSets.length <= 1) {
        return { subComponentStyles: {} };
    }
    var concatenatedStyleSet = _concatStyleSets__WEBPACK_IMPORTED_MODULE_0__["concatStyleSets"].apply(void 0, styleSets);
    var registrations = [];
    for (var styleSetArea in concatenatedStyleSet) {
        if (concatenatedStyleSet.hasOwnProperty(styleSetArea)) {
            if (styleSetArea === 'subComponentStyles') {
                classNameSet.subComponentStyles = concatenatedStyleSet.subComponentStyles || {};
                continue;
            }
            var styles = concatenatedStyleSet[styleSetArea];
            var _c = Object(_extractStyleParts__WEBPACK_IMPORTED_MODULE_1__["extractStyleParts"])(styles), classes = _c.classes, objects = _c.objects;
            if ((_a = objects) === null || _a === void 0 ? void 0 : _a.length) {
                var registration = Object(_styleToClassName__WEBPACK_IMPORTED_MODULE_3__["styleToRegistration"])(options || {}, { displayName: styleSetArea }, objects);
                if (registration) {
                    registrations.push(registration);
                    classNameSet[styleSetArea] = classes.concat([registration.className]).join(' ');
                }
            }
            else {
                classNameSet[styleSetArea] = classes.join(' ');
            }
        }
    }
    for (var _i = 0, registrations_1 = registrations; _i < registrations_1.length; _i++) {
        var registration = registrations_1[_i];
        if (registration) {
            Object(_styleToClassName__WEBPACK_IMPORTED_MODULE_3__["applyRegistration"])(registration, (_b = options) === null || _b === void 0 ? void 0 : _b.specificityMultiplier);
        }
    }
    return classNameSet;
}
//# sourceMappingURL=mergeStyleSets.js.map

/***/ }),

/***/ "WGg5":
/*!************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/hoistStatics.js ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: hoistStatics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hoistStatics", function() { return hoistStatics; });
/**
 * Allows you to hoist static functions in components.
 * Created for the purpose of fixing broken static functions in classes
 * that utilize decorators.
 *
 * @public
 * @param source - The object where the methods are hoisted from.
 * @param dest - The object to hoist the methods onto.
 * @returns The dest object with methods added
 */
function hoistStatics(source, dest) {
    for (var name_1 in source) {
        if (source.hasOwnProperty(name_1)) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            dest[name_1] = source[name_1];
        }
    }
    return dest;
}
//# sourceMappingURL=hoistStatics.js.map

/***/ }),

/***/ "WYFb":
/*!**********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/properties.js ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: baseElementEvents, baseElementProperties, htmlElementProperties, labelProperties, audioProperties, videoProperties, olProperties, liProperties, anchorProperties, buttonProperties, inputProperties, textAreaProperties, selectProperties, optionProperties, tableProperties, trProperties, thProperties, tdProperties, colGroupProperties, colProperties, formProperties, iframeProperties, imgProperties, imageProperties, divProperties, getNativeProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseElementEvents", function() { return baseElementEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseElementProperties", function() { return baseElementProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "htmlElementProperties", function() { return htmlElementProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "labelProperties", function() { return labelProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "audioProperties", function() { return audioProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "videoProperties", function() { return videoProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "olProperties", function() { return olProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "liProperties", function() { return liProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "anchorProperties", function() { return anchorProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonProperties", function() { return buttonProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputProperties", function() { return inputProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textAreaProperties", function() { return textAreaProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectProperties", function() { return selectProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionProperties", function() { return optionProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tableProperties", function() { return tableProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trProperties", function() { return trProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thProperties", function() { return thProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tdProperties", function() { return tdProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colGroupProperties", function() { return colGroupProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colProperties", function() { return colProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formProperties", function() { return formProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iframeProperties", function() { return iframeProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imgProperties", function() { return imgProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageProperties", function() { return imageProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divProperties", function() { return divProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNativeProps", function() { return getNativeProps; });
var toObjectMap = function () {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    var result = {};
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        var keys = Array.isArray(item) ? item : Object.keys(item);
        for (var _b = 0, keys_1 = keys; _b < keys_1.length; _b++) {
            var key = keys_1[_b];
            result[key] = 1;
        }
    }
    return result;
};
/**
 * An array of events that are allowed on every html element type.
 *
 * @public
 */
var baseElementEvents = toObjectMap([
    'onCopy',
    'onCut',
    'onPaste',
    'onCompositionEnd',
    'onCompositionStart',
    'onCompositionUpdate',
    'onFocus',
    'onFocusCapture',
    'onBlur',
    'onBlurCapture',
    'onChange',
    'onInput',
    'onSubmit',
    'onLoad',
    'onError',
    'onKeyDown',
    'onKeyDownCapture',
    'onKeyPress',
    'onKeyUp',
    'onAbort',
    'onCanPlay',
    'onCanPlayThrough',
    'onDurationChange',
    'onEmptied',
    'onEncrypted',
    'onEnded',
    'onLoadedData',
    'onLoadedMetadata',
    'onLoadStart',
    'onPause',
    'onPlay',
    'onPlaying',
    'onProgress',
    'onRateChange',
    'onSeeked',
    'onSeeking',
    'onStalled',
    'onSuspend',
    'onTimeUpdate',
    'onVolumeChange',
    'onWaiting',
    'onClick',
    'onClickCapture',
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
    'onMouseDownCapture',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onMouseUpCapture',
    'onSelect',
    'onTouchCancel',
    'onTouchEnd',
    'onTouchMove',
    'onTouchStart',
    'onScroll',
    'onWheel',
    'onPointerCancel',
    'onPointerDown',
    'onPointerEnter',
    'onPointerLeave',
    'onPointerMove',
    'onPointerOut',
    'onPointerOver',
    'onPointerUp',
    'onGotPointerCapture',
    'onLostPointerCapture',
]);
/**
 * An array of element attributes which are allowed on every html element type.
 *
 * @public
 */
var baseElementProperties = toObjectMap([
    'accessKey',
    'children',
    'className',
    'contentEditable',
    'dir',
    'draggable',
    'hidden',
    'htmlFor',
    'id',
    'lang',
    'ref',
    'role',
    'style',
    'tabIndex',
    'title',
    'translate',
    'spellCheck',
    'name',
]);
/**
 * An array of HTML element properties and events.
 *
 * @public
 */
var htmlElementProperties = toObjectMap(baseElementProperties, baseElementEvents);
/**
 * An array of LABEL tag properties and events.
 *
 * @public
 */
var labelProperties = toObjectMap(htmlElementProperties, [
    'form',
]);
/**
 * An array of AUDIO tag properties and events.

 * @public
 */
var audioProperties = toObjectMap(htmlElementProperties, [
    'height',
    'loop',
    'muted',
    'preload',
    'src',
    'width',
]);
/**
 * An array of VIDEO tag properties and events.
 *
 * @public
 */
var videoProperties = toObjectMap(audioProperties, [
    'poster',
]);
/**
 * An array of OL tag properties and events.
 *
 * @public
 */
var olProperties = toObjectMap(htmlElementProperties, [
    'start',
]);
/**
 * An array of LI tag properties and events.
 *
 * @public
 */
var liProperties = toObjectMap(htmlElementProperties, [
    'value',
]);
/**
 * An array of A tag properties and events.
 *
 * @public
 */
var anchorProperties = toObjectMap(htmlElementProperties, [
    'download',
    'href',
    'hrefLang',
    'media',
    'rel',
    'target',
    'type',
]);
/**
 * An array of BUTTON tag properties and events.
 *
 * @public
 */
var buttonProperties = toObjectMap(htmlElementProperties, [
    'autoFocus',
    'disabled',
    'form',
    'formAction',
    'formEncType',
    'formMethod',
    'formNoValidate',
    'formTarget',
    'type',
    'value',
]);
/**
 * An array of INPUT tag properties and events.
 *
 * @public
 */
var inputProperties = toObjectMap(buttonProperties, [
    'accept',
    'alt',
    'autoCapitalize',
    'autoComplete',
    'checked',
    'dirname',
    'form',
    'height',
    'inputMode',
    'list',
    'max',
    'maxLength',
    'min',
    'multiple',
    'pattern',
    'placeholder',
    'readOnly',
    'required',
    'src',
    'step',
    'size',
    'type',
    'value',
    'width',
]);
/**
 * An array of TEXTAREA tag properties and events.
 *
 * @public
 */
var textAreaProperties = toObjectMap(buttonProperties, [
    'autoCapitalize',
    'cols',
    'dirname',
    'form',
    'maxLength',
    'placeholder',
    'readOnly',
    'required',
    'rows',
    'wrap',
]);
/**
 * An array of SELECT tag properties and events.
 *
 * @public
 */
var selectProperties = toObjectMap(buttonProperties, [
    'form',
    'multiple',
    'required',
]);
var optionProperties = toObjectMap(htmlElementProperties, [
    'selected',
    'value',
]);
/**
 * An array of TABLE tag properties and events.
 *
 * @public
 */
var tableProperties = toObjectMap(htmlElementProperties, [
    'cellPadding',
    'cellSpacing',
]);
/**
 * An array of TR tag properties and events.
 *
 * @public
 */
var trProperties = htmlElementProperties;
/**
 * An array of TH tag properties and events.
 *
 * @public
 */
var thProperties = toObjectMap(htmlElementProperties, [
    'rowSpan',
    'scope',
]);
/**
 * An array of TD tag properties and events.
 *
 * @public
 */
var tdProperties = toObjectMap(htmlElementProperties, [
    'colSpan',
    'headers',
    'rowSpan',
    'scope',
]);
var colGroupProperties = toObjectMap(htmlElementProperties, [
    'span',
]);
var colProperties = toObjectMap(htmlElementProperties, [
    'span',
]);
/**
 * An array of FORM tag properties and events.
 *
 * @public
 */
var formProperties = toObjectMap(htmlElementProperties, [
    'acceptCharset',
    'action',
    'encType',
    'encType',
    'method',
    'noValidate',
    'target',
]);
/**
 * An array of IFRAME tag properties and events.
 *
 * @public
 */
var iframeProperties = toObjectMap(htmlElementProperties, [
    'allow',
    'allowFullScreen',
    'allowPaymentRequest',
    'allowTransparency',
    'csp',
    'height',
    'importance',
    'referrerPolicy',
    'sandbox',
    'src',
    'srcDoc',
    'width',
]);
/**
 * An array of IMAGE tag properties and events.
 *
 * @public
 */
var imgProperties = toObjectMap(htmlElementProperties, [
    'alt',
    'crossOrigin',
    'height',
    'src',
    'srcSet',
    'useMap',
    'width',
]);
/**
 * @deprecated Use imgProperties for img elements.
 */
var imageProperties = imgProperties;
/**
 * An array of DIV tag properties and events.
 *
 * @public
 */
var divProperties = htmlElementProperties;
/**
 * Gets native supported props for an html element provided the allowance set. Use one of the property
 * sets defined (divProperties, buttonPropertes, etc) to filter out supported properties from a given
 * props set. Note that all data- and aria- prefixed attributes will be allowed.
 * NOTE: getNativeProps should always be applied first when adding props to a react component. The
 * non-native props should be applied second. This will prevent getNativeProps from overriding your custom props.
 * For example, if props passed to getNativeProps has an onClick function and getNativeProps is added to
 * the component after an onClick function is added, then the getNativeProps onClick will override it.
 *
 * @public
 * @param props - The unfiltered input props
 * @param allowedPropsNames - The array or record of allowed prop names.
 * @returns The filtered props
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getNativeProps(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
props, allowedPropNames, excludedPropNames) {
    // It'd be great to properly type this while allowing 'aria-` and 'data-' attributes like TypeScript does for
    // JSX attributes, but that ability is hardcoded into the TS compiler with no analog in TypeScript typings.
    // Then we'd be able to enforce props extends native props (including aria- and data- attributes), and then
    // return native props.
    // We should be able to do this once this PR is merged: https://github.com/microsoft/TypeScript/pull/26797
    var _a;
    var isArray = Array.isArray(allowedPropNames);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var result = {};
    var keys = Object.keys(props);
    for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
        var key = keys_2[_i];
        var isNativeProp = (!isArray && allowedPropNames[key]) ||
            (isArray && allowedPropNames.indexOf(key) >= 0) ||
            key.indexOf('data-') === 0 ||
            key.indexOf('aria-') === 0;
        if (isNativeProp && (!excludedPropNames || ((_a = excludedPropNames) === null || _a === void 0 ? void 0 : _a.indexOf(key)) === -1)) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            result[key] = props[key];
        }
    }
    return result;
}
//# sourceMappingURL=properties.js.map

/***/ }),

/***/ "X7hZ":
/*!***************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/extendComponent.js ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: extendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendComponent", function() { return extendComponent; });
/* harmony import */ var _appendFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appendFunction */ "rrsp");

/**
 * Extends a component's lifetime methods by appending new functions to the existing lifetime functions.
 */
function extendComponent(parent, methods) {
    for (var name_1 in methods) {
        if (methods.hasOwnProperty(name_1)) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            parent[name_1] = Object(_appendFunction__WEBPACK_IMPORTED_MODULE_0__["appendFunction"])(parent, parent[name_1], methods[name_1]);
        }
    }
}
//# sourceMappingURL=extendComponent.js.map

/***/ }),

/***/ "XUd8":
/*!******************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/merge-styles@7.19.1/node_modules/@uifabric/merge-styles/lib/transforms/kebabRules.js ***!
  \******************************************************************************************************************************************************/
/*! exports provided: kebabRules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kebabRules", function() { return kebabRules; });
var rules = {};
function kebabRules(rulePairs, index) {
    var rule = rulePairs[index];
    if (rule.charAt(0) !== '-') {
        rulePairs[index] = rules[rule] = rules[rule] || rule.replace(/([A-Z])/g, '-$1').toLowerCase();
    }
}
//# sourceMappingURL=kebabRules.js.map

/***/ }),

/***/ "Y12E":
/*!*************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@fluentui/theme@1.7.1_c129be21209ec549b9ba61bf76d54bcc/node_modules/@fluentui/theme/lib/effects/DefaultEffects.js ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: DefaultEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultEffects", function() { return DefaultEffects; });
/* harmony import */ var _FluentDepths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FluentDepths */ "Hijz");

var DefaultEffects = {
    elevation4: _FluentDepths__WEBPACK_IMPORTED_MODULE_0__["Depths"].depth4,
    elevation8: _FluentDepths__WEBPACK_IMPORTED_MODULE_0__["Depths"].depth8,
    elevation16: _FluentDepths__WEBPACK_IMPORTED_MODULE_0__["Depths"].depth16,
    elevation64: _FluentDepths__WEBPACK_IMPORTED_MODULE_0__["Depths"].depth64,
    roundedCorner2: '2px',
    roundedCorner4: '4px',
    roundedCorner6: '6px',
};
//# sourceMappingURL=DefaultEffects.js.map

/***/ }),

/***/ "YUCC":
/*!************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/styling@7.16.19_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/styling/lib/utilities/index.js ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: buildClassMap, getIcon, registerIcons, registerIconAlias, unregisterIcons, setIconOptions, getIconClassName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _buildClassMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buildClassMap */ "ljbO");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildClassMap", function() { return _buildClassMap__WEBPACK_IMPORTED_MODULE_0__["buildClassMap"]; });

/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons */ "FaL/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIcon", function() { return _icons__WEBPACK_IMPORTED_MODULE_1__["getIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerIcons", function() { return _icons__WEBPACK_IMPORTED_MODULE_1__["registerIcons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerIconAlias", function() { return _icons__WEBPACK_IMPORTED_MODULE_1__["registerIconAlias"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unregisterIcons", function() { return _icons__WEBPACK_IMPORTED_MODULE_1__["unregisterIcons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setIconOptions", function() { return _icons__WEBPACK_IMPORTED_MODULE_1__["setIconOptions"]; });

/* harmony import */ var _getIconClassName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getIconClassName */ "flwP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIconClassName", function() { return _getIconClassName__WEBPACK_IMPORTED_MODULE_2__["getIconClassName"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "YWaz":
/*!*********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/styling@7.16.19_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/styling/lib/styles/index.js ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: AnimationStyles, AnimationVariables, DefaultPalette, DefaultEffects, DefaultFontStyles, registerDefaultFontFaces, FontSizes, FontWeights, IconFontSizes, createFontStyles, getFocusStyle, focusClear, getFocusOutlineStyle, getInputFocusStyle, hiddenContentStyle, PulsingBeaconAnimationStyles, getGlobalClassNames, getThemedContext, ThemeSettingName, getTheme, loadTheme, createTheme, registerOnThemeChangeCallback, removeOnThemeChangeCallback, HighContrastSelector, HighContrastSelectorWhite, HighContrastSelectorBlack, EdgeChromiumHighContrastSelector, ScreenWidthMinSmall, ScreenWidthMinMedium, ScreenWidthMinLarge, ScreenWidthMinXLarge, ScreenWidthMinXXLarge, ScreenWidthMinXXXLarge, ScreenWidthMaxSmall, ScreenWidthMaxMedium, ScreenWidthMaxLarge, ScreenWidthMaxXLarge, ScreenWidthMaxXXLarge, ScreenWidthMinUhfMobile, getScreenSelector, getEdgeChromiumNoHighContrastAdjustSelector, normalize, noWrap, getFadedOverflowStyle, getPlaceholderStyles, ZIndexes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AnimationStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnimationStyles */ "nU2y");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimationStyles", function() { return _AnimationStyles__WEBPACK_IMPORTED_MODULE_0__["AnimationStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimationVariables", function() { return _AnimationStyles__WEBPACK_IMPORTED_MODULE_0__["AnimationVariables"]; });

/* harmony import */ var _DefaultPalette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DefaultPalette */ "JCKL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultPalette", function() { return _DefaultPalette__WEBPACK_IMPORTED_MODULE_1__["DefaultPalette"]; });

/* harmony import */ var _DefaultEffects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DefaultEffects */ "NG/T");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultEffects", function() { return _DefaultEffects__WEBPACK_IMPORTED_MODULE_2__["DefaultEffects"]; });

/* harmony import */ var _DefaultFontStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DefaultFontStyles */ "sBgr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultFontStyles", function() { return _DefaultFontStyles__WEBPACK_IMPORTED_MODULE_3__["DefaultFontStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerDefaultFontFaces", function() { return _DefaultFontStyles__WEBPACK_IMPORTED_MODULE_3__["registerDefaultFontFaces"]; });

/* harmony import */ var _fonts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fonts */ "6gpT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontSizes", function() { return _fonts__WEBPACK_IMPORTED_MODULE_4__["FontSizes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontWeights", function() { return _fonts__WEBPACK_IMPORTED_MODULE_4__["FontWeights"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconFontSizes", function() { return _fonts__WEBPACK_IMPORTED_MODULE_4__["IconFontSizes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFontStyles", function() { return _fonts__WEBPACK_IMPORTED_MODULE_4__["createFontStyles"]; });

/* harmony import */ var _getFocusStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getFocusStyle */ "rP42");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFocusStyle", function() { return _getFocusStyle__WEBPACK_IMPORTED_MODULE_5__["getFocusStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "focusClear", function() { return _getFocusStyle__WEBPACK_IMPORTED_MODULE_5__["focusClear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFocusOutlineStyle", function() { return _getFocusStyle__WEBPACK_IMPORTED_MODULE_5__["getFocusOutlineStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInputFocusStyle", function() { return _getFocusStyle__WEBPACK_IMPORTED_MODULE_5__["getInputFocusStyle"]; });

/* harmony import */ var _hiddenContentStyle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hiddenContentStyle */ "vvHx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hiddenContentStyle", function() { return _hiddenContentStyle__WEBPACK_IMPORTED_MODULE_6__["hiddenContentStyle"]; });

/* harmony import */ var _PulsingBeaconAnimationStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PulsingBeaconAnimationStyles */ "5+uh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PulsingBeaconAnimationStyles", function() { return _PulsingBeaconAnimationStyles__WEBPACK_IMPORTED_MODULE_7__["PulsingBeaconAnimationStyles"]; });

/* harmony import */ var _getGlobalClassNames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./getGlobalClassNames */ "k+gr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGlobalClassNames", function() { return _getGlobalClassNames__WEBPACK_IMPORTED_MODULE_8__["getGlobalClassNames"]; });

/* harmony import */ var _scheme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scheme */ "1Ukg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getThemedContext", function() { return _scheme__WEBPACK_IMPORTED_MODULE_9__["getThemedContext"]; });

/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./theme */ "Oqak");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeSettingName", function() { return _theme__WEBPACK_IMPORTED_MODULE_10__["ThemeSettingName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTheme", function() { return _theme__WEBPACK_IMPORTED_MODULE_10__["getTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadTheme", function() { return _theme__WEBPACK_IMPORTED_MODULE_10__["loadTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTheme", function() { return _theme__WEBPACK_IMPORTED_MODULE_10__["createTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerOnThemeChangeCallback", function() { return _theme__WEBPACK_IMPORTED_MODULE_10__["registerOnThemeChangeCallback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeOnThemeChangeCallback", function() { return _theme__WEBPACK_IMPORTED_MODULE_10__["removeOnThemeChangeCallback"]; });

/* harmony import */ var _CommonStyles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CommonStyles */ "Eb+H");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HighContrastSelector", function() { return _CommonStyles__WEBPACK_IMPORTED_MODULE_11__["HighContrastSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HighContrastSelectorWhite", function() { return _CommonStyles__WEBPACK_IMPORTED_MODULE_11__["HighContrastSelectorWhite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HighContrastSelectorBlack", function() { return _CommonStyles__WEBPACK_IMPORTED_MODULE_11__["HighContrastSelectorBlack"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EdgeChromiumHighContrastSelector", function() { return _CommonStyles__WEBPACK_IMPORTED_MODULE_11__["EdgeChromiumHighContrastSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinSmall", function() { return _CommonStyles__WEBPACK_IMPORTED_MODULE_11__["ScreenWidthMinSmall"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinMedium", function() { return _CommonStyles__WEBPACK_IMPORTED_MODULE_11__["ScreenWidthMinMedium"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinLarge", function() { return _CommonStyles__WEBPACK_IMPORTED_MODULE_11__["ScreenWidthMinLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinXLarge", function() { return _CommonStyles__WEBPACK_IMPORTED_MODULE_11__["ScreenWidthMinXLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinXXLarge", function() { return _CommonStyles__WEBPACK_IMPORTED_MODULE_11__["ScreenWidthMinXXLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinXXXLarge", function() { return _CommonStyles__WEBPACK_IMPORTED_MODULE_11__["ScreenWidthMinXXXLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxSmall", function() { return _CommonStyles__WEBPACK_IMPORTED_MODULE_11__["ScreenWidthMaxSmall"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxMedium", function() { return _CommonStyles__WEBPACK_IMPORTED_MODULE_11__["ScreenWidthMaxMedium"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxLarge", function() { return _CommonStyles__WEBPACK_IMPORTED_MODULE_11__["ScreenWidthMaxLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxXLarge", function() { return _CommonStyles__WEBPACK_IMPORTED_MODULE_11__["ScreenWidthMaxXLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxXXLarge", function() { return _CommonStyles__WEBPACK_IMPORTED_MODULE_11__["ScreenWidthMaxXXLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinUhfMobile", function() { return _CommonStyles__WEBPACK_IMPORTED_MODULE_11__["ScreenWidthMinUhfMobile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getScreenSelector", function() { return _CommonStyles__WEBPACK_IMPORTED_MODULE_11__["getScreenSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEdgeChromiumNoHighContrastAdjustSelector", function() { return _CommonStyles__WEBPACK_IMPORTED_MODULE_11__["getEdgeChromiumNoHighContrastAdjustSelector"]; });

/* harmony import */ var _GeneralStyles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./GeneralStyles */ "fUmS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return _GeneralStyles__WEBPACK_IMPORTED_MODULE_12__["normalize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noWrap", function() { return _GeneralStyles__WEBPACK_IMPORTED_MODULE_12__["noWrap"]; });

/* harmony import */ var _getFadedOverflowStyle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./getFadedOverflowStyle */ "0Lfo");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFadedOverflowStyle", function() { return _getFadedOverflowStyle__WEBPACK_IMPORTED_MODULE_13__["getFadedOverflowStyle"]; });

/* harmony import */ var _getPlaceholderStyles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./getPlaceholderStyles */ "0wEj");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPlaceholderStyles", function() { return _getPlaceholderStyles__WEBPACK_IMPORTED_MODULE_14__["getPlaceholderStyles"]; });

/* harmony import */ var _zIndexes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./zIndexes */ "aULN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ZIndexes", function() { return _zIndexes__WEBPACK_IMPORTED_MODULE_15__["ZIndexes"]; });

















//# sourceMappingURL=index.js.map

/***/ }),

/***/ "YlYl":
/*!*************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/merge-styles@7.19.1/node_modules/@uifabric/merge-styles/lib/styleToClassName.js ***!
  \*************************************************************************************************************************************************/
/*! exports provided: serializeRuleEntries, styleToRegistration, applyRegistration, styleToClassName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeRuleEntries", function() { return serializeRuleEntries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleToRegistration", function() { return styleToRegistration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyRegistration", function() { return applyRegistration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleToClassName", function() { return styleToClassName; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Stylesheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Stylesheet */ "DPR3");
/* harmony import */ var _transforms_kebabRules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transforms/kebabRules */ "XUd8");
/* harmony import */ var _transforms_prefixRules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transforms/prefixRules */ "+UWI");
/* harmony import */ var _transforms_provideUnits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transforms/provideUnits */ "kzNh");
/* harmony import */ var _transforms_rtlifyRules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transforms/rtlifyRules */ "AgfC");






var DISPLAY_NAME = 'displayName';
function getDisplayName(rules) {
    var rootStyle = rules && rules['&'];
    return rootStyle ? rootStyle.displayName : undefined;
}
var globalSelectorRegExp = /\:global\((.+?)\)/g;
/**
 * Finds comma separated selectors in a :global() e.g. ":global(.class1, .class2, .class3)"
 * and wraps them each in their own global ":global(.class1), :global(.class2), :global(.class3)"
 *
 * @param selectorWithGlobals The selector to process
 * @returns The updated selector
 */
function expandCommaSeparatedGlobals(selectorWithGlobals) {
    // We the selector does not have a :global() we can shortcut
    if (!globalSelectorRegExp.test(selectorWithGlobals)) {
        return selectorWithGlobals;
    }
    var replacementInfo = [];
    var findGlobal = /\:global\((.+?)\)/g;
    var match = null;
    // Create a result list for global selectors so we can replace them.
    while ((match = findGlobal.exec(selectorWithGlobals))) {
        // Only if the found selector is a comma separated list we'll process it.
        if (match[1].indexOf(',') > -1) {
            replacementInfo.push([
                match.index,
                match.index + match[0].length,
                // Wrap each of the found selectors in :global()
                match[1]
                    .split(',')
                    .map(function (v) { return ":global(" + v.trim() + ")"; })
                    .join(', '),
            ]);
        }
    }
    // Replace the found selectors with their wrapped variants in reverse order
    return replacementInfo
        .reverse()
        .reduce(function (selector, _a) {
        var matchIndex = _a[0], matchEndIndex = _a[1], replacement = _a[2];
        var prefix = selector.slice(0, matchIndex);
        var suffix = selector.slice(matchEndIndex);
        return prefix + replacement + suffix;
    }, selectorWithGlobals);
}
function expandSelector(newSelector, currentSelector) {
    if (newSelector.indexOf(':global(') >= 0) {
        return newSelector.replace(globalSelectorRegExp, '$1');
    }
    else if (newSelector.indexOf(':') === 0) {
        return currentSelector + newSelector;
    }
    else if (newSelector.indexOf('&') < 0) {
        return currentSelector + ' ' + newSelector;
    }
    return newSelector;
}
function extractSelector(currentSelector, rules, selector, value) {
    if (rules === void 0) { rules = { __order: [] }; }
    if (selector.indexOf('@') === 0) {
        selector = selector + '{' + currentSelector;
        extractRules([value], rules, selector);
    }
    else if (selector.indexOf(',') > -1) {
        expandCommaSeparatedGlobals(selector)
            .split(',')
            .map(function (s) { return s.trim(); })
            .forEach(function (separatedSelector) {
            return extractRules([value], rules, expandSelector(separatedSelector, currentSelector));
        });
    }
    else {
        extractRules([value], rules, expandSelector(selector, currentSelector));
    }
}
function extractRules(args, rules, currentSelector) {
    if (rules === void 0) { rules = { __order: [] }; }
    if (currentSelector === void 0) { currentSelector = '&'; }
    var stylesheet = _Stylesheet__WEBPACK_IMPORTED_MODULE_1__["Stylesheet"].getInstance();
    var currentRules = rules[currentSelector];
    if (!currentRules) {
        currentRules = {};
        rules[currentSelector] = currentRules;
        rules.__order.push(currentSelector);
    }
    for (var _i = 0, args_1 = args; _i < args_1.length; _i++) {
        var arg = args_1[_i];
        // If the arg is a string, we need to look up the class map and merge.
        if (typeof arg === 'string') {
            var expandedRules = stylesheet.argsFromClassName(arg);
            if (expandedRules) {
                extractRules(expandedRules, rules, currentSelector);
            }
            // Else if the arg is an array, we need to recurse in.
        }
        else if (Array.isArray(arg)) {
            extractRules(arg, rules, currentSelector);
        }
        else {
            for (var prop in arg) {
                if (arg.hasOwnProperty(prop)) {
                    var propValue = arg[prop];
                    if (prop === 'selectors') {
                        // every child is a selector.
                        var selectors = arg.selectors;
                        for (var newSelector in selectors) {
                            if (selectors.hasOwnProperty(newSelector)) {
                                extractSelector(currentSelector, rules, newSelector, selectors[newSelector]);
                            }
                        }
                    }
                    else if (typeof propValue === 'object') {
                        // prop is a selector.
                        if (propValue !== null) {
                            extractSelector(currentSelector, rules, prop, propValue);
                        }
                    }
                    else {
                        if (propValue !== undefined) {
                            // Else, add the rule to the currentSelector.
                            if (prop === 'margin' || prop === 'padding') {
                                expandQuads(currentRules, prop, propValue);
                            }
                            else {
                                currentRules[prop] = propValue;
                            }
                        }
                    }
                }
            }
        }
    }
    return rules;
}
function expandQuads(currentRules, name, value) {
    var parts = typeof value === 'string' ? value.split(' ') : [value];
    currentRules[name + 'Top'] = parts[0];
    currentRules[name + 'Right'] = parts[1] || parts[0];
    currentRules[name + 'Bottom'] = parts[2] || parts[0];
    currentRules[name + 'Left'] = parts[3] || parts[1] || parts[0];
}
function getKeyForRules(options, rules) {
    var serialized = [options.rtl ? 'rtl' : 'ltr'];
    var hasProps = false;
    for (var _i = 0, _a = rules.__order; _i < _a.length; _i++) {
        var selector = _a[_i];
        serialized.push(selector);
        var rulesForSelector = rules[selector];
        for (var propName in rulesForSelector) {
            if (rulesForSelector.hasOwnProperty(propName) && rulesForSelector[propName] !== undefined) {
                hasProps = true;
                serialized.push(propName, rulesForSelector[propName]);
            }
        }
    }
    return hasProps ? serialized.join('') : undefined;
}
function repeatString(target, count) {
    if (count <= 0) {
        return '';
    }
    if (count === 1) {
        return target;
    }
    return target + repeatString(target, count - 1);
}
function serializeRuleEntries(options, ruleEntries) {
    if (!ruleEntries) {
        return '';
    }
    var allEntries = [];
    for (var entry in ruleEntries) {
        if (ruleEntries.hasOwnProperty(entry) && entry !== DISPLAY_NAME && ruleEntries[entry] !== undefined) {
            allEntries.push(entry, ruleEntries[entry]);
        }
    }
    // Apply transforms.
    for (var i = 0; i < allEntries.length; i += 2) {
        Object(_transforms_kebabRules__WEBPACK_IMPORTED_MODULE_2__["kebabRules"])(allEntries, i);
        Object(_transforms_provideUnits__WEBPACK_IMPORTED_MODULE_4__["provideUnits"])(allEntries, i);
        Object(_transforms_rtlifyRules__WEBPACK_IMPORTED_MODULE_5__["rtlifyRules"])(options, allEntries, i);
        Object(_transforms_prefixRules__WEBPACK_IMPORTED_MODULE_3__["prefixRules"])(allEntries, i);
    }
    // Apply punctuation.
    for (var i = 1; i < allEntries.length; i += 4) {
        allEntries.splice(i, 1, ':', allEntries[i], ';');
    }
    return allEntries.join('');
}
function styleToRegistration(options) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var rules = extractRules(args);
    var key = getKeyForRules(options, rules);
    if (key) {
        var stylesheet = _Stylesheet__WEBPACK_IMPORTED_MODULE_1__["Stylesheet"].getInstance();
        var registration = {
            className: stylesheet.classNameFromKey(key),
            key: key,
            args: args,
        };
        if (!registration.className) {
            registration.className = stylesheet.getClassName(getDisplayName(rules));
            var rulesToInsert = [];
            for (var _a = 0, _b = rules.__order; _a < _b.length; _a++) {
                var selector = _b[_a];
                rulesToInsert.push(selector, serializeRuleEntries(options, rules[selector]));
            }
            registration.rulesToInsert = rulesToInsert;
        }
        return registration;
    }
    return undefined;
}
/**
 * Insert style to stylesheet.
 * @param registration Style registration.
 * @param specificityMultiplier Number of times classname selector is repeated in the css rule.
 * This is to increase css specificity in case it's needed. Default to 1.
 */
function applyRegistration(registration, specificityMultiplier) {
    if (specificityMultiplier === void 0) { specificityMultiplier = 1; }
    var stylesheet = _Stylesheet__WEBPACK_IMPORTED_MODULE_1__["Stylesheet"].getInstance();
    var className = registration.className, key = registration.key, args = registration.args, rulesToInsert = registration.rulesToInsert;
    if (rulesToInsert) {
        // rulesToInsert is an ordered array of selector/rule pairs.
        for (var i = 0; i < rulesToInsert.length; i += 2) {
            var rules = rulesToInsert[i + 1];
            if (rules) {
                var selector = rulesToInsert[i];
                selector = selector.replace(/&/g, repeatString("." + registration.className, specificityMultiplier));
                // Insert. Note if a media query, we must close the query with a final bracket.
                var processedRule = selector + "{" + rules + "}" + (selector.indexOf('@') === 0 ? '}' : '');
                stylesheet.insertRule(processedRule);
            }
        }
        stylesheet.cacheClassName(className, key, args, rulesToInsert);
    }
}
function styleToClassName(options) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var registration = styleToRegistration.apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([options], args));
    if (registration) {
        applyRegistration(registration, options.specificityMultiplier);
        return registration.className;
    }
    return '';
}
//# sourceMappingURL=styleToClassName.js.map

/***/ }),

/***/ "YljV":
/*!**********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/AutoScroll.js ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: AutoScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoScroll", function() { return AutoScroll; });
/* harmony import */ var _EventGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventGroup */ "ZINP");
/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scroll */ "L09B");
/* harmony import */ var _dom_getRect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom/getRect */ "w0Tv");



var SCROLL_ITERATION_DELAY = 16;
var SCROLL_GUTTER = 100;
var MAX_SCROLL_VELOCITY = 15;
/**
 * AutoScroll simply hooks up mouse events given a parent element, and scrolls the container
 * up/down depending on how close the mouse is to the top/bottom of the container.
 *
 * Once you don't want autoscroll any more, just dispose the helper and it will unhook events.
 *
 * @public
 * {@docCategory AutoScroll}
 */
var AutoScroll = /** @class */ (function () {
    function AutoScroll(element) {
        this._events = new _EventGroup__WEBPACK_IMPORTED_MODULE_0__["EventGroup"](this);
        this._scrollableParent = Object(_scroll__WEBPACK_IMPORTED_MODULE_1__["findScrollableParent"])(element);
        this._incrementScroll = this._incrementScroll.bind(this);
        this._scrollRect = Object(_dom_getRect__WEBPACK_IMPORTED_MODULE_2__["getRect"])(this._scrollableParent);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (this._scrollableParent === window) {
            this._scrollableParent = document.body;
        }
        if (this._scrollableParent) {
            this._events.on(window, 'mousemove', this._onMouseMove, true);
            this._events.on(window, 'touchmove', this._onTouchMove, true);
        }
    }
    AutoScroll.prototype.dispose = function () {
        this._events.dispose();
        this._stopScroll();
    };
    AutoScroll.prototype._onMouseMove = function (ev) {
        this._computeScrollVelocity(ev);
    };
    AutoScroll.prototype._onTouchMove = function (ev) {
        if (ev.touches.length > 0) {
            this._computeScrollVelocity(ev);
        }
    };
    AutoScroll.prototype._computeScrollVelocity = function (ev) {
        if (!this._scrollRect) {
            return;
        }
        var clientX;
        var clientY;
        if ('clientX' in ev) {
            clientX = ev.clientX;
            clientY = ev.clientY;
        }
        else {
            clientX = ev.touches[0].clientX;
            clientY = ev.touches[0].clientY;
        }
        var scrollRectTop = this._scrollRect.top;
        var scrollRectLeft = this._scrollRect.left;
        var scrollClientBottom = scrollRectTop + this._scrollRect.height - SCROLL_GUTTER;
        var scrollClientRight = scrollRectLeft + this._scrollRect.width - SCROLL_GUTTER;
        // variables to use for alternating scroll direction
        var scrollRect;
        var clientDirection;
        var scrollClient;
        // if either of these conditions are met we are scrolling vertically else horizontally
        if (clientY < scrollRectTop + SCROLL_GUTTER || clientY > scrollClientBottom) {
            clientDirection = clientY;
            scrollRect = scrollRectTop;
            scrollClient = scrollClientBottom;
            this._isVerticalScroll = true;
        }
        else {
            clientDirection = clientX;
            scrollRect = scrollRectLeft;
            scrollClient = scrollClientRight;
            this._isVerticalScroll = false;
        }
        // calculate scroll velocity and direction
        if (clientDirection < scrollRect + SCROLL_GUTTER) {
            this._scrollVelocity = Math.max(-MAX_SCROLL_VELOCITY, -MAX_SCROLL_VELOCITY * ((SCROLL_GUTTER - (clientDirection - scrollRect)) / SCROLL_GUTTER));
        }
        else if (clientDirection > scrollClient) {
            this._scrollVelocity = Math.min(MAX_SCROLL_VELOCITY, MAX_SCROLL_VELOCITY * ((clientDirection - scrollClient) / SCROLL_GUTTER));
        }
        else {
            this._scrollVelocity = 0;
        }
        if (this._scrollVelocity) {
            this._startScroll();
        }
        else {
            this._stopScroll();
        }
    };
    AutoScroll.prototype._startScroll = function () {
        if (!this._timeoutId) {
            this._incrementScroll();
        }
    };
    AutoScroll.prototype._incrementScroll = function () {
        if (this._scrollableParent) {
            if (this._isVerticalScroll) {
                this._scrollableParent.scrollTop += Math.round(this._scrollVelocity);
            }
            else {
                this._scrollableParent.scrollLeft += Math.round(this._scrollVelocity);
            }
        }
        this._timeoutId = setTimeout(this._incrementScroll, SCROLL_ITERATION_DELAY);
    };
    AutoScroll.prototype._stopScroll = function () {
        if (this._timeoutId) {
            clearTimeout(this._timeoutId);
            delete this._timeoutId;
        }
    };
    return AutoScroll;
}());

//# sourceMappingURL=AutoScroll.js.map

/***/ }),

/***/ "Z+z6":
/*!******************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/merge-styles@7.19.1/node_modules/@uifabric/merge-styles/lib/keyframes.js ***!
  \******************************************************************************************************************************************/
/*! exports provided: keyframes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony import */ var _StyleOptionsState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StyleOptionsState */ "V8pV");
/* harmony import */ var _Stylesheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Stylesheet */ "DPR3");
/* harmony import */ var _styleToClassName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styleToClassName */ "YlYl");



/**
 * Registers keyframe definitions.
 *
 * @public
 */
function keyframes(timeline) {
    var stylesheet = _Stylesheet__WEBPACK_IMPORTED_MODULE_1__["Stylesheet"].getInstance();
    var name = stylesheet.getClassName();
    var rulesArray = [];
    for (var prop in timeline) {
        if (timeline.hasOwnProperty(prop)) {
            rulesArray.push(prop, '{', Object(_styleToClassName__WEBPACK_IMPORTED_MODULE_2__["serializeRuleEntries"])(Object(_StyleOptionsState__WEBPACK_IMPORTED_MODULE_0__["getStyleOptions"])(), timeline[prop]), '}');
        }
    }
    var rules = rulesArray.join('');
    stylesheet.insertRule("@keyframes " + name + "{" + rules + "}", true);
    stylesheet.cacheClassName(name, rules, [], ['keyframes', rules]);
    return name;
}
//# sourceMappingURL=keyframes.js.map

/***/ }),

/***/ "ZINP":
/*!**********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/EventGroup.js ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: EventGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventGroup", function() { return EventGroup; });
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object */ "5vLE");

/** An instance of EventGroup allows anything with a handle to it to trigger events on it.
 *  If the target is an HTMLElement, the event will be attached to the element and can be
 *  triggered as usual (like clicking for onClick).
 *  The event can be triggered by calling EventGroup.raise() here. If the target is an
 *  HTMLElement, the event gets raised and is handled by the browser. Otherwise, it gets
 *  handled here in EventGroup, and the handler is called in the context of the parent
 *  (which is passed in in the constructor).
 *
 * @public
 * {@docCategory EventGroup}
 */
var EventGroup = /** @class */ (function () {
    /** parent: the context in which events attached to non-HTMLElements are called */
    function EventGroup(parent) {
        this._id = EventGroup._uniqueId++;
        this._parent = parent;
        this._eventRecords = [];
    }
    /** For IE8, bubbleEvent is ignored here and must be dealt with by the handler.
     *  Events raised here by default have bubbling set to false and cancelable set to true.
     *  This applies also to built-in events being raised manually here on HTMLElements,
     *  which may lead to unexpected behavior if it differs from the defaults.
     *
     */
    EventGroup.raise = function (target, eventName, eventArgs, bubbleEvent) {
        var retVal;
        if (EventGroup._isElement(target)) {
            if (typeof document !== 'undefined' && document.createEvent) {
                var ev = document.createEvent('HTMLEvents');
                ev.initEvent(eventName, bubbleEvent || false, true);
                Object(_object__WEBPACK_IMPORTED_MODULE_0__["assign"])(ev, eventArgs);
                retVal = target.dispatchEvent(ev);
            }
            else if (typeof document !== 'undefined' && document.createEventObject) {
                // IE8
                var evObj = document.createEventObject(eventArgs);
                // cannot set cancelBubble on evObj, fireEvent will overwrite it
                target.fireEvent('on' + eventName, evObj);
            }
        }
        else {
            while (target && retVal !== false) {
                var events = target.__events__;
                var eventRecords = events ? events[eventName] : null;
                if (eventRecords) {
                    for (var id in eventRecords) {
                        if (eventRecords.hasOwnProperty(id)) {
                            var eventRecordList = eventRecords[id];
                            for (var listIndex = 0; retVal !== false && listIndex < eventRecordList.length; listIndex++) {
                                var record = eventRecordList[listIndex];
                                if (record.objectCallback) {
                                    retVal = record.objectCallback.call(record.parent, eventArgs);
                                }
                            }
                        }
                    }
                }
                // If the target has a parent, bubble the event up.
                target = bubbleEvent ? target.parent : null;
            }
        }
        return retVal;
    };
    EventGroup.isObserved = function (target, eventName) {
        var events = target && target.__events__;
        return !!events && !!events[eventName];
    };
    /** Check to see if the target has declared support of the given event. */
    EventGroup.isDeclared = function (target, eventName) {
        var declaredEvents = target && target.__declaredEvents;
        return !!declaredEvents && !!declaredEvents[eventName];
    };
    EventGroup.stopPropagation = function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        }
        else {
            // IE8
            event.cancelBubble = true;
        }
    };
    EventGroup._isElement = function (target) {
        return (!!target && (!!target.addEventListener || (typeof HTMLElement !== 'undefined' && target instanceof HTMLElement)));
    };
    EventGroup.prototype.dispose = function () {
        if (!this._isDisposed) {
            this._isDisposed = true;
            this.off();
            this._parent = null;
        }
    };
    /** On the target, attach a set of events, where the events object is a name to function mapping. */
    EventGroup.prototype.onAll = function (target, events, useCapture) {
        for (var eventName in events) {
            if (events.hasOwnProperty(eventName)) {
                this.on(target, eventName, events[eventName], useCapture);
            }
        }
    };
    /**
     * On the target, attach an event whose handler will be called in the context of the parent
     * of this instance of EventGroup.
     */
    EventGroup.prototype.on = function (target, eventName, callback, options) {
        var _this = this;
        if (eventName.indexOf(',') > -1) {
            var events = eventName.split(/[ ,]+/);
            for (var i = 0; i < events.length; i++) {
                this.on(target, events[i], callback, options);
            }
        }
        else {
            var parent_1 = this._parent;
            var eventRecord = {
                target: target,
                eventName: eventName,
                parent: parent_1,
                callback: callback,
                options: options,
            };
            // Initialize and wire up the record on the target, so that it can call the callback if the event fires.
            var events = (target.__events__ = target.__events__ || {});
            events[eventName] =
                events[eventName] ||
                    {
                        count: 0,
                    };
            events[eventName][this._id] = events[eventName][this._id] || [];
            events[eventName][this._id].push(eventRecord);
            events[eventName].count++;
            if (EventGroup._isElement(target)) {
                var processElementEvent = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    if (_this._isDisposed) {
                        return;
                    }
                    var result;
                    try {
                        result = callback.apply(parent_1, args);
                        if (result === false && args[0]) {
                            var e = args[0];
                            if (e.preventDefault) {
                                e.preventDefault();
                            }
                            if (e.stopPropagation) {
                                e.stopPropagation();
                            }
                            e.cancelBubble = true;
                        }
                    }
                    catch (e) {
                        // ignore
                    }
                    return result;
                };
                eventRecord.elementCallback = processElementEvent;
                if (target.addEventListener) {
                    target.addEventListener(eventName, processElementEvent, options);
                }
                else if (target.attachEvent) {
                    // IE8
                    target.attachEvent('on' + eventName, processElementEvent);
                }
            }
            else {
                var processObjectEvent = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    if (_this._isDisposed) {
                        return;
                    }
                    return callback.apply(parent_1, args);
                };
                eventRecord.objectCallback = processObjectEvent;
            }
            // Remember the record locally, so that it can be removed.
            this._eventRecords.push(eventRecord);
        }
    };
    EventGroup.prototype.off = function (target, eventName, callback, options) {
        for (var i = 0; i < this._eventRecords.length; i++) {
            var eventRecord = this._eventRecords[i];
            if ((!target || target === eventRecord.target) &&
                (!eventName || eventName === eventRecord.eventName) &&
                (!callback || callback === eventRecord.callback) &&
                (typeof options !== 'boolean' || options === eventRecord.options)) {
                var events = eventRecord.target.__events__;
                var targetArrayLookup = events[eventRecord.eventName];
                var targetArray = targetArrayLookup ? targetArrayLookup[this._id] : null;
                // We may have already target's entries, so check for null.
                if (targetArray) {
                    if (targetArray.length === 1 || !callback) {
                        targetArrayLookup.count -= targetArray.length;
                        delete events[eventRecord.eventName][this._id];
                    }
                    else {
                        targetArrayLookup.count--;
                        targetArray.splice(targetArray.indexOf(eventRecord), 1);
                    }
                    if (!targetArrayLookup.count) {
                        delete events[eventRecord.eventName];
                    }
                }
                if (eventRecord.elementCallback) {
                    if (eventRecord.target.removeEventListener) {
                        eventRecord.target.removeEventListener(eventRecord.eventName, eventRecord.elementCallback, eventRecord.options);
                    }
                    else if (eventRecord.target.detachEvent) {
                        // IE8
                        eventRecord.target.detachEvent('on' + eventRecord.eventName, eventRecord.elementCallback);
                    }
                }
                this._eventRecords.splice(i--, 1);
            }
        }
    };
    /** Trigger the given event in the context of this instance of EventGroup. */
    EventGroup.prototype.raise = function (eventName, eventArgs, bubbleEvent) {
        return EventGroup.raise(this._parent, eventName, eventArgs, bubbleEvent);
    };
    /** Declare an event as being supported by this instance of EventGroup. */
    EventGroup.prototype.declare = function (event) {
        var declaredEvents = (this._parent.__declaredEvents = this._parent.__declaredEvents || {});
        if (typeof event === 'string') {
            declaredEvents[event] = true;
        }
        else {
            for (var i = 0; i < event.length; i++) {
                declaredEvents[event[i]] = true;
            }
        }
    };
    EventGroup._uniqueId = 0;
    return EventGroup;
}());

//# sourceMappingURL=EventGroup.js.map

/***/ }),

/***/ "ZSQe":
/*!**********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/dom/setPortalAttribute.js ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: DATA_PORTAL_ATTRIBUTE, setPortalAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fluentui_dom_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/dom-utilities */ "Doda");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DATA_PORTAL_ATTRIBUTE", function() { return _fluentui_dom_utilities__WEBPACK_IMPORTED_MODULE_0__["DATA_PORTAL_ATTRIBUTE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setPortalAttribute", function() { return _fluentui_dom_utilities__WEBPACK_IMPORTED_MODULE_0__["setPortalAttribute"]; });


//# sourceMappingURL=setPortalAttribute.js.map

/***/ }),

/***/ "aGpG":
/*!**************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@fluentui/dom-utilities@1.1.1/node_modules/@fluentui/dom-utilities/lib/isVirtualElement.js ***!
  \**************************************************************************************************************************************************/
/*! exports provided: isVirtualElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVirtualElement", function() { return isVirtualElement; });
/**
 * Determines whether or not an element has the virtual hierarchy extension.
 *
 * @public
 */
function isVirtualElement(element) {
    return element && !!element._virtual;
}
//# sourceMappingURL=isVirtualElement.js.map

/***/ }),

/***/ "aLKZ":
/*!****************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/merge-styles@7.19.1/node_modules/@uifabric/merge-styles/lib/version.js ***!
  \****************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uifabric_set_version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/set-version */ "Eyzw");
// Do not modify this file; it is generated as part of publish.
// The checked in version is a placeholder only and will not be updated.

Object(_uifabric_set_version__WEBPACK_IMPORTED_MODULE_0__["setVersion"])('@uifabric/merge-styles', '7.19.1');
//# sourceMappingURL=version.js.map

/***/ }),

/***/ "aULN":
/*!************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/styling@7.16.19_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/styling/lib/styles/zIndexes.js ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: ZIndexes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZIndexes", function() { return ZIndexes; });
var ZIndexes;
(function (ZIndexes) {
    ZIndexes.Nav = 1;
    /**
     * @deprecated ScrollablePane
     */
    ZIndexes.ScrollablePane = 1;
    ZIndexes.FocusStyle = 1;
    ZIndexes.Coachmark = 1000;
    ZIndexes.Layer = 1000000;
    ZIndexes.KeytipLayer = 1000001;
})(ZIndexes || (ZIndexes = {}));
//# sourceMappingURL=zIndexes.js.map

/***/ }),

/***/ "b2AN":
/*!*****************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/merge-styles@7.19.1/node_modules/@uifabric/merge-styles/lib/fontFace.js ***!
  \*****************************************************************************************************************************************/
/*! exports provided: fontFace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontFace", function() { return fontFace; });
/* harmony import */ var _StyleOptionsState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StyleOptionsState */ "V8pV");
/* harmony import */ var _Stylesheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Stylesheet */ "DPR3");
/* harmony import */ var _styleToClassName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styleToClassName */ "YlYl");



/**
 * Registers a font face.
 * @public
 */
function fontFace(font) {
    _Stylesheet__WEBPACK_IMPORTED_MODULE_1__["Stylesheet"].getInstance().insertRule("@font-face{" + Object(_styleToClassName__WEBPACK_IMPORTED_MODULE_2__["serializeRuleEntries"])(Object(_StyleOptionsState__WEBPACK_IMPORTED_MODULE_0__["getStyleOptions"])(), font) + "}", true);
}
//# sourceMappingURL=fontFace.js.map

/***/ }),

/***/ "cDcd":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_cDcd__;

/***/ }),

/***/ "dqzI":
/*!**************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/styling@7.16.19_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/styling/lib/index.js ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: AnimationClassNames, FontClassNames, ColorClassNames, AnimationStyles, AnimationVariables, DefaultPalette, DefaultEffects, DefaultFontStyles, registerDefaultFontFaces, FontSizes, FontWeights, IconFontSizes, createFontStyles, getFocusStyle, focusClear, getFocusOutlineStyle, getInputFocusStyle, hiddenContentStyle, PulsingBeaconAnimationStyles, getGlobalClassNames, getThemedContext, ThemeSettingName, getTheme, loadTheme, createTheme, registerOnThemeChangeCallback, removeOnThemeChangeCallback, HighContrastSelector, HighContrastSelectorWhite, HighContrastSelectorBlack, EdgeChromiumHighContrastSelector, ScreenWidthMinSmall, ScreenWidthMinMedium, ScreenWidthMinLarge, ScreenWidthMinXLarge, ScreenWidthMinXXLarge, ScreenWidthMinXXXLarge, ScreenWidthMaxSmall, ScreenWidthMaxMedium, ScreenWidthMaxLarge, ScreenWidthMaxXLarge, ScreenWidthMaxXXLarge, ScreenWidthMinUhfMobile, getScreenSelector, getEdgeChromiumNoHighContrastAdjustSelector, normalize, noWrap, getFadedOverflowStyle, getPlaceholderStyles, ZIndexes, buildClassMap, getIcon, registerIcons, registerIconAlias, unregisterIcons, setIconOptions, getIconClassName, InjectionMode, Stylesheet, concatStyleSets, concatStyleSetsWithProps, fontFace, keyframes, mergeStyleSets, mergeStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classNames_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classNames/index */ "8Un8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimationClassNames", function() { return _classNames_index__WEBPACK_IMPORTED_MODULE_0__["AnimationClassNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontClassNames", function() { return _classNames_index__WEBPACK_IMPORTED_MODULE_0__["FontClassNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorClassNames", function() { return _classNames_index__WEBPACK_IMPORTED_MODULE_0__["ColorClassNames"]; });

/* harmony import */ var _styles_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/index */ "YWaz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimationStyles", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["AnimationStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimationVariables", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["AnimationVariables"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultPalette", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["DefaultPalette"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultEffects", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["DefaultEffects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultFontStyles", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["DefaultFontStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerDefaultFontFaces", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["registerDefaultFontFaces"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontSizes", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["FontSizes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontWeights", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["FontWeights"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconFontSizes", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["IconFontSizes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFontStyles", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["createFontStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFocusStyle", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["getFocusStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "focusClear", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["focusClear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFocusOutlineStyle", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["getFocusOutlineStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInputFocusStyle", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["getInputFocusStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hiddenContentStyle", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["hiddenContentStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PulsingBeaconAnimationStyles", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["PulsingBeaconAnimationStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGlobalClassNames", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["getGlobalClassNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getThemedContext", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["getThemedContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeSettingName", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["ThemeSettingName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTheme", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["getTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadTheme", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["loadTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTheme", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["createTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerOnThemeChangeCallback", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["registerOnThemeChangeCallback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeOnThemeChangeCallback", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["removeOnThemeChangeCallback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HighContrastSelector", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HighContrastSelectorWhite", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelectorWhite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HighContrastSelectorBlack", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelectorBlack"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EdgeChromiumHighContrastSelector", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["EdgeChromiumHighContrastSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinSmall", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["ScreenWidthMinSmall"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinMedium", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["ScreenWidthMinMedium"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinLarge", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["ScreenWidthMinLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinXLarge", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["ScreenWidthMinXLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinXXLarge", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["ScreenWidthMinXXLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinXXXLarge", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["ScreenWidthMinXXXLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxSmall", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["ScreenWidthMaxSmall"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxMedium", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["ScreenWidthMaxMedium"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxLarge", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["ScreenWidthMaxLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxXLarge", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["ScreenWidthMaxXLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxXXLarge", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["ScreenWidthMaxXXLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinUhfMobile", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["ScreenWidthMinUhfMobile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getScreenSelector", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["getScreenSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEdgeChromiumNoHighContrastAdjustSelector", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["getEdgeChromiumNoHighContrastAdjustSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["normalize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noWrap", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["noWrap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFadedOverflowStyle", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["getFadedOverflowStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPlaceholderStyles", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["getPlaceholderStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ZIndexes", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["ZIndexes"]; });

/* harmony import */ var _utilities_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities/index */ "YUCC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildClassMap", function() { return _utilities_index__WEBPACK_IMPORTED_MODULE_2__["buildClassMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIcon", function() { return _utilities_index__WEBPACK_IMPORTED_MODULE_2__["getIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerIcons", function() { return _utilities_index__WEBPACK_IMPORTED_MODULE_2__["registerIcons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerIconAlias", function() { return _utilities_index__WEBPACK_IMPORTED_MODULE_2__["registerIconAlias"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unregisterIcons", function() { return _utilities_index__WEBPACK_IMPORTED_MODULE_2__["unregisterIcons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setIconOptions", function() { return _utilities_index__WEBPACK_IMPORTED_MODULE_2__["setIconOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIconClassName", function() { return _utilities_index__WEBPACK_IMPORTED_MODULE_2__["getIconClassName"]; });

/* harmony import */ var _MergeStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MergeStyles */ "D+h3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InjectionMode", function() { return _MergeStyles__WEBPACK_IMPORTED_MODULE_3__["InjectionMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Stylesheet", function() { return _MergeStyles__WEBPACK_IMPORTED_MODULE_3__["Stylesheet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concatStyleSets", function() { return _MergeStyles__WEBPACK_IMPORTED_MODULE_3__["concatStyleSets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concatStyleSetsWithProps", function() { return _MergeStyles__WEBPACK_IMPORTED_MODULE_3__["concatStyleSetsWithProps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontFace", function() { return _MergeStyles__WEBPACK_IMPORTED_MODULE_3__["fontFace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return _MergeStyles__WEBPACK_IMPORTED_MODULE_3__["keyframes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeStyleSets", function() { return _MergeStyles__WEBPACK_IMPORTED_MODULE_3__["mergeStyleSets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeStyles", function() { return _MergeStyles__WEBPACK_IMPORTED_MODULE_3__["mergeStyles"]; });

/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./version */ "Is1m");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/theme */ "Oqak");





// Ensure theme is initialized when this package is referenced.

Object(_styles_theme__WEBPACK_IMPORTED_MODULE_5__["initializeThemeInCustomizations"])();
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "eA0L":
/*!************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@fluentui/theme@1.7.1_c129be21209ec549b9ba61bf76d54bcc/node_modules/@fluentui/theme/lib/colors/DefaultPalette.js ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: DefaultPalette */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultPalette", function() { return DefaultPalette; });
// When adding or removing a color, make sure you keep this consistent with IColorClassNames
// by adding the color variants.
var DefaultPalette = {
    themeDarker: '#004578',
    themeDark: '#005a9e',
    themeDarkAlt: '#106ebe',
    themePrimary: '#0078d4',
    themeSecondary: '#2b88d8',
    themeTertiary: '#71afe5',
    themeLight: '#c7e0f4',
    themeLighter: '#deecf9',
    themeLighterAlt: '#eff6fc',
    black: '#000000',
    blackTranslucent40: 'rgba(0,0,0,.4)',
    neutralDark: '#201f1e',
    neutralPrimary: '#323130',
    neutralPrimaryAlt: '#3b3a39',
    neutralSecondary: '#605e5c',
    neutralSecondaryAlt: '#8a8886',
    neutralTertiary: '#a19f9d',
    neutralTertiaryAlt: '#c8c6c4',
    neutralQuaternary: '#d2d0ce',
    neutralQuaternaryAlt: '#e1dfdd',
    neutralLight: '#edebe9',
    neutralLighter: '#f3f2f1',
    neutralLighterAlt: '#faf9f8',
    accent: '#0078d4',
    white: '#ffffff',
    whiteTranslucent40: 'rgba(255,255,255,.4)',
    yellowDark: '#d29200',
    yellow: '#ffb900',
    yellowLight: '#fff100',
    orange: '#d83b01',
    orangeLight: '#ea4300',
    orangeLighter: '#ff8c00',
    redDark: '#a4262c',
    red: '#e81123',
    magentaDark: '#5c005c',
    magenta: '#b4009e',
    magentaLight: '#e3008c',
    purpleDark: '#32145a',
    purple: '#5c2d91',
    purpleLight: '#b4a0ff',
    blueDark: '#002050',
    blueMid: '#00188f',
    blue: '#0078d4',
    blueLight: '#00bcf2',
    tealDark: '#004b50',
    teal: '#008272',
    tealLight: '#00b294',
    greenDark: '#004b1c',
    green: '#107c10',
    greenLight: '#bad80a',
};
//# sourceMappingURL=DefaultPalette.js.map

/***/ }),

/***/ "enY7":
/*!*******************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/asAsync.js ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: asAsync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asAsync", function() { return asAsync; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/**
 * asAsync - a HOC for async loading components.
 *
 * Usage:
 *
 * const AsyncDialog = asAsync({
 *   load: () => import('Dialog').then(result => result.default),
 * });
 *
 * React.render(domElement, <AsyncDialog asyncPlaceholder={ () => <Spinner/> } { ...dialogProps } />);
 *
 * Note the `asyncPlaceholder` prop will be respected when rendering the async component and it hasn't
 * been loaded yet.
 */


/**
 * If possible, use a WeakMap to maintain a cache of loaded components.
 * This can be used to synchronously render components that have already been loaded,
 * rather than having to wait for at least one async tick.
 */
var _syncModuleCache = typeof WeakMap !== 'undefined'
    ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
        new WeakMap()
    : undefined;
/**
 * Produces a component which internally loads the target component before first mount.
 * The component passes all props through to the loaded component.
 *
 * This overload accepts a module with a default export for the component.
 */
function asAsync(options) {
    var Async = /** @class */ (function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Async, _super);
        function Async() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = {
                Component: _syncModuleCache ? _syncModuleCache.get(options.load) : undefined,
            };
            return _this;
        }
        Async.prototype.render = function () {
            // Typescript issue: the rest can't be pulled without the any cast, as TypeScript fails with rest on generics.
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var _a = this.props, forwardedRef = _a.forwardedRef, Placeholder = _a.asyncPlaceholder, rest = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["forwardedRef", "asyncPlaceholder"]);
            var Component = this.state.Component;
            return Component ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Component, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, rest), { ref: forwardedRef }))) : Placeholder ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Placeholder, null)) : null;
        };
        Async.prototype.componentDidMount = function () {
            var _this = this;
            var Component = this.state.Component;
            if (!Component) {
                options
                    .load()
                    .then(function (LoadedComponent) {
                    if (LoadedComponent) {
                        // Cache component for future reference.
                        _syncModuleCache && _syncModuleCache.set(options.load, LoadedComponent);
                        // Set state.
                        _this.setState({
                            Component: LoadedComponent,
                        }, options.onLoad);
                    }
                })
                    .catch(options.onError);
            }
        };
        return Async;
    }(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
    return react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"](function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Async, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props, { forwardedRef: ref })); });
}
//# sourceMappingURL=asAsync.js.map

/***/ }),

/***/ "f43f":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/customizations/mergeCustomizations.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: mergeCustomizations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeCustomizations", function() { return mergeCustomizations; });
/* harmony import */ var _mergeSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mergeSettings */ "yPdX");

/**
 * Merge props and customizations giving priority to props over context.
 * NOTE: This function will always perform multiple merge operations. Use with caution.
 * @param props - New settings to merge in.
 * @param parentContext - Context containing current settings.
 * @returns Merged customizations.
 */
function mergeCustomizations(props, parentContext) {
    var _a = (parentContext || {}).customizations, customizations = _a === void 0 ? { settings: {}, scopedSettings: {} } : _a;
    return {
        customizations: {
            settings: Object(_mergeSettings__WEBPACK_IMPORTED_MODULE_0__["mergeSettings"])(customizations.settings, props.settings),
            scopedSettings: Object(_mergeSettings__WEBPACK_IMPORTED_MODULE_0__["mergeScopedSettings"])(customizations.scopedSettings, props.scopedSettings),
            inCustomizerContext: true,
        },
    };
}
//# sourceMappingURL=mergeCustomizations.js.map

/***/ }),

/***/ "fUmS":
/*!*****************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/styling@7.16.19_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/styling/lib/styles/GeneralStyles.js ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: normalize, noWrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noWrap", function() { return noWrap; });
// This file mimics styles and mixins from _General.Mixins.scss
var normalize = {
    boxShadow: 'none',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
};
var noWrap = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
};
//# sourceMappingURL=GeneralStyles.js.map

/***/ }),

/***/ "flwP":
/*!***********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/styling@7.16.19_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/styling/lib/utilities/getIconClassName.js ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: getIconClassName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIconClassName", function() { return getIconClassName; });
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/merge-styles */ "7Xpn");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons */ "FaL/");


var defaultIconStyles = {
    display: 'inline-block',
};
/**
 * Gets an icon classname. You should be able to add this classname to an I tag with no
 * additional classnames, and render the icon.
 *
 * @public
 */
function getIconClassName(name) {
    var className = '';
    var icon = Object(_icons__WEBPACK_IMPORTED_MODULE_1__["getIcon"])(name);
    if (icon) {
        className = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["mergeStyles"])(icon.subset.className, defaultIconStyles, {
            selectors: {
                '::before': {
                    content: "\"" + icon.code + "\"",
                },
            },
        });
    }
    return className;
}
//# sourceMappingURL=getIconClassName.js.map

/***/ }),

/***/ "g1LM":
/*!*************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@fluentui/theme@1.7.1_c129be21209ec549b9ba61bf76d54bcc/node_modules/@fluentui/theme/lib/spacing/DefaultSpacing.js ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: DefaultSpacing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultSpacing", function() { return DefaultSpacing; });
var DefaultSpacing = {
    s2: '4px',
    s1: '8px',
    m: '16px',
    l1: '20px',
    l2: '32px',
};
//# sourceMappingURL=DefaultSpacing.js.map

/***/ }),

/***/ "gWET":
/*!******************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/string.js ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: format */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
// Regex that finds { and } so they can be removed on a lookup for string format
var FORMAT_ARGS_REGEX = /[\{\}]/g;
// Regex that finds {#} so it can be replaced by the arguments in string format
var FORMAT_REGEX = /\{\d+\}/g;
/**
 * String format method, used for scenarios where at runtime you
 * need to evaluate a formatted string given a tokenized string. This
 * usually only is needed in localization scenarios.

 * @example
 * ```tsx
 * "I love {0} every {1}".format("CXP")
 * ```
 * will result in a Debug Exception.
 *
 * @public
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function format(s) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    var args = values;
    // Callback match function
    function replaceFunc(match) {
        // looks up in the args
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var replacement = args[match.replace(FORMAT_ARGS_REGEX, '')];
        // catches undefined in nondebug and null in debug and nondebug
        if (replacement === null || replacement === undefined) {
            replacement = '';
        }
        return replacement;
    }
    return s.replace(FORMAT_REGEX, replaceFunc);
}
//# sourceMappingURL=string.js.map

/***/ }),

/***/ "gh5T":
/*!**********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/osDetector.js ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: isMac */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMac", function() { return isMac; });
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/getWindow */ "jfaJ");

var isMacResult;
/**
 * Returns true if the user is on a Mac. Caches the result value.
 * @param reset - Reset the cached result value (mainly for testing).
 */
function isMac(reset) {
    if (typeof isMacResult === 'undefined' || reset) {
        var win = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
        var userAgent = win && win.navigator.userAgent;
        isMacResult = !!userAgent && userAgent.indexOf('Macintosh') !== -1;
    }
    return !!isMacResult;
}
//# sourceMappingURL=osDetector.js.map

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

/***/ "hAUA":
/*!************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/ie11Detector.js ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: isIE11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIE11", function() { return isIE11; });
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/getWindow */ "jfaJ");

var isIE11 = function () {
    var _a, _b;
    var win = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
    if (!((_b = (_a = win) === null || _a === void 0 ? void 0 : _a.navigator) === null || _b === void 0 ? void 0 : _b.userAgent)) {
        return false;
    }
    return win.navigator.userAgent.indexOf('rv:11.0') > -1;
};
//# sourceMappingURL=ie11Detector.js.map

/***/ }),

/***/ "hTVl":
/*!**************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@fluentui/theme@1.7.1_c129be21209ec549b9ba61bf76d54bcc/node_modules/@fluentui/theme/lib/fonts/index.js ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: LocalizedFontNames, LocalizedFontFamilies, FontSizes, FontWeights, IconFontSizes, createFontStyles, DefaultFontStyles, registerDefaultFontFaces */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FluentFonts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FluentFonts */ "myQz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalizedFontNames", function() { return _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalizedFontFamilies", function() { return _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontSizes", function() { return _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontSizes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontWeights", function() { return _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontWeights"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconFontSizes", function() { return _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["IconFontSizes"]; });

/* harmony import */ var _createFontStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createFontStyles */ "Qt/S");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFontStyles", function() { return _createFontStyles__WEBPACK_IMPORTED_MODULE_1__["createFontStyles"]; });

/* harmony import */ var _DefaultFontStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DefaultFontStyles */ "2R51");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultFontStyles", function() { return _DefaultFontStyles__WEBPACK_IMPORTED_MODULE_2__["DefaultFontStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerDefaultFontFaces", function() { return _DefaultFontStyles__WEBPACK_IMPORTED_MODULE_2__["registerDefaultFontFaces"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "iDCg":
/*!*************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/selection/Selection.types.js ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: SELECTION_CHANGE, SelectionMode, SelectionDirection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTION_CHANGE", function() { return SELECTION_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionMode", function() { return SelectionMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionDirection", function() { return SelectionDirection; });
var SELECTION_CHANGE = 'change';
/**
 * {@docCategory Selection}
 */
var SelectionMode;
(function (SelectionMode) {
    SelectionMode[SelectionMode["none"] = 0] = "none";
    SelectionMode[SelectionMode["single"] = 1] = "single";
    SelectionMode[SelectionMode["multiple"] = 2] = "multiple";
})(SelectionMode || (SelectionMode = {}));
/**
 * {@docCategory Selection}
 */
var SelectionDirection;
(function (SelectionDirection) {
    SelectionDirection[SelectionDirection["horizontal"] = 0] = "horizontal";
    SelectionDirection[SelectionDirection["vertical"] = 1] = "vertical";
})(SelectionDirection || (SelectionDirection = {}));
//# sourceMappingURL=Selection.types.js.map

/***/ }),

/***/ "j+j+":
/*!**************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/merge-styles@7.19.1/node_modules/@uifabric/merge-styles/lib/extractStyleParts.js ***!
  \**************************************************************************************************************************************************/
/*! exports provided: extractStyleParts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractStyleParts", function() { return extractStyleParts; });
/* harmony import */ var _Stylesheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Stylesheet */ "DPR3");

/**
 * Separates the classes and style objects. Any classes that are pre-registered
 * args are auto expanded into objects.
 */
function extractStyleParts() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var classes = [];
    var objects = [];
    var stylesheet = _Stylesheet__WEBPACK_IMPORTED_MODULE_0__["Stylesheet"].getInstance();
    function _processArgs(argsList) {
        for (var _i = 0, argsList_1 = argsList; _i < argsList_1.length; _i++) {
            var arg = argsList_1[_i];
            if (arg) {
                if (typeof arg === 'string') {
                    if (arg.indexOf(' ') >= 0) {
                        _processArgs(arg.split(' '));
                    }
                    else {
                        var translatedArgs = stylesheet.argsFromClassName(arg);
                        if (translatedArgs) {
                            _processArgs(translatedArgs);
                        }
                        else {
                            // Avoid adding the same class twice.
                            if (classes.indexOf(arg) === -1) {
                                classes.push(arg);
                            }
                        }
                    }
                }
                else if (Array.isArray(arg)) {
                    _processArgs(arg);
                }
                else if (typeof arg === 'object') {
                    objects.push(arg);
                }
            }
        }
    }
    _processArgs(args);
    return {
        classes: classes,
        objects: objects,
    };
}
//# sourceMappingURL=extractStyleParts.js.map

/***/ }),

/***/ "j9DQ":
/*!*************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@fluentui/dom-utilities@1.1.1/node_modules/@fluentui/dom-utilities/lib/elementContains.js ***!
  \*************************************************************************************************************************************************/
/*! exports provided: elementContains */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementContains", function() { return elementContains; });
/* harmony import */ var _getParent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getParent */ "j9TH");

/**
 * Determines whether or not a parent element contains a given child element.
 * If `allowVirtualParents` is true, this method may return `true` if the child
 * has the parent in its virtual element hierarchy.
 *
 * @public
 */
function elementContains(parent, child, allowVirtualParents) {
    if (allowVirtualParents === void 0) { allowVirtualParents = true; }
    var isContained = false;
    if (parent && child) {
        if (allowVirtualParents) {
            if (parent === child) {
                isContained = true;
            }
            else {
                isContained = false;
                while (child) {
                    var nextParent = Object(_getParent__WEBPACK_IMPORTED_MODULE_0__["getParent"])(child);
                    if (nextParent === parent) {
                        isContained = true;
                        break;
                    }
                    child = nextParent;
                }
            }
        }
        else if (parent.contains) {
            isContained = parent.contains(child);
        }
    }
    return isContained;
}
//# sourceMappingURL=elementContains.js.map

/***/ }),

/***/ "j9TH":
/*!*******************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@fluentui/dom-utilities@1.1.1/node_modules/@fluentui/dom-utilities/lib/getParent.js ***!
  \*******************************************************************************************************************************************/
/*! exports provided: getParent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParent", function() { return getParent; });
/* harmony import */ var _getVirtualParent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getVirtualParent */ "JEWn");

/**
 * Gets the element which is the parent of a given element.
 * If `allowVirtuaParents` is `true`, this method prefers the virtual parent over
 * real DOM parent when present.
 *
 * @public
 */
function getParent(child, allowVirtualParents) {
    if (allowVirtualParents === void 0) { allowVirtualParents = true; }
    return (child &&
        ((allowVirtualParents && Object(_getVirtualParent__WEBPACK_IMPORTED_MODULE_0__["getVirtualParent"])(child)) || (child.parentNode && child.parentNode)));
}
//# sourceMappingURL=getParent.js.map

/***/ }),

/***/ "jOlS":
/*!************************************************!*\
  !*** external "@microsoft/load-themed-styles" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_jOlS__;

/***/ }),

/***/ "jfaJ":
/*!*************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/dom/getWindow.js ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: getWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWindow", function() { return getWindow; });
/* harmony import */ var _setSSR__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setSSR */ "q6T1");

var _window = undefined;
// Note: Accessing "window" in IE11 is somewhat expensive, and calling "typeof window"
// hits a memory leak, whereas aliasing it and calling "typeof _window" does not.
// Caching the window value at the file scope lets us minimize the impact.
try {
    _window = window;
}
catch (e) {
    /* no-op */
}
/**
 * Helper to get the window object. The helper will make sure to use a cached variable
 * of "window", to avoid overhead and memory leaks in IE11. Note that in popup scenarios the
 * window object won't match the "global" window object, and for these scenarios, you should
 * pass in an element hosted within the popup.
 *
 * @public
 */
function getWindow(rootElement) {
    if (_setSSR__WEBPACK_IMPORTED_MODULE_0__["_isSSR"] || typeof _window === 'undefined') {
        return undefined;
    }
    else {
        var el = rootElement;
        return el && el.ownerDocument && el.ownerDocument.defaultView ? el.ownerDocument.defaultView : _window;
    }
}
//# sourceMappingURL=getWindow.js.map

/***/ }),

/***/ "k+gr":
/*!***********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/styling@7.16.19_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/styling/lib/styles/getGlobalClassNames.js ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: getGlobalClassNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGlobalClassNames", function() { return getGlobalClassNames; });
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/merge-styles */ "7Xpn");
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uifabric/utilities */ "P2cQ");


/**
 * Internal memoized function which simply takes in the class map and the
 * disable boolean. These immutable values can be memoized.
 */
var _getGlobalClassNames = Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["memoizeFunction"])(function (classNames, disableGlobalClassNames) {
    var styleSheet = _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["Stylesheet"].getInstance();
    if (disableGlobalClassNames) {
        // disable global classnames
        return Object.keys(classNames).reduce(function (acc, className) {
            acc[className] = styleSheet.getClassName(classNames[className]);
            return acc;
        }, {});
    }
    // use global classnames
    return classNames;
});
/**
 * Checks for the `disableGlobalClassNames` property on the `theme` to determine if it should return `classNames`
 * Note that calls to this function are memoized.
 *
 * @param classNames - The collection of global class names that apply when the flag is false. Make sure to pass in
 * the same instance on each call to benefit from memoization.
 * @param theme - The theme to check the flag on
 * @param disableGlobalClassNames - Optional. Explicitly opt in/out of disabling global classnames. Defaults to false.
 */
function getGlobalClassNames(classNames, theme, disableGlobalClassNames) {
    return _getGlobalClassNames(classNames, disableGlobalClassNames !== undefined ? disableGlobalClassNames : theme.disableGlobalClassNames);
}
//# sourceMappingURL=getGlobalClassNames.js.map

/***/ }),

/***/ "k11K":
/*!****************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/warn.js ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: warn, setWarningCallback, warnConditionallyRequiredProps, resetControlledWarnings, warnControlledUsage, warnDeprecations, warnMutuallyExclusive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _warn_warn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warn/warn */ "6dJl");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warn", function() { return _warn_warn__WEBPACK_IMPORTED_MODULE_0__["warn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setWarningCallback", function() { return _warn_warn__WEBPACK_IMPORTED_MODULE_0__["setWarningCallback"]; });

/* harmony import */ var _warn_warnConditionallyRequiredProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./warn/warnConditionallyRequiredProps */ "8ffK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warnConditionallyRequiredProps", function() { return _warn_warnConditionallyRequiredProps__WEBPACK_IMPORTED_MODULE_1__["warnConditionallyRequiredProps"]; });

/* harmony import */ var _warn_warnControlledUsage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./warn/warnControlledUsage */ "3Pxt");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetControlledWarnings", function() { return _warn_warnControlledUsage__WEBPACK_IMPORTED_MODULE_2__["resetControlledWarnings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warnControlledUsage", function() { return _warn_warnControlledUsage__WEBPACK_IMPORTED_MODULE_2__["warnControlledUsage"]; });

/* harmony import */ var _warn_warnDeprecations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./warn/warnDeprecations */ "Fx0A");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warnDeprecations", function() { return _warn_warnDeprecations__WEBPACK_IMPORTED_MODULE_3__["warnDeprecations"]; });

/* harmony import */ var _warn_warnMutuallyExclusive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./warn/warnMutuallyExclusive */ "AnRT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warnMutuallyExclusive", function() { return _warn_warnMutuallyExclusive__WEBPACK_IMPORTED_MODULE_4__["warnMutuallyExclusive"]; });






//# sourceMappingURL=warn.js.map

/***/ }),

/***/ "kzNh":
/*!********************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/merge-styles@7.19.1/node_modules/@uifabric/merge-styles/lib/transforms/provideUnits.js ***!
  \********************************************************************************************************************************************************/
/*! exports provided: provideUnits */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provideUnits", function() { return provideUnits; });
var NON_PIXEL_NUMBER_PROPS = [
    'column-count',
    'font-weight',
    'flex',
    'flex-grow',
    'flex-shrink',
    'fill-opacity',
    'opacity',
    'order',
    'z-index',
    'zoom',
];
function provideUnits(rulePairs, index) {
    var name = rulePairs[index];
    var value = rulePairs[index + 1];
    if (typeof value === 'number') {
        var isNonPixelProp = NON_PIXEL_NUMBER_PROPS.indexOf(name) > -1;
        var isVariableOrPrefixed = name.indexOf('--') > -1;
        var unit = isNonPixelProp || isVariableOrPrefixed ? '' : 'px';
        rulePairs[index + 1] = "" + value + unit;
    }
}
//# sourceMappingURL=provideUnits.js.map

/***/ }),

/***/ "l7Dq":
/*!********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/dom/isVirtualElement.js ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: isVirtualElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fluentui_dom_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/dom-utilities */ "Doda");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isVirtualElement", function() { return _fluentui_dom_utilities__WEBPACK_IMPORTED_MODULE_0__["isVirtualElement"]; });


//# sourceMappingURL=isVirtualElement.js.map

/***/ }),

/***/ "ljbO":
/*!********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/styling@7.16.19_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/styling/lib/utilities/buildClassMap.js ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: buildClassMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildClassMap", function() { return buildClassMap; });
/* harmony import */ var _MergeStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../MergeStyles */ "D+h3");

/**
 * Builds a class names object from a given map.
 *
 * @param styles - Map of unprocessed styles.
 * @returns Map of property name to class name.
 */
function buildClassMap(styles) {
    var classes = {};
    var _loop_1 = function (styleName) {
        if (styles.hasOwnProperty(styleName)) {
            var className_1;
            Object.defineProperty(classes, styleName, {
                get: function () {
                    if (className_1 === undefined) {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        className_1 = Object(_MergeStyles__WEBPACK_IMPORTED_MODULE_0__["mergeStyles"])(styles[styleName]).toString();
                    }
                    return className_1;
                },
                enumerable: true,
                configurable: true,
            });
        }
    };
    for (var styleName in styles) {
        _loop_1(styleName);
    }
    return classes;
}
//# sourceMappingURL=buildClassMap.js.map

/***/ }),

/***/ "m5sl":
/*!**********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/initializeComponentRef.js ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: initializeComponentRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeComponentRef", function() { return initializeComponentRef; });
/* harmony import */ var _extendComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extendComponent */ "X7hZ");

/**
 * Helper to manage componentRef resolution. Internally appends logic to
 * lifetime methods to resolve componentRef to the passed in object.
 *
 * Usage: call initializeComponentRef(this) in the constructor,
 */
function initializeComponentRef(obj) {
    Object(_extendComponent__WEBPACK_IMPORTED_MODULE_0__["extendComponent"])(obj, {
        componentDidMount: _onMount,
        componentDidUpdate: _onUpdate,
        componentWillUnmount: _onUnmount,
    });
}
function _onMount() {
    _setComponentRef(this.props.componentRef, this);
}
function _onUpdate(prevProps) {
    if (prevProps.componentRef !== this.props.componentRef) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        _setComponentRef(prevProps.componentRef, null);
        _setComponentRef(this.props.componentRef, this);
    }
}
function _onUnmount() {
    _setComponentRef(this.props.componentRef, null);
}
function _setComponentRef(componentRef, value) {
    if (componentRef) {
        if (typeof componentRef === 'object') {
            componentRef.current = value;
        }
        else if (typeof componentRef === 'function') {
            componentRef(value);
        }
    }
}
//# sourceMappingURL=initializeComponentRef.js.map

/***/ }),

/***/ "mCP2":
/*!************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/renderFunction/composeRenderFunction.js ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: composeRenderFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "composeRenderFunction", function() { return composeRenderFunction; });
/* harmony import */ var _memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../memoize */ "BYBg");

function createComposedRenderFunction(outer) {
    var outerMemoizer = Object(_memoize__WEBPACK_IMPORTED_MODULE_0__["createMemoizer"])(function (inner) {
        var innerMemoizer = Object(_memoize__WEBPACK_IMPORTED_MODULE_0__["createMemoizer"])(function (defaultRender) {
            return function (innerProps) {
                return inner(innerProps, defaultRender);
            };
        });
        return function (outerProps, defaultRender) {
            return outer(outerProps, defaultRender ? innerMemoizer(defaultRender) : inner);
        };
    });
    return outerMemoizer;
}
var memoizer = Object(_memoize__WEBPACK_IMPORTED_MODULE_0__["createMemoizer"])(createComposedRenderFunction);
/**
 * Composes two 'render functions' to produce a final render function that renders
 * the outer function, passing the inner function as 'default render'. The inner function
 * is then passed the original 'default render' prop.
 * @public
 */
function composeRenderFunction(outer, inner) {
    return memoizer(outer)(inner);
}
//# sourceMappingURL=composeRenderFunction.js.map

/***/ }),

/***/ "mS7z":
/*!*****************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/Async.js ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: Async */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Async", function() { return Async; });
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/getWindow */ "jfaJ");

/**
 * Bugs often appear in async code when stuff gets disposed, but async operations don't get canceled.
 * This Async helper class solves these issues by tying async code to the lifetime of a disposable object.
 *
 * Usage: Anything class extending from BaseModel can access this helper via this.async. Otherwise create a
 * new instance of the class and remember to call dispose() during your code's dispose handler.
 *
 * @public
 */
var Async = /** @class */ (function () {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function Async(parent, onError) {
        this._timeoutIds = null;
        this._immediateIds = null;
        this._intervalIds = null;
        this._animationFrameIds = null;
        this._isDisposed = false;
        this._parent = parent || null;
        this._onErrorHandler = onError;
        this._noop = function () {
            /* do nothing */
        };
    }
    /**
     * Dispose function, clears all async operations.
     */
    Async.prototype.dispose = function () {
        var id;
        this._isDisposed = true;
        this._parent = null;
        // Clear timeouts.
        if (this._timeoutIds) {
            for (id in this._timeoutIds) {
                if (this._timeoutIds.hasOwnProperty(id)) {
                    this.clearTimeout(parseInt(id, 10));
                }
            }
            this._timeoutIds = null;
        }
        // Clear immediates.
        if (this._immediateIds) {
            for (id in this._immediateIds) {
                if (this._immediateIds.hasOwnProperty(id)) {
                    this.clearImmediate(parseInt(id, 10));
                }
            }
            this._immediateIds = null;
        }
        // Clear intervals.
        if (this._intervalIds) {
            for (id in this._intervalIds) {
                if (this._intervalIds.hasOwnProperty(id)) {
                    this.clearInterval(parseInt(id, 10));
                }
            }
            this._intervalIds = null;
        }
        // Clear animation frames.
        if (this._animationFrameIds) {
            for (id in this._animationFrameIds) {
                if (this._animationFrameIds.hasOwnProperty(id)) {
                    this.cancelAnimationFrame(parseInt(id, 10));
                }
            }
            this._animationFrameIds = null;
        }
    };
    /**
     * SetTimeout override, which will auto cancel the timeout during dispose.
     * @param callback - Callback to execute.
     * @param duration - Duration in milliseconds.
     * @returns The setTimeout id.
     */
    Async.prototype.setTimeout = function (callback, duration) {
        var _this = this;
        var timeoutId = 0;
        if (!this._isDisposed) {
            if (!this._timeoutIds) {
                this._timeoutIds = {};
            }
            timeoutId = setTimeout(function () {
                // Time to execute the timeout, enqueue it as a foreground task to be executed.
                try {
                    // Now delete the record and call the callback.
                    if (_this._timeoutIds) {
                        delete _this._timeoutIds[timeoutId];
                    }
                    callback.apply(_this._parent);
                }
                catch (e) {
                    if (_this._onErrorHandler) {
                        _this._onErrorHandler(e);
                    }
                }
            }, duration);
            this._timeoutIds[timeoutId] = true;
        }
        return timeoutId;
    };
    /**
     * Clears the timeout.
     * @param id - Id to cancel.
     */
    Async.prototype.clearTimeout = function (id) {
        if (this._timeoutIds && this._timeoutIds[id]) {
            clearTimeout(id);
            delete this._timeoutIds[id];
        }
    };
    /**
     * SetImmediate override, which will auto cancel the immediate during dispose.
     * @param callback - Callback to execute.
     * @param targetElement - Optional target element to use for identifying the correct window.
     * @returns The setTimeout id.
     */
    Async.prototype.setImmediate = function (callback, targetElement) {
        var _this = this;
        var immediateId = 0;
        var win = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__["getWindow"])(targetElement);
        if (!this._isDisposed) {
            if (!this._immediateIds) {
                this._immediateIds = {};
            }
            var setImmediateCallback = function () {
                // Time to execute the timeout, enqueue it as a foreground task to be executed.
                try {
                    // Now delete the record and call the callback.
                    if (_this._immediateIds) {
                        delete _this._immediateIds[immediateId];
                    }
                    callback.apply(_this._parent);
                }
                catch (e) {
                    _this._logError(e);
                }
            };
            immediateId = win.setTimeout(setImmediateCallback, 0);
            this._immediateIds[immediateId] = true;
        }
        return immediateId;
    };
    /**
     * Clears the immediate.
     * @param id - Id to cancel.
     * @param targetElement - Optional target element to use for identifying the correct window.
     */
    Async.prototype.clearImmediate = function (id, targetElement) {
        var win = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__["getWindow"])(targetElement);
        if (this._immediateIds && this._immediateIds[id]) {
            win.clearTimeout(id);
            delete this._immediateIds[id];
        }
    };
    /**
     * SetInterval override, which will auto cancel the timeout during dispose.
     * @param callback - Callback to execute.
     * @param duration - Duration in milliseconds.
     * @returns The setTimeout id.
     */
    Async.prototype.setInterval = function (callback, duration) {
        var _this = this;
        var intervalId = 0;
        if (!this._isDisposed) {
            if (!this._intervalIds) {
                this._intervalIds = {};
            }
            intervalId = setInterval(function () {
                // Time to execute the interval callback, enqueue it as a foreground task to be executed.
                try {
                    callback.apply(_this._parent);
                }
                catch (e) {
                    _this._logError(e);
                }
            }, duration);
            this._intervalIds[intervalId] = true;
        }
        return intervalId;
    };
    /**
     * Clears the interval.
     * @param id - Id to cancel.
     */
    Async.prototype.clearInterval = function (id) {
        if (this._intervalIds && this._intervalIds[id]) {
            clearInterval(id);
            delete this._intervalIds[id];
        }
    };
    /**
     * Creates a function that, when executed, will only call the func function at most once per
     * every wait milliseconds. Provide an options object to indicate that func should be invoked
     * on the leading and/or trailing edge of the wait timeout. Subsequent calls to the throttled
     * function will return the result of the last func call.
     *
     * Note: If leading and trailing options are true func will be called on the trailing edge of
     * the timeout only if the throttled function is invoked more than once during the wait timeout.
     *
     * @param func - The function to throttle.
     * @param wait - The number of milliseconds to throttle executions to. Defaults to 0.
     * @param options - The options object.
     * @returns The new throttled function.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Async.prototype.throttle = function (func, wait, options) {
        var _this = this;
        if (this._isDisposed) {
            return this._noop;
        }
        var waitMS = wait || 0;
        var leading = true;
        var trailing = true;
        var lastExecuteTime = 0;
        var lastResult;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var lastArgs;
        var timeoutId = null;
        if (options && typeof options.leading === 'boolean') {
            leading = options.leading;
        }
        if (options && typeof options.trailing === 'boolean') {
            trailing = options.trailing;
        }
        var callback = function (userCall) {
            var now = Date.now();
            var delta = now - lastExecuteTime;
            var waitLength = leading ? waitMS - delta : waitMS;
            if (delta >= waitMS && (!userCall || leading)) {
                lastExecuteTime = now;
                if (timeoutId) {
                    _this.clearTimeout(timeoutId);
                    timeoutId = null;
                }
                lastResult = func.apply(_this._parent, lastArgs);
            }
            else if (timeoutId === null && trailing) {
                timeoutId = _this.setTimeout(callback, waitLength);
            }
            return lastResult;
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var resultFunction = (function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            lastArgs = args;
            return callback(true);
        });
        return resultFunction;
    };
    /**
     * Creates a function that will delay the execution of func until after wait milliseconds have
     * elapsed since the last time it was invoked. Provide an options object to indicate that func
     * should be invoked on the leading and/or trailing edge of the wait timeout. Subsequent calls
     * to the debounced function will return the result of the last func call.
     *
     * Note: If leading and trailing options are true func will be called on the trailing edge of
     * the timeout only if the debounced function is invoked more than once during the wait
     * timeout.
     *
     * @param func - The function to debounce.
     * @param wait - The number of milliseconds to delay.
     * @param options - The options object.
     * @returns The new debounced function.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Async.prototype.debounce = function (func, wait, options) {
        var _this = this;
        if (this._isDisposed) {
            var noOpFunction = (function () {
                /** Do nothing */
            });
            noOpFunction.cancel = function () {
                return;
            };
            noOpFunction.flush = (function () { return null; });
            noOpFunction.pending = function () { return false; };
            return noOpFunction;
        }
        var waitMS = wait || 0;
        var leading = false;
        var trailing = true;
        var maxWait = null;
        var lastCallTime = 0;
        var lastExecuteTime = Date.now();
        var lastResult;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var lastArgs;
        var timeoutId = null;
        if (options && typeof options.leading === 'boolean') {
            leading = options.leading;
        }
        if (options && typeof options.trailing === 'boolean') {
            trailing = options.trailing;
        }
        if (options && typeof options.maxWait === 'number' && !isNaN(options.maxWait)) {
            maxWait = options.maxWait;
        }
        var markExecuted = function (time) {
            if (timeoutId) {
                _this.clearTimeout(timeoutId);
                timeoutId = null;
            }
            lastExecuteTime = time;
        };
        var invokeFunction = function (time) {
            markExecuted(time);
            lastResult = func.apply(_this._parent, lastArgs);
        };
        var callback = function (userCall) {
            var now = Date.now();
            var executeImmediately = false;
            if (userCall) {
                if (leading && now - lastCallTime >= waitMS) {
                    executeImmediately = true;
                }
                lastCallTime = now;
            }
            var delta = now - lastCallTime;
            var waitLength = waitMS - delta;
            var maxWaitDelta = now - lastExecuteTime;
            var maxWaitExpired = false;
            if (maxWait !== null) {
                // maxWait only matters when there is a pending callback
                if (maxWaitDelta >= maxWait && timeoutId) {
                    maxWaitExpired = true;
                }
                else {
                    waitLength = Math.min(waitLength, maxWait - maxWaitDelta);
                }
            }
            if (delta >= waitMS || maxWaitExpired || executeImmediately) {
                invokeFunction(now);
            }
            else if ((timeoutId === null || !userCall) && trailing) {
                timeoutId = _this.setTimeout(callback, waitLength);
            }
            return lastResult;
        };
        var pending = function () {
            return !!timeoutId;
        };
        var cancel = function () {
            if (pending()) {
                // Mark the debounced function as having executed
                markExecuted(Date.now());
            }
        };
        var flush = function () {
            if (pending()) {
                invokeFunction(Date.now());
            }
            return lastResult;
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var resultFunction = (function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            lastArgs = args;
            return callback(true);
        });
        resultFunction.cancel = cancel;
        resultFunction.flush = flush;
        resultFunction.pending = pending;
        return resultFunction;
    };
    Async.prototype.requestAnimationFrame = function (callback, targetElement) {
        var _this = this;
        var animationFrameId = 0;
        var win = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__["getWindow"])(targetElement);
        if (!this._isDisposed) {
            if (!this._animationFrameIds) {
                this._animationFrameIds = {};
            }
            var animationFrameCallback = function () {
                try {
                    // Now delete the record and call the callback.
                    if (_this._animationFrameIds) {
                        delete _this._animationFrameIds[animationFrameId];
                    }
                    callback.apply(_this._parent);
                }
                catch (e) {
                    _this._logError(e);
                }
            };
            animationFrameId = win.requestAnimationFrame
                ? win.requestAnimationFrame(animationFrameCallback)
                : win.setTimeout(animationFrameCallback, 0);
            this._animationFrameIds[animationFrameId] = true;
        }
        return animationFrameId;
    };
    Async.prototype.cancelAnimationFrame = function (id, targetElement) {
        var win = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__["getWindow"])(targetElement);
        if (this._animationFrameIds && this._animationFrameIds[id]) {
            win.cancelAnimationFrame ? win.cancelAnimationFrame(id) : win.clearTimeout(id);
            delete this._animationFrameIds[id];
        }
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Async.prototype._logError = function (e) {
        if (this._onErrorHandler) {
            this._onErrorHandler(e);
        }
    };
    return Async;
}());

//# sourceMappingURL=Async.js.map

/***/ }),

/***/ "mSfd":
/*!********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/modalize.js ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: modalize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalize", function() { return modalize; });
/* harmony import */ var _dom_getDocument__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/getDocument */ "NJXT");
/**
 * The helper functions here will make the target element as modal to screen readers, by placing aria-hidden on elements
 * that are siblings to the target element and the target element's ancestors (because aria-hidden gets inherited).
 * That way, all other elements on the page are hidden to the screen reader.
 */

/**
 * Call this on a target element to make it modal to screen readers.
 * Returns a function that undoes the changes it made.
 */
function modalize(target) {
    var _a;
    var affectedNodes = [];
    var targetDocument = Object(_dom_getDocument__WEBPACK_IMPORTED_MODULE_0__["getDocument"])(target) || document;
    // start at target, then recurse and do the same for parent, until we reach <body>
    while (target !== targetDocument.body) {
        // grab all siblings of current element
        for (var _i = 0, _b = target.parentElement.children; _i < _b.length; _i++) {
            var sibling = _b[_i];
            // but ignore elements that are already aria-hidden
            if (sibling !== target && ((_a = sibling.getAttribute('aria-hidden')) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== 'true') {
                affectedNodes.push(sibling);
            }
        }
        if (!target.parentElement) {
            break;
        }
        target = target.parentElement;
    }
    // take all those elements and set aria-hidden=true on them
    affectedNodes.forEach(function (node) {
        node.setAttribute('aria-hidden', 'true');
    });
    return function () {
        unmodalize(affectedNodes);
        affectedNodes = []; // dispose
    };
}
/**
 * Undoes the changes that modalize() did.
 */
function unmodalize(affectedNodes) {
    affectedNodes.forEach(function (node) {
        // set instead of removing in case other components explicitly set aria-hidden and do =="true" or =="false"
        node.setAttribute('aria-hidden', 'false');
    });
}
//# sourceMappingURL=modalize.js.map

/***/ }),

/***/ "myQz":
/*!********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@fluentui/theme@1.7.1_c129be21209ec549b9ba61bf76d54bcc/node_modules/@fluentui/theme/lib/fonts/FluentFonts.js ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: LocalizedFontNames, LocalizedFontFamilies, FontSizes, FontWeights, IconFontSizes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalizedFontNames", function() { return LocalizedFontNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalizedFontFamilies", function() { return LocalizedFontFamilies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontSizes", function() { return FontSizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontWeights", function() { return FontWeights; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconFontSizes", function() { return IconFontSizes; });
// Font face names to be registered.
var LocalizedFontNames;
(function (LocalizedFontNames) {
    LocalizedFontNames.Arabic = 'Segoe UI Web (Arabic)';
    LocalizedFontNames.Cyrillic = 'Segoe UI Web (Cyrillic)';
    LocalizedFontNames.EastEuropean = 'Segoe UI Web (East European)';
    LocalizedFontNames.Greek = 'Segoe UI Web (Greek)';
    LocalizedFontNames.Hebrew = 'Segoe UI Web (Hebrew)';
    LocalizedFontNames.Thai = 'Leelawadee UI Web';
    LocalizedFontNames.Vietnamese = 'Segoe UI Web (Vietnamese)';
    LocalizedFontNames.WestEuropean = 'Segoe UI Web (West European)';
    LocalizedFontNames.Selawik = 'Selawik Web';
    LocalizedFontNames.Armenian = 'Segoe UI Web (Armenian)';
    LocalizedFontNames.Georgian = 'Segoe UI Web (Georgian)';
})(LocalizedFontNames || (LocalizedFontNames = {}));
// Font families with fallbacks, for the general regions.
var LocalizedFontFamilies;
(function (LocalizedFontFamilies) {
    LocalizedFontFamilies.Arabic = "'" + LocalizedFontNames.Arabic + "'";
    LocalizedFontFamilies.ChineseSimplified = "'Microsoft Yahei UI', Verdana, Simsun";
    LocalizedFontFamilies.ChineseTraditional = "'Microsoft Jhenghei UI', Pmingliu";
    LocalizedFontFamilies.Cyrillic = "'" + LocalizedFontNames.Cyrillic + "'";
    LocalizedFontFamilies.EastEuropean = "'" + LocalizedFontNames.EastEuropean + "'";
    LocalizedFontFamilies.Greek = "'" + LocalizedFontNames.Greek + "'";
    LocalizedFontFamilies.Hebrew = "'" + LocalizedFontNames.Hebrew + "'";
    LocalizedFontFamilies.Hindi = "'Nirmala UI'";
    LocalizedFontFamilies.Japanese = "'Yu Gothic UI', 'Meiryo UI', Meiryo, 'MS Pgothic', Osaka";
    LocalizedFontFamilies.Korean = "'Malgun Gothic', Gulim";
    LocalizedFontFamilies.Selawik = "'" + LocalizedFontNames.Selawik + "'";
    LocalizedFontFamilies.Thai = "'Leelawadee UI Web', 'Kmer UI'";
    LocalizedFontFamilies.Vietnamese = "'" + LocalizedFontNames.Vietnamese + "'";
    LocalizedFontFamilies.WestEuropean = "'" + LocalizedFontNames.WestEuropean + "'";
    LocalizedFontFamilies.Armenian = "'" + LocalizedFontNames.Armenian + "'";
    LocalizedFontFamilies.Georgian = "'" + LocalizedFontNames.Georgian + "'";
})(LocalizedFontFamilies || (LocalizedFontFamilies = {}));
// Standard font sizes.
var FontSizes;
(function (FontSizes) {
    FontSizes.size10 = '10px';
    FontSizes.size12 = '12px';
    FontSizes.size14 = '14px';
    FontSizes.size16 = '16px';
    FontSizes.size18 = '18px';
    FontSizes.size20 = '20px';
    FontSizes.size24 = '24px';
    FontSizes.size28 = '28px';
    FontSizes.size32 = '32px';
    FontSizes.size42 = '42px';
    FontSizes.size68 = '68px';
    FontSizes.mini = '10px';
    FontSizes.xSmall = '10px';
    FontSizes.small = '12px';
    FontSizes.smallPlus = '12px';
    FontSizes.medium = '14px';
    FontSizes.mediumPlus = '16px';
    FontSizes.icon = '16px';
    FontSizes.large = '18px';
    FontSizes.xLarge = '20px';
    FontSizes.xLargePlus = '24px';
    FontSizes.xxLarge = '28px';
    FontSizes.xxLargePlus = '32px';
    FontSizes.superLarge = '42px';
    FontSizes.mega = '68px';
})(FontSizes || (FontSizes = {}));
// Standard font weights.
var FontWeights;
(function (FontWeights) {
    FontWeights.light = 100;
    FontWeights.semilight = 300;
    FontWeights.regular = 400;
    FontWeights.semibold = 600;
    FontWeights.bold = 700;
})(FontWeights || (FontWeights = {}));
// Standard Icon Sizes.
var IconFontSizes;
(function (IconFontSizes) {
    IconFontSizes.xSmall = '10px';
    IconFontSizes.small = '12px';
    IconFontSizes.medium = '16px';
    IconFontSizes.large = '20px';
})(IconFontSizes || (IconFontSizes = {}));
//# sourceMappingURL=FluentFonts.js.map

/***/ }),

/***/ "n/mG":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/customizations/useCustomizationSettings.js ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: useCustomizationSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCustomizationSettings", function() { return useCustomizationSettings; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Customizations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Customizations */ "sl8a");
/* harmony import */ var _CustomizerContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomizerContext */ "qz1F");



/**
 * Hook to get Customizations settings from Customizations singleton or CustomizerContext.
 * It will trigger component state update on settings change observed.
 */
function useCustomizationSettings(properties, scopeName) {
    var forceUpdate = useForceUpdate();
    var customizations = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_CustomizerContext__WEBPACK_IMPORTED_MODULE_2__["CustomizerContext"]).customizations;
    var inCustomizerContext = customizations.inCustomizerContext;
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        if (!inCustomizerContext) {
            _Customizations__WEBPACK_IMPORTED_MODULE_1__["Customizations"].observe(forceUpdate);
        }
        return function () {
            if (!inCustomizerContext) {
                _Customizations__WEBPACK_IMPORTED_MODULE_1__["Customizations"].unobserve(forceUpdate);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps -- exclude forceUpdate
    }, [inCustomizerContext]);
    return _Customizations__WEBPACK_IMPORTED_MODULE_1__["Customizations"].getSettings(properties, scopeName, customizations);
}
function useForceUpdate() {
    var _a = react__WEBPACK_IMPORTED_MODULE_0__["useState"](0), setValue = _a[1];
    return function () { return setValue(function (value) { return ++value; }); };
}
//# sourceMappingURL=useCustomizationSettings.js.map

/***/ }),

/***/ "nU2y":
/*!*******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/styling@7.16.19_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/styling/lib/styles/AnimationStyles.js ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: AnimationVariables, AnimationStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fluentui_theme_lib_motion_AnimationStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/theme/lib/motion/AnimationStyles */ "Jfjl");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimationVariables", function() { return _fluentui_theme_lib_motion_AnimationStyles__WEBPACK_IMPORTED_MODULE_0__["AnimationVariables"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimationStyles", function() { return _fluentui_theme_lib_motion_AnimationStyles__WEBPACK_IMPORTED_MODULE_0__["AnimationStyles"]; });


//# sourceMappingURL=AnimationStyles.js.map

/***/ }),

/***/ "ncf0":
/*!********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/overflow.js ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: hasHorizontalOverflow, hasVerticalOverflow, hasOverflow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasHorizontalOverflow", function() { return hasHorizontalOverflow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasVerticalOverflow", function() { return hasVerticalOverflow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasOverflow", function() { return hasOverflow; });
/**
 * Detects whether an element's content has horizontal overflow
 *
 * @public
 * @param element - Element to check for overflow
 * @returns True if element's content overflows
 */
function hasHorizontalOverflow(element) {
    return element.clientWidth < element.scrollWidth;
}
/**
 * Detects whether an element's content has vertical overflow
 *
 * @public
 * @param element - Element to check for overflow
 * @returns True if element's content overflows
 */
function hasVerticalOverflow(element) {
    return element.clientHeight < element.scrollHeight;
}
/**
 * Detects whether an element's content has overflow in any direction
 *
 * @public
 * @param element - Element to check for overflow
 * @returns True if element's content overflows
 */
function hasOverflow(element) {
    return hasHorizontalOverflow(element) || hasVerticalOverflow(element);
}
//# sourceMappingURL=overflow.js.map

/***/ }),

/***/ "nm55":
/*!*************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/dom/getParent.js ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: getParent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fluentui_dom_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/dom-utilities */ "Doda");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getParent", function() { return _fluentui_dom_utilities__WEBPACK_IMPORTED_MODULE_0__["getParent"]; });


//# sourceMappingURL=getParent.js.map

/***/ }),

/***/ "oKDY":
/*!********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/dom/setVirtualParent.js ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: setVirtualParent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fluentui_dom_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/dom-utilities */ "Doda");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setVirtualParent", function() { return _fluentui_dom_utilities__WEBPACK_IMPORTED_MODULE_0__["setVirtualParent"]; });


//# sourceMappingURL=setVirtualParent.js.map

/***/ }),

/***/ "oLNk":
/*!*************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/BaseComponent.js ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: BaseComponent, nullRender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nullRender", function() { return nullRender; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Async__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Async */ "mS7z");
/* harmony import */ var _EventGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EventGroup */ "ZINP");
/* harmony import */ var _warn_warnConditionallyRequiredProps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./warn/warnConditionallyRequiredProps */ "8ffK");
/* harmony import */ var _warn_warnMutuallyExclusive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./warn/warnMutuallyExclusive */ "AnRT");
/* harmony import */ var _warn_warnDeprecations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./warn/warnDeprecations */ "Fx0A");







/**
 * BaseComponent class, which provides basic helpers for all components.
 *
 * @public
 * {@docCategory BaseComponent}
 *
 * @deprecated Do not use. We are moving away from class component.
 */
var BaseComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BaseComponent, _super);
    /**
     * BaseComponent constructor
     * @param props - The props for the component.
     * @param context - The context for the component.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function BaseComponent(props, context) {
        var _this = _super.call(this, props, context) || this;
        // eslint-disable-next-line deprecation/deprecation
        _makeAllSafe(_this, BaseComponent.prototype, [
            'componentDidMount',
            'shouldComponentUpdate',
            'getSnapshotBeforeUpdate',
            'render',
            'componentDidUpdate',
            'componentWillUnmount',
        ]);
        return _this;
    }
    /**
     * When the component receives props, make sure the componentRef is updated.
     */
    BaseComponent.prototype.componentDidUpdate = function (prevProps, prevState) {
        this._updateComponentRef(prevProps, this.props);
    };
    /**
     * When the component has mounted, update the componentRef.
     */
    BaseComponent.prototype.componentDidMount = function () {
        this._setComponentRef(this.props.componentRef, this);
    };
    /**
     * If we have disposables, dispose them automatically on unmount.
     */
    BaseComponent.prototype.componentWillUnmount = function () {
        this._setComponentRef(this.props.componentRef, null);
        if (this.__disposables) {
            for (var i = 0, len = this._disposables.length; i < len; i++) {
                var disposable = this.__disposables[i];
                if (disposable.dispose) {
                    disposable.dispose();
                }
            }
            this.__disposables = null;
        }
    };
    Object.defineProperty(BaseComponent.prototype, "className", {
        /**
         * Gets the object's class name.
         */
        get: function () {
            if (!this.__className) {
                var funcNameRegex = /function (.{1,})\(/;
                var results = funcNameRegex.exec(this.constructor.toString());
                this.__className = results && results.length > 1 ? results[1] : '';
            }
            return this.__className;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "_disposables", {
        /**
         * Allows subclasses to push things to this._disposables to be auto disposed.
         */
        get: function () {
            if (!this.__disposables) {
                this.__disposables = [];
            }
            return this.__disposables;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "_async", {
        /**
         * Gets the async instance associated with the component, created on demand. The async instance gives
         * subclasses a way to execute setTimeout/setInterval async calls safely, where the callbacks
         * will be cleared/ignored automatically after unmounting. The helpers within the async object also
         * preserve the this pointer so that you don't need to "bind" the callbacks.
         */
        get: function () {
            if (!this.__async) {
                this.__async = new _Async__WEBPACK_IMPORTED_MODULE_2__["Async"](this);
                this._disposables.push(this.__async);
            }
            return this.__async;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "_events", {
        /**
         * Gets the event group instance assocaited with the component, created on demand. The event instance
         * provides on/off methods for listening to DOM (or regular javascript object) events. The event callbacks
         * will be automatically disconnected after unmounting. The helpers within the events object also
         * preserve the this reference so that you don't need to "bind" the callbacks.
         */
        get: function () {
            if (!this.__events) {
                this.__events = new _EventGroup__WEBPACK_IMPORTED_MODULE_3__["EventGroup"](this);
                this._disposables.push(this.__events);
            }
            return this.__events;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Helper to return a memoized ref resolver function.
     * @param refName - Name of the member to assign the ref to.
     * @returns A function instance keyed from the given refname.
     * @deprecated Use `createRef` from React.createRef.
     */
    BaseComponent.prototype._resolveRef = function (refName) {
        var _this = this;
        if (!this.__resolves) {
            this.__resolves = {};
        }
        if (!this.__resolves[refName]) {
            this.__resolves[refName] = function (ref) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                return (_this[refName] = ref);
            };
        }
        return this.__resolves[refName];
    };
    /**
     * Updates the componentRef (by calling it with "this" when necessary.)
     */
    BaseComponent.prototype._updateComponentRef = function (currentProps, newProps) {
        if (newProps === void 0) { newProps = {}; }
        // currentProps *should* always be defined, but verify that just in case a subclass is manually
        // calling a lifecycle method with no parameters (which has happened) or other odd usage.
        if (currentProps && newProps && currentProps.componentRef !== newProps.componentRef) {
            this._setComponentRef(currentProps.componentRef, null);
            this._setComponentRef(newProps.componentRef, this);
        }
    };
    /**
     * Warns when a deprecated props are being used.
     *
     * @param deprecationMap - The map of deprecations, where key is the prop name and the value is
     * either null or a replacement prop name.
     */
    BaseComponent.prototype._warnDeprecations = function (deprecationMap) {
        Object(_warn_warnDeprecations__WEBPACK_IMPORTED_MODULE_6__["warnDeprecations"])(this.className, this.props, deprecationMap);
    };
    /**
     * Warns when props which are mutually exclusive with each other are both used.
     *
     * @param mutuallyExclusiveMap - The map of mutually exclusive props.
     */
    BaseComponent.prototype._warnMutuallyExclusive = function (mutuallyExclusiveMap) {
        Object(_warn_warnMutuallyExclusive__WEBPACK_IMPORTED_MODULE_5__["warnMutuallyExclusive"])(this.className, this.props, mutuallyExclusiveMap);
    };
    /**
     * Warns when props are required if a condition is met.
     *
     * @param requiredProps - The name of the props that are required when the condition is met.
     * @param conditionalPropName - The name of the prop that the condition is based on.
     * @param condition - Whether the condition is met.
     */
    BaseComponent.prototype._warnConditionallyRequiredProps = function (requiredProps, conditionalPropName, condition) {
        Object(_warn_warnConditionallyRequiredProps__WEBPACK_IMPORTED_MODULE_4__["warnConditionallyRequiredProps"])(this.className, this.props, requiredProps, conditionalPropName, condition);
    };
    BaseComponent.prototype._setComponentRef = function (ref, value) {
        if (!this._skipComponentRefResolution && ref) {
            if (typeof ref === 'function') {
                ref(value);
            }
            if (typeof ref === 'object') {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                ref.current = value;
            }
        }
    };
    return BaseComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

/**
 * Helper to override a given method with a wrapper method that can try/catch the original, but also
 * ensures that the BaseComponent's methods are called before the subclass's. This ensures that
 * componentWillUnmount in the base is called and that things in the _disposables array are disposed.
 */
// eslint-disable-next-line deprecation/deprecation
function _makeAllSafe(obj, prototype, methodNames) {
    for (var i = 0, len = methodNames.length; i < len; i++) {
        _makeSafe(obj, prototype, methodNames[i]);
    }
}
// eslint-disable-next-line deprecation/deprecation
function _makeSafe(obj, prototype, methodName) {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    var classMethod = obj[methodName];
    var prototypeMethod = prototype[methodName];
    if (classMethod || prototypeMethod) {
        obj[methodName] = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            /* eslint-enable @typescript-eslint/no-explicit-any */
            var retVal;
            if (prototypeMethod) {
                retVal = prototypeMethod.apply(this, args);
            }
            if (classMethod !== prototypeMethod) {
                retVal = classMethod.apply(this, args);
            }
            return retVal;
        };
    }
}
/**
 * Simple constant function for returning null, used to render empty templates in JSX.
 *
 * @public
 */
function nullRender() {
    return null;
}
//# sourceMappingURL=BaseComponent.js.map

/***/ }),

/***/ "oxeo":
/*!*********************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@fluentui/dom-utilities@1.1.1/node_modules/@fluentui/dom-utilities/lib/getChildren.js ***!
  \*********************************************************************************************************************************************/
/*! exports provided: getChildren */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChildren", function() { return getChildren; });
/* harmony import */ var _isVirtualElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isVirtualElement */ "aGpG");

/**
 * Gets the elements which are child elements of the given element.
 * If `allowVirtualChildren` is `true`, this method enumerates virtual child elements
 * after the original children.
 * @param parent - The element to get the children of.
 * @param allowVirtualChildren - true if the method should enumerate virtual child elements.
 */
function getChildren(parent, allowVirtualChildren) {
    if (allowVirtualChildren === void 0) { allowVirtualChildren = true; }
    var children = [];
    if (parent) {
        for (var i = 0; i < parent.children.length; i++) {
            children.push(parent.children.item(i));
        }
        if (allowVirtualChildren && Object(_isVirtualElement__WEBPACK_IMPORTED_MODULE_0__["isVirtualElement"])(parent)) {
            children.push.apply(children, parent._virtual.children);
        }
    }
    return children;
}
//# sourceMappingURL=getChildren.js.map

/***/ }),

/***/ "pWRy":
/*!***************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/dom/getChildren.js ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: getChildren */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fluentui_dom_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/dom-utilities */ "Doda");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getChildren", function() { return _fluentui_dom_utilities__WEBPACK_IMPORTED_MODULE_0__["getChildren"]; });


//# sourceMappingURL=getChildren.js.map

/***/ }),

/***/ "q6T1":
/*!**********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/dom/setSSR.js ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: _isSSR, setSSR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_isSSR", function() { return _isSSR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSSR", function() { return setSSR; });
var _isSSR = false;
/**
 * Helper to set ssr mode to simulate no window object returned from getWindow helper.
 *
 * @public
 */
function setSSR(isEnabled) {
    _isSSR = isEnabled;
}
//# sourceMappingURL=setSSR.js.map

/***/ }),

/***/ "qz1F":
/*!********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/customizations/CustomizerContext.js ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: CustomizerContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizerContext", function() { return CustomizerContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var CustomizerContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"]({
    customizations: {
        inCustomizerContext: false,
        settings: {},
        scopedSettings: {},
    },
});
//# sourceMappingURL=CustomizerContext.js.map

/***/ }),

/***/ "rP42":
/*!*****************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/styling@7.16.19_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/styling/lib/styles/getFocusStyle.js ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: getFocusStyle, focusClear, getFocusOutlineStyle, getInputFocusStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFocusStyle", function() { return getFocusStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusClear", function() { return focusClear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFocusOutlineStyle", function() { return getFocusOutlineStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInputFocusStyle", function() { return getInputFocusStyle; });
/* harmony import */ var _CommonStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommonStyles */ "Eb+H");
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uifabric/utilities */ "P2cQ");
/* harmony import */ var _zIndexes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zIndexes */ "aULN");



function getFocusStyle(theme, insetOrOptions, position, highContrastStyle, borderColor, outlineColor, isFocusedOnly) {
    if (typeof insetOrOptions === 'number' || !insetOrOptions) {
        return _getFocusStyleInternal(theme, {
            inset: insetOrOptions,
            position: position,
            highContrastStyle: highContrastStyle,
            borderColor: borderColor,
            outlineColor: outlineColor,
            isFocusedOnly: isFocusedOnly,
        });
    }
    else {
        return _getFocusStyleInternal(theme, insetOrOptions);
    }
}
function _getFocusStyleInternal(theme, options) {
    var _a, _b;
    if (options === void 0) { options = {}; }
    var _c = options.inset, inset = _c === void 0 ? 0 : _c, _d = options.width, width = _d === void 0 ? 1 : _d, _e = options.position, position = _e === void 0 ? 'relative' : _e, highContrastStyle = options.highContrastStyle, _f = options.borderColor, borderColor = _f === void 0 ? theme.palette.white : _f, _g = options.outlineColor, outlineColor = _g === void 0 ? theme.palette.neutralSecondary : _g, _h = options.isFocusedOnly, isFocusedOnly = _h === void 0 ? true : _h;
    return {
        // Clear browser-specific focus styles and use 'transparent' as placeholder for focus style.
        outline: 'transparent',
        // Requirement because pseudo-element is absolutely positioned.
        position: position,
        selectors: (_a = {
                // Clear the focus border in Firefox.
                // Reference: http://stackoverflow.com/a/199319/1436671
                '::-moz-focus-inner': {
                    border: '0',
                }
            },
            // When the element that uses this mixin is in a :focus state, add a pseudo-element to
            // create a border.
            _a["." + _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["IsFocusVisibleClassName"] + " &" + (isFocusedOnly ? ':focus' : '') + ":after"] = {
                content: '""',
                position: 'absolute',
                left: inset + 1,
                top: inset + 1,
                bottom: inset + 1,
                right: inset + 1,
                border: width + "px solid " + borderColor,
                outline: width + "px solid " + outlineColor,
                zIndex: _zIndexes__WEBPACK_IMPORTED_MODULE_2__["ZIndexes"].FocusStyle,
                selectors: (_b = {},
                    _b[_CommonStyles__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = highContrastStyle,
                    _b),
            },
            _a),
    };
}
/**
 * Generates style to clear browser specific focus styles.
 */
function focusClear() {
    return {
        selectors: {
            '&::-moz-focus-inner': {
                // Clear the focus border in Firefox. Reference: http://stackoverflow.com/a/199319/1436671
                border: 0,
            },
            '&': {
                // Clear browser specific focus styles and use transparent as placeholder for focus style
                outline: 'transparent',
            },
        },
    };
}
/**
 * Generates a style which can be used to set a border on focus.
 *
 * @param theme - The theme object to use.
 * @param inset - The number of pixels to inset the border (default 0)
 * @param width - The border width in pixels (default 1)
 * @param color - Color of the outline (default `theme.palette.neutralSecondary`)
 * @returns The style object.
 */
function getFocusOutlineStyle(theme, inset, width, color) {
    var _a;
    if (inset === void 0) { inset = 0; }
    if (width === void 0) { width = 1; }
    return {
        selectors: (_a = {},
            _a[":global(" + _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["IsFocusVisibleClassName"] + ") &:focus"] = {
                outline: width + " solid " + (color || theme.palette.neutralSecondary),
                outlineOffset: -inset + "px",
            },
            _a),
    };
}
/**
 * Generates text input border styles on focus.
 *
 * @param borderColor - Color of the border.
 * @param borderRadius - Radius of the border.
 * @param borderType - Type of the border.
 * @param borderPosition - Position of the border relative to the input element (default to -1
 * as it's the most common border width of the input element)
 * @returns The style object.
 */
var getInputFocusStyle = function (borderColor, borderRadius, borderType, borderPosition) {
    var _a, _b, _c;
    if (borderType === void 0) { borderType = 'border'; }
    if (borderPosition === void 0) { borderPosition = -1; }
    var isBorderBottom = borderType === 'borderBottom';
    return {
        borderColor: borderColor,
        selectors: {
            ':after': (_a = {
                    pointerEvents: 'none',
                    content: "''",
                    position: 'absolute',
                    left: isBorderBottom ? 0 : borderPosition,
                    top: borderPosition,
                    bottom: borderPosition,
                    right: isBorderBottom ? 0 : borderPosition
                },
                _a[borderType] = "2px solid " + borderColor,
                _a.borderRadius = borderRadius,
                _a.width = borderType === 'borderBottom' ? '100%' : undefined,
                _a.selectors = (_b = {},
                    _b[_CommonStyles__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = (_c = {},
                        _c[borderType === 'border' ? 'borderColor' : 'borderBottomColor'] = 'Highlight',
                        _c),
                    _b),
                _a),
        },
    };
};
//# sourceMappingURL=getFocusStyle.js.map

/***/ }),

/***/ "rrsp":
/*!**************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/appendFunction.js ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: appendFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendFunction", function() { return appendFunction; });
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Returns a single function which will call each of the given functions in the context of the
 * parent.
 */
function appendFunction(parent) {
    var functions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        functions[_i - 1] = arguments[_i];
    }
    if (functions.length < 2) {
        return functions[0];
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        functions.forEach(function (f) { return f && f.apply(parent, args); });
    };
}
//# sourceMappingURL=appendFunction.js.map

/***/ }),

/***/ "sBgr":
/*!*********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/styling@7.16.19_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/styling/lib/styles/DefaultFontStyles.js ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: DefaultFontStyles, registerDefaultFontFaces */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fluentui_theme_lib_fonts_DefaultFontStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/theme/lib/fonts/DefaultFontStyles */ "2R51");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultFontStyles", function() { return _fluentui_theme_lib_fonts_DefaultFontStyles__WEBPACK_IMPORTED_MODULE_0__["DefaultFontStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerDefaultFontFaces", function() { return _fluentui_theme_lib_fonts_DefaultFontStyles__WEBPACK_IMPORTED_MODULE_0__["registerDefaultFontFaces"]; });


//# sourceMappingURL=DefaultFontStyles.js.map

/***/ }),

/***/ "sMlw":
/*!*********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/resources.js ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: getResourceUrl, setBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResourceUrl", function() { return getResourceUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBaseUrl", function() { return setBaseUrl; });
var _baseUrl = '';
/** Sets the current base url used for fetching images. */
function getResourceUrl(url) {
    return _baseUrl + url;
}
/** Gets the current base url used for fetching images. */
function setBaseUrl(baseUrl) {
    _baseUrl = baseUrl;
}
//# sourceMappingURL=resources.js.map

/***/ }),

/***/ "shz0":
/*!*********************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/merge-styles@7.19.1/node_modules/@uifabric/merge-styles/lib/concatStyleSetsWithProps.js ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: concatStyleSetsWithProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concatStyleSetsWithProps", function() { return concatStyleSetsWithProps; });
/* harmony import */ var _concatStyleSets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./concatStyleSets */ "H7TR");

/**
 * Concatenates style sets into one, but resolves functional sets using the given props.
 * @param styleProps - Props used to resolve functional sets.
 * @param allStyles - Style sets, which can be functions or objects.
 */
function concatStyleSetsWithProps(styleProps) {
    var allStyles = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        allStyles[_i - 1] = arguments[_i];
    }
    var result = [];
    for (var _a = 0, allStyles_1 = allStyles; _a < allStyles_1.length; _a++) {
        var styles = allStyles_1[_a];
        if (styles) {
            result.push(typeof styles === 'function' ? styles(styleProps) : styles);
        }
    }
    if (result.length === 1) {
        return result[0];
    }
    else if (result.length) {
        // cliffkoh: I cannot figure out how to avoid the cast to any here.
        // It is something to do with the use of Omit in IStyleSet.
        // It might not be necessary once  Omit becomes part of lib.d.ts (when we remove our own Omit and rely on
        // the official version).
        return _concatStyleSets__WEBPACK_IMPORTED_MODULE_0__["concatStyleSets"].apply(void 0, result);
    }
    return {};
}
//# sourceMappingURL=concatStyleSetsWithProps.js.map

/***/ }),

/***/ "si5M":
/*!****************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/dom/elementContainsAttribute.js ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: elementContainsAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fluentui_dom_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/dom-utilities */ "Doda");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elementContainsAttribute", function() { return _fluentui_dom_utilities__WEBPACK_IMPORTED_MODULE_0__["elementContainsAttribute"]; });


//# sourceMappingURL=elementContainsAttribute.js.map

/***/ }),

/***/ "sl8a":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/customizations/Customizations.js ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: Customizations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customizations", function() { return Customizations; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GlobalSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../GlobalSettings */ "3DHI");


var CustomizationsGlobalKey = 'customizations';
var NO_CUSTOMIZATIONS = { settings: {}, scopedSettings: {}, inCustomizerContext: false };
var _allSettings = _GlobalSettings__WEBPACK_IMPORTED_MODULE_1__["GlobalSettings"].getValue(CustomizationsGlobalKey, {
    settings: {},
    scopedSettings: {},
    inCustomizerContext: false,
});
var _events = [];
var Customizations = /** @class */ (function () {
    function Customizations() {
    }
    Customizations.reset = function () {
        _allSettings.settings = {};
        _allSettings.scopedSettings = {};
    };
    /** Apply global Customization settings.
     * @example Customizations.applySettings(\{ theme: \{...\} \});
     */
    Customizations.applySettings = function (settings) {
        _allSettings.settings = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _allSettings.settings), settings);
        Customizations._raiseChange();
    };
    /** Apply Customizations to a particular named scope, like a component.
     * @example Customizations.applyScopedSettings('Nav', \{ styles: () =\> \{\} \});
     */
    Customizations.applyScopedSettings = function (scopeName, settings) {
        _allSettings.scopedSettings[scopeName] = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _allSettings.scopedSettings[scopeName]), settings);
        Customizations._raiseChange();
    };
    Customizations.getSettings = function (properties, scopeName, localSettings) {
        if (localSettings === void 0) { localSettings = NO_CUSTOMIZATIONS; }
        var settings = {};
        var localScopedSettings = (scopeName && localSettings.scopedSettings[scopeName]) || {};
        var globalScopedSettings = (scopeName && _allSettings.scopedSettings[scopeName]) || {};
        for (var _i = 0, properties_1 = properties; _i < properties_1.length; _i++) {
            var property = properties_1[_i];
            settings[property] =
                localScopedSettings[property] ||
                    localSettings.settings[property] ||
                    globalScopedSettings[property] ||
                    _allSettings.settings[property];
        }
        return settings;
    };
    /** Used to run some code that sets Customizations without triggering an update until the end.
     * Useful for applying Customizations that don't affect anything currently rendered, or for
     * applying many customizations at once.
     * @param suppressUpdate - Do not raise the change event at the end, preventing all updates
     */
    Customizations.applyBatchedUpdates = function (code, suppressUpdate) {
        Customizations._suppressUpdates = true;
        try {
            code();
        }
        catch (_a) {
            /* do nothing */
        }
        Customizations._suppressUpdates = false;
        if (!suppressUpdate) {
            Customizations._raiseChange();
        }
    };
    Customizations.observe = function (onChange) {
        _events.push(onChange);
    };
    Customizations.unobserve = function (onChange) {
        _events = _events.filter(function (cb) { return cb !== onChange; });
    };
    Customizations._raiseChange = function () {
        if (!Customizations._suppressUpdates) {
            _events.forEach(function (cb) { return cb(); });
        }
    };
    return Customizations;
}());

//# sourceMappingURL=Customizations.js.map

/***/ }),

/***/ "t1az":
/*!*********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/Rectangle.js ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: Rectangle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rectangle", function() { return Rectangle; });
/**
 * Rectangle helper class.
 *
 * @public
 * {@docCategory Rectangle}
 */
var Rectangle = /** @class */ (function () {
    function Rectangle(left, right, top, bottom) {
        if (left === void 0) { left = 0; }
        if (right === void 0) { right = 0; }
        if (top === void 0) { top = 0; }
        if (bottom === void 0) { bottom = 0; }
        this.top = top;
        this.bottom = bottom;
        this.left = left;
        this.right = right;
    }
    Object.defineProperty(Rectangle.prototype, "width", {
        /**
         * Calculated automatically by subtracting the right from left
         */
        get: function () {
            return this.right - this.left;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "height", {
        /**
         * Calculated automatically by subtracting the bottom from top.
         */
        get: function () {
            return this.bottom - this.top;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Tests if another rect is approximately equal to this rect (within 4 decimal places.)
     */
    Rectangle.prototype.equals = function (rect) {
        // Fixing to 4 decimal places because it allows enough precision and will handle cases when something
        // should be rounded, like .999999 should round to 1.
        return (parseFloat(this.top.toFixed(4)) === parseFloat(rect.top.toFixed(4)) &&
            parseFloat(this.bottom.toFixed(4)) === parseFloat(rect.bottom.toFixed(4)) &&
            parseFloat(this.left.toFixed(4)) === parseFloat(rect.left.toFixed(4)) &&
            parseFloat(this.right.toFixed(4)) === parseFloat(rect.right.toFixed(4)));
    };
    return Rectangle;
}());

//# sourceMappingURL=Rectangle.js.map

/***/ }),

/***/ "tatU":
/*!********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/dom/getVirtualParent.js ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: getVirtualParent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fluentui_dom_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/dom-utilities */ "Doda");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getVirtualParent", function() { return _fluentui_dom_utilities__WEBPACK_IMPORTED_MODULE_0__["getVirtualParent"]; });


//# sourceMappingURL=getVirtualParent.js.map

/***/ }),

/***/ "uL4z":
/*!******************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/styled.js ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: styled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styled", function() { return styled; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uifabric/merge-styles */ "7Xpn");
/* harmony import */ var _customizations_useCustomizationSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customizations/useCustomizationSettings */ "n/mG");




var DefaultFields = ['theme', 'styles'];
function styled(Component, baseStyles, getProps, customizable, pure) {
    customizable = customizable || { scope: '', fields: undefined };
    var scope = customizable.scope, _a = customizable.fields, fields = _a === void 0 ? DefaultFields : _a;
    var Wrapped = react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"](function (props, forwardedRef) {
        var styles = react__WEBPACK_IMPORTED_MODULE_1__["useRef"]();
        var settings = Object(_customizations_useCustomizationSettings__WEBPACK_IMPORTED_MODULE_3__["useCustomizationSettings"])(fields, scope);
        var customizedStyles = settings.styles, dir = settings.dir, rest = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(settings, ["styles", "dir"]);
        var additionalProps = getProps ? getProps(props) : undefined;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var cache = (styles.current && styles.current.__cachedInputs__) || [];
        if (!styles.current || customizedStyles !== cache[1] || props.styles !== cache[2]) {
            // Using styled components as the Component arg will result in nested styling arrays.
            var concatenatedStyles = function (styleProps) {
                return Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_2__["concatStyleSetsWithProps"])(styleProps, baseStyles, customizedStyles, props.styles);
            };
            // The __cachedInputs__ array is attached to the function and consumed by the
            // classNamesFunction as a list of keys to include for memoizing classnames.
            concatenatedStyles.__cachedInputs__ = [
                baseStyles,
                customizedStyles,
                props.styles,
            ];
            concatenatedStyles.__noStyleOverride__ =
                !customizedStyles && !props.styles;
            styles.current = concatenatedStyles;
        }
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Component, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ ref: forwardedRef }, rest, additionalProps, props, { styles: styles.current }));
    });
    // Function.prototype.name is an ES6 feature, so the cast to any is required until we're
    // able to drop IE 11 support and compile with ES6 libs
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Wrapped.displayName = "Styled" + (Component.displayName || Component.name);
    // This preserves backwards compatibility.
    var pureComponent = pure ? react__WEBPACK_IMPORTED_MODULE_1__["memo"](Wrapped) : Wrapped;
    // Check if the wrapper has a displayName after it has been memoized. Then assign it to the pure component.
    if (Wrapped.displayName) {
        pureComponent.displayName = Wrapped.displayName;
    }
    return pureComponent;
}
//# sourceMappingURL=styled.js.map

/***/ }),

/***/ "uyIp":
/*!**************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/sessionStorage.js ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: getItem, setItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItem", function() { return getItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setItem", function() { return setItem; });
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/getWindow */ "jfaJ");

/**
 * Fetches an item from session storage without throwing an exception
 * @param key The key of the item to fetch from session storage
 */
function getItem(key) {
    var result = null;
    try {
        var win = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
        result = win ? win.sessionStorage.getItem(key) : null;
    }
    catch (e) {
        /* Eat the exception */
    }
    return result;
}
/**
 * Inserts an item into session storage without throwing an exception
 * @param key The key of the item to add to session storage
 * @param data The data to put into session storage
 */
function setItem(key, data) {
    var _a;
    try {
        (_a = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__["getWindow"])()) === null || _a === void 0 ? void 0 : _a.sessionStorage.setItem(key, data);
    }
    catch (e) {
        /* Eat the exception */
    }
}
//# sourceMappingURL=sessionStorage.js.map

/***/ }),

/***/ "uze5":
/*!********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/KeyCodes.js ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: KeyCodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyCodes", function() { return KeyCodes; });
/**
 * Simulated enum for keycodes. These will get inlined by uglify when used much like an enum
 *
 * @public
 * {@docCategory KeyCodes}
 */
var KeyCodes = {
    backspace: 8,
    tab: 9,
    enter: 13,
    shift: 16,
    ctrl: 17,
    alt: 18,
    pauseBreak: 19,
    capslock: 20,
    escape: 27,
    space: 32,
    pageUp: 33,
    pageDown: 34,
    end: 35,
    home: 36,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    insert: 45,
    del: 46,
    zero: 48,
    one: 49,
    two: 50,
    three: 51,
    four: 52,
    five: 53,
    six: 54,
    seven: 55,
    eight: 56,
    nine: 57,
    a: 65,
    b: 66,
    c: 67,
    d: 68,
    e: 69,
    f: 70,
    g: 71,
    h: 72,
    i: 73,
    j: 74,
    k: 75,
    l: 76,
    m: 77,
    n: 78,
    o: 79,
    p: 80,
    q: 81,
    r: 82,
    s: 83,
    t: 84,
    u: 85,
    v: 86,
    w: 87,
    x: 88,
    y: 89,
    z: 90,
    leftWindow: 91,
    rightWindow: 92,
    select: 93,
    /* eslint-disable @typescript-eslint/naming-convention */
    zero_numpad: 96,
    one_numpad: 97,
    two_numpad: 98,
    three_numpad: 99,
    four_numpad: 100,
    five_numpad: 101,
    six_numpad: 102,
    seven_numpad: 103,
    eight_numpad: 104,
    nine_numpad: 105,
    /* eslint-enable @typescript-eslint/naming-convention */
    multiply: 106,
    add: 107,
    subtract: 109,
    decimalPoint: 110,
    divide: 111,
    f1: 112,
    f2: 113,
    f3: 114,
    f4: 115,
    f5: 116,
    f6: 117,
    f7: 118,
    f8: 119,
    f9: 120,
    f10: 121,
    f11: 122,
    f12: 123,
    numlock: 144,
    scrollLock: 145,
    semicolon: 186,
    equalSign: 187,
    comma: 188,
    dash: 189,
    period: 190,
    forwardSlash: 191,
    graveAccent: 192,
    openBracket: 219,
    backSlash: 220,
    closeBracket: 221,
    singleQuote: 222,
};
//# sourceMappingURL=KeyCodes.js.map

/***/ }),

/***/ "vpjJ":
/*!*******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/selection/Selection.js ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: Selection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Selection", function() { return Selection; });
/* harmony import */ var _Selection_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Selection.types */ "iDCg");
/* harmony import */ var _EventGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../EventGroup */ "ZINP");


/**
 * {@docCategory Selection}
 */
var Selection = /** @class */ (function () {
    /**
     * Create a new Selection. If `TItem` does not have a `key` property, you must provide an options
     * object with a `getKey` implementation. Providing options is optional otherwise.
     * (At most one `options` object is accepted.)
     */
    function Selection() {
        var options = []; // Otherwise, arguments require options with `getKey`.
        for (var _i = 0 // Otherwise, arguments require options with `getKey`.
        ; _i < arguments.length // Otherwise, arguments require options with `getKey`.
        ; _i++ // Otherwise, arguments require options with `getKey`.
        ) {
            options[_i] = arguments[_i]; // Otherwise, arguments require options with `getKey`.
        }
        var _a = options[0] || {}, onSelectionChanged = _a.onSelectionChanged, getKey = _a.getKey, _b = _a.canSelectItem, canSelectItem = _b === void 0 ? function () { return true; } : _b, items = _a.items, _c = _a.selectionMode, selectionMode = _c === void 0 ? _Selection_types__WEBPACK_IMPORTED_MODULE_0__["SelectionMode"].multiple : _c;
        this.mode = selectionMode;
        this._getKey = getKey || defaultGetKey;
        this._changeEventSuppressionCount = 0;
        this._exemptedCount = 0;
        this._anchoredIndex = 0;
        this._unselectableCount = 0;
        this._onSelectionChanged = onSelectionChanged;
        this._canSelectItem = canSelectItem;
        this._isModal = false;
        this.setItems(items || [], true);
        this.count = this.getSelectedCount();
    }
    Selection.prototype.canSelectItem = function (item, index) {
        if (typeof index === 'number' && index < 0) {
            return false;
        }
        return this._canSelectItem(item, index);
    };
    Selection.prototype.getKey = function (item, index) {
        var key = this._getKey(item, index);
        return typeof key === 'number' || key ? "" + key : '';
    };
    Selection.prototype.setChangeEvents = function (isEnabled, suppressChange) {
        this._changeEventSuppressionCount += isEnabled ? -1 : 1;
        if (this._changeEventSuppressionCount === 0 && this._hasChanged) {
            this._hasChanged = false;
            if (!suppressChange) {
                this._change();
            }
        }
    };
    Selection.prototype.isModal = function () {
        return this._isModal;
    };
    Selection.prototype.setModal = function (isModal) {
        if (this._isModal !== isModal) {
            this.setChangeEvents(false);
            this._isModal = isModal;
            if (!isModal) {
                this.setAllSelected(false);
            }
            this._change();
            this.setChangeEvents(true);
        }
    };
    /**
     * Selection needs the items, call this method to set them. If the set
     * of items is the same, this will re-evaluate selection and index maps.
     * Otherwise, shouldClear should be set to true, so that selection is
     * cleared.
     */
    Selection.prototype.setItems = function (items, shouldClear) {
        if (shouldClear === void 0) { shouldClear = true; }
        var newKeyToIndexMap = {};
        var newUnselectableIndices = {};
        var hasSelectionChanged = false;
        this.setChangeEvents(false);
        // Reset the unselectable count.
        this._unselectableCount = 0;
        // Build lookup table for quick selection evaluation.
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (item) {
                var key = this.getKey(item, i);
                if (key) {
                    newKeyToIndexMap[key] = i;
                }
            }
            newUnselectableIndices[i] = item && !this.canSelectItem(item);
            if (newUnselectableIndices[i]) {
                this._unselectableCount++;
            }
        }
        if (shouldClear || items.length === 0) {
            this._setAllSelected(false, true);
        }
        // Check the exemption list for discrepencies.
        var newExemptedIndicies = {};
        var newExemptedCount = 0;
        for (var indexProperty in this._exemptedIndices) {
            if (this._exemptedIndices.hasOwnProperty(indexProperty)) {
                var index = Number(indexProperty);
                var item = this._items[index];
                var exemptKey = item ? this.getKey(item, Number(index)) : undefined;
                var newIndex = exemptKey ? newKeyToIndexMap[exemptKey] : index;
                if (newIndex === undefined) {
                    // The item has likely been replaced or removed.
                    hasSelectionChanged = true;
                }
                else {
                    // We know the new index of the item. update the existing exemption table.
                    newExemptedIndicies[newIndex] = true;
                    newExemptedCount++;
                    hasSelectionChanged = hasSelectionChanged || newIndex !== index;
                }
            }
        }
        if (this._items && this._exemptedCount === 0 && items.length !== this._items.length && this._isAllSelected) {
            // If everything was selected but the number of items has changed, selection has changed.
            hasSelectionChanged = true;
        }
        this._exemptedIndices = newExemptedIndicies;
        this._exemptedCount = newExemptedCount;
        this._keyToIndexMap = newKeyToIndexMap;
        this._unselectableIndices = newUnselectableIndices;
        this._items = items;
        this._selectedItems = null;
        if (hasSelectionChanged) {
            this._updateCount();
            this._change();
        }
        this.setChangeEvents(true);
    };
    Selection.prototype.getItems = function () {
        return this._items;
    };
    Selection.prototype.getSelection = function () {
        if (!this._selectedItems) {
            this._selectedItems = [];
            var items = this._items;
            if (items) {
                for (var i = 0; i < items.length; i++) {
                    if (this.isIndexSelected(i)) {
                        this._selectedItems.push(items[i]);
                    }
                }
            }
        }
        return this._selectedItems;
    };
    Selection.prototype.getSelectedCount = function () {
        return this._isAllSelected
            ? this._items.length - this._exemptedCount - this._unselectableCount
            : this._exemptedCount;
    };
    Selection.prototype.getSelectedIndices = function () {
        if (!this._selectedIndices) {
            this._selectedIndices = [];
            var items = this._items;
            if (items) {
                for (var i = 0; i < items.length; i++) {
                    if (this.isIndexSelected(i)) {
                        this._selectedIndices.push(i);
                    }
                }
            }
        }
        return this._selectedIndices;
    };
    Selection.prototype.isRangeSelected = function (fromIndex, count) {
        if (count === 0) {
            return false;
        }
        var endIndex = fromIndex + count;
        for (var i = fromIndex; i < endIndex; i++) {
            if (!this.isIndexSelected(i)) {
                return false;
            }
        }
        return true;
    };
    Selection.prototype.isAllSelected = function () {
        var selectableCount = this._items.length - this._unselectableCount;
        // In single mode, we can only have a max of 1 item.
        if (this.mode === _Selection_types__WEBPACK_IMPORTED_MODULE_0__["SelectionMode"].single) {
            selectableCount = Math.min(selectableCount, 1);
        }
        return ((this.count > 0 && this._isAllSelected && this._exemptedCount === 0) ||
            (!this._isAllSelected && this._exemptedCount === selectableCount && selectableCount > 0));
    };
    Selection.prototype.isKeySelected = function (key) {
        var index = this._keyToIndexMap[key];
        return this.isIndexSelected(index);
    };
    Selection.prototype.isIndexSelected = function (index) {
        return !!((this.count > 0 && this._isAllSelected && !this._exemptedIndices[index] && !this._unselectableIndices[index]) ||
            (!this._isAllSelected && this._exemptedIndices[index]));
    };
    Selection.prototype.setAllSelected = function (isAllSelected) {
        if (isAllSelected && this.mode !== _Selection_types__WEBPACK_IMPORTED_MODULE_0__["SelectionMode"].multiple) {
            return;
        }
        var selectableCount = this._items ? this._items.length - this._unselectableCount : 0;
        this.setChangeEvents(false);
        if (selectableCount > 0 && (this._exemptedCount > 0 || isAllSelected !== this._isAllSelected)) {
            this._exemptedIndices = {};
            if (isAllSelected !== this._isAllSelected || this._exemptedCount > 0) {
                this._exemptedCount = 0;
                this._isAllSelected = isAllSelected;
                this._change();
            }
            this._updateCount();
        }
        this.setChangeEvents(true);
    };
    Selection.prototype.setKeySelected = function (key, isSelected, shouldAnchor) {
        var index = this._keyToIndexMap[key];
        if (index >= 0) {
            this.setIndexSelected(index, isSelected, shouldAnchor);
        }
    };
    Selection.prototype.setIndexSelected = function (index, isSelected, shouldAnchor) {
        if (this.mode === _Selection_types__WEBPACK_IMPORTED_MODULE_0__["SelectionMode"].none) {
            return;
        }
        // Clamp the index.
        index = Math.min(Math.max(0, index), this._items.length - 1);
        // No-op on out of bounds selections.
        if (index < 0 || index >= this._items.length) {
            return;
        }
        this.setChangeEvents(false);
        var isExempt = this._exemptedIndices[index];
        var canSelect = !this._unselectableIndices[index];
        if (canSelect) {
            if (isSelected && this.mode === _Selection_types__WEBPACK_IMPORTED_MODULE_0__["SelectionMode"].single) {
                // If this is single-select, the previous selection should be removed.
                this._setAllSelected(false, true);
            }
            // Determine if we need to remove the exemption.
            if (isExempt && ((isSelected && this._isAllSelected) || (!isSelected && !this._isAllSelected))) {
                delete this._exemptedIndices[index];
                this._exemptedCount--;
            }
            // Determine if we need to add the exemption.
            if (!isExempt && ((isSelected && !this._isAllSelected) || (!isSelected && this._isAllSelected))) {
                this._exemptedIndices[index] = true;
                this._exemptedCount++;
            }
            if (shouldAnchor) {
                this._anchoredIndex = index;
            }
        }
        this._updateCount();
        this.setChangeEvents(true);
    };
    Selection.prototype.selectToKey = function (key, clearSelection) {
        this.selectToIndex(this._keyToIndexMap[key], clearSelection);
    };
    Selection.prototype.selectToIndex = function (index, clearSelection) {
        if (this.mode === _Selection_types__WEBPACK_IMPORTED_MODULE_0__["SelectionMode"].none) {
            return;
        }
        if (this.mode === _Selection_types__WEBPACK_IMPORTED_MODULE_0__["SelectionMode"].single) {
            this.setIndexSelected(index, true, true);
            return;
        }
        var anchorIndex = this._anchoredIndex || 0;
        var startIndex = Math.min(index, anchorIndex);
        var endIndex = Math.max(index, anchorIndex);
        this.setChangeEvents(false);
        if (clearSelection) {
            this._setAllSelected(false, true);
        }
        for (; startIndex <= endIndex; startIndex++) {
            this.setIndexSelected(startIndex, true, false);
        }
        this.setChangeEvents(true);
    };
    Selection.prototype.toggleAllSelected = function () {
        this.setAllSelected(!this.isAllSelected());
    };
    Selection.prototype.toggleKeySelected = function (key) {
        this.setKeySelected(key, !this.isKeySelected(key), true);
    };
    Selection.prototype.toggleIndexSelected = function (index) {
        this.setIndexSelected(index, !this.isIndexSelected(index), true);
    };
    Selection.prototype.toggleRangeSelected = function (fromIndex, count) {
        if (this.mode === _Selection_types__WEBPACK_IMPORTED_MODULE_0__["SelectionMode"].none) {
            return;
        }
        var isRangeSelected = this.isRangeSelected(fromIndex, count);
        var endIndex = fromIndex + count;
        if (this.mode === _Selection_types__WEBPACK_IMPORTED_MODULE_0__["SelectionMode"].single && count > 1) {
            return;
        }
        this.setChangeEvents(false);
        for (var i = fromIndex; i < endIndex; i++) {
            this.setIndexSelected(i, !isRangeSelected, false);
        }
        this.setChangeEvents(true);
    };
    Selection.prototype._updateCount = function (preserveModalState) {
        if (preserveModalState === void 0) { preserveModalState = false; }
        var count = this.getSelectedCount();
        if (count !== this.count) {
            this.count = count;
            this._change();
        }
        if (!this.count && !preserveModalState) {
            this.setModal(false);
        }
    };
    Selection.prototype._setAllSelected = function (isAllSelected, preserveModalState) {
        if (preserveModalState === void 0) { preserveModalState = false; }
        if (isAllSelected && this.mode !== _Selection_types__WEBPACK_IMPORTED_MODULE_0__["SelectionMode"].multiple) {
            return;
        }
        var selectableCount = this._items ? this._items.length - this._unselectableCount : 0;
        this.setChangeEvents(false);
        if (selectableCount > 0 && (this._exemptedCount > 0 || isAllSelected !== this._isAllSelected)) {
            this._exemptedIndices = {};
            if (isAllSelected !== this._isAllSelected || this._exemptedCount > 0) {
                this._exemptedCount = 0;
                this._isAllSelected = isAllSelected;
                this._change();
            }
            this._updateCount(preserveModalState);
        }
        this.setChangeEvents(true);
    };
    Selection.prototype._change = function () {
        if (this._changeEventSuppressionCount === 0) {
            this._selectedItems = null;
            this._selectedIndices = undefined;
            _EventGroup__WEBPACK_IMPORTED_MODULE_1__["EventGroup"].raise(this, _Selection_types__WEBPACK_IMPORTED_MODULE_0__["SELECTION_CHANGE"]);
            if (this._onSelectionChanged) {
                this._onSelectionChanged();
            }
        }
        else {
            this._hasChanged = true;
        }
    };
    return Selection;
}());

function defaultGetKey(item, index) {
    // 0 may be used as a key
    var _a = (item || {}).key, key = _a === void 0 ? "" + index : _a;
    return key;
}
//# sourceMappingURL=Selection.js.map

/***/ }),

/***/ "vv7S":
/*!********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/initializeFocusRects.js ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: initializeFocusRects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeFocusRects", function() { return initializeFocusRects; });
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/getWindow */ "jfaJ");
/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyboard */ "ImWu");
/* harmony import */ var _setFocusVisibility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setFocusVisibility */ "DyX/");



/**
 * Initializes the logic which:
 *
 * 1. Subscribes keydown and mousedown events. (It will only do it once per window,
 *    so it's safe to call this method multiple times.)
 * 2. When the user presses directional keyboard keys, adds the 'ms-Fabric--isFocusVisible' classname
 *    to the document body, removes the 'ms-Fabric-isFocusHidden' classname.
 * 3. When the user clicks a mouse button, adds the 'ms-Fabric-isFocusHidden' classname to the
 *    document body, removes the 'ms-Fabric--isFocusVisible' classname.
 *
 * This logic allows components on the page to conditionally render focus treatments based on
 * the existence of global classnames, which simplifies logic overall.
 *
 * @param window - the window used to add the event listeners
 * @deprecated Use useFocusRects hook or FocusRects component instead.
 */
function initializeFocusRects(window) {
    var _a;
    var win = (window || Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__["getWindow"])());
    if (!win || ((_a = win.FabricConfig) === null || _a === void 0 ? void 0 : _a.disableFocusRects) === true) {
        return;
    }
    if (!win.__hasInitializeFocusRects__) {
        win.__hasInitializeFocusRects__ = true;
        win.addEventListener('mousedown', _onMouseDown, true);
        win.addEventListener('pointerdown', _onPointerDown, true);
        win.addEventListener('keydown', _onKeyDown, true);
    }
}
function _onMouseDown(ev) {
    Object(_setFocusVisibility__WEBPACK_IMPORTED_MODULE_2__["setFocusVisibility"])(false, ev.target);
}
function _onPointerDown(ev) {
    if (ev.pointerType !== 'mouse') {
        Object(_setFocusVisibility__WEBPACK_IMPORTED_MODULE_2__["setFocusVisibility"])(false, ev.target);
    }
}
function _onKeyDown(ev) {
    // eslint-disable-next-line deprecation/deprecation
    Object(_keyboard__WEBPACK_IMPORTED_MODULE_1__["isDirectionalKeyCode"])(ev.which) && Object(_setFocusVisibility__WEBPACK_IMPORTED_MODULE_2__["setFocusVisibility"])(true, ev.target);
}
//# sourceMappingURL=initializeFocusRects.js.map

/***/ }),

/***/ "vvHx":
/*!**********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/styling@7.16.19_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/styling/lib/styles/hiddenContentStyle.js ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: hiddenContentStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hiddenContentStyle", function() { return hiddenContentStyle; });
var hiddenContentStyle = {
    position: 'absolute',
    width: 1,
    height: 1,
    margin: -1,
    padding: 0,
    border: 0,
    overflow: 'hidden',
};
//# sourceMappingURL=hiddenContentStyle.js.map

/***/ }),

/***/ "w0Tv":
/*!***********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/dom/getRect.js ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: getRect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRect", function() { return getRect; });
/**
 * Helper to get bounding client rect. Passing in window will get the window size.
 *
 * @public
 */
function getRect(element) {
    var rect;
    if (element) {
        if (element === window) {
            rect = {
                left: 0,
                top: 0,
                width: window.innerWidth,
                height: window.innerHeight,
                right: window.innerWidth,
                bottom: window.innerHeight,
            };
        }
        else if (element.getBoundingClientRect) {
            rect = element.getBoundingClientRect();
        }
    }
    return rect;
}
//# sourceMappingURL=getRect.js.map

/***/ }),

/***/ "wNiU":
/*!*****************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/FabricPerformance.js ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: FabricPerformance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabricPerformance", function() { return FabricPerformance; });
var now = function () {
    return typeof performance !== 'undefined' && !!performance.now ? performance.now() : Date.now();
};
var RESET_INTERVAL = 3 * 60 * 1000; // auto reset every 3 minutes
/**
 * Performance helper class for measuring things.
 *
 * @public
 * {@docCategory FabricPerformance}
 */
var FabricPerformance = /** @class */ (function () {
    function FabricPerformance() {
    }
    /**
     * Measures execution time of the given syncronous function. If the same logic is executed multiple times,
     * each individual measurement will be collected as well the overall numbers.
     * @param name - The name of this measurement
     * @param func - The logic to be measured for execution time
     */
    FabricPerformance.measure = function (name, func) {
        if (FabricPerformance._timeoutId) {
            FabricPerformance.setPeriodicReset();
        }
        var start = now();
        func();
        var end = now();
        var measurement = FabricPerformance.summary[name] || {
            totalDuration: 0,
            count: 0,
            all: [],
        };
        var duration = end - start;
        measurement.totalDuration += duration;
        measurement.count++;
        measurement.all.push({
            duration: duration,
            timeStamp: end,
        });
        FabricPerformance.summary[name] = measurement;
    };
    FabricPerformance.reset = function () {
        FabricPerformance.summary = {};
        clearTimeout(FabricPerformance._timeoutId);
        FabricPerformance._timeoutId = NaN;
    };
    FabricPerformance.setPeriodicReset = function () {
        FabricPerformance._timeoutId = setTimeout(function () { return FabricPerformance.reset(); }, RESET_INTERVAL);
    };
    FabricPerformance.summary = {};
    return FabricPerformance;
}());

//# sourceMappingURL=FabricPerformance.js.map

/***/ }),

/***/ "wTrF":
/*!********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/language.js ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: getLanguage, setLanguage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLanguage", function() { return getLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLanguage", function() { return setLanguage; });
/* harmony import */ var _dom_getDocument__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/getDocument */ "NJXT");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ "AF+r");
/* harmony import */ var _sessionStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sessionStorage */ "uyIp");



// Default to undefined so that we initialize on first read.
var _language;
var STORAGE_KEY = 'language';
/**
 * Gets the language set for the page.
 * @param persistenceType - Where to persist the value. Default is `localStorage` if available.
 * (In version 8, the default will be `sessionStorage`.)
 */
function getLanguage(persistenceType) {
    if (persistenceType === void 0) { persistenceType = 'localStorage'; }
    if (_language === undefined) {
        var doc = Object(_dom_getDocument__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
        var savedLanguage = persistenceType === 'localStorage'
            ? _localStorage__WEBPACK_IMPORTED_MODULE_1__["getItem"](STORAGE_KEY)
            : persistenceType === 'sessionStorage'
                ? _sessionStorage__WEBPACK_IMPORTED_MODULE_2__["getItem"](STORAGE_KEY)
                : undefined;
        if (savedLanguage) {
            _language = savedLanguage;
        }
        if (_language === undefined && doc) {
            _language = doc.documentElement.getAttribute('lang');
        }
        if (_language === undefined) {
            _language = 'en';
        }
    }
    return _language;
}
function setLanguage(language, persistenceParam) {
    var doc = Object(_dom_getDocument__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
    if (doc) {
        doc.documentElement.setAttribute('lang', language);
    }
    var persistenceType = persistenceParam === true ? 'none' : !persistenceParam ? 'localStorage' : persistenceParam;
    if (persistenceType === 'localStorage') {
        _localStorage__WEBPACK_IMPORTED_MODULE_1__["setItem"](STORAGE_KEY, language);
    }
    else if (persistenceType === 'sessionStorage') {
        _sessionStorage__WEBPACK_IMPORTED_MODULE_2__["setItem"](STORAGE_KEY, language);
    }
    _language = language;
}
//# sourceMappingURL=language.js.map

/***/ }),

/***/ "xOcl":
/*!*******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/dom/elementContains.js ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: elementContains */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fluentui_dom_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/dom-utilities */ "Doda");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elementContains", function() { return _fluentui_dom_utilities__WEBPACK_IMPORTED_MODULE_0__["elementContains"]; });


//# sourceMappingURL=elementContains.js.map

/***/ }),

/***/ "xm5H":
/*!**********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@fluentui/theme@1.7.1_c129be21209ec549b9ba61bf76d54bcc/node_modules/@fluentui/theme/lib/colors/FluentColors.js ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: CommunicationColors, NeutralColors, SharedColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationColors", function() { return CommunicationColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeutralColors", function() { return NeutralColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedColors", function() { return SharedColors; });
var CommunicationColors;
(function (CommunicationColors) {
    CommunicationColors.shade30 = '#004578';
    CommunicationColors.shade20 = '#005a9e';
    CommunicationColors.shade10 = '#106ebe';
    CommunicationColors.primary = '#0078d4';
    CommunicationColors.tint10 = '#2b88d8';
    CommunicationColors.tint20 = '#c7e0f4';
    CommunicationColors.tint30 = '#deecf9';
    CommunicationColors.tint40 = '#eff6fc';
})(CommunicationColors || (CommunicationColors = {}));
var NeutralColors;
(function (NeutralColors) {
    NeutralColors.black = '#000000';
    NeutralColors.gray220 = '#11100f';
    NeutralColors.gray210 = '#161514';
    NeutralColors.gray200 = '#1b1a19';
    NeutralColors.gray190 = '#201f1e';
    NeutralColors.gray180 = '#252423';
    NeutralColors.gray170 = '#292827';
    NeutralColors.gray160 = '#323130';
    NeutralColors.gray150 = '#3b3a39';
    NeutralColors.gray140 = '#484644';
    NeutralColors.gray130 = '#605e5c';
    NeutralColors.gray120 = '#797775';
    NeutralColors.gray110 = '#8a8886';
    NeutralColors.gray100 = '#979593';
    NeutralColors.gray90 = '#a19f9d';
    NeutralColors.gray80 = '#b3b0ad';
    NeutralColors.gray70 = '#bebbb8';
    NeutralColors.gray60 = '#c8c6c4';
    NeutralColors.gray50 = '#d2d0ce';
    NeutralColors.gray40 = '#e1dfdd';
    NeutralColors.gray30 = '#edebe9';
    NeutralColors.gray20 = '#f3f2f1';
    NeutralColors.gray10 = '#faf9f8';
    NeutralColors.white = '#ffffff';
})(NeutralColors || (NeutralColors = {}));
var SharedColors;
(function (SharedColors) {
    SharedColors.pinkRed10 = '#750b1c';
    SharedColors.red20 = '#a4262c';
    SharedColors.red10 = '#d13438';
    SharedColors.redOrange20 = '#603d30';
    SharedColors.redOrange10 = '#da3b01';
    SharedColors.orange30 = '#8e562e';
    SharedColors.orange20 = '#ca5010';
    SharedColors.orange10 = '#ffaa44';
    SharedColors.yellow10 = '#fce100';
    SharedColors.orangeYellow20 = '#986f0b';
    SharedColors.orangeYellow10 = '#c19c00';
    SharedColors.yellowGreen10 = '#8cbd18';
    SharedColors.green20 = '#0b6a0b';
    SharedColors.green10 = '#498205';
    SharedColors.greenCyan10 = '#00ad56';
    SharedColors.cyan40 = '#005e50';
    SharedColors.cyan30 = '#005b70';
    SharedColors.cyan20 = '#038387';
    SharedColors.cyan10 = '#00b7c3';
    SharedColors.cyanBlue20 = '#004e8c';
    SharedColors.cyanBlue10 = '#0078d4';
    SharedColors.blue10 = '#4f6bed';
    SharedColors.blueMagenta40 = '#373277';
    SharedColors.blueMagenta30 = '#5c2e91';
    SharedColors.blueMagenta20 = '#8764b8';
    SharedColors.blueMagenta10 = '#8378de';
    SharedColors.magenta20 = '#881798';
    SharedColors.magenta10 = '#c239b3';
    SharedColors.magentaPink20 = '#9b0062';
    SharedColors.magentaPink10 = '#e3008c';
    SharedColors.gray40 = '#393939';
    SharedColors.gray30 = '#7a7574';
    SharedColors.gray20 = '#69797e';
    SharedColors.gray10 = '#a0aeb2';
})(SharedColors || (SharedColors = {}));
//# sourceMappingURL=FluentColors.js.map

/***/ }),

/***/ "xtRZ":
/*!****************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/math.js ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: getDistanceBetweenPoints, fitContentToBounds, calculatePrecision, precisionRound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDistanceBetweenPoints", function() { return getDistanceBetweenPoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fitContentToBounds", function() { return fitContentToBounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculatePrecision", function() { return calculatePrecision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "precisionRound", function() { return precisionRound; });
/**
 * Determines the distance between two points.
 *
 * @public
 */
/* eslint-disable deprecation/deprecation */
function getDistanceBetweenPoints(point1, point2) {
    var left1 = point1.left || point1.x || 0;
    var top1 = point1.top || point1.y || 0;
    var left2 = point2.left || point2.x || 0;
    var top2 = point2.top || point2.y || 0;
    /* eslint-enable deprecation/deprecation */
    var distance = Math.sqrt(Math.pow(left1 - left2, 2) + Math.pow(top1 - top2, 2));
    return distance;
}
/**
 * Produces a proportionally-scaled version of an input content size when fit to a bounding size.
 * Given a `contentSize` and a `boundsSize`, this function scales `contentSize` proportionally
 * using either `contain` or `cover` fit behaviors.
 * Use this function to pre-calculate the layout for the CSS `object-fit` and `background-fit` behaviors.
 * With `contain`, the output size must be the largest it can be while completely within the `boundsSize`.
 * With `cover`, the output size must be the smallest it can be while completely around the `boundsSize`.
 * By default, there is a `maxScale` value of 1, which prevents the `contentSize` from being scaled larger.
 *
 * @param options - the options for the bounds fit operation
 */
function fitContentToBounds(options) {
    var contentSize = options.contentSize, boundsSize = options.boundsSize, _a = options.mode, mode = _a === void 0 ? 'contain' : _a, _b = options.maxScale, maxScale = _b === void 0 ? 1 : _b;
    var contentAspectRatio = contentSize.width / contentSize.height;
    var boundsAspectRatio = boundsSize.width / boundsSize.height;
    var scale;
    if (mode === 'contain' ? contentAspectRatio > boundsAspectRatio : contentAspectRatio < boundsAspectRatio) {
        scale = boundsSize.width / contentSize.width;
    }
    else {
        scale = boundsSize.height / contentSize.height;
    }
    var finalScale = Math.min(maxScale, scale);
    return {
        width: contentSize.width * finalScale,
        height: contentSize.height * finalScale,
    };
}
/**
 * Calculates a number's precision based on the number of trailing
 * zeros if the number does not have a decimal indicated by a negative
 * precision. Otherwise, it calculates the number of digits after
 * the decimal point indicated by a positive precision.
 * @param value - the value to determine the precision of
 */
function calculatePrecision(value) {
    /**
     * Group 1:
     * [1-9]([0]+$) matches trailing zeros
     * Group 2:
     * \.([0-9]*) matches all digits after a decimal point.
     */
    var groups = /[1-9]([0]+$)|\.([0-9]*)/.exec(String(value));
    if (!groups) {
        return 0;
    }
    if (groups[1]) {
        return -groups[1].length;
    }
    if (groups[2]) {
        return groups[2].length;
    }
    return 0;
}
/**
 * Rounds a number to a certain level of precision. Accepts negative precision.
 * @param value - The value that is being rounded.
 * @param precision - The number of decimal places to round the number to
 */
function precisionRound(value, precision, base) {
    if (base === void 0) { base = 10; }
    var exp = Math.pow(base, precision);
    return Math.round(value * exp) / exp;
}
//# sourceMappingURL=math.js.map

/***/ }),

/***/ "y4VG":
/*!**************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@fluentui/theme@1.7.1_c129be21209ec549b9ba61bf76d54bcc/node_modules/@fluentui/theme/lib/createTheme.js ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: createTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTheme", function() { return createTheme; });
/* harmony import */ var _colors_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors/index */ "Hc29");
/* harmony import */ var _effects_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./effects/index */ "T0TP");
/* harmony import */ var _fonts_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fonts/index */ "hTVl");
/* harmony import */ var _mergeThemes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mergeThemes */ "KVvR");
/* harmony import */ var _spacing_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spacing/index */ "ypqo");
/* harmony import */ var _utilities_makeSemanticColors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utilities/makeSemanticColors */ "AtTn");






/**
 * Creates a custom theme definition.
 * @param theme - Partial theme object.
 * @param depComments - Whether to include deprecated tags as comments for deprecated slots.
 */
function createTheme(theme, depComments) {
    if (theme === void 0) { theme = {}; }
    if (depComments === void 0) { depComments = false; }
    var isInverted = !!theme.isInverted;
    var baseTheme = {
        palette: _colors_index__WEBPACK_IMPORTED_MODULE_0__["DefaultPalette"],
        effects: _effects_index__WEBPACK_IMPORTED_MODULE_1__["DefaultEffects"],
        fonts: _fonts_index__WEBPACK_IMPORTED_MODULE_2__["DefaultFontStyles"],
        spacing: _spacing_index__WEBPACK_IMPORTED_MODULE_4__["DefaultSpacing"],
        isInverted: isInverted,
        disableGlobalClassNames: false,
        semanticColors: Object(_utilities_makeSemanticColors__WEBPACK_IMPORTED_MODULE_5__["makeSemanticColors"])(_colors_index__WEBPACK_IMPORTED_MODULE_0__["DefaultPalette"], _effects_index__WEBPACK_IMPORTED_MODULE_1__["DefaultEffects"], undefined, isInverted, depComments),
        rtl: undefined,
    };
    return Object(_mergeThemes__WEBPACK_IMPORTED_MODULE_3__["mergeThemes"])(baseTheme, theme);
}
//# sourceMappingURL=createTheme.js.map

/***/ }),

/***/ "yPdX":
/*!****************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/customizations/mergeSettings.js ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: mergeSettings, mergeScopedSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeSettings", function() { return mergeSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeScopedSettings", function() { return mergeScopedSettings; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Merge new and old settings, giving priority to new settings.
 * New settings is optional in which case oldSettings is returned as-is.
 * @param oldSettings - Old settings to fall back to.
 * @param newSettings - New settings that will be merged over oldSettings.
 * @returns Merged settings.
 */
function mergeSettings(oldSettings, newSettings) {
    if (oldSettings === void 0) { oldSettings = {}; }
    var mergeSettingsWith = _isSettingsFunction(newSettings) ? newSettings : _settingsMergeWith(newSettings);
    return mergeSettingsWith(oldSettings);
}
function mergeScopedSettings(oldSettings, newSettings) {
    if (oldSettings === void 0) { oldSettings = {}; }
    var mergeSettingsWith = _isSettingsFunction(newSettings) ? newSettings : _scopedSettingsMergeWith(newSettings);
    return mergeSettingsWith(oldSettings);
}
function _isSettingsFunction(settings) {
    return typeof settings === 'function';
}
function _settingsMergeWith(newSettings) {
    return function (settings) { return (newSettings ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, settings), newSettings) : settings); };
}
function _scopedSettingsMergeWith(scopedSettingsFromProps) {
    if (scopedSettingsFromProps === void 0) { scopedSettingsFromProps = {}; }
    return function (oldScopedSettings) {
        var newScopedSettings = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, oldScopedSettings);
        for (var scopeName in scopedSettingsFromProps) {
            if (scopedSettingsFromProps.hasOwnProperty(scopeName)) {
                newScopedSettings[scopeName] = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, oldScopedSettings[scopeName]), scopedSettingsFromProps[scopeName]);
            }
        }
        return newScopedSettings;
    };
}
//# sourceMappingURL=mergeSettings.js.map

/***/ }),

/***/ "ybkr":
/*!*****************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/hoist.js ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: hoistMethods, unhoistMethods */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hoistMethods", function() { return hoistMethods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unhoistMethods", function() { return unhoistMethods; });
var REACT_LIFECYCLE_EXCLUSIONS = [
    'setState',
    'render',
    'componentWillMount',
    'UNSAFE_componentWillMount',
    'componentDidMount',
    'componentWillReceiveProps',
    'UNSAFE_componentWillReceiveProps',
    'shouldComponentUpdate',
    'componentWillUpdate',
    'getSnapshotBeforeUpdate',
    'UNSAFE_componentWillUpdate',
    'componentDidUpdate',
    'componentWillUnmount',
];
/**
 * Allows you to hoist methods, except those in an exclusion set from a source object into a destination object.
 *
 * @public
 * @param destination - The instance of the object to hoist the methods onto.
 * @param source - The instance of the object where the methods are hoisted from.
 * @param exclusions - (Optional) What methods to exclude from being hoisted.
 * @returns An array of names of methods that were hoisted.
 */
function hoistMethods(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
destination, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
source, exclusions) {
    if (exclusions === void 0) { exclusions = REACT_LIFECYCLE_EXCLUSIONS; }
    var hoisted = [];
    var _loop_1 = function (methodName) {
        if (typeof source[methodName] === 'function' &&
            destination[methodName] === undefined &&
            (!exclusions || exclusions.indexOf(methodName) === -1)) {
            hoisted.push(methodName);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            destination[methodName] = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                source[methodName].apply(source, args);
            };
        }
    };
    for (var methodName in source) {
        _loop_1(methodName);
    }
    return hoisted;
}
/**
 * Provides a method for convenience to unhoist hoisted methods.
 *
 * @public
 * @param source - The source object upon which methods were hoisted.
 * @param methodNames - An array of method names to unhoist.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function unhoistMethods(source, methodNames) {
    methodNames.forEach(function (methodName) { return delete source[methodName]; });
}
//# sourceMappingURL=hoist.js.map

/***/ }),

/***/ "ypqo":
/*!****************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@fluentui/theme@1.7.1_c129be21209ec549b9ba61bf76d54bcc/node_modules/@fluentui/theme/lib/spacing/index.js ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: DefaultSpacing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DefaultSpacing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultSpacing */ "g1LM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultSpacing", function() { return _DefaultSpacing__WEBPACK_IMPORTED_MODULE_0__["DefaultSpacing"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "zh6F":
/*!********************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/merge-styles@7.19.1/node_modules/@uifabric/merge-styles/lib/mergeStyles.js ***!
  \********************************************************************************************************************************************/
/*! exports provided: mergeStyles, mergeCss */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeStyles", function() { return mergeStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeCss", function() { return mergeCss; });
/* harmony import */ var _extractStyleParts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extractStyleParts */ "j+j+");
/* harmony import */ var _StyleOptionsState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StyleOptionsState */ "V8pV");
/* harmony import */ var _styleToClassName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styleToClassName */ "YlYl");



/**
 * Concatenation helper, which can merge class names together. Skips over falsey values.
 *
 * @public
 */
function mergeStyles() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return mergeCss(args, Object(_StyleOptionsState__WEBPACK_IMPORTED_MODULE_1__["getStyleOptions"])());
}
/**
 * Concatenation helper, which can merge class names together. Skips over falsey values.
 * Accepts a set of options that will be used when calculating styles.
 *
 * @public
 */
function mergeCss(args, options) {
    var styleArgs = args instanceof Array ? args : [args];
    var _a = Object(_extractStyleParts__WEBPACK_IMPORTED_MODULE_0__["extractStyleParts"])(styleArgs), classes = _a.classes, objects = _a.objects;
    if (objects.length) {
        classes.push(Object(_styleToClassName__WEBPACK_IMPORTED_MODULE_2__["styleToClassName"])(options || {}, objects));
    }
    return classes.join(' ');
}
//# sourceMappingURL=mergeStyles.js.map

/***/ }),

/***/ "zxpP":
/*!*************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/dom/portalContainsElement.js ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: portalContainsElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fluentui_dom_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/dom-utilities */ "Doda");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "portalContainsElement", function() { return _fluentui_dom_utilities__WEBPACK_IMPORTED_MODULE_0__["portalContainsElement"]; });


//# sourceMappingURL=portalContainsElement.js.map

/***/ })

/******/ })});;
//# sourceMappingURL=uifabric-styling-bundle_none.js.map