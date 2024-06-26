odoo.define('pdfjs_disable_eval.basic_fields', function (require) {
    'use strict';

    const basicFields = require('web.basic_fields');
    const FieldPdfViewer = basicFields.FieldPdfViewer;

    const FieldPdfViewerPatch = FieldPdfViewer.extend({

        //--------------------------------------------------------------------------
        // AVALAH OVERRIDE
        //--------------------------------------------------------------------------

        /**
         * @private
         * @param {string} [fileURI] file URI if specified
         * @returns {string} the pdf viewer URI
         */
        _getURI: function (fileURI) {
            const page = this.recordData[this.name + '_page'] || 1;
            if (!fileURI) {
                const queryObj = {
                    model: this.model,
                    field: this.name,
                    id: this.res_id,
                };
                const queryString = $.param(queryObj);
                fileURI = '/web/content?' + queryString;
            }
            fileURI = encodeURIComponent(fileURI);
            const viewerURL = '/pdfjs_disable_eval/static/src/viewer.html?file=';
            return viewerURL + fileURI + '#page=' + page;
        },
    });

    basicFields.FieldPdfViewer = FieldPdfViewerPatch;

    return FieldPdfViewerPatch;

});
