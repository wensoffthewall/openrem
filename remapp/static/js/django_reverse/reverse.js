this.Urls=(function(){var Urls={};var self={url_patterns:{}};var _get_url=function(url_pattern){return function(){var _arguments,index,url,url_arg,url_args,_i,_len,_ref,_ref_list,match_ref,provided_keys,build_kwargs;_arguments=arguments;_ref_list=self.url_patterns[url_pattern];if(arguments.length==1&&typeof(arguments[0])=="object"){var provided_keys_list=Object.keys(arguments[0]);provided_keys={};for(_i=0;_i<provided_keys_list.length;_i++)
provided_keys[provided_keys_list[_i]]=1;match_ref=function(ref)
{var _i;if(ref[1].length!=provided_keys_list.length)
return false;for(_i=0;_i<ref[1].length&&ref[1][_i]in provided_keys;_i++);return _i==ref[1].length;}
build_kwargs=function(keys){return _arguments[0];}}else{match_ref=function(ref)
{return ref[1].length==_arguments.length;}
build_kwargs=function(keys){var kwargs={};for(var i=0;i<keys.length;i++){kwargs[keys[i]]=_arguments[i];}
return kwargs;}}
for(_i=0;_i<_ref_list.length&&!match_ref(_ref_list[_i]);_i++);if(_i==_ref_list.length)
return null;_ref=_ref_list[_i];url=_ref[0],url_args=build_kwargs(_ref[1]);for(url_arg in url_args){var url_arg_value=url_args[url_arg];if(url_arg_value===undefined||url_arg_value===null){url_arg_value='';}else{url_arg_value=url_arg_value.toString();}
url=url.replace("%("+url_arg+")s",url_arg_value);}
return'/'+url;};};var name,pattern,url,url_patterns,_i,_len,_ref;url_patterns=[['admin:app_list',[['admin/%(app_label)s/',['app_label',]]],],['admin:auth_group_add',[['admin/auth/group/add/',[]]],],['admin:auth_group_change',[['admin/auth/group/%(_0)s/',['_0',]]],],['admin:auth_group_changelist',[['admin/auth/group/',[]]],],['admin:auth_group_delete',[['admin/auth/group/%(_0)s/delete/',['_0',]]],],['admin:auth_group_history',[['admin/auth/group/%(_0)s/history/',['_0',]]],],['admin:auth_user_add',[['admin/auth/user/add/',[]]],],['admin:auth_user_change',[['admin/auth/user/%(_0)s/',['_0',]]],],['admin:auth_user_changelist',[['admin/auth/user/',[]]],],['admin:auth_user_delete',[['admin/auth/user/%(_0)s/delete/',['_0',]]],],['admin:auth_user_history',[['admin/auth/user/%(_0)s/history/',['_0',]]],],['admin:auth_user_password_change',[['admin/auth/user/%(_0)s/password/',['_0',]]],],['admin:index',[['admin/',[]]],],['admin:jsi18n',[['admin/jsi18n/',[]]],],['admin:login',[['admin/login/',[]]],],['admin:logout',[['admin/logout/',[]]],],['admin:password_change',[['admin/password_change/',[]]],],['admin:password_change_done',[['admin/password_change/done/',[]]],],['admin:remapp_admintaskquestions_add',[['admin/remapp/admintaskquestions/add/',[]]],],['admin:remapp_admintaskquestions_change',[['admin/remapp/admintaskquestions/%(_0)s/',['_0',]]],],['admin:remapp_admintaskquestions_changelist',[['admin/remapp/admintaskquestions/',[]]],],['admin:remapp_admintaskquestions_delete',[['admin/remapp/admintaskquestions/%(_0)s/delete/',['_0',]]],],['admin:remapp_admintaskquestions_history',[['admin/remapp/admintaskquestions/%(_0)s/history/',['_0',]]],],['admin:remapp_notpatientindicatorsid_add',[['admin/remapp/notpatientindicatorsid/add/',[]]],],['admin:remapp_notpatientindicatorsid_change',[['admin/remapp/notpatientindicatorsid/%(_0)s/',['_0',]]],],['admin:remapp_notpatientindicatorsid_changelist',[['admin/remapp/notpatientindicatorsid/',[]]],],['admin:remapp_notpatientindicatorsid_delete',[['admin/remapp/notpatientindicatorsid/%(_0)s/delete/',['_0',]]],],['admin:remapp_notpatientindicatorsid_history',[['admin/remapp/notpatientindicatorsid/%(_0)s/history/',['_0',]]],],['admin:remapp_notpatientindicatorsname_add',[['admin/remapp/notpatientindicatorsname/add/',[]]],],['admin:remapp_notpatientindicatorsname_change',[['admin/remapp/notpatientindicatorsname/%(_0)s/',['_0',]]],],['admin:remapp_notpatientindicatorsname_changelist',[['admin/remapp/notpatientindicatorsname/',[]]],],['admin:remapp_notpatientindicatorsname_delete',[['admin/remapp/notpatientindicatorsname/%(_0)s/delete/',['_0',]]],],['admin:remapp_notpatientindicatorsname_history',[['admin/remapp/notpatientindicatorsname/%(_0)s/history/',['_0',]]],],['admin:sites_site_add',[['admin/sites/site/add/',[]]],],['admin:sites_site_change',[['admin/sites/site/%(_0)s/',['_0',]]],],['admin:sites_site_changelist',[['admin/sites/site/',[]]],],['admin:sites_site_delete',[['admin/sites/site/%(_0)s/delete/',['_0',]]],],['admin:sites_site_history',[['admin/sites/site/%(_0)s/history/',['_0',]]],],['admin:view_on_site',[['admin/r/%(content_type_id)s/%(object_id)s/',['content_type_id','object_id',]]],],['admin_questions_hide_not_patient',[['openrem/admin/adminquestions/hide_not_patient/',[],],['admin/adminquestions/hide_not_patient/',[]]],],['celery_abort',[['openrem/admin/celery/abort_task/%(task_id)s/%(type)s',['task_id','type',],],['admin/celery/abort_task/%(task_id)s/%(type)s',['task_id','type',]]],],['celery_admin',[['openrem/admin/celery/',[],],['admin/celery/',[]]],],['celery_tasks',[['openrem/admin/celery/tasks/%(stage)s',['stage',],],['admin/celery/tasks/%(stage)s',['stage',]]],],['chart_options_view',[['openrem/chartoptions/',[],],['chartoptions/',[]]],],['charts_off',[['openrem/charts_off/',[],],['charts_off/',[]]],],['ct_detail_view',[['openrem/ct/%(pk)s/',['pk',],],['ct/%(pk)s/',['pk',]]],],['ct_export_ctxlsx',[['openrem/xlsx/openrem/ct/',[],],['xlsx/openrem/ct/',[]]],],['ct_summary_chart_data',[['openrem/ct/chart/',[],],['ct/chart/',[]]],],['ct_summary_list_filter',[['openrem/ct/',[],],['ct/',[]]],],['ct_xlsx_phe2019',[['openrem/exportctphe2019/',[],],['exportctphe2019/',[]]],],['ctcsv1',[['openrem/exportctcsv1/%(name)s/%(pat_id)s/',['name','pat_id',],],['exportctcsv1/%(name)s/%(pat_id)s/',['name','pat_id',]]],],['ctxlsx1',[['openrem/exportctxlsx1/%(name)s/%(pat_id)s/',['name','pat_id',],],['exportctxlsx1/%(name)s/%(pat_id)s/',['name','pat_id',]]],],['deletefile',[['openrem/deletefile/',[],],['deletefile/',[]]],],['dicom_delete_settings_update',[['openrem/admin/dicomdelsettings/%(pk)s/',['pk',],],['admin/dicomdelsettings/%(pk)s/',['pk',]]],],['dicom_qr_page',[['openrem/admin/queryremote',[],],['admin/queryremote',[]]],],['dicom_summary',[['openrem/admin/dicomsummary',[],],['admin/dicomsummary',[]]],],['dicomqr_add',[['openrem/admin/dicomqr/add/',[],],['admin/dicomqr/add/',[]]],],['dicomqr_delete',[['openrem/admin/dicomqr/%(pk)s/delete/',['pk',],],['admin/dicomqr/%(pk)s/delete/',['pk',]]],],['dicomqr_update',[['openrem/admin/dicomqr/%(pk)s/',['pk',],],['admin/dicomqr/%(pk)s/',['pk',]]],],['dicomstore_add',[['openrem/admin/dicomstore/add/',[],],['admin/dicomstore/add/',[]]],],['dicomstore_delete',[['openrem/admin/dicomstore/%(pk)s/delete/',['pk',],],['admin/dicomstore/%(pk)s/delete/',['pk',]]],],['dicomstore_update',[['openrem/admin/dicomstore/%(pk)s/',['pk',],],['admin/dicomstore/%(pk)s/',['pk',]]],],['display_name_last_date_and_count',[['openrem/admin/equipmentlastdateandcount',[],],['admin/equipmentlastdateandcount',[]]],],['display_name_populate',[['openrem/populatedisplaynames',[],],['populatedisplaynames',[]]],],['display_name_update',[['openrem/updatedisplaynames/',[],],['updatedisplaynames/',[]]],],['display_names_view',[['openrem/viewdisplaynames/',[],],['viewdisplaynames/',[]]],],['djdt:render_panel',[['__debug__/render_panel/',[]]],],['djdt:sql_explain',[['__debug__/sql_explain/',[]]],],['djdt:sql_profile',[['__debug__/sql_profile/',[]]],],['djdt:sql_select',[['__debug__/sql_select/',[]]],],['djdt:template_source',[['__debug__/template_source/',[]]],],['download',[['openrem/download/%(task_id)s',['task_id',],],['download/%(task_id)s',['task_id',]]],],['dx_detail_view',[['openrem/dx/%(pk)s/',['pk',],],['dx/%(pk)s/',['pk',]]],],['dx_summary_chart_data',[['openrem/dx/chart/',[],],['dx/chart/',[]]],],['dx_summary_list_filter',[['openrem/dx/',[],],['dx/',[]]],],['dxcsv1',[['openrem/exportdxcsv1/%(name)s/%(pat_id)s/',['name','pat_id',],],['exportdxcsv1/%(name)s/%(pat_id)s/',['name','pat_id',]]],],['dxxlsx1',[['openrem/exportdxxlsx1/%(name)s/%(pat_id)s/',['name','pat_id',],],['exportdxxlsx1/%(name)s/%(pat_id)s/',['name','pat_id',]]],],['export',[['openrem/export/',[],],['export/',[]]],],['export_abort',[['openrem/export/abort/%(pk)s',['pk',],],['export/abort/%(pk)s',['pk',]]],],['failed_list_populate',[['openrem/populatefailedimportlist',[],],['populatefailedimportlist',[]]],],['flcsv1',[['openrem/exportflcsv1/%(name)s/%(pat_id)s/',['name','pat_id',],],['exportflcsv1/%(name)s/%(pat_id)s/',['name','pat_id',]]],],['home',[['openrem/',[],],['',[]]],],['homepage_options_view',[['openrem/homepageoptions/',[],],['homepageoptions/',[]]],],['login',[['login/',[]]],],['logout',[['logout/',[]]],],['mg_detail_view',[['openrem/mg/%(pk)s/',['pk',],],['mg/%(pk)s/',['pk',]]],],['mg_summary_chart_data',[['openrem/mg/chart/',[],],['mg/chart/',[]]],],['mg_summary_list_filter',[['openrem/mg/',[],],['mg/',[]]],],['mgcsv1',[['openrem/exportmgcsv1/%(name)s/%(pat_id)s/',['name','pat_id',],],['exportmgcsv1/%(name)s/%(pat_id)s/',['name','pat_id',]]],],['mgnhsbsp',[['openrem/exportmgnhsbsp/',[],],['exportmgnhsbsp/',[]]],],['mgxlsx1',[['openrem/exportmgxlsx1/%(name)s/%(pat_id)s/',['name','pat_id',],],['exportmgxlsx1/%(name)s/%(pat_id)s/',['name','pat_id',]]],],['move_update',[['openrem/admin/moveupdate',[],],['admin/moveupdate',[]]],],['not_patient_indicators',[['openrem/admin/notpatientindicators/',[],],['admin/notpatientindicators/',[]]],],['not_patient_indicators_as_074',[['openrem/admin/notpatientindicators/restore074/',[],],['admin/notpatientindicators/restore074/',[]]],],['notpatienid_add',[['openrem/admin/notpatientindicators/id/add/',[],],['admin/notpatientindicators/id/add/',[]]],],['notpatientid_delete',[['openrem/admin/notpatientindicators/id/%(pk)s/delete/',['pk',],],['admin/notpatientindicators/id/%(pk)s/delete/',['pk',]]],],['notpatientid_update',[['openrem/admin/notpatientindicators/id/%(pk)s/',['pk',],],['admin/notpatientindicators/id/%(pk)s/',['pk',]]],],['notpatientname_add',[['openrem/admin/notpatientindicators/names/add/',[],],['admin/notpatientindicators/names/add/',[]]],],['notpatientname_delete',[['openrem/admin/notpatientindicators/names/%(pk)s/delete/',['pk',],],['admin/notpatientindicators/names/%(pk)s/delete/',['pk',]]],],['notpatientname_update',[['openrem/admin/notpatientindicators/names/%(pk)s/',['pk',],],['admin/notpatientindicators/names/%(pk)s/',['pk',]]],],['password_change',[['openrem/change_password/',[],],['change_password/',[]]],],['password_change_done',[['openrem/change_password/done/',[],],['change_password/done/',[]]],],['patient_id_settings_update',[['openrem/admin/patientidsettings/%(pk)s/',['pk',],],['admin/patientidsettings/%(pk)s/',['pk',]]],],['q_process',[['openrem/admin/queryprocess',[],],['admin/queryprocess',[]]],],['query_update',[['openrem/admin/queryupdate',[],],['admin/queryupdate',[]]],],['rabbitmq_purge',[['openrem/admin/rabbitmq/purge_queue/%(queue)s',['queue',],],['admin/rabbitmq/purge_queue/%(queue)s',['queue',]]],],['reprocess_dual',[['openrem/admin/reprocessdual/%(pk)s/',['pk',],],['admin/reprocessdual/%(pk)s/',['pk',]]],],['review_failed_imports',[['openrem/admin/review/failed/%(modality)s/',['modality',],],['admin/review/failed/%(modality)s/',['modality',]]],],['review_failed_studies_delete',[['openrem/admin/review/studiesdeletefailed',[],],['admin/review/studiesdeletefailed',[]]],],['review_failed_study_details',[['openrem/admin/review/failed/study',[],],['admin/review/failed/study',[]]],],['review_studies_delete',[['openrem/admin/review/studiesdelete',[],],['admin/review/studiesdelete',[]]],],['review_studies_equip_delete',[['openrem/admin/review/studiesequipdelete',[],],['admin/review/studiesequipdelete',[]]],],['review_study_details',[['openrem/admin/review/study',[],],['admin/review/study',[]]],],['review_summary_list',[['openrem/admin/review/%(equip_name_pk)s/%(modality)s/',['equip_name_pk','modality',],],['admin/review/%(equip_name_pk)s/%(modality)s/',['equip_name_pk','modality',]]],],['rf_alert_notifications_view',[['openrem/admin/rfalertnotifications/',[],],['admin/rfalertnotifications/',[]]],],['rf_alert_settings_update',[['openrem/admin/rfalertsettings/%(pk)s/',['pk',],],['admin/rfalertsettings/%(pk)s/',['pk',]]],],['rf_detail_view',[['openrem/rf/%(pk)s/',['pk',],],['rf/%(pk)s/',['pk',]]],],['rf_detail_view_skin_map',[['openrem/rf/%(pk)s/skin_map/',['pk',],],['rf/%(pk)s/skin_map/',['pk',]]],],['rf_recalculate_accum_doses',[['openrem/admin/rfrecalculateaccumdoses/',[],],['admin/rfrecalculateaccumdoses/',[]]],],['rf_summary_chart_data',[['openrem/rf/chart/',[],],['rf/chart/',[]]],],['rf_summary_list_filter',[['openrem/rf/',[],],['rf/',[]]],],['rfopenskin',[['openrem/exportrfopenskin/%(pk)s',['pk',],],['exportrfopenskin/%(pk)s',['pk',]]],],['rfxlsx1',[['openrem/exportrfxlsx1/%(name)s/%(pat_id)s/',['name','pat_id',],],['exportrfxlsx1/%(name)s/%(pat_id)s/',['name','pat_id',]]],],['run_store',[['openrem/admin/dicomstore/%(pk)s/start/',['pk',],],['admin/dicomstore/%(pk)s/start/',['pk',]]],],['size_abort',[['openrem/admin/sizeimport/abort/%(pk)s',['pk',],],['admin/sizeimport/abort/%(pk)s',['pk',]]],],['size_delete',[['openrem/admin/sizedelete',[],],['admin/sizedelete',[]]],],['size_download',[['openrem/admin/sizelogs/%(task_id)s',['task_id',],],['admin/sizelogs/%(task_id)s',['task_id',]]],],['size_imports',[['openrem/admin/sizeimports',[],],['admin/sizeimports',[]]],],['size_process',[['openrem/admin/sizeprocess/%(pk)s/',['pk',],],['admin/sizeprocess/%(pk)s/',['pk',]]],],['size_upload',[['openrem/admin/sizeupload',[],],['admin/sizeupload',[]]],],['skin_dose_map_settings_update',[['openrem/admin/skindosemapsettings/%(pk)s/',['pk',],],['admin/skindosemapsettings/%(pk)s/',['pk',]]],],['start_retrieve',[['openrem/admin/queryretrieve',[],],['admin/queryretrieve',[]]],],['status_update_store',[['openrem/admin/dicomstore/statusupdate',[],],['admin/dicomstore/statusupdate',[]]],],['stop_store',[['openrem/admin/dicomstore/%(pk)s/stop/',['pk',],],['admin/dicomstore/%(pk)s/stop/',['pk',]]],],['study_delete',[['openrem/delete/%(pk)s',['pk',],],['delete/%(pk)s',['pk',]]],],['task_service_status',[['openrem/admin/celery/service_status/',[],],['admin/celery/service_status/',[]]],],['update_active',[['openrem/export/updateactive',[],],['export/updateactive',[]]],],['update_complete',[['openrem/export/updatecomplete',[],],['export/updatecomplete',[]]],],['update_error',[['openrem/export/updateerror',[],],['export/updateerror',[]]],],['update_latest_studies',[['openrem/homestudies/',[],],['homestudies/',[]]],],['update_modality_totals',[['openrem/hometotals/',[],],['hometotals/',[]]],],['update_study_workload',[['openrem/homeworkload/',[],],['homeworkload/',[]]]]];self.url_patterns={};for(_i=0,_len=url_patterns.length;_i<_len;_i++){_ref=url_patterns[_i],name=_ref[0],pattern=_ref[1];self.url_patterns[name]=pattern;url=_get_url(name);Urls[name]=url;Urls[name.replace(/-/g,'_')]=url;}
return Urls;})();