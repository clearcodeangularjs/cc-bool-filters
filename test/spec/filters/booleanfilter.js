/*

    Copyright (C) 2012-2013 by Clearcode <http://clearcode.cc>
    and associates (see AUTHORS).

    This file is part of cc-boolean-filter.

    cc-boolean-filter is free software: you can redistribute it and/or modify
    it under the terms of the Lesser GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    cc-boolean-filter is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with cc-boolean-filter.  If not, see <http://www.gnu.org/licenses/>.

*/
'use strict';

describe('Filter: booleanFilter', function() {
    // load the filter's module
    beforeEach(module('sandboxApp'));

    // initialize a new instance of the filter before each test
    var booleanFilter;

    beforeEach(inject(function($filter) {
        booleanFilter = $filter('booleanFilter');
    }));

    it('should return "true replace" text when input is true', function() {
        expect(booleanFilter(true, 'true replace', 'replace false')).toBe('true replace');
    });

    it('should return "replace false" text when input is false', function() {
        expect(booleanFilter(false, 'true replace', 'replace false')).toBe('replace false');
    });
});
