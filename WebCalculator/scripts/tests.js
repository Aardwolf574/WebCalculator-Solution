module('Calculator Test Suite', { setup: function () { initialize(); } });

function initialize() {
    document.getElementById('btn5').addEventListener('click', numberClick, false);
    txtInput = document.getElementById('txtInput');
}


test("Btn5 Click Test", function () {
    expect(1);
    var btn = document.getElementById("btn5");
    QUnit.triggerEvent(btn, "click");
    var result = txtInput.value;
    var expected = '5';
    equal(result, expected, 'Expected value: ' + expected + ' Actual value: ' +
        result);
});