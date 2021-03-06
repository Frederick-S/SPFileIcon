(function (window) {
    'use strict';

    var defaultIcon = 'icgen.gif';

    var icons = {
        'accdb': 'icaccdb.png',
        'accdt': 'icaccdb.png',
        'accdc': 'icaccdb.png',
        'accde': 'icaccde.gif',
        'accdr': 'icaccde.gif',
        'asax': 'icasax.gif',
        'ascx': 'icascx.gif',
        'asmx': 'icasmx.gif',
        'asp': 'ichtm.gif',
        'aspx': 'ichtm.gif',
        'bmp': 'icbmp.gif',
        'cat': 'iccat.gif',
        'chm': 'icchm.gif',
        'cmp': 'ProjectManageDeliverables.16x16x32.png',
        'config': 'icconfig.gif',
        'css': 'iccss.gif',
        'db': 'icdb.gif',
        'dib': 'icdib.gif',
        'disc': 'icdisc.gif',
        'doc': 'icdoc.png',
        'docm': 'icdocm.png',
        'docx': 'icdocx.png',
        'dot': 'icdot.png',
        'dotm': 'icdotm.png',
        'dotx': 'icdotx.png',
        'dvd': 'icdvd.gif',
        'dwp': 'icdwp.gif',
        'dwt': 'icdwt.gif',
        'eml': 'iceml.gif',
        'est': 'icest.gif',
        'fwp': 'icfwp.gif',
        'gif': 'icgif.gif',
        'hdp': 'ichdp.gif',
        'hlp': 'ichlp.gif',
        'hta': 'ichta.gif',
        'htm': 'ichtm.gif',
        'html': 'ichtm.gif',
        'htt': 'ichtt.gif',
        'inf': 'icinf.gif',
        'ini': 'icini.gif',
        'jfif': 'icjfif.gif',
        'jpe': 'icjpe.gif',
        'jpeg': 'icjpeg.gif',
        'jpg': 'icjpg.gif',
        'js': 'icjs.gif',
        'jse': 'icjse.gif',
        'log': 'iclog.gif',
        'master': 'icmaster.gif',
        'mht': 'icmht.gif',
        'mhtml': 'icmht.gif',
        'mpd': 'icmpd.png',
        'mpp': 'icmpp.png',
        'mps': 'icmps.gif',
        'mpt': 'icmpt.png',
        'mpw': 'icmpw.gif',
        'mpx': 'icmpx.gif',
        'msg': 'icmsg.png',
        'msi': 'icmsi.gif',
        'msp': 'icmsp.gif',
        'ocx': 'icocx.gif',
        'odc': 'icodc.gif',
        'odp': 'icodp.png',
        'odt': 'icodt.png',
        'ods': 'icods.png',
        'one': 'icone.png',
        'onepkg': 'iconp.png',
        'onetoc2': 'icont.png',
        'pdf': 'icpdf.png',
        'png': 'icpng.gif',
        'pot': 'icpot.png',
        'potm': 'icpotm.png',
        'potx': 'icpotx.png',
        'ppa': 'icppa.png',
        'ppam': 'icppam.png',
        'ppt': 'icppt.png',
        'pptm': 'icpptm.png',
        'pptx': 'icpptx.png',
        'pps': 'icpps.png',
        'ppsdc': 'icppsdc.png',
        'ppsm': 'icppsm.png',
        'ppsx': 'icppsx.png',
        'psp': 'icpsp.gif',
        'psd': 'icbmp.gif',
        'ptm': 'icptm.gif',
        'ptt': 'icptt.gif',
        'pub': 'icpub.png',
        'rdl': 'doc_sp16.gif',
        'rsapplication': 'newreport_sp.gif',
        'rsc': 'component_sp16.gif',
        'rsd': 'dataset_sp16.gif',
        'rsds': 'datasource.gif',
        'rtf': 'icrtf.gif',
        'smdl': 'model_sp16.gif',
        'stp': 'icstp.gif',
        'stt': 'icstt.gif',
        'thmx': 'icthmx.gif',
        'tif': 'ictif.gif',
        'tiff': 'ictiff.gif',
        'txt': 'ictxt.gif',
        'vbe': 'icvbe.gif',
        'vbs': 'icvbs.gif',
        'vdw': 'icvdw.gif',
        'vdx': 'icvdx.gif',
        'vsd': 'icvsd.gif',
        'vsl': 'icvsl.gif',
        'vss': 'icvss.gif',
        'vst': 'icvst.gif',
        'vsu': 'icvsu.gif',
        'vsw': 'icvsw.gif',
        'vsx': 'icvsx.gif',
        'vtx': 'icvtx.gif',
        'vsdx': 'icvsdx.gif',
        'vsdm': 'icvsdm.gif',
        'vssm': 'icvssm.gif',
        'vssx': 'icvssx.gif',
        'vstm': 'icvstm.gif',
        'vstx': 'icvstx.gif',
        'wdp': 'ichdp.gif',
        'webpart': 'icdwp.gif',
        'wm': 'icwm.gif',
        'wma': 'icwma.gif',
        'wmd': 'icwmd.gif',
        'wmp': 'icwmp.gif',
        'wms': 'icwms.gif',
        'wmv': 'icwmv.gif',
        'wmx': 'icwmx.gif',
        'wmz': 'icwmz.gif',
        'wsf': 'icwsf.gif',
        'xla': 'icxla.png',
        'xlam': 'icxlam.png',
        'xls': 'icxls.png',
        'xlsb': 'icxlsb.png',
        'xlsm': 'icxlsm.png',
        'xlsx': 'icxlsx.png',
        'xlt': 'icxlt.png',
        'xltb': 'icxltx.gif',
        'xltm': 'icxltm.png',
        'xltx': 'icxltx.png',
        'xml': 'icxml.gif',
        'xps': 'icxps.gif',
        'xsd': 'icxsd.gif',
        'xsl': 'icxsl.gif',
        'xsn': 'icxsn.png',
        'xslt': 'icxslt.gif',
        'zip': 'iczip.gif'
    };

    var SPFileIcon = {
        'get': function (fileExtension) {
            var icon = icons[fileExtension];

            if (icon) {
                return icon;
            } else {
                return defaultIcon;
            }
        }
    };

    window.SPFileIcon = SPFileIcon;
})(window);
