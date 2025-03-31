export const FULL_TRANSFORMATIONS_MOCK: Transformation[] = [
    {
        column: 'datapipeEvent',
        transformation: 'from_avro_with_schema_registry_record_name_strategy',
        transformationArgs: {
            schema_registry_url: 'https://schema-registry.service.ironsrc.mobi',
            record_names:
                'AvroClickEventLogV3,AvroImpressionEventLogV3,AvroPixelEventLog',
        },
    },
    {
        column: 'referrer',
        alias: 'referrer_30',
        transformation: 'bytes_substring',
        transformationArgs: {
            start_index: '0',
            end_index: '30',
        },
    },
    {
        column: 'publisherRequestId',
        alias: 'publisher_request_id_36',
        transformation: 'bytes_substring',
        transformationArgs: {
            start_index: '0',
            end_index: '36',
        },
    },
    {
        column: 'rawEventCommon.opportunityID',
        alias: 'opportunity_id_64',
        transformation: 'bytes_substring',
        transformationArgs: {
            start_index: '0',
            end_index: '64',
        },
    },
    {
        column: 'rawEventCommon.segments',
        alias: 'segments_100',
        transformation: 'bytes_substring',
        transformationArgs: {
            start_index: '0',
            end_index: '100',
        },
    },
    {
        column: 'usersPlumbus',
        alias: 'usersPlumbusJson',
        transformation: 'map_to_struct',
        transformationArgs: {
            keys: 'bt, uts, ut, diskFreeSize, currReqId, currOppId, skadnetwork_request_version, mcc, mnc, timezone, device_language_full, battery_level, lpm, installerPackageName, token_version, mediation_ab_group, user_consent, mediation_sdk_version, retry_counter, raw_device_id, is_limit_ad_tracking_enabled, gpi, stid, tca, tcs,cmp, android_api_level, ad_services_extension_level, iab_bid_floor ,itp, sessionId, mediationAdUnit, cnst, idfi, lnchr',
        },
    },
    {
        column: 'dsOppPlumbus',
        alias: 'dsOppPlumbusJson',
        transformation: 'map_to_struct',
        transformationArgs: {
            keys: 'supply_side_promotion_value,demand_side_promotion_type,demand_side_promotion_value,total_promotion_monetary_value,learning_type, target_bid, DSAtomDecisionFlags,  promotion_er_diff, promotion_id, UgiEtsSource, UgiGroupID, UgiGroupSize, UgiIsIdentical, UgiLinkType, target_roas_age, target_roas_goal, autoProfitizer, marginBidReason, payoutMargin, profitizerValue, is_eligible_for_aa, skan_model, scidIndex, scidAllocationStatus, cvrBucketMin, cvrBucketMax, scidAllocationTreeID, scidAllocationTreeTimestamp, setupGoal, dsGoal, mmp_revenue, os_provider_adjustment, os_provider_revenue, uncapped_os_provider_adjustment, os_adjustment_level, os_adjustment_range, is_os_adjustment, ds_demand_serving_reason, ds_ranking_affected, ds_promotion_cost, ds_creative_exp_cost, ds_creative_promo_cost, optimizerMaxBid, supply_margin_setup, supply_margin_calculated, supply_margin_type, original_mmp_revenue, bundleIsTrainedByOptimizer',
        },
    },
    {
        column: 'bidderPlumbus',
        alias: 'bidderPlumbusJson',
        transformation: 'map_to_struct',
        transformationArgs: {
            keys: 'campaignDailyBudget, installedBundlesAmount , installedBundlesAmountWithoutUnity, ugCombinedGroupSize, ugjIdfvGroupSize, ugjAuidGroupSize, ugjGroupId, ugjHash, creativeProtocol, campaignDailyBudgetFactor',
        },
    },
    {
        column: 'serveDataPlumbus',
        alias: 'serveDataPlumbusJson',
        transformation: 'map_to_struct',
        transformationArgs: {
            keys: 'product_page_id, store_information_name, install_origin, optimizerProduct, optimizerGoalAge, optimizerActionValue, optimizerActionId, optimizerAction , trackingSolution, demand_bundle_entity_id, low_performing_demand',
        },
    },
    {
        column: 'supplyPlumbus',
        alias: 'supplyPlumbusJson',
        transformation: 'map_to_struct',
        transformationArgs: {
            keys: 'supply_bundle_entity_id',
        },
    },
    {
        column: 'dsReqPlumbus',
        alias: 'dsReqPlumbusJson',
        transformation: 'map_to_struct',
        transformationArgs: {
            keys: 'bid_price ,dynamic_strategy_id, ds_cache_mode, ds_cache_demand_threshold, ds_cache_request, ds_cache_ttl, ds_cache_original_instance_id, ds_cache_demand_actual_amount, ds_cache_original_request_id',
        },
    },
    {
        column: 'gatewayPlumbus',
        alias: 'gatewayPlumbus',
        transformation: 'map_to_struct',
        transformationArgs: {
            keys: 'isMultipleAdLoads, loadedAdsInSession,  loadedBundlesInSession, loadedAdsInAdFormat, loadedBundlesInAdFormat, loadedAdsInInstance ,loadedBundlesInInstance, bidOriginName, normalizedMediationName, originalMediationName, externalMediation, mediationType, campaignDailyBudget, campaignDailyBudgetFactor, campaignDailyVirtualBudget, campaignDailyVirtualSourceBudget, campaignDailyBudgetCalculatedFactor, campaignDailyBudgetManualFactor',
        },
    },
    {
        alias: 'hard_coded_56',
        transformation: 'hard_coded',
        transformationArgs: {
            hard_coded_value: '150000',
            hard_coded_value_type: 'long',
        },
    },
    {
        column: 'rawEventRequestLevelCommon.deviceOSVersionNumeric',
        alias: 'ios_15_or_higher',
        transformation: '>=',
        transformationArgs: {
            value: 'hard_coded_56',
        },
    },
    {
        column: 'rawEventRequestLevelCommon.deviceOs',
        alias: 'os_is_android',
        transformation: '==',
        transformationArgs: {
            value: 'android',
        },
    },
    {
        alias: 'aura_store_num',
        transformation: 'hard_coded',
        transformationArgs: {
            hard_coded_value: '3',
            hard_coded_value_type: 'long',
        },
    },
    {
        alias: 'store_promo_bit',
        transformation: 'hard_coded',
        transformationArgs: {
            hard_coded_value: '2',
            hard_coded_value_type: 'long',
        },
    },
    {
        alias: 'hard_coded_57',
        transformation: 'hard_coded',
        transformationArgs: {
            hard_coded_value: '0',
            hard_coded_value_type: 'long',
        },
    },
    {
        alias: 'default_0',
        transformation: 'null_if',
        transformationArgs: {
            condition: 'false',
            valueColumnName: 'hard_coded_57',
        },
    },
    {
        column: 'rawEventRequestLevelCommon.countryCode',
        alias: 'bytes_substring_58',
        transformation: 'bytes_substring',
        transformationArgs: {
            start_index: '0',
            end_index: '2',
        },
    },
    {
        column: 'bytes_substring_58',
        alias: 'trim_59',
        transformation: 'trim',
    },
    {
        column: 'trim_59',
        alias: 'eq_60',
        transformation: '==',
        transformationArgs: {
            value: '',
        },
    },
    {
        column: 'rawEventRequestLevelCommon.countryCode',
        alias: 'bytes_substring_61',
        transformation: 'bytes_substring',
        transformationArgs: {
            start_index: '0',
            end_index: '2',
        },
    },
    {
        alias: 'country_code_2',
        transformation: 'null_if',
        transformationArgs: {
            condition: 'eq_60',
            valueColumnName: 'bytes_substring_61',
        },
    },
    {
        column: 'rawEventRequestLevelCommon.supplyBundleId',
        alias: 'supply_bundle_id_256',
        transformation: 'bytes_substring',
        transformationArgs: {
            start_index: '0',
            end_index: '256',
        },
    },
    {
        column: 'rawEventRequestLevelCommon.appOrientation',
        alias: 'app_orientation_16',
        transformation: 'bytes_substring',
        transformationArgs: {
            start_index: '0',
            end_index: '16',
        },
    },
    {
        column: 'rawEventRequestLevelCommon.sdkAbName',
        alias: 'sdk_ab_name_16',
        transformation: 'bytes_substring',
        transformationArgs: {
            start_index: '0',
            end_index: '16',
        },
    },
    {
        column: 'publisherSubBundle',
        alias: 'pub_sub_bundle_64',
        transformation: 'bytes_substring',
        transformationArgs: {
            start_index: '0',
            end_index: '64',
        },
    },
    {
        column: 'publisherPackage',
        alias: 'package_name_40',
        transformation: 'bytes_substring',
        transformationArgs: {
            start_index: '0',
            end_index: '40',
        },
    },
    {
        column: 'publisherSrc',
        alias: 'src_30',
        transformation: 'bytes_substring',
        transformationArgs: {
            start_index: '0',
            end_index: '30',
        },
    },
    {
        column: 'rawEventRequestLevelCommon.applicationExternalUserId',
        alias: 'application_external_user_id_128',
        transformation: 'bytes_substring',
        transformationArgs: {
            start_index: '0',
            end_index: '128',
        },
    },
    {
        column: 'rawEventRequestLevelCommon.deviceOsVersion',
        alias: 'device_os_version_32',
        transformation: 'bytes_substring',
        transformationArgs: {
            start_index: '0',
            end_index: '32',
        },
    },
    {
        column: 'rawEventRequestLevelCommon.bundleId',
        alias: 'bundle_id_256',
        transformation: 'bytes_substring',
        transformationArgs: {
            start_index: '0',
            end_index: '256',
        },
    },
    {
        column: 'rawEventRequestLevelCommon.connectionType',
        alias: 'connection_type_64',
        transformation: 'bytes_substring',
        transformationArgs: {
            start_index: '0',
            end_index: '64',
        },
    },
    {
        column: 'rawEventRequestLevelCommon.deviceOs',
        alias: 'device_os_64',
        transformation: 'bytes_substring',
        transformationArgs: {
            start_index: '0',
            end_index: '64',
        },
    },
    {
        column: 'rawEventRequestLevelCommon.deviceModel',
        alias: 'bytes_substring_62',
        transformation: 'bytes_substring',
        transformationArgs: {
            start_index: '0',
            end_index: '64',
        },
    },
    {
        column: 'bytes_substring_62',
        alias: 'trim_63',
        transformation: 'trim',
    },
    {
        column: 'trim_63',
        alias: 'eq_64',
        transformation: '==',
        transformationArgs: {
            value: '',
        },
    },
    {
        column: 'rawEventRequestLevelCommon.deviceModel',
        alias: 'bytes_substring_65',
        transformation: 'bytes_substring',
        transformationArgs: {
            start_index: '0',
            end_index: '64',
        },
    },
    {
        alias: 'device_model_64',
        transformation: 'null_if',
        transformationArgs: {
            condition: 'eq_64',
            valueColumnName: 'bytes_substring_65',
        },
    },
    {
        column: 'rawEventRequestLevelCommon.deviceOem',
        alias: 'device_oem_64',
        transformation: 'bytes_substring',
        transformationArgs: {
            start_index: '0',
            end_index: '64',
        },
    },
    {
        column: 'rawEventRequestLevelCommon.sdkVersion',
        alias: 'sdk_version_64',
        transformation: 'bytes_substring',
        transformationArgs: {
            start_index: '0',
            end_index: '64',
        },
    },
    {
        column: 'rawEventRequestLevelCommon.browserVersion',
        alias: 'browser_version_16',
        transformation: 'bytes_substring',
        transformationArgs: {
            start_index: '0',
            end_index: '16',
        },
    },
    {
        column: 'rawEventRequestLevelCommon.browserName',
        alias: 'browser_name_64',
        transformation: 'bytes_substring',
        transformationArgs: {
            start_index: '0',
            end_index: '64',
        },
    },
    {
        column: 'rawEventRequestLevelCommon.deviceId',
        alias: 'device_id_64',
        transformation: 'bytes_substring',
        transformationArgs: {
            start_index: '0',
            end_index: '64',
        },
    },
    {
        column: 'rawEventRequestLevelCommon.requestID',
        alias: 'request_id_64',
        transformation: 'bytes_substring',
        transformationArgs: {
            start_index: '0',
            end_index: '64',
        },
    },
    {
        column: 'rawEventRequestLevelCommon.deviceLanguage',
        alias: 'device_language_10',
        transformation: 'bytes_substring',
        transformationArgs: {
            start_index: '0',
            end_index: '10',
        },
    },
    {
        column: 'rawEventRequestLevelCommon.requestTimestamp',
        alias: 'request_timestamp',
        transformation: 'parse_date',
        transformationArgs: {
            format: 'yyyy-MM-dd HH:mm:ss',
        },
    },
    {
        column: 'rawEventRequestLevelCommon.abt',
        alias: 'abt_16',
        transformation: 'bytes_substring',
        transformationArgs: {
            start_index: '0',
            end_index: '16',
        },
    },
    {
        column: 'rawEventRequestLevelCommon.supplyDealType',
        alias: 'supply_deal_type_12',
        transformation: 'bytes_substring',
        transformationArgs: {
            start_index: '0',
            end_index: '12',
        },
    },
    {
        column: 'rawEventRequestLevelCommon.iabAuctionId',
        alias: 'iab_auction_id_52',
        transformation: 'bytes_substring',
        transformationArgs: {
            start_index: '0',
            end_index: '52',
        },
    },
    {
        column: 'rawEventRequestLevelCommon.iabBidType',
        alias: 'iab_bid_type_8',
        transformation: 'bytes_substring',
        transformationArgs: {
            start_index: '0',
            end_index: '8',
        },
    },
    {
        column: 'rawEventRequestLevelCommon.carrier',
        alias: 'bytes_substring_66',
        transformation: 'bytes_substring',
        transformationArgs: {
            start_index: '0',
            end_index: '64',
        },
    },
    {
        column: 'bytes_substring_66',
        alias: 'replace_67',
        transformation: 'replace',
        transformationArgs: {
            search: '[ ]+',
            replacement: '',
        },
    },
    {
        column: 'replace_67',
        alias: 'carrier_64_newline',
        transformation: 'trim',
    },
    {
        column: 'rawEventCommon.bidOptimizationType',
        alias: 'optimizer_type_10',
        transformation: 'bytes_substring',
        transformationArgs: {
            start_index: '0',
            end_index: '10',
        },
    },
    {
        alias: 'hard_coded_68',
        transformation: 'hard_coded',
        transformationArgs: {
            hard_coded_value: '1',
            hard_coded_value_type: 'long',
        },
    },
    {
        column: 'rawEventRequestLevelCommon.clickableVideoStatus',
        alias: 'eq_69',
        transformation: '==',
        transformationArgs: {
            value: 'hard_coded_68',
        },
    },
    {
        alias: 'is_clickable_video',
        transformation: 'if_else',
        transformationArgs: {
            condition: 'col(eq_69)',
            true_value: 'true',
            false_value: 'false',
        },
    },
    {
        alias: 'hard_coded_70',
        transformation: 'hard_coded',
        transformationArgs: {
            hard_coded_value: '0',
            hard_coded_value_type: 'long',
        },
    },
    {
        column: 'rawEventRequestLevelCommon.clickableVideoStatus',
        alias: 'eq_71',
        transformation: '==',
        transformationArgs: {
            value: 'hard_coded_70',
        },
    },
    {
        alias: 'hard_coded_72',
        transformation: 'hard_coded',
        transformationArgs: {
            hard_coded_value: '2',
            hard_coded_value_type: 'long',
        },
    },
    {
        column: 'rawEventRequestLevelCommon.clickableVideoStatus',
        alias: 'eq_73',
        transformation: '==',
        transformationArgs: {
            value: 'hard_coded_72',
        },
    },
    {
        alias: 'hard_coded_74',
        transformation: 'hard_coded',
        transformationArgs: {
            hard_coded_value: '3',
            hard_coded_value_type: 'long',
        },
    },
    {
        column: 'rawEventRequestLevelCommon.clickableVideoStatus',
        alias: 'eq_75',
        transformation: '==',
        transformationArgs: {
            value: 'hard_coded_74',
        },
    },
    {
        alias: 'hard_coded_76',
        transformation: 'hard_coded',
        transformationArgs: {
            hard_coded_value: '4',
            hard_coded_value_type: 'long',
        },
    },
    {
        column: 'rawEventRequestLevelCommon.clickableVideoStatus',
        alias: 'eq_77',
        transformation: '==',
        transformationArgs: {
            value: 'hard_coded_76',
        },
    },
    {
        alias: 'if_else_78',
        transformation: 'if_else',
        transformationArgs: {
            condition: 'col(eq_77)',
            true_value: "'demand and supply'",
            false_value: 'null',
        },
    },
    {
        alias: 'if_else_79',
        transformation: 'if_else',
        transformationArgs: {
            condition: 'col(eq_75)',
            true_value: "'supply'",
            false_value: 'col(if_else_78)',
        },
    },
    {
        alias: 'if_else_80',
        transformation: 'if_else',
        transformationArgs: {
            condition: 'col(eq_73)',
            true_value: "'demand'",
            false_value: 'col(if_else_79)',
        },
    },
    {
        alias: 'unclickable_video_reason',
        transformation: 'if_else',
        transformationArgs: {
            condition: 'col(eq_71)',
            true_value: "'other'",
            false_value: 'col(if_else_80)',
        },
    },
    {
        alias: 'hard_coded_81',
        transformation: 'hard_coded',
        transformationArgs: {
            hard_coded_value: '3',
            hard_coded_value_type: 'long',
        },
    },
    {
        column: 'rawEventRequestLevelCommon.promotionExplorationStatus',
        alias: 'eq_82',
        transformation: '==',
        transformationArgs: {
            value: 'hard_coded_81',
        },
    },
    {
        alias: 'hard_coded_83',
        transformation: 'hard_coded',
        transformationArgs: {
            hard_coded_value: '2',
            hard_coded_value_type: 'long',
        },
    },
    {
        column: 'rawEventRequestLevelCommon.promotionExplorationStatus',
        alias: 'eq_84',
        transformation: '==',
        transformationArgs: {
            value: 'hard_coded_83',
        },
    },
    {
        alias: 'hard_coded_85',
        transformation: 'hard_coded',
        transformationArgs: {
            hard_coded_value: '1',
            hard_coded_value_type: 'long',
        },
    },
    {
        column: 'rawEventRequestLevelCommon.promotionExplorationStatus',
        alias: 'eq_86',
        transformation: '==',
        transformationArgs: {
            value: 'hard_coded_85',
        },
    },
    {
        alias: 'if_else_87',
        transformation: 'if_else',
        transformationArgs: {
            condition: 'col(eq_86)',
            true_value: "'enabled'",
            false_value: "'not_explored'",
        },
    },
    {
        alias: 'if_else_88',
        transformation: 'if_else',
        transformationArgs: {
            condition: 'col(eq_84)',
            true_value: "'disabled'",
            false_value: 'col(if_else_87)',
        },
    },
    {
        alias: 'promotion_exploration_status',
        transformation: 'if_else',
        transformationArgs: {
            condition: 'col(eq_82)',
            true_value: "'not_explored'",
            false_value: 'col(if_else_88)',
        },
    },
    {
        column: 'deviceFirstAppearanceTimestamp',
        alias: 'device_first_appearance_timestamp',
        transformation: 'parse_date',
        transformationArgs: {
            format: 'yyyy-MM-dd HH:mm:ss',
        },
    },
    {
        column: 'rawEventCommon.impressionTimestamp',
        alias: 'impression_timestamp',
        transformation: 'parse_date',
        transformationArgs: {
            format: 'yyyy-MM-dd HH:mm:ss',
        },
    },
    {
        alias: 'hard_coded_89',
        transformation: 'hard_coded',
        transformationArgs: {
            hard_coded_value: '2',
            hard_coded_value_type: 'long',
        },
    },
    {
        column: 'rawEventRequestLevelCommon.adUnit',
        alias: 'eq_90',
        transformation: '==',
        transformationArgs: {
            value: 'hard_coded_89',
        },
    },
    {
        alias: 'hard_coded_91',
        transformation: 'hard_coded',
        transformationArgs: {
            hard_coded_value: '3',
            hard_coded_value_type: 'long',
        },
    },
    {
        column: 'rawEventRequestLevelCommon.adUnit',
        alias: 'eq_92',
        transformation: '==',
        transformationArgs: {
            value: 'hard_coded_91',
        },
    },
    {
        alias: 'if_else_93',
        transformation: 'if_else',
        transformationArgs: {
            condition: 'col(eq_92)',
            true_value: "'Rewarded'",
            false_value: 'null',
        },
    },
    {
        alias: 'ad_format_name',
        transformation: 'if_else',
        transformationArgs: {
            condition: 'col(eq_90)',
            true_value: "'Interstitial'",
            false_value: 'col(if_else_93)',
        },
    },
    {
        column: 'device_os_64',
        alias: 'eq_94',
        transformation: '==',
        transformationArgs: {
            value: 'android',
        },
    },
    {
        alias: 'android_device_lat_setting',
        transformation: 'if_else',
        transformationArgs: {
            condition: 'col(eq_94)',
            true_value: 'col(usersPlumbusJson.is_limit_ad_tracking_enabled)',
            false_value: 'null',
        },
    },
    {
        column: 'rawEventRequestLevelCommon.udbFlags',
        alias: 'is_null_99',
        transformation: 'is_null',
    },
    {
        alias: 'hard_coded_100',
        transformation: 'hard_coded',
        transformationArgs: {
            hard_coded_value: '0',
            hard_coded_value_type: 'long',
        },
    },
    {
        alias: 'hard_coded_101',
        transformation: 'hard_coded',
        transformationArgs: {
            hard_coded_value: '2',
            hard_coded_value_type: 'long',
        },
    },
    {
        column: 'rawEventRequestLevelCommon.udbFlags',
        alias: 'modulo_102',
        transformation: '%',
        transformationArgs: {
            value: 'hard_coded_101',
        },
    },
    {
        alias: 'hard_coded_103',
        transformation: 'hard_coded',
        transformationArgs: {
            hard_coded_value: '2',
            hard_coded_value_type: 'long',
        },
    },
    {
        alias: 'hard_coded_104',
        transformation: 'hard_coded',
        transformationArgs: {
            hard_coded_value: '1',
            hard_coded_value_type: 'long',
        },
    },
    {
        column: 'aura_store_num',
        alias: 'minus_105',
        transformation: '-',
        transformationArgs: {
            value: 'hard_coded_104',
        },
    },
    {
        column: 'hard_coded_103',
        alias: 'exponentiation_106',
        transformation: '^',
        transformationArgs: {
            value: 'minus_105',
        },
    },
    {
        column: 'modulo_102',
        alias: 'multiply_107',
        transformation: '*',
        transformationArgs: {
            value: 'exponentiation_106',
        },
    },
    {
        alias: 'aura_store_flag_default_0',
        transformation: 'if_else',
        transformationArgs: {
            condition: 'col(is_null_99)',
            true_value: 'col(hard_coded_100)',
            false_value: 'col(multiply_107)',
        },
    },
    {
        column: 'usersPlumbusJson.stid',
        alias: 'is_null_108',
        transformation: 'is_null',
    },
    {
        alias: 'hard_coded_109',
        transformation: 'hard_coded',
        transformationArgs: {
            hard_coded_value: '0',
            hard_coded_value_type: 'long',
        },
    },
    {
        column: 'usersPlumbusJson.stid',
        alias: 'to_number_110',
        transformation: 'to_number',
    },
    {
        alias: 'stid_default_0',
        transformation: 'if_else',
        transformationArgs: {
            condition: 'col(is_null_108)',
            true_value: 'col(hard_coded_109)',
            false_value: 'col(to_number_110)',
        },
    },
    {
        column: 'referrer_30',
        alias: 'eq_111',
        transformation: '==',
        transformationArgs: {
            value: 'null',
        },
    },
    {
        alias: 'referrer_30_value',
        transformation: 'if_else',
        transformationArgs: {
            condition: 'col(eq_111)',
            true_value: "''",
            false_value: 'col(referrer_30)',
        },
    },
    {
        column: 'publisher_request_id_36',
        alias: 'eq_112',
        transformation: '==',
        transformationArgs: {
            value: 'null',
        },
    },
    {
        alias: 'publisher_request_id_36_value',
        transformation: 'if_else',
        transformationArgs: {
            condition: 'col(eq_112)',
            true_value: "''",
            false_value: 'col(publisher_request_id_36)',
        },
    },
    {
        column: 'opportunity_id_64',
        alias: 'eq_113',
        transformation: '==',
        transformationArgs: {
            value: 'null',
        },
    },
    {
        alias: 'opportunity_id_64_value',
        transformation: 'if_else',
        transformationArgs: {
            condition: 'col(eq_113)',
            true_value: "''",
            false_value: 'col(opportunity_id_64)',
        },
    },
    {
        column: 'segments_100',
        alias: 'eq_114',
        transformation: '==',
        transformationArgs: {
            value: 'null',
        },
    },
    {
        alias: 'segments_100_value',
        transformation: 'if_else',
        transformationArgs: {
            condition: 'col(eq_114)',
            true_value: "''",
            false_value: 'col(segments_100)',
        },
    },
    {
        alias: 'mediation_name',
        transformation: 'coalesce',
        transformationArgs: {
            columns:
                'gatewayPlumbus.normalizedMediationName,gatewayPlumbus.externalMediation,gatewayPlumbus.mediationType',
        },
    },
    {
        column: 'usersPlumbusJson.bt',
        alias: 'bt_numeric',
        transformation: 'to_number',
    },
    {
        column: 'usersPlumbusJson.uts',
        alias: 'uts_numeric',
        transformation: 'to_number',
    },
    {
        column: 'usersPlumbusJson.ut',
        alias: 'ut_numeric',
        transformation: 'to_number',
    },
    {
        column: 'dsOppPlumbusJson.target_bid',
        alias: 'target_cpi',
        transformation: 'to_number',
    },
    {
        column: 'usersPlumbusJson.mediation_sdk_version',
        alias: 'numericMediationSdkVersion',
        transformation: 'version_to_numeric',
    },
    {
        alias: 'or_result_115',
        transformation: 'or',
        transformationArgs: {
            left_param: 'ios_15_or_higher',
            right_param: 'os_is_android',
        },
    },
    {
        alias: 'productPageId',
        transformation: 'if_else',
        transformationArgs: {
            condition: 'col(or_result_115)',
            true_value: 'col(serveDataPlumbusJson.product_page_id)',
            false_value: 'null',
        },
    },
    {
        column: 'dsReqPlumbusJson.bid_price',
        alias: 'is_null_116',
        transformation: 'is_null',
    },
    {
        column: 'rawEventRequestLevelCommon.reqFlatBidPrice',
        alias: 'to_string_117',
        transformation: 'to_string',
    },
    {
        alias: 'instance_bid_price',
        transformation: 'if_else',
        transformationArgs: {
            condition: 'col(is_null_116)',
            true_value: 'col(to_string_117)',
            false_value: 'col(dsReqPlumbusJson.bid_price)',
        },
    },
    {
        column: 'dsOppPlumbusJson.scidAllocationTreeTimestamp',
        alias: 'ds_scid_version_timestamp',
        transformation: 'parse_date',
        transformationArgs: {
            format: 'yyyy-MM-dd HH:mm:ss',
        },
    },
    {
        column: 'usersPlumbusJson.raw_device_id',
        alias: 'eq_118',
        transformation: '==',
        transformationArgs: {
            value: '00000000-0000-0000-0000-000000000000',
        },
    },
    {
        alias: 'hard_coded_119',
        transformation: 'hard_coded',
        transformationArgs: {
            hard_coded_value: '3',
            hard_coded_value_type: 'long',
        },
    },
    {
        column: 'usersPlumbusJson.raw_device_id',
        alias: 'is_null_120',
        transformation: 'is_null',
    },
    {
        alias: 'hard_coded_121',
        transformation: 'hard_coded',
        transformationArgs: {
            hard_coded_value: '2',
            hard_coded_value_type: 'long',
        },
    },
    {
        alias: 'hard_coded_122',
        transformation: 'hard_coded',
        transformationArgs: {
            hard_coded_value: '1',
            hard_coded_value_type: 'long',
        },
    },
    {
        alias: 'if_else_123',
        transformation: 'if_else',
        transformationArgs: {
            condition: 'col(is_null_120)',
            true_value: 'col(hard_coded_121)',
            false_value: 'col(hard_coded_122)',
        },
    },
    {
        alias: 'advertising_id_state',
        transformation: 'if_else',
        transformationArgs: {
            condition: 'col(eq_118)',
            true_value: 'col(hard_coded_119)',
            false_value: 'col(if_else_123)',
        },
    },
    {
        column: 'usersPlumbusJson.gpi',
        alias: 'eq_124',
        transformation: '==',
        transformationArgs: {
            value: 'true',
        },
    },
    {
        column: 'usersPlumbusJson.gpi',
        alias: 'eq_125',
        transformation: '==',
        transformationArgs: {
            value: 'false',
        },
    },
    {
        alias: 'if_else_126',
        transformation: 'if_else',
        transformationArgs: {
            condition: 'col(eq_125)',
            true_value: 'false',
            false_value: 'null',
        },
    },
    {
        alias: 'is_google_play_services',
        transformation: 'if_else',
        transformationArgs: {
            condition: 'col(eq_124)',
            true_value: 'true',
            false_value: 'col(if_else_126)',
        },
    },
    {
        column: 'dsOppPlumbusJson.mmp_revenue',
        alias: 'mmp_revenue',
        transformation: 'to_number',
    },
    {
        column: 'dsOppPlumbusJson.os_provider_adjustment',
        alias: 'os_provider_adjustment',
        transformation: 'to_number',
    },
    {
        column: 'dsOppPlumbusJson.os_provider_revenue',
        alias: 'os_provider_revenue',
        transformation: 'to_number',
    },
    {
        column: 'dsOppPlumbusJson.uncapped_os_provider_adjustment',
        alias: 'uncapped_os_provider_adjustment',
        transformation: 'to_number',
    },
    {
        column: 'dsOppPlumbusJson.is_os_adjustment',
        alias: 'eq_127',
        transformation: '==',
        transformationArgs: {
            value: 'true',
        },
    },
    {
        column: 'dsOppPlumbusJson.is_os_adjustment',
        alias: 'eq_128',
        transformation: '==',
        transformationArgs: {
            value: 'false',
        },
    },
    {
        alias: 'if_else_129',
        transformation: 'if_else',
        transformationArgs: {
            condition: 'col(eq_128)',
            true_value: 'false',
            false_value: 'null',
        },
    },
    {
        alias: 'is_os_adjustment',
        transformation: 'if_else',
        transformationArgs: {
            condition: 'col(eq_127)',
            true_value: 'true',
            false_value: 'col(if_else_129)',
        },
    },
    {
        column: 'dsOppPlumbusJson.ds_ranking_affected',
        alias: 'eq_130',
        transformation: '==',
        transformationArgs: {
            value: 'true',
        },
    },
    {
        column: 'dsOppPlumbusJson.ds_ranking_affected',
        alias: 'eq_131',
        transformation: '==',
        transformationArgs: {
            value: 'false',
        },
    },
    {
        alias: 'if_else_132',
        transformation: 'if_else',
        transformationArgs: {
            condition: 'col(eq_131)',
            true_value: 'false',
            false_value: 'null',
        },
    },
    {
        alias: 'ds_ranking_affected',
        transformation: 'if_else',
        transformationArgs: {
            condition: 'col(eq_130)',
            true_value: 'true',
            false_value: 'col(if_else_132)',
        },
    },
    {
        column: 'usersPlumbusJson.tcs',
        alias: 'tcs_exists',
        transformation: 'is_not_null',
    },
    {
        alias: 'tca',
        transformation: 'hard_coded',
        transformationArgs: {
            hard_coded_value: 'usersPlumbusJson.tca',
            hard_coded_value_type: 'column',
        },
    },
    {
        column: 'dsOppPlumbusJson.supply_margin_type',
        alias: 'eq_133',
        transformation: '==',
        transformationArgs: {
            value: '1',
        },
    },
    {
        column: 'dsOppPlumbusJson.supply_margin_type',
        alias: 'eq_134',
        transformation: '==',
        transformationArgs: {
            value: '2',
        },
    },
    {
        column: 'dsOppPlumbusJson.supply_margin_type',
        alias: 'eq_135',
        transformation: '==',
        transformationArgs: {
            value: '3',
        },
    },
    {
        alias: 'if_else_136',
        transformation: 'if_else',
        transformationArgs: {
            condition: 'col(eq_135)',
            true_value: "'profitizer'",
            false_value: 'null',
        },
    },
    {
        alias: 'if_else_137',
        transformation: 'if_else',
        transformationArgs: {
            condition: 'col(eq_134)',
            true_value: "'target'",
            false_value: 'col(if_else_136)',
        },
    },
    {
        alias: 'supply_margin_type_string',
        transformation: 'if_else',
        transformationArgs: {
            condition: 'col(eq_133)',
            true_value: "'global'",
            false_value: 'col(if_else_137)',
        },
    },
    {
        column: 'serveDataPlumbusJson.trackingSolution',
        alias: 'to_number_138',
        transformation: 'to_number',
    },
    {
        column: 'to_number_138',
        alias: 'trackingCompany',
        transformation: 'translate',
        transformationArgs: {
            dictionary:
                '0:unknown,1:s2s,2:unknown,3:tune,4:adX,5:kochava,6:appsFlyer,7:adjust,8:tapStream,9:supersonicSDK,10:tenjin,11:bbb,12:apSalar,13:pixel,14:servo,15:firebase,16:actionX,17:localytics,18:singular,19:king,20:machineZone,21:tencent,22:eBay,23:gameloft,24:appLike,25:fgff,26:redInfinity,27:branch,255:skan',
        },
    },
    {
        column: 'dsReqPlumbusJson.dynamic_strategy_id',
        alias: 'dynamic_strategy_id',
        transformation: 'to_number',
    },
    {
        column: 'dsReqPlumbusJson.ds_cache_demand_threshold',
        alias: 'ds_cache_demand_threshold',
        transformation: 'to_number',
    },
    {
        column: 'dsReqPlumbusJson.ds_cache_request',
        alias: 'eq_139',
        transformation: '==',
        transformationArgs: {
            value: 'true',
        },
    },
    {
        alias: 'ds_cache_request',
        transformation: 'if_else',
        transformationArgs: {
            condition: 'col(eq_139)',
            true_value: 'true',
            false_value: 'false',
        },
    },
    {
        column: 'dsReqPlumbusJson.ds_cache_ttl',
        alias: 'ds_cache_ttl',
        transformation: 'to_number',
    },
    {
        column: 'dsReqPlumbusJson.ds_cache_demand_actual_amount',
        alias: 'ds_cache_demand_actual_amount',
        transformation: 'to_number',
    },
    {
        column: 'usersPlumbusJson.cmp',
        alias: 'cmp_bool',
        transformation: '==',
        transformationArgs: {
            value: '1',
        },
    },
    {
        column: 'rawEventRequestLevelCommon.dpFlags',
        alias: 'is_null_140',
        transformation: 'is_null',
    },
    {
        column: 'rawEventRequestLevelCommon.dpFlags',
        alias: 'bitwise_and_op_142',
        transformation: 'bitwise_and',
        transformationArgs: {
            additional_input_column: 'store_promo_bit',
        },
    },
    {
        alias: 'hard_coded_143',
        transformation: 'hard_coded',
        transformationArgs: {
            hard_coded_value: '0',
            hard_coded_value_type: 'long',
        },
    },
    {
        column: 'bitwise_and_op_142',
        alias: 'eq_144',
        transformation: '==',
        transformationArgs: {
            value: 'hard_coded_143',
        },
    },
    {
        alias: 'if_else_145',
        transformation: 'if_else',
        transformationArgs: {
            condition: 'col(eq_144)',
            true_value: 'false',
            false_value: 'true',
        },
    },
    {
        alias: 'is_store_promo_enabled',
        transformation: 'if_else',
        transformationArgs: {
            condition: 'col(is_null_140)',
            true_value: 'false',
            false_value: 'col(if_else_145)',
        },
    },
    {
        alias: 'request_daily_budget',
        transformation: 'coalesce',
        transformationArgs: {
            columns:
                'gatewayPlumbus.campaignDailyBudget,bidderPlumbusJson.campaignDailyBudget',
        },
    },
    {
        column: 'usersPlumbusJson.itp',
        alias: 'eq_146',
        transformation: '==',
        transformationArgs: {
            value: '1',
        },
    },
    {
        column: 'usersPlumbusJson.itp',
        alias: 'eq_147',
        transformation: '==',
        transformationArgs: {
            value: '2',
        },
    },
    {
        column: 'usersPlumbusJson.itp',
        alias: 'eq_148',
        transformation: '==',
        transformationArgs: {
            value: '3',
        },
    },
    {
        alias: 'if_else_149',
        transformation: 'if_else',
        transformationArgs: {
            condition: 'col(eq_148)',
            true_value: "'init in progress'",
            false_value: 'null',
        },
    },
    {
        alias: 'if_else_150',
        transformation: 'if_else',
        transformationArgs: {
            condition: 'col(eq_147)',
            true_value: "'init in progress'",
            false_value: 'col(if_else_149)',
        },
    },
    {
        alias: 'initStateName',
        transformation: 'if_else',
        transformationArgs: {
            condition: 'col(eq_146)',
            true_value: "'init success'",
            false_value: 'col(if_else_150)',
        },
    },
    {
        column: 'dsOppPlumbusJson.bundleIsTrainedByOptimizer',
        alias: 'eq_151',
        transformation: '==',
        transformationArgs: {
            value: 'true',
        },
    },
    {
        column: 'dsOppPlumbusJson.bundleIsTrainedByOptimizer',
        alias: 'eq_152',
        transformation: '==',
        transformationArgs: {
            value: 'false',
        },
    },
    {
        alias: 'if_else_153',
        transformation: 'if_else',
        transformationArgs: {
            condition: 'col(eq_152)',
            true_value: 'false',
            false_value: 'null',
        },
    },
    {
        alias: 'bundleIsTrainedByOptimizer',
        transformation: 'if_else',
        transformationArgs: {
            condition: 'col(eq_151)',
            true_value: 'true',
            false_value: 'col(if_else_153)',
        },
    },
    {
        column: 'gatewayPlumbus.isMultipleAdLoads',
        alias: 'eq_154',
        transformation: '==',
        transformationArgs: {
            value: 'true',
        },
    },
    {
        column: 'gatewayPlumbus.isMultipleAdLoads',
        alias: 'eq_155',
        transformation: '==',
        transformationArgs: {
            value: 'false',
        },
    },
    {
        alias: 'if_else_156',
        transformation: 'if_else',
        transformationArgs: {
            condition: 'col(eq_155)',
            true_value: 'false',
            false_value: 'null',
        },
    },
    {
        alias: 'is_multiple_ad_loads',
        transformation: 'if_else',
        transformationArgs: {
            condition: 'col(eq_154)',
            true_value: 'true',
            false_value: 'col(if_else_156)',
        },
    },
    {
        column: 'serveDataPlumbusJson.low_performing_demand',
        alias: 'eq_157',
        transformation: '==',
        transformationArgs: {
            value: 'true',
        },
    },
    {
        column: 'serveDataPlumbusJson.low_performing_demand',
        alias: 'eq_158',
        transformation: '==',
        transformationArgs: {
            value: 'false',
        },
    },
    {
        alias: 'if_else_159',
        transformation: 'if_else',
        transformationArgs: {
            condition: 'col(eq_158)',
            true_value: 'false',
            false_value: 'null',
        },
    },
    {
        alias: 'low_performing_demand',
        transformation: 'if_else',
        transformationArgs: {
            condition: 'col(eq_157)',
            true_value: 'true',
            false_value: 'col(if_else_159)',
        },
    },
    {
        alias: 'request_daily_budget_factor',
        transformation: 'coalesce',
        transformationArgs: {
            columns:
                'gatewayPlumbus.campaignDailyBudgetFactor,bidderPlumbusJson.campaignDailyBudgetFactor',
        },
    },
    {
        column: 'android_device_lat_setting',
        alias: 'android_device_lat_setting_bool',
        transformation: '==',
        transformationArgs: {
            value: 'true',
        },
    },
    {
        column: 'usersPlumbusJson.stid',
        alias: 'is_null_162',
        transformation: 'is_null',
    },
    {
        column: 'rawEventRequestLevelCommon.udbFlags',
        alias: 'is_null_163',
        transformation: 'is_null',
    },
    {
        alias: 'and_result_164',
        transformation: 'and',
        transformationArgs: {
            left_param: 'is_null_162',
            right_param: 'is_null_163',
        },
    },
    {
        column: 'aura_store_flag_default_0',
        alias: 'bitwise_or_op_166',
        transformation: 'bitwise_or',
        transformationArgs: {
            additional_input_column: 'stid_default_0',
        },
    },
    {
        alias: 'device_eligible_stores_flags',
        transformation: 'null_if',
        transformationArgs: {
            condition: 'and_result_164',
            valueColumnName: 'bitwise_or_op_166',
        },
    },
    {
        column: 'rawEventRequestLevelCommon.requestIpLookupData.isp',
        alias: 'request_isp_by_ip',
        transformation: 'alias',
        transformationArgs: {
            drop: 'false',
        },
    },
    {
        column: 'dsOppPlumbusJson.payoutMargin',
        alias: 'supply_margin_actual',
        transformation: 'alias',
        transformationArgs: {
            drop: 'false',
        },
    },
    {
        column: 'rawEventRequestLevelCommon.adUnit',
        alias: 'ad_format_id',
        transformation: 'alias',
        transformationArgs: {
            drop: 'false',
        },
    },
    {
        column: 'rawEventRequestLevelCommon.skadnetworkResponseVersion',
        alias: 'skan_response_version',
        transformation: 'alias',
        transformationArgs: {
            drop: 'false',
        },
    },
    {
        column: 'rawEventRequestLevelCommon.requestIpLookupData.city',
        alias: 'request_city_by_ip',
        transformation: 'alias',
        transformationArgs: {
            drop: 'false',
        },
    },
    {
        column: 'rawEventRequestLevelCommon.timestamp',
        alias: 'timestamp_from_event',
        transformation: 'alias',
        transformationArgs: {
            drop: 'false',
        },
    },
    {
        column: 'rawEventRequestLevelCommon.requestIpLookupData.region',
        alias: 'request_region',
        transformation: 'alias',
        transformationArgs: {
            drop: 'false',
        },
    },
    {
        column: 'rawEventRequestLevelCommon.requestIpLookupData.anonymousIpData.value',
        alias: 'request_anonymous_data_by_ip',
        transformation: 'alias',
        transformationArgs: {
            drop: 'false',
        },
    },
    {
        column: 'low_performing_demand',
        alias: 'is_low_performing_demand',
        transformation: 'alias',
        transformationArgs: {
            drop: 'false',
        },
    },
    {
        column: 'referrer',
        transformation: 'drop',
        transformationArgs: {
            additional_columns:
                'segments_100,android_device_lat_setting,low_performing_demand',
        },
    },
    {
        transformation: 'multi_alias',
        transformationArgs: {
            multi_columns:
                'usersPlumbusJson.cnst:cnst,clickIp:click_ip_address,rawEventRequestLevelCommon.isCoppa:is_coppa,clickIpLookupData.subdivisions.sub0.name:click_sd1_name_by_ip,rawEventCommon.userBundleQclicksRV:user_bundle_qclicks_rv,rawEventRequestLevelCommon.requestIpLookupData.isp:request_isp,impressionIpLookupData.isp:impression_isp_by_ip,clickIntent:click_intent,bidderPlumbusJson.ugjAuidGroupSize:ugj_auid_group_size,usersPlumbusJson.mnc:mnc,rawEventRequestLevelCommon.marketplaceTestId:mp_test_id,rawEventRequestLevelCommon.requestIpLookupData.metroCode:request_metro_code_by_ip,rawEventCommon.bidOnRequest:bid_on_request,vtaSkanVersion:skan_impression_version,dsOppPlumbusJson.payoutMargin:payout_margin,rawEventRequestLevelCommon.requestIpLookupData.subdivisions.sub0.isoCode:request_sd1_code_by_ip,gatewayPlumbus.loadedBundlesInAdFormat:loaded_bundles_in_ad_format,impressionIpLookupData.subdivisions.sub1.name:impression_sd2_name_by_ip,package_name_40:package_name,dsOppPlumbusJson.ds_creative_exp_cost:ds_creative_exp_cost,gatewayPlumbus.loadedBundlesInInstance:loaded_bundles_in_instance,usersPlumbusJson.currReqId:original_request_id,device_model_64:device_model,rawEventRequestLevelCommon.isServedAsVideo:served_as_video,rawEventRequestLevelCommon.dpFlags:dp_flags,rawEventCommon.userBundleImpressionsRV:user_bundle_impressions_rv,iab_auction_id_52:iab_auction_id,rawEventRequestLevelCommon.instance:instance,rawEventRequestLevelCommon.ipAddressIsipv6:event_ip_isipv6,usersPlumbusJson.currOppId:original_opp_id,dsOppPlumbusJson.supply_margin_type:supply_margin_type_id,bidderPlumbusJson.ugjHash:ugj_hash,rawEventRequestLevelCommon.instanceTypeIdConfig:instance_type_id_config,rawEventCommon.campaignFlags2:campaign_flags2,rawEventCommon.countryBy:country_by,gatewayPlumbus.campaignDailyBudgetCalculatedFactor:request_daily_budget_calculation_factor,dsOppPlumbusJson.target_roas_goal:target_roas_goal,usersPlumbusJson.ad_services_extension_level:ad_services_extension_level,gatewayPlumbus.loadedAdsInSession:loaded_ads_in_session,clickNormalizedWidth:click_normalized_width,browser_name_64:browser_name,numericMediationSdkVersion:mediation_sdk_version_numeric,rawEventRequestLevelCommon.inflightProbOnRequest:inflight_prob_on_request,rawEventCommon.eventISP:event_isp,rawEventCommon.paymentModel:payment_model,impressionIpLookupData.cityID:impression_city_id_by_ip,rawEventRequestLevelCommon.privacyLevel:privacy_level,rawEventCommon.geoSetID:geo_set_id,rawEventRequestLevelCommon.requestIpLookupData.connectionTypeByIP:request_connection_type_by_ip,dsOppPlumbusJson.DSAtomDecisionFlags:ds_atom_decision_flags,rawEventCommon.auctionFlowData:auction_flow_data,publisher_request_id_36_value:publisher_request_id,supply_deal_type_12:supply_deal_type,impressionIpLookupData.city:impression_city_by_ip,rawEventCommon.growLpmmApplied:grow_lpmm_applied,dsOppPlumbusJson.UgiEtsSource:ugi_ets_source,rawEventCommon.eventIpLookupData.metroCode:event_metro_code_by_ip,dsOppPlumbusJson.ds_promotion_cost:ds_promotion_cost,src_30:src,usersPlumbusJson.mcc:mcc,rawEventCommon.userBundleQclicksIS:user_bundle_qclicks_is,serveDataPlumbusJson.low_performing_demand:low_performing_demand,usersPlumbusJson.lpm:lpm,rawEventCommon.userAgentId:user_agent_id,rawEventCommon.advertiserId:advertiser_id,rawEventRequestLevelCommon.adUnit:ad_unit_id,opportunity_id_64_value:opportunity_id,rawEventRequestLevelCommon.deviceOSVersionNumeric:device_os_version_numeric,rawEventCommon.failedLimitations:failed_limitations,supplyPlumbusJson.supply_bundle_entity_id:supply_bundle_entity_id,gatewayPlumbus.loadedAdsInAdFormat:loaded_ads_in_ad_format,uts_numeric:uts,rawEventRequestLevelCommon.isUserRedirectedToAdvertiser:redirected_to_advertiser,rawEventCommon.sessionDepth:session_depth,rawEventCommon.fireUnityEvent:is_event_sent_to_unity,clickIpLookupData.countryCode:click_country_code_by_ip,clickOpenType:click_open_type,rawEventCommon.eventIpLookupData.subdivisions.sub1.isoCode:event_sd2_code_by_ip,rawEventCommon.eventAnonymousIpData:event_ip_data,application_external_user_id_128:application_external_user_id,rawEventCommon.campaignId:campaign_id,dsOppPlumbusJson.target_roas_age:target_roas_age,rawEventCommon.demandTrackID:demand_store_app_id,impressionIpLookupData.subdivisions.sub1.isoCode:impression_sd2_code_by_ip,dsOppPlumbusJson.supply_margin_setup:supply_margin_setup,dsOppPlumbusJson.scidIndex:scid_index,rawEventCommon.userBundleImpressionsIS:user_bundle_impressions_is,usersPlumbusJson.installerPackageName:installer_package_name,productPageId:product_page_id,rawEventRequestLevelCommon.vendorUserId:vendor_user_id,rawEventCommon.optimizationId:optimization_id,dsOppPlumbusJson.total_promotion_monetary_value:total_promotion_monetary_value,rawEventRequestLevelCommon.ett:ett,cmp_bool:can_make_payments,bidderPlumbusJson.ugjGroupId:ugj_group_id,device_os_64:device_os,dsOppPlumbusJson.ds_creative_promo_cost:ds_creative_promo_cost,gatewayPlumbus.loadedAdsInInstance:loaded_ads_in_instance,rawEventCommon.campaignMobileAppPlatform:campaign_mobile_app_platform,rawEventCommon.eventIpLookupData.connectionTypeByIP:event_connection_type_by_ip,fallbackBanner:fallback_banner,clickIpLookupData.anonymousIpData.value:click_anonymous_data_by_ip,sdk_ab_name_16:sdk_ab_name,impressionIpLookupData.anonymousIpData.value:impression_anonymous_data_by_ip,impressionIpLookupData.subdivisions.sub0.isoCode:impression_sd1_code_by_ip,dsOppPlumbusJson.dsGoal:ds_goal,dsOppPlumbusJson.UgiGroupID:ugi_group_id,impressionIpLookupData.countryCode:impression_country_code_by_ip,rawEventCommon.userImpressionsIS:user_impressions_is,clickIpLookupData.metroCode:click_metro_code_by_ip,clickType:click_type,supply_margin_type_string:supply_margin_type,dsOppPlumbusJson.cvrBucketMin:ds_scid_bucket_min,bidderPlumbusJson.ugjIdfvGroupSize:ugj_group_size,bidderPlumbusJson.creativeProtocol:playable_type,iab_bid_type_8:iab_bid_type,serveDataPlumbusJson.optimizerActionId:optimized_action_id,rawEventCommon.erOnRequest:er_on_request,serveDataPlumbusJson.optimizerActionValue:optimized_action_value,rawEventRequestLevelCommon.carrier:datapipeevent_raweventrequestlevelcommon_carrier,rawEventCommon.iabBidPrice:iab_bid_price,impressionIpLookupData.connectionTypeByIP:impression_connection_type_by_ip,rawEventCommon.userBundleClicksRV:user_bundle_clicks_rv,sdk_version_64:sdk_version,device_eligible_stores_flags:device_eligible_stores,dsOppPlumbusJson.os_adjustment_level:os_adjustment_level,supply_bundle_id_256:supply_bundle_id,usersPlumbusJson.mediation_ab_group:mediation_ab_group,rawEventRequestLevelCommon.requestIpLookupData.countryCode:request_country_code_by_ip,dsOppPlumbusJson.scidAllocationStatus:scid_status,gatewayPlumbus.bidOriginName:bid_origin_name,trackingCompany:tracking_company,abt_16:abt,iabAuctionLoss:iab_auction_loss,dsReqPlumbusJson.ds_cache_original_request_id:ds_cache_original_request_id,rawEventRequestLevelCommon.skanSourceID:source_identifier,device_language_10:device_language,rawEventRequestLevelCommon.deliveryType:delivery_method,android_device_lat_setting_bool:android_device_lat_setting,dsOppPlumbusJson.UgiLinkType:ugi_link_type,usersPlumbusJson.iab_bid_floor:iab_bid_floor,serveDataPlumbusJson.optimizerAction:optimized_action,gatewayPlumbus.campaignDailyVirtualBudget:request_virtual_daily_budget,rawEventCommon.attributionType:attribution_type,rawEventRequestLevelCommon.requestIpLookupData.subdivisions.sub1.isoCode:request_sd2_code_by_ip,country_code_2:country_code,carrier_64_newline:carrier,rawEventRequestLevelCommon.acceptLanguage:accept_language,rawEventCommon.userImpressionsRV:user_impressions_rv,clickIpLookupData.subdivisions.sub1.name:click_sd2_name_by_ip,referrer_30_value:referrer,usersPlumbusJson.battery_level:battery_level,initStateName:init_state_name,rawEventCommon.requestUserAgent:request_user_agent,impressionIpLookupData.metroCode:impression_metro_code_by_ip,dsOppPlumbusJson.demand_side_promotion_value:demand_side_promotion_value,usersPlumbusJson.diskFreeSize:diskfreesize,rawEventCommon.adType:ad_type,rawEventCommon.campaignFlags:campaign_flags,clickIpLookupData.city:click_city_by_ip,rawEventRequestLevelCommon.requestIpLookupData.cityID:request_city_id_by_ip,rawEventRequestLevelCommon.isServedAsIntermediate:served_as_intermediate,bt_numeric:bt,rawEventRequestLevelCommon.ppi:ppi,rawEventRequestLevelCommon.isInPList:is_plist,dsOppPlumbusJson.ds_demand_serving_reason:ds_demand_serving_reason,device_id_64:device_id,device_oem_64:device_oem,gatewayPlumbus.campaignDailyVirtualSourceBudget:request_virtual_daily_budget_source,device_os_version_32:device_os_version,ut_numeric:ut,usersPlumbusJson.retry_counter:request_retry_counter,gatewayPlumbus.campaignDailyBudgetManualFactor:request_daily_budget_configuration_factor,usersPlumbusJson.sessionId:session_id,usersPlumbusJson.token_version:token_version,iabWinningBid:iab_winning_bid,segments_100_value:segments_100,rawEventRequestLevelCommon.landingId:landing_id,usersPlumbusJson.device_language_full:device_language_full,rawEventRequestLevelCommon.deviceDisplayWidth:banner_width,clickIpLookupData.connectionTypeByIP:click_connection_type_by_ip,rawEventCommon.bidOrigin:bid_origin,dsOppPlumbusJson.demand_side_promotion_type:demand_side_promotion_type,rawEventRequestLevelCommon.requestIpLookupData.subdivisions.sub0.name:request_sd1_name_by_ip,rawEventCommon.creativeId:creative_id,connection_type_64:connection_type,pub_sub_bundle_64:pub_sub_bundle,rawEventRequestLevelCommon.ipAddressString:event_ip_string,rawEventRequestLevelCommon.deviceDisplayHeight:banner_height,rawEventCommon.eventIpLookupData.subdivisions.sub0.isoCode:event_sd1_code_by_ip,bidderPlumbusJson.ugCombinedGroupSize:ug_combined_group_size,dsOppPlumbusJson.is_eligible_for_aa:is_eligible_for_aa,rawEventRequestLevelCommon.lowFreeDiskSpaceExploration:is_low_free_disk_space_exploration,dsOppPlumbusJson.scidAllocationTreeID:ds_scid_version,rawEventRequestLevelCommon.platformType:platform_type,rawEventRequestLevelCommon.trafficExploration:is_high_price_instances_exploration,usersPlumbusJson.user_consent:user_consent,rawEventCommon.eventIpLookupData.city:event_city_by_ip,rawEventCommon.requestIpAddressString:request_ip_string,clickIpLookupData.subdivisions.sub1.isoCode:click_sd2_code_by_ip,rawEventCommon.playableVendorID:playable_vendor_id,rawEventCommon.userBundleClicksIS:user_bundle_clicks_is,usersPlumbusJson.timezone:timezone,rawEventRequestLevelCommon.publisherId:publisher_id,clickHeight:click_height,rawEventRequestLevelCommon.skadnetworkResponseVersion:skadnetwork_response_version,rawEventRequestLevelCommon.dpi:dpi,dsOppPlumbusJson.learning_type:learning_type,bundleIsTrainedByOptimizer:optimizer_on_trained_data,serveDataPlumbusJson.install_origin:install_origin,dsOppPlumbusJson.marginBidReason:margin_bid_reason,rawEventRequestLevelCommon.dpId:dp_id,clickIpLookupData.isp:click_isp_by_ip,gatewayPlumbus.loadedBundlesInSession:loaded_bundles_in_session,dsReqPlumbusJson.ds_cache_mode:ds_cache_mode,rawEventRequestLevelCommon.userAgent:user_agent,rawEventRequestLevelCommon.deviceGroup:device_model_group,serveDataPlumbusJson.store_information_name:demand_store,rawEventCommon.bannerId:banner_id,rawEventCommon.eventIpLookupData.subdivisions.sub0.name:event_sd1_name_by_ip,dsOppPlumbusJson.promotion_er_diff:promotion_er_diff,rawEventCommon.requestIpAddressIsipv6:request_ip_isipv6,request_id_64:request_id,rawEventCommon.activityType:activity_type,clickIpLookupData.subdivisions.sub0.isoCode:click_sd1_code_by_ip,clickWidth:click_width,dsOppPlumbusJson.promotion_id:promotion_id,rawEventRequestLevelCommon.mediationSessionDepth:mediation_session_depth,dsOppPlumbusJson.skan_model:skan_model,rawEventRequestLevelCommon.eventType:event_type,default_0:referrer_id,rawEventRequestLevelCommon.supplyTrackID:supply_store_app_id,dsOppPlumbusJson.os_adjustment_range:os_adjustment_range,rawEventRequestLevelCommon.applicationId:application_id,app_orientation_16:app_orientation,rawEventRequestLevelCommon.requestIpLookupData.city:city,optimizer_type_10:optimizer_type,usersPlumbusJson.idfi:idfi,rawEventRequestLevelCommon.isAttribution:is_attribution,dsOppPlumbusJson.original_mmp_revenue:original_mmp_revenue,impressionIp:impression_ip_address,itemsInPage:items_in_page,bidderPlumbusJson.installedBundlesAmountWithoutUnity:installed_bundles_amount_without_unity,rawEventRequestLevelCommon.requestApiType:request_api_type_id,dsOppPlumbusJson.cvrBucketMax:ds_scid_bucket_max,rawEventRequestLevelCommon.auid:auid,dsOppPlumbusJson.setupGoal:setup_goal,rawEventCommon.lpmmApplied:lpmm_applied,usersPlumbusJson.lnchr:lnchr,bidderPlumbusJson.installedBundlesAmount:installed_bundles_amount,rawEventRequestLevelCommon.authorizationStatus:att,gatewayPlumbus.originalMediationName:external_mediation_original,browser_version_16:browser_version,usersPlumbusJson.mediationAdUnit:mediation_adunit_id,bundle_id_256:bundle_id,dsOppPlumbusJson.UgiGroupSize:ugi_group_size,rawEventRequestLevelCommon.requestIpLookupData.region:region,dsOppPlumbusJson.supply_side_promotion_value:supply_side_promotion_value,serveDataPlumbusJson.optimizerGoalAge:goal_age,mediation_name:external_mediation,clickIpLookupData.cityID:click_city_id_by_ip,usersPlumbusJson.mediation_sdk_version:mediation_sdk_version,dsOppPlumbusJson.profitizerValue:profitizer_value,engagedTime:engaged_time,iabSecondClearingPrice:iab_second_clearing_price,rawEventRequestLevelCommon.xCodeVersion:xcode_version,rawEventCommon.eventIpLookupData.cityID:event_city_id_by_ip,dsOppPlumbusJson.autoProfitizer:auto_profitizer,dsOppPlumbusJson.UgiIsIdentical:ugi_is_identical,rawEventCommon.eventCountryCode:event_country_code,dsOppPlumbusJson.supply_margin_calculated:supply_margin_calculated,rawEventCommon.skanCampaignID:sc_id,usersPlumbusJson.android_api_level:android_api_level,rawEventCommon.eventIpLookupData.subdivisions.sub1.name:event_sd2_name_by_ip,rawEventRequestLevelCommon.requestIpLookupData.anonymousIpData.value:request_ip_data,rawEventRequestLevelCommon.cdnConfigRuleId:cdn_config_id,rawEventRequestLevelCommon.requestIpLookupData.subdivisions.sub1.name:request_sd2_name_by_ip,dsOppPlumbusJson.optimizerMaxBid:optimizer_max_bid,rawEventRequestLevelCommon.sdkVersionNumeric:sdk_version_numeric,serveDataPlumbusJson.optimizerProduct:optimizer_product,rawEventRequestLevelCommon.integrationType:manual_integration_type,closeType:close_type,serveDataPlumbusJson.demand_bundle_entity_id:demand_bundle_entity_id,impressionIpLookupData.subdivisions.sub0.name:impression_sd1_name_by_ip,clickNormalizedHeight:click_normalized_height,sonicNewUser:new_device,usersPlumbusJson.skadnetwork_request_version:skadnetwork_request_version,rawEventCommon.clickForkingType:click_forking_type,rawEventRequestLevelCommon.waterfallPosition:waterfall_position,rawEventCommon.placementID:placement_id,dsReqPlumbusJson.ds_cache_original_instance_id:ds_cache_original_instance_id',
        },
    },
    {
        transformation: 'select_transformation',
        transformationArgs: {
            columns:
                'redirected_to_advertiser,is_attribution,served_as_intermediate,served_as_video,dp_flags,user_agent_id,campaign_flags2,campaign_flags,failed_limitations,placement_id,flags,ad_type,ad_unit_id,banner_height,banner_width,optimization_id,campaign_mobile_app_platform,landing_id,platform_type,delivery_method,items_in_page,event_type,creative_id,instance,click_forking_type,session_depth,fallback_banner,publisher_id,referrer_id,advertiser_id,banner_id,campaign_id,application_id,ppi,country_code,supply_bundle_id,app_orientation,sdk_ab_name,pub_sub_bundle,referrer,publisher_request_id,package_name,src,application_external_user_id,region,device_os_version,bundle_id,connection_type,device_os,device_model,device_oem,sdk_version,browser_version,browser_name,device_id,city,opportunity_id,request_id,device_language,dp_id,request_timestamp,kafka_offset,kafka_partition,request_api_type_id,mediation_session_depth,abt,supply_deal_type,iab_auction_id,iab_bid_type,instance_type_id_config,iab_bid_price,carrier,inflight_prob_on_request,er_on_request,bid_on_request,manual_integration_type,waterfall_position,kafka_timestamp,dpi,device_model_group,click_type,bid_origin,optimizer_type,payment_model,activity_type,iab_winning_bid,iab_auction_loss,diskfreesize,ds_atom_decision_flags,new_device,user_agent,request_user_agent,request_isp,request_ip_data,event_country_code,event_ip_data,event_isp,event_city_by_ip,event_city_id_by_ip,event_sd1_name_by_ip,event_sd1_code_by_ip,event_sd2_name_by_ip,event_sd2_code_by_ip,event_metro_code_by_ip,event_connection_type_by_ip,original_request_id,original_opp_id,segments_100,supply_store_app_id,demand_store_app_id,skadnetwork_request_version,skadnetwork_response_version,sc_id,click_height,click_width,click_normalized_height,click_normalized_width,device_os_version_numeric,vendor_user_id,promotion_er_diff,promotion_id,att,xcode_version,is_plist,external_mediation,iab_second_clearing_price,click_intent,is_coppa,event_ip_string,event_ip_isipv6,request_ip_isipv6,request_ip_string,engaged_time,close_type,attribution_type,privacy_level,skan_response_version,bt,uts,ut,mcc,mnc,request_city_by_ip,request_city_id_by_ip,request_country_code_by_ip,request_sd1_name_by_ip,request_sd1_code_by_ip,request_sd2_name_by_ip,request_sd2_code_by_ip,request_metro_code_by_ip,request_isp_by_ip,request_connection_type_by_ip,request_anonymous_data_by_ip,impression_city_by_ip,impression_city_id_by_ip,impression_country_code_by_ip,impression_sd1_name_by_ip,impression_sd1_code_by_ip,impression_sd2_name_by_ip,impression_sd2_code_by_ip,impression_metro_code_by_ip,impression_isp_by_ip,impression_connection_type_by_ip,impression_anonymous_data_by_ip,click_city_by_ip,click_city_id_by_ip,click_country_code_by_ip,click_sd1_name_by_ip,click_sd1_code_by_ip,click_sd2_name_by_ip,click_sd2_code_by_ip,click_metro_code_by_ip,click_isp_by_ip,click_connection_type_by_ip,click_anonymous_data_by_ip,impression_ip_address,click_ip_address,user_impressions_is,user_impressions_rv,user_bundle_clicks_is,user_bundle_clicks_rv,user_bundle_impressions_is,user_bundle_impressions_rv,user_bundle_qclicks_is,user_bundle_qclicks_rv,auid,timezone,target_cpi,device_language_full,accept_language,ugi_ets_source,ugi_group_id,ugi_group_size,ugi_is_identical,ugi_link_type,target_roas_age,target_roas_goal,click_open_type,country_by,battery_level,lpm,installer_package_name,geo_set_id,auto_profitizer,margin_bid_reason,payout_margin,profitizer_value,is_eligible_for_aa,skan_model,auction_flow_data,token_version,mediation_ab_group,user_consent,playable_vendor_id,demand_side_promotion_value,demand_side_promotion_type,learning_type,supply_side_promotion_value,total_promotion_monetary_value,mediation_sdk_version,mediation_sdk_version_numeric,request_retry_counter,product_page_id,instance_bid_price,scid_index,scid_status,ds_scid_bucket_min,ds_scid_bucket_max,ds_scid_version,ds_scid_version_timestamp,advertising_id_state,ds_goal,setup_goal,android_device_lat_setting,is_google_play_services,mp_test_id,demand_store,device_eligible_stores,is_high_price_instances_exploration,mmp_revenue,os_provider_adjustment,os_provider_revenue,uncapped_os_provider_adjustment,is_event_sent_to_unity,skan_impression_version,is_low_free_disk_space_exploration,cdn_config_id,is_clickable_video,unclickable_video_reason,os_adjustment_level,os_adjustment_range,is_os_adjustment,install_origin,ds_demand_serving_reason,ds_ranking_affected,ds_promotion_cost,ds_creative_exp_cost,ds_creative_promo_cost,sdk_version_numeric,optimizer_product,goal_age,optimized_action_value,optimized_action_id,optimized_action,optimizer_max_bid,promotion_exploration_status,request_region,tcs_exists,tca,device_first_appearance_timestamp,impression_timestamp,supply_margin_type_id,supply_margin_setup,supply_margin_calculated,supply_margin_actual,supply_margin_type,tracking_company,source_identifier,dynamic_strategy_id,ds_cache_mode,ds_cache_demand_threshold,ds_cache_request,ds_cache_ttl,ds_cache_original_instance_id,ds_cache_demand_actual_amount,ds_cache_original_request_id,original_mmp_revenue,can_make_payments,android_api_level,ad_services_extension_level,iab_bid_floor,is_store_promo_enabled,request_daily_budget,installed_bundles_amount,installed_bundles_amount_without_unity,ug_combined_group_size,ugj_group_size,ugj_auid_group_size,ugj_group_id,ugj_hash,init_state_name,datapipeevent_raweventrequestlevelcommon_carrier,lpmm_applied,optimizer_on_trained_data,is_multiple_ad_loads,loaded_ads_in_session,loaded_bundles_in_session,loaded_ads_in_ad_format,loaded_bundles_in_ad_format,loaded_ads_in_instance,loaded_bundles_in_instance,external_mediation_original,playable_type,demand_bundle_entity_id,supply_bundle_entity_id,ett,grow_lpmm_applied,session_id,ad_format_name,mediation_adunit_id,ad_format_id,cnst,bid_origin_name,low_performing_demand,is_low_performing_demand,idfi,request_daily_budget_factor,request_virtual_daily_budget,request_virtual_daily_budget_source,request_daily_budget_calculation_factor,request_daily_budget_configuration_factor,lnchr,timestamp_from_event,event_day,event_timestamp,hour',
        },
    },
];
